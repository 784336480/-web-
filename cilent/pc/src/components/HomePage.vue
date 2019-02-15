<template>
    <div class="homepage_page">
        <header-bg :blurBg="1"></header-bg>
        <!--背景图片-->
        <div class="bg_Image_box">
          <!--搜索框-->
            <div class="search_box">
            </div>
          <!--搜索框-->
        </div>
        <!--主体-->
        <div class="homepage_content">
          <!--Menu-->
              <div class="navigation_box">
                  <Menu @on-select="MenuClick" mode="horizontal" :theme="theme1" active-name="1">
                      <MenuItem v-for="(item,index,key) in titlelist" :key="item.key" :name="item.id">
                        <router-link :to="item.href">
                          <Icon style="font-size:24px" :type="item.icontype" />
                          {{item.name}}
                        </router-link>
                      </MenuItem>	
                      <!--<MenuItem name="5">
                        <Input v-model="keywords" search placeholder="约定的梦幻岛" />
                      </MenuItem>-->
                  </Menu>
              </div>
              <div class="content_link">
                    <router-view></router-view>
              </div>
        </div>
    
    </div>
</template>

<script>
import HeaderBg from './header/HeaderBg.vue';
export default {
    components: {
        HeaderBg,
    },
    data () {
        return {
          theme1: 'light',
          //搜索
          keywords:"",
          //查询title
          titlelist:[
            {
              id:"1",
              name:"全部",
              icontype:"ios-home",
              href:"/home/anime"
            },
            {
              id:"2",
              name:"连载动画",
              icontype:"ios-paper-plane",
              href:"/home/serialization-anime"
            },
            {
              id:"3",
              name:"完结动画",
              icontype:"ios-school",
              href:"/home/end-anime"
            },
            {
              id:"4",
              name:"新番时间表",
              icontype:"ios-time",
              href:"/home/timer-anime"
            }
          ],

        }
    },
    methods:{
        //注册菜单点击
        MenuClick(name){
          
          
        },
    }
}
</script>

<style lang="less">
  @import '../assets/css/base.less';
  .homepage_content {
      .navigation_box {
        .ivu-menu {
          z-index: 10; 
        }
      }
  }

</style>

<style scoped>
    .bg_Image_box {
        position: relative;
        z-index: 199;
        height: 170px;
        margin-top: -42px;
        background: #eee; 
        background-position: center -10px;
        background-repeat: no-repeat; 
        background:url("../../static/img/blur_bg_1.png");
    }
    .homepage_content {
      width:80%;
      margin:0 auto;
    }
    .navigation_box {

    }
    .content_link {
      width:100%;
      min-height:400px;
      position:relative;
    }
    
</style>
