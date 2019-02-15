<template>
    <div class="login_page">
      <header-bg :blurBg="0"></header-bg>
      <div class="login_content">
        <div class="title-line">
            <span class="tit" style="font-size: 38px;">登录</span>
        </div>
        <!--二维码-->
        <div class="login-left">
            <i class="tv-icon"></i>
            <div class="qucode_box">
                <div id="qrcode" class="qrcode"></div>
            </div>
            <div class="pic_box">
                <img src="../../../static/img/qucode.png">
                <span>扫码下载APP</span>
            </div>
        </div>
        <div class="line"></div>
        <!--登录表单-->
        <div class="form_box">
             <Form  :model="loginForm">
                <FormItem prop="user">
                    <Input type="text" v-model="loginForm.user" placeholder="昵称/电话号码" @on-blur="usernameCheckBlur(loginForm.user)" @on-change="usernameCheck(loginForm.user)" >
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                    <span class="error_span">{{usererrormessage}}</span>
                </FormItem>
                <FormItem prop="userpwd">
                    <Input type="password" v-model="loginForm.userpwd" placeholder="密码（6-16个字符组成，区分大小写）"  @on-change="userpwdCheck(loginForm.userpwd)">
                        <Icon type="ios-lock-outline" slot="prepend"></Icon>
                    </Input>
                    <span class="error_span">{{userpwderrormessage}}</span>
                </FormItem>
                <FormItem >
                    <div>
                        <Input :maxlength="maxlength" class="validation_input" type="text" v-model="validation" placeholder="验证码"  @on-change="validationCheck(validation)">
                        </Input>
                        <div class="identify_code" @click="refreshCode">
                            <image-validation :identifyCode="identifyCode"></image-validation>
                        </div>
                    </div>
                    <span class="error_span">{{validationerrormessage}}</span>
                </FormItem>
                <FormItem >
                    <Button class="loginsize" style="width:57%;" :disabled="btndisabled" type="primary" @click="loginSubmit(loginForm)">登录</Button>
                    <div style="float:right;width:40%">
                        <Button style="width:40%;" type="info" ghost>重置密码</Button>
                        <Button style="width:53%;float:right" type="info" ghost to="/#/register" target="_blank">注册</Button>
                    </div>
                    
                    
                </FormItem>
            </Form>
        </div>
      </div>
    </div>

</template>

<script>
import HeaderBg from '../header/HeaderBg.vue';
import ImageValidation from '../Validation/Validation.vue';
import QRCode from 'qrcodejs2';
import { LOGINCHECKUSER } from '../../api/user.js';
import { LOGIN } from '../../api/user.js';


export default {
    components: {
		HeaderBg,
        ImageValidation
	},
    mounted(){
        //图片验证码
        this.identifyCode = "";
        this.makeCode(this.identifyCodes, 4);
        //二维码
        this.qrcode();
    },
    updated(){
        let user=this.$data.loginForm.user;
        let userpwd=this.$data.loginForm.userpwd;
        let validation=this.$data.validation;
        //验证用户是否填写完全，且格式正确，允许注册
        if( user != '' && userpwd != '' && validation.length === 4 && this.usererrormessage == "" && this.userpwderrormessage == "" && this.validationerrormessage == ""){
               this.btndisabled=false;
        }
    },
    data(){
        return {
            //登录表单数据
            loginForm:{
                user:"",
                userpwd:"",
                
            },
            validation:"",
            //错误消息提示
            usererrormessage:"",
            userpwderrormessage:"",
            validationerrormessage:"",
            maxlength:4,
            //登录按钮
            btndisabled:true,
            //图片验证码
            identifyCode:"",
            identifyCodes:"1234567890"

        }
    },
    methods: {
        //------1.用户名验证检查
        async usernameCheck(username) {
            
        },
        //------2.用户名验证检查(失去焦点)
        async usernameCheckBlur(username){
           if(username.length <= 0){
                this.usererrormessage="请输入注册时用的手机号或者昵称哟~~";
                this.btndisabled=true;
            }else {
               let resdata=await LOGINCHECKUSER({name:username});
                if(resdata.data == "exist") {
                    this.usererrormessage=""; 
                }else {
                    this.usererrormessage="账号/手机号不存在，先去注册哟~~~";
                    this.btndisabled=true;
                }
            }
        },
        //用户密码验证检查
        userpwdCheck(userpwd) {
            this.userpwderrormessage=""
        },
        //验证码
        validationCheck(code){
            // console.log(code,this.identifyCode);
            if(code.length === 4 && code != this.identifyCode){
                this.validationerrormessage="验证码错误~~",
                this.btndisabled=true;
            }else if(code.length < 4) {
                 this.validationerrormessage="----";
            }else {
                this.validationerrormessage=""
            }
            
        },
        //用户登录
        async loginSubmit(form) {
            let resdata=await LOGIN(form);
            // console.log(resdata);
            if(resdata.data.status == 1){
                localStorage.setItem("currentUser_auid",resdata.data.auid);
                localStorage.setItem("currentUser_token",resdata.data.token);
                // console.log(localStorage)
            }else {
                this.userpwderrormessage="密码错误~~"
            }
            
            
        },
        //用户跳转注册
        toRegister(){

        },
        //图片验证码
        randomNum(min,max){
            return Math.floor(Math.random() * (max - min) + min);
        },
        refreshCode(){
            this.identifyCode = "";
            this.makeCode(this.identifyCodes,4);
            // console.log('当前验证码==',this.identifyCode);
        },
        makeCode(o,l){
            for(let i = 0;i < l; i++){
                this.identifyCode += this.identifyCodes[
                    this.randomNum(0,this.identifyCodes.length)
                ];
            }
            // console.log(this.identifyCode);
        },
        qrcode(){
            let qrcode = new QRCode('qrcode', {
                width: 140,  
                height: 140,
                text: 'https://app.bilibili.com/', // 二维码地址
                colorDark : "#000",
                colorLight : "#fff",
            });
        }


    }
}

</script>

<style lang="less">
	@import '../../assets/css/base.less';
    .login_page {
        .form_box {
            .ivu-input {
                height: 40px;
            }
            .loginsize {
                 span {
                    font-size: 14px; 
                    
                }
            }
        }
    }
</style>

<style scoped>
    .login_content {
        position: relative;
        top: 100px;
        height: 50px;
        width: 980px;
        margin: 0 auto;
    }
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
    .form_box {
        width:46%;
        position:relative;
        top:30px;
        float:right;
    }
    .error_span {
        color:#f45d90;
    }
    .validation_input {
        width: 67%;
        display: inline-block;
    }
    .identify_code {
        width: 26%;
        height: 40px;
        float: right;
    }
    .login-left {
        width: 50%;
        float: left;
        position:relative;
    }
    .qucode_box {
        width: 140px;
        height: 140px;
        margin: 0 auto;
        position: relative;
        top: 40px;
    }
    .qrcode {
        display: inline-block;
    }
    .qrcode img {
        width: 140px;
        height: 140px;
        background-color: #fff; 
        padding: 6px; 
    }
    .line {
        float: left;
        border-right: 1px solid #ddd;
        height: 300px;
        margin-top: 28px;
    }
    .tv-icon {
        position: absolute;
        width: 70px;
        height: 70px;
        left: 160px;
        top: -23px;
        background: url(../../../static/img/phoneicon.png) no-repeat;
    }
    .pic_box {
        position: relative;
    }
    .pic_box img {
        width:100%;
    }
    .pic_box span {
        color: #000;
        position: absolute;
        display: inline-block;
        top: 64px;
        left: 200px;
        font-size: 14px;
    }

</style>