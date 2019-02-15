<template>
	<div class="admincontent_page">
		<el-container style="height: 500px; border: 1px solid #eee">
			<el-aside width="200px" style="background-color: rgb(238, 241, 246)" id="hiddenscroll">
			<!--左边导航管理-->
				<el-menu :default-openeds="['1', '2']" @open="handleOpen" @close="handleClose" default-active="1-1">
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-message"></i>用户管理
						</template>
						<el-menu-item v-for="item in usermanagelist" :key="item.id" @click="usermanagement(item.id)" :index="item.id">{{item.title}}</el-menu-item>
					</el-submenu>

					<el-submenu index="2">
						<template slot="title">
							<i class="el-icon-menu"></i>视频管理
						</template>
						<el-menu-item v-for="items in videomanagelist" :key="items.id" @click="videomanagement(items.id)" :index="items.id">{{items.title}}</el-menu-item>

					</el-submenu>

					<el-submenu index="3">
						<template slot="title">
							<i class="el-icon-setting"></i>评论管理
						</template>
						<el-menu-item index="3-1" @click="commentmanagement">待审核评论</el-menu-item>

					</el-submenu>

					<el-menu-item index="4" @click="messagesend">
						<i class="el-icon-setting"></i>
						<span slot="title">消息推送</span>
					</el-menu-item>
				</el-menu>
			</el-aside>

			<el-container>
			<!--查询到的内容-->
				<el-main>
					<template>
					<!--搜索用户-->
						<input type="search" v-model="searchkeywords" class="keywords" v-focus />

						<!--<i class="el-icon-search search-icon"></i>-->
						<span class="currenttime">当前时间为：{{currenttime | dateFormat}}</span>
						<!--用户管理的数据-->
						<el-table :data="searchuser(searchkeywords)" style="width: 100%" height="500">
							<el-table-column fixed prop="createtime" label="注册时间" width="200px">
								<template slot-scope="scope">
                    				 {{scope.row.createtime|dateFormat}}
                   				</template>
							</el-table-column>		
							<el-table-column prop="username" label="账号" width="200px">
							</el-table-column>
							<el-table-column prop="usertel" label="电话" width="200px">
							</el-table-column>
							<el-table-column  label="" width="200px">
								<template slot-scope="scope">
							        <el-button type="text" size="small">查看</el-button>
							        <el-button type="text" size="small" @click="deluser(scope.$index,scope.row)">删除</el-button>
     							</template>
							</el-table-column>
						</el-table>

					</template>

				</el-main>
			</el-container>

		</el-container>

	</div>
</template>

<script>
	export default {
		name: 'MainContent',
		data() {
			return {
				usermanagelist: [{
					id: "1-1",
					title: "已注册用户"
				}, {
					id: "1-2",
					title: "今日注册用户"
				}],
				videomanagelist: [{
					id: "2-1",
					title: "待更新动漫"
				}, {
					id: "2-2",
					title: "已更新动漫"
				}, {
					id: "2-3",
					title: "待审核视频"
				}],
				userindex: null,
				userlist: [{
					createtime: "",
					username: "",
					usertel: ""
				}],
				searchkeywords: "",
				currenttime:new Date()
			}

		},
		filters:{ //过滤器时间格式
  			dateFormat:function(datetime,pattern=""){
	  			let dt=new Date(datetime);
	  			let y=dt.getFullYear();
	  			let m=(dt.getMonth()+1).toString().padStart(2,'0');
	  			let d=dt.getDate().toString().padStart(2,'0');
	  			let hh=dt.getHours().toString().padStart(2,'0');
	  			let mm=dt.getMinutes().toString().padStart(2,'0');
	  			let ss=dt.getSeconds().toString().padStart(2,'0');
	  			if(pattern.toLowerCase() === 'yyyy-mm-dd'){
	  				return `${y}-${m}-${d}`
	  			}else {
	  				return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
	  			}
  		
  			}
 		},
 		directives:{//自定义指令
 			focus:{
 				inserted:function(el){
 					el.focus();
 				},
 				update:function(el){
 					el.focus();
 				}
 			}
 		},
		mounted: function() {
			let _this = this;
				this.$http.get("/usermanagement", {
						params: {
							index: "1-1"
						}
					}).then(function(response) {
						console.log(response);
						_this.userlist = response.data;
					})
					.catch(function(error) {
						console.log(error);
					});
				this.timer=setInterval(function(){
					_this.currenttime=new Date();
				},1000);
		},

		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			//用户管理-查看注册用户以及今日已注册用户
			usermanagement(index) {
				console.log(index);
				this.userindex = index;
				let _this = this;
				this.$http.get("/usermanagement", {
						params: {
							index: this.userindex
						}
					}).then(function(response) {
						console.log(response);
						_this.userlist = response.data;
					})
					.catch(function(error) {
						console.log(error);
					});

			},
			searchuser(key){
				//搜索用户
				return  this.userlist.filter(item=>{
					if(item.username.includes(key)){
						console.log(item);
						return item
					}
				})
			},
			//删除用户，以及添加/更新修改的时间
			deluser(index,obj){
				console.log(index,obj);
				let name=obj.username;

				let dt=new Date();
	  			let y=dt.getFullYear();
	  			let m=(dt.getMonth()+1).toString().padStart(2,'0');
	  			let d=dt.getDate().toString().padStart(2,'0');
	  			let hh=dt.getHours().toString().padStart(2,'0');
	  			let mm=dt.getMinutes().toString().padStart(2,'0');
	  			let ss=dt.getSeconds().toString().padStart(2,'0');
	  			let time=`${y}-${m}-${d} ${hh}:${mm}:${ss}`;

				let _this=this;
				this.$http.get("/userdel", {
						params: {
							username:name,
							time:time
						}
					}).then(function(response) {
						console.log(response);
						if(response.data == "successfully"){
							_this.userlist.splice(index,1);
						}
						
					})
					.catch(function(error) {
						console.log(error);
					});

			},
			videomanagement(index) {
				console.log(index);
			},
			commentmanagement() {
				console.log("3-1");
			},
			messagesend() {
				console.log("4")
			}
		}
	}
</script>

<style scoped>

</style>

<style>
	#hiddenscroll::-webkit-scrollbar {
		display: none
	}
	.keywords {
		height: 30px;
		width: 300px;
		border: 1px solid lightblue;
	}
	.search-icon {
		font-size: 24px;
    	position: relative;
    	top: 5px;
    	font-weight: 900;
	}
	.currenttime:last-child{
		font-size: 14px;
    	color: gray;
    	position: relative;
   	 	left: 10px;
   	 	top: 5px;
   	 	display:inline-block;
   	 	cursor: pointer;
	}
	
</style>