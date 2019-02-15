<template>
	<div class="usersmanagement_page">
        <!--查看注册用户/搜索/今日注册/一周/一个月-->
		<div class="title_box">
			<Menu @on-select="MenuClick" mode="horizontal" :theme="theme1" active-name="1">
				<MenuItem v-for="(item,index,key) in titlelist" :key="item.key" :name="item.id">
					<Icon type="md-paw" />
					{{item.name}}
				</MenuItem>	
				<MenuItem name="5">
					<Input v-model="keywords" search placeholder="输入用户名" />
				</MenuItem>
			</Menu>
		</div>

		<div class="timer_box">
			<h1>{{currenttime | dateFormat}}</h1>
		</div>

		<div class="resigters-users">
			<!--<router-view></router-view>-->
			<Table  height="410" ref="usersdata" :columns="userstitle" :data="searchusers"></Table>
		</div>

	</div>
</template>

<script>
export default {
	data () {
		return {
			theme1: 'light',
			//查询title
			titlelist:[
				{
					id:"1",
					name:"已注册用户",
				},
				{
					id:"2",
					name:"一周内注册用户",
				},
				{
					id:"3",
					name:"一个月内注册用户",
				},
				{
					id:"4",
					name:"已封账号",
				}
			],
			//表格title
			userstitle:[
				{
                    title: '用户名',
                    key: 'username',
					align:'center',
                },
                
                {
                    title: '用户电话',
                    key: 'usertel',
					align:'center',
						
                },
				{
                    title: '注册时间',
                    key: 'createtime',
					align:'center',	
					render:(h,params)=>{
						return h('div',new Date(params.row.createtime).Format('yyyy-MM-dd hh:mm'))
					}
                },
				{
					title:'操作',
					key:'operation',
					align:'center',
					render:(h,params)=>{
						let operationtext="";
						if(params.row.status === 1){
							operationtext="封号"
						}else {
							operationtext="恢复"
						}

						return h('Button',{
								props:{
									type:(params.row.status == 1)?'warning':'success',
									size:'small'
								},
								style:{

								},
								on:{
									click:()=>{
										if(params.row.status === 1){
											this.removeuser(params.row.auid,params.index);
										}else {
											this.restoreuser(params.row.auid,params.index);
										}
										
									}
								}
							},operationtext)
						}
				}
			],
			//表格数据
			userslist:[],
			//显示时间
			currenttime:new Date(),
			//搜索
			keywords:"",
		}
	},
	computed:{
		//搜索用户
		searchusers(){
			return this.userslist.filter(item=>{
				return item.username.indexOf(this.keywords) != -1;
			})
		}
	},
	created(){
		//时间格式
		this.$untils.initFormatter()
	},
	mounted(){
		let _this=this;
		//调用定时器		
		this.timer=setInterval(function(){
			_this.currenttime=new Date();
		},1000);
		//挂载请求数据
		this.$http.get('/registerdate', {
			params: {
				status:1
			}
		})
		.then(function (response) {
			_this.userslist=response.data;
		})
		.catch(function (error) {
			console.log(error);
		});
	},
	beforeDestroy(){
			//销毁前清除定时器
			if(this.timer) {
				clearInterval(this.timer);
			}
	},
	methods:{
		//注册菜单点击
		MenuClick(name){
			let _this=this;
			if(name === '5'){

			}else {
				this.$http.get('/registerdate', {
					params: {
						status:name
					}
				})
				.then(function (response) {
					_this.userslist=response.data;
				})
				.catch(function (error) {
					console.log(error);
				});
			}
			
		},
		//封号
		removeuser(userid,index){
			// console.log(userid,index);
			let _this=this;
			this.$http.get("/userdel", {
					params: {
						auid:userid
					}
			}).then(function(response) {
				if(response.data == "successfully"){
					_this.userslist.splice(index,1);
				}
						
			})
			.catch(function(error) {
					console.log(error);
			});

		},
		//恢复账号
		restoreuser(auid,index) {
			let _this=this;
			this.$http.get("/userrestore", {
					params: {
						auid:auid
					}
			}).then(function(response) {
				if(response.data == "successfully"){
					_this.userslist.splice(index,1);
				}
						
			})
			.catch(function(error) {
					console.log(error);
			});
		}
	}
}
</script>

<style lang="less">
	@import '../../../assets/css/base.less';
</style>
<style scoped>
	.usersmanagement_page {
		width: 990px;
		position: absolute;
		min-height: 480px;
	}
	.title_box {
		position: fixed;
    	z-index: 1000;
		width: 870px;
	}
	.timer_box {
		position: absolute;
		top: 60px;
		left: 871px;
		width: 200px;
    	text-align: center;
	}
	.resigters-users {
		position: relative;
		top: 80px;
		width: 870px;
	}
</style>

