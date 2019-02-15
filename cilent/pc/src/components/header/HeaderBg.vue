<template>
	
		<div class="nav_menu">
			<!--背景样式-->
			<div class="blur_bg" :style="blur"></div>
			<div class="nav_mask"></div>
			<!--导航标题-->
            <div class="nav_title">
				<ul>
					<li class="avatar_show" @mouseover="avatarShow" >
						<div class="avatar_box">
							<div class="avatar_pic">
								<img src="../../../static/img/1.jpg">
							</div>
						</div>
						<div class="i_menu_login">
								<p class="tip">登录后你可以：</p>
								<div class="img">
									<img src="../../../static/img/danmu.png" class="danmuone" style="left:0px">
									<img src="../../../static/img/danmu.png" class="danmutwo" style="left:320px">
								</div>
								<a href="/#/login" class="login-btn">登录</a>
								<p class="reg">首次使用？
									<a href="/#/register">点我去注册</a>
								</p>
						</div>
						
					</li>
					<li>
						<span>历史</span>
					</li>
					<li>
						<div class="contribution">
							<span>投稿</span>
						</div>
					</li>
				</ul>
			</div>
			<!--图片-->
			<div class="content_bg" v-if="contentBghide">
				<img src="../../../static/img/rl_top.png">
			</div>
		</div>
	
</template>

<script>
	export default {
		props:['blurBg'],
		data() {
			return {
				//背景图片
				blur:"",
				contentBghide:true,
			}
		},
		mounted(){
			if(this.blurBg == "1"){
				this.blur="background:url(../../../static/img/blur_bg_1.png)";
				this.contentBghide=false;
			}else {
				this.blur=""
			}
		},
		methods: {
			//------1.头像鼠标移入登陆注册动画
			avatarShow:function(_type,index,item){
				let oneleft=parseInt(this.$('.danmuone')[0].style.left);
				let twoleft=parseInt(this.$('.danmutwo')[0].style.left);
				let _this=this;
				let timer=setInterval(function(){
					oneleft-=1;
					twoleft-=1;
					_this.$('.danmuone')[0].style.left=oneleft+"px";
					_this.$('.danmutwo')[0].style.left=twoleft+"px";
					if(oneleft < -320 ){
						oneleft=320;
					}
					if(twoleft < -320 ) {
						twoleft=320;
					}
					
				},50)
			},
			
		}
	}
</script>

<style scoped>
	.nav_menu {
		position: relative;
		z-index: 200;
		height: 42px;
		color: #222;
		width: 100%;
		min-width: 1200px;
	}
	/*背景*/
	.blur_bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-position: center -10px;
		background-repeat: no-repeat;
		filter: blur(4px);
	}
	
	.nav_mask {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 42px;
		background-color: rgba(255, 255, 255, 0.4);
		/*background-color: rgba(0,0,0,.4);*/
		box-shadow: rgba(0, 0, 0, 0.1) 0 1px 2px;
	}
	/*title样式*/
	.nav_title {
		height:42px;
		line-height:42px;
		min-width:425px;
		float:right;
		position:relative;
		z-index: 11;
		color:#fff;
	}
	/*头像样式*/
	.avatar_box {
		height:42px;
		position:relative;
	}
	.avatar_pic {
		width:36px;
		height:36px;
		top:3px;
		position:relative;
	}
	.avatar_box img {
		width:100%;
		height:100%;
		border-radius:50%;
	}
	.nav_title ul li {
		float:left;
		list-style-type:none;
		margin-right:20px;
		cursor:pointer;

	}
	/*投稿样式*/
	.contribution {
		position: relative;
		width: 68px;
		height: 42px;
	}
	.contribution span {
		display: block;
		width: 100%;
		height: 48px;
		line-height: 42px;
		text-align: center;
		font-size: 14px;
		color: #fff;
		background-color: #fb7299;
		border-radius: 0 0 6px 6px;
	}
	/*登录注册隐藏*/
	.i_menu_login {
		background:#fff;
		width:340px;
		margin-left:-160px;
		padding:12px;
		text-align:left;
		border:1px solid #e5e9ef;
		position:absolute;
		z-index:11;
		left:-14px;
		display:none;

	}
	.avatar_show:hover .i_menu_login {
		display:block;
	}
	.i_menu_login .tip {
		font-size:12px;
		color:#6b757a;
	}
	.i_menu_login .img {
		height:200px;
		margin:12px 0;
		overflow:hidden;
		position:relative;
		background:url(../../../static/img/danmubg.png) no-repeat 50%;
	}
	.i_menu_login .img img {
		width:320px;
		height:200px;
		position:absolute;
		top:0;
	}
	.i_menu_login .login-btn {
		display:block;
		height:43px;
		line-height:43px;
		text-align:center;
		background:#00a1d6;
		border-radius:4px;
		color:#fff;
		font-size: 14px;
	}
	.i_menu_login .reg {
		margin-top:8px;
		text-align:center;
		font-size:12px;
		color: #282828;
	}
	/*图片*/
	.content_bg {
		background: #00a0d8;
		height: 86px;
		text-align: center;
		margin-bottom: 20px;
		width:100%;
		min-width:1200px;
		position: relative;
		z-index: 10;
		top: 42px;
	}
	.content_bg img {
		min-width:980px;
		position:absolute;
		right:96px;
	}

</style>