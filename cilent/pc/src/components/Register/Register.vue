<template>
  <div class="resgister_page">
      <header-bg :blurBg="0"></header-bg>
      <div class="resgister_content">
          <div class="title-line">
            <span class="tit" style="font-size: 38px;">注册</span>
          </div>
          <!--注册表单-->
          <div class="form_box">
            <Form ref="formInline" :model="registerFrom">
                <FormItem prop="user">
                    <Input type="text" v-model="registerFrom.user" placeholder="昵称" @on-blur="usernameCheckBlur(registerFrom.user)" @on-change="usernameCheck(registerFrom.user)" >
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                    <span class="error_span">{{usererrormessage}}</span>
                    <div class="register-hidden-gruop" v-if="userpwd_safe_show">
                        <div  class="safe_window">
                            <p data-v-c8bb1a96="">安全系数</p> 
                            <div data-v-c8bb1a96="" class="a_pw">
                                <div class="safe_line bc0001" v-if="safe_week"></div>
                                <div class="safe_line ff9537" v-if="safe_medium"></div>
                                <div class="safe_line ffd800" v-if="safe_strong"></div>
                                <div class="safe_line"></div>
                                <div class="safe_line"></div>
                                <span :style="{'color':safe_color}">{{userpwd_safe_message}}</span>
                            </div>
                        </div>
                    </div>
                </FormItem>
                <FormItem prop="userpwd">
                    <Input type="password" v-model="registerFrom.userpwd" placeholder="密码（6-16个字符组成，区分大小写）" @on-blur="userpwdCheckBlur(registerFrom.userpwd)" @on-change="userpwdCheck(registerFrom.userpwd)">
                        <Icon type="ios-lock-outline" slot="prepend"></Icon>
                    </Input>
                    <span class="error_span">{{userpwderrormessage}}</span>
                </FormItem>
                <FormItem prop="usertel">
                    <Input type="text" v-model="registerFrom.usertel" placeholder="常用手机号"  @on-blur="usertelCheckBlur(registerFrom.usertel)" @on-change="usertelCheck(registerFrom.usertel)" >
                        <Icon type="ios-call-outline" slot="prepend" />
                    </Input>
                    <span class="error_span">{{usertelerrormessage}}</span>
                </FormItem>
                <FormItem >
                    <Button class="resgister_btn" :disabled="btndisabled" type="primary" @click="registerSubmit(registerFrom)">注&nbsp;&nbsp;册</Button>
                </FormItem>
            </Form>
          </div>
      </div>
  </div>
</template>

<script>
import HeaderBg from '../header/HeaderBg.vue';
import { REGISTERCHECKUSER } from '../../api/user.js';
import { REGISTERCHECKTEl } from '../../api/user.js';
import { REGISTER } from '../../api/user.js';

export default {
    components: {
			HeaderBg
	},
    created(){
		//时间格式
		this.$untils.initFormatter()
	},
    updated(){
        let user=this.$data.registerFrom.user;
        let userpwd=this.$data.registerFrom.userpwd;
        let usertel=this.$data.registerFrom.usertel;
        //验证用户是否填写完全，且格式正确，允许注册
        if( user != '' && userpwd != '' && usertel != ''&& this.usererrormessage == "" && this.userpwderrormessage == "" && this.usertelerrormessage == ""){
               this.btndisabled=false;
        }
    },
    data () {
        return {
            //注册表单--用户名、用户密码、用户电话
            registerFrom: {
                user: '',
                userpwd: '',
                usertel:''
            },
            //错误信息提示
            usererrormessage:"",
            userpwderrormessage:"",
            usertelerrormessage:"",
            //注册按钮
            btndisabled:true,
            //密码强度提示
            userpwd_safe_show:false,
            userpwd_safe_message:"",
            safe_week:false,
            safe_medium:false,
            safe_strong:false,
            safe_color:"#49c519",


        }
    },
    methods:{
        //-------1.用户名检查
        async usernameCheck(username){
            if(username.length <= 0){
                this.usererrormessage="告诉我你的昵称吧~~";
                this.btndisabled=true;
            }else if(username.length <= 2 && username.length > 0){
                this.usererrormessage="用户名过短,不允许注册";
                this.btndisabled=true;
            }else if(username.length >= 16){
                this.usererrormessage="用户名过长";
                this.btndisabled=true;
            }else {
               let resdata=await REGISTERCHECKUSER({name:username});
                if(resdata.data == "Repeat") {
                    this.usererrormessage="用户名已经存在！"; 
                }else {
                    this.usererrormessage="";
                }
            }
        
        },
        //-------2.用户名检查(失去焦点)
        usernameCheckBlur(username){
            if(username.length <= 0){
                this.usererrormessage="告诉我你的昵称吧~~";
                this.btndisabled=true;
            }
        },
        //-------3.用户密码检查
        userpwdCheck(userpwd){
            if(userpwd.length <= 0){
                this.userpwderrormessage="不能没有密码哟~~";
                this.userpwd_safe_show=false;
                this.btndisabled=true;
            }else if(userpwd.length <= 5 && userpwd.length > 0){
                this.userpwderrormessage="密码不能小于6个字符~~";
                this.userpwd_safe_show=false;
                this.btndisabled=true;
            }else if(userpwd.length >= 17){
                this.userpwderrormessage="密码不能大于16个字符~~";
                this.userpwd_safe_show=false;
                this.btndisabled=true;
            }else {
                this.userpwderrormessage="";
                this.userpwd_safe_show=true;
                let lvl=this.userpwdSafe(userpwd);
                if(lvl === 1){
                    this.safe_week=true;
                    this.safe_medium=false;
                    this.safe_strong=false;
                    this.userpwd_safe_message="弱";
                    this.safe_color="#bc0001";
                }else if(lvl === 2){
                    this.safe_week=true;
                    this.safe_medium=true;
                    this.safe_strong=false;
                    this.userpwd_safe_message="中";
                    this.safe_color="#ff9537"
                }else if(lvl === 3){
                    this.safe_week=true;
                    this.safe_medium=true;
                    this.safe_strong=true;
                    this.userpwd_safe_message="安全";
                    this.safe_color="#49c519"
                }
            }
        },
        //-------4.用户密码检查(失去焦点)
        userpwdCheckBlur(userpwd){
            if(userpwd.length <= 0){
                this.userpwderrormessage="不能没有密码哟~~";
                this.btndisabled=true;
            }
        },
        //-------5.密码强度的判断
        userpwdSafe(userpwd) {
            //默认级别是0
            var lvl = 0;
            //判断这个字符串中有没有数字
            if (/[0-9]/.test(userpwd)) {
                lvl++;
            }
            //判断字符串中有没有字母
            if (/[a-zA-Z]/.test(userpwd)) {
                lvl++;
            }
            //判断字符串中有没有特殊符号
            if (/[^0-9a-zA-Z_]/.test(userpwd)) {
                lvl++;
            }
            return lvl;
        },
        //-------6.用户电话检查
        async usertelCheck(usertel){
             if(usertel.length <= 0){
                this.usertelerrormessage="手机号很重要哟~~";
                this.btndisabled=true;
            }else if( usertel.length == 11){

                if(!(/^1(3|4|5|7|8)\d{9}$/.test(usertel))){ 
                    this.usertelerrormessage="手机号码填写错误~~";
                    this.btndisabled=true; 
                }else {
                    
                    let resdata=await REGISTERCHECKTEl({tel:usertel});
                    if(resdata.data == "Repeat") {
                        this.usertelerrormessage="手机号已经注册过了~~"; 
                    }else {
                        this.usertelerrormessage="";
                    }
                }       
            }else if( usertel.length > 11 || usertel.length <=10 ){
                this.usertelerrormessage="手机号码位数错误~~";
                this.btndisabled=true; 
            }
        },
        //-------7.用户电话检查(失去焦点)
        usertelCheckBlur(usertel){
            if(usertel.length <= 0){
                this.usertelerrormessage="手机号很重要哟~~";
                this.btndisabled=true;
            }
        },
        //-------8.注册
        async registerSubmit(form) {
          
           let time=new Date();
           form.createtime=time.Format('yyyy-MM-dd hh:mm');
            let resdata=await REGISTER(form);
            if(resdata.data == "successfully") {
                this.$router.push({path:'/login'}); 
            }

        }
    }
}
</script>

<style lang="less">
	@import '../../assets/css/base.less';
</style>

<style scoped>
    .title-line {
        width: 980px;
        height: 28px;
        margin: 0 auto;
        border-bottom: 1px solid #ddd;
        margin-bottom: 28px;
        text-align: center;
    }
    .title-line .tit {
        height: 56px;
        line-height: 56px;
        margin: 0 auto;
        padding: 0 20px;
        font-size: 40px;
        background: #fff;
        text-align: center;
        color: #000;
    }
    .resgister_content {
        position: relative;
        top: 100px;
        height: 50px;
    }
    .form_box {
        width:500px;
        position:relative;
        top:30px;
        margin:0 auto;
    }
    .resgister_btn {
        height:40px;
        width:100%;
    }
    .error_span {
        color:#f45d90;
    }
    /*--密码强度判断样式--*/
    .register-hidden-gruop {
        height: 40px;
    }
    .safe_window {
        width: 415px;
        border-radius: 3px;
        line-height: 20px;
        padding: 10px 0;
        font-weight: 700;
        overflow: hidden;
        font-size: 15px;
    }
    .safe_window p {
        float: left;
    }
    /*字体颜色：默认为绿色*/
    .safe_window .a_pw {
        color: #49c519; 
    }
    /*第一个小方块*/
    .safe_window .bc0001 {
        background: red;
    }
    /*第二个小方块*/
    .safe_window .ff9537 {
        background: #ff7f00;
    }
    /*第三个小方块*/
    .safe_window .ffd800 {
        background: #f0f028;
    }
    .safe_window .safe_line {
        width: 30px;
        height: 5px;
        border-radius: 5px;
        margin-left: 15px;
        margin-top: 7px;
        margin-right: 10px;
        float: left;
    }
    .safe_window span {
        font-size: 12px;
        margin-left: 5px;
    }
</style>
