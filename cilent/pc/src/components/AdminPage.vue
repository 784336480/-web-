<template>
  <div class="admin_page">
  <!--左侧导航链接路由-->
    <div class="admin_left">
			<ul>
				<li v-for="(item,index) in adminlist" @click="adminlistclick(index)" :class="{'isActive':isA==index}">
					<router-link :to="item.href">{{item.name}}</router-link>
				</li>

			</ul>
		</div>
    <div class="admin_right">
        <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
	
export default {
  data () {
    return {
      //左侧样式
				isA:0,
				//左侧导航
				adminlist:[
					{
						name:"用户管理",
						href:"/admin/users-management"
					},
					{
						name:"番剧更新",
						href:"/admin/bangumi-uploading"
					},
					{
						name:"视频管理",
						href:"/admin/videos-management"
					},
					{
						name:"评论管理",
						href:"/admin/comments-management"
					},
					{
						name:"消息推送",
						href:"/admin/notification-push"
					}
					
				], 	
    }
  },
	mounted(){
			// console.log(localStorage)
			this.$http.post("/testtoken",{
				name:localStorage.user_name,
				token:localStorage.token
			}).then(function (response) {
        console.log(response);                     
      })
      .catch(function (error) {
        console.log(error);
                            
      });
	},
  methods:{
		adminlistclick(index) {
			this.isA=index;
		}
  }
}
</script>


<style scoped>
    .admin_page {
				width: 100%;
				min-height: 490px;
				margin: 0;
				padding: 0;
				position: absolute;
    }
    .admin_left {
        float: left;
				width: 15%;
				height: 490px;
				position: fixed;
				background: lavender;
				z-index:1000;
    }
		.admin_left ul {
				width: 77%;
				height: 440px;
				text-align: center;
				list-style: none;
				padding: 0;
				margin: 0 auto;
				position: relative;
				top: 35px;
		}
		.admin_left ul li {
				width: 100%;
				height: 16.6%;
				font-size: 18px;
		}
		.admin_left ul li a {
				text-decoration: none;
		}
    .admin_right {
        width: 81%;
    		min-height: 480px;
				position: relative;
    		left: 18%;
    }
</style>
