import Vue from 'vue';
import Router from 'vue-router';



//管理员组件
import Admin from '@/components/AdminPage.vue';
import BangumiUploading from '@/components/admin/BangumiUploading/BangumiUploading';
import CommentsManagement from '@/components/admin/CommentsManagement/CommentsManagement';
import NotificationPush from '@/components/admin/NotificationPush/NotificationPush';
import UsersManagement from '@/components/admin/UsersManagement/UsersManagement';
import VideosManagement from '@/components/admin/VideosManagement/VideosManagement';

//用户组件
import Register from '@/components/Register/Register';
import Login from '@/components/Login/Login';

//首页组件
import HomePage from '@/components/HomePage';
import Anime from '@/components/HomePage/Anime';
import SerializationAnime from '@/components/HomePage/SerializationAnime';
import EndAnime from '@/components/HomePage/EndAnime';
import TimerAnime from '@/components/HomePage/TimerAnime';

//番剧播放页面
import AnimePlay from '@/components/AnimeInfo/AnimePlay';




Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage,
      children:[
          {
            path:'anime',
            component:Anime,
          },
          {
            path:'serialization-anime',
            component:SerializationAnime
          },
          {
            path:'end-anime',
            component:EndAnime
          },
          {
            path:'timer-anime',
            component:TimerAnime
          }
      ]
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      children:[
        {
          path:'users-management',
          component:UsersManagement,
        },
        {
          path:'bangumi-uploading',
          component:BangumiUploading
        },
        {
          path:'videos-management',
          component:VideosManagement
        },
        {
          path:'comments-management',
          component:CommentsManagement
        },
        {
          path:'notification-push',
          component:NotificationPush
        }
      ]
    },
    {
      path:"/register",
      name:"Register",
      component:Register
    },
    {
      path:"/login",
      name:"Login",
      component:Login
    },
    {
      path:"/animeplay",
      name:"AnimePlay",
      component:AnimePlay
    }

  ]
})
