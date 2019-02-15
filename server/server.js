const express=require("express");
const bodyParser = require('body-parser');
const mysql = require('mysql');
const jwt=require('jsonwebtoken');
const server=express();


server.listen(8899,()=>{
	console.log("Server set up successfully!");
})


//CORS：允许跨域
server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//连接到数据
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'animesite'
});
connection.connect();

//接收post过来的数据
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

//管理员接口：----------查看更新每周番剧----------
server.get("/weekdayuploading",(req,res)=>{
    let week=req.query.week;
    let $sql=`SELECT bgname,anime_detailinfo.allepisodes,isdirty FROM anime_detailinfo,anime_bangumi,anime_weekday,anime_weekdayupload WHERE anime_bangumi.abgid=anime_detailinfo.abgid AND anime_weekday.awdid=anime_weekdayupload.awdid AND anime_weekdayupload.abgid=anime_bangumi.abgid AND week=?`;
    connection.query($sql,week,(err,results)=>{
        if(err){
            throw err;
        }else {
            res.send(results);
        }
    })
})

//管理员接口：----------查看注册用户---一周/一个月----------
server.get("/registerdate",(req,res)=>{
    let status=req.query.status;
    let $sql="";
    if(status === "1"){
        $sql=`SELECT * FROM anime_users WHERE status=1`
    }else if(status === "2"){
        $sql=`SELECT * FROM anime_users where DATE_SUB(CURDATE(), INTERVAL 7 DAY) <= date(createtime) AND status=1`
    }else if(status === "3"){
        $sql=`SELECT * FROM anime_users WHERE DATE_FORMAT( createtime, '%Y%m' ) = DATE_FORMAT( CURDATE( ) , '%Y%m' ) AND status=1`
    }else if(status === "4"){
        $sql=`SELECT * FROM anime_users WHERE status=2`
    }
    connection.query($sql,(err,results)=>{
        if(err){
            throw err;
        }else {
            res.send(results);
        }
    })
})

//管理员接口：----------账号封号----------
server.get("/userdel",(req,res)=>{
    let auid=req.query.auid;
    let $sql=`UPDATE anime_users SET status=2 WHERE auid=?`;
    connection.query($sql,auid,(err,results)=>{
        if(err){
            throw err;
        }else {
            res.send("successfully");
        }
    })
})

//管理员接口：----------账号恢复----------
server.get("/userrestore",(req,res)=>{
    let auid=req.query.auid;
    let $sql=`UPDATE anime_users SET status=1 WHERE auid=?`;
    connection.query($sql,auid,(err,results)=>{
        if(err){
            throw err;
        }else {
            res.send("successfully");
        }
    })
})


//用户接口：----------注册检查用户名--重名/不存在----------
server.post("/user/register/checkuser",(req,res)=>{
    let name=req.body.name;
    let $sql=`SELECT auid FROM anime_users WHERE username=?`;
    connection.query($sql,name,(err,results)=>{
        if(err){
            throw err;
        }else {
            if(results.length > 0){
                res.send("Repeat");
            }else {
                res.send("null");
            }

        }
    })
})

//用户接口：----------注册检查电话号码--存在/不存在----------
server.post("/user/register/checktel",(req,res)=>{
    let tel=req.body.tel;
    let $sql=`SELECT auid FROM anime_users WHERE usertel=?`;
    connection.query($sql,tel,(err,results)=>{
        if(err){
            throw err;
        }else {
            if(results.length > 0){
                res.send("Repeat");
            }else {
                res.send("null");
            }

        }
    })
})

//用户接口：----------用户注册----------
server.post("/user/register",(req,res)=>{
    let user=req.body.user;
    let userpwd=req.body.userpwd;
    let usertel=req.body.usertel;
    let createtime=req.body.createtime;
    let $sql=`INSERT INTO anime_users (username,pwd,usertel,createtime) VALUES (?,?,?,?)`;
    connection.query($sql,[user,userpwd,usertel,createtime],(err,results)=>{
        if(err){
            throw err;
        }else {
           res.send("successfully");
        }
    })

})


//用户接口：----------用户登录检查用户名/电话--存在/不存在----------
server.post("/user/login/checkuser",(req,res)=>{
    let name=req.body.name;
    let $sql=`SELECT auid FROM anime_users WHERE username=? OR usertel=?`;
    connection.query($sql,[name,name],(err,results)=>{
        if(err){
            throw err;
        }else {
            if(results.length > 0){
                res.send("exist");
            }else {
                res.send("null");
            }

        }
    })
})

//用户接口：----------登录账号----------
server.post("/user/login",(req,res)=>{
    let name=req.body.user;
    let pwd=req.body.userpwd;
    let $sql=`SELECT auid FROM anime_users WHERE username=? AND pwd=?`;
    connection.query($sql,[name,pwd],(err,results)=>{
        if (err) {
            res.send(err);
            return
        }
        if(results.length > 0){
            let content ={name:req.body.user}; // 要生成token的主题信息
            let secretOrPrivateKey="suiyi" // 这是加密的key（密钥）
            let token = jwt.sign(content, secretOrPrivateKey, {
                    expiresIn: 60*60*1  // 1小时过期
                });

            results[0].token = token    //token写入数据库
            res.send({'status':1,'code':2000,'token':token,'auid':results[0].auid})
        }else {
            res.send({'status':0,'msg':'登陆失败'})
        }

    })
})

//用户接口：----------查看连载番剧--------
server.post("/anime/serializationanime",(req,res)=>{
	let $sql=`SELECT bgname,isdirty,anime_img FROM anime_detailinfo,anime_bangumi WHERE  anime_detailinfo.abgid=anime_bangumi.abgid AND isdirty < anime_bangumi.allepisodes `;
	connection.query($sql,(err,results)=>{
		if(err){
			res.send(err);
			return
		}else {
			res.send(results);
		}
	})
})

//测试后端验证token
server.post('/testtoken',(req,res)=>{
    let name=req.body.name;
    let token=req.body.token;
    let $sql=`SELECT auid FROM anime_users WHERE username=? `;
    connection.query($sql,name,(err,results)=>{
        if (err) {
            res.send(err);
            return
        }
        if(results.length>0){
            let token = req.body.token; // 从body中获取token
            let secretOrPrivateKey="suiyi"; // 这是加密的key（密钥）

            jwt.verify(token, secretOrPrivateKey, function (err, decode) {
                if (err) {  //  时间失效的时候/ 伪造的token
                    res.send({'status':0});
                } else {
                    res.send({'status':1});
                }
            })
        }else{
                res.send({'status':0});
        }
    })
})
