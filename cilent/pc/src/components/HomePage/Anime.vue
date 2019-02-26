<template>
    <div class="anime_page">
      <div class="step_1">
        <!-- 轮播 -->
        <div class="lunbo">
          <div class="container">
            <swiper class='swiImgs' :options="swiperOption" v-if="swiperitem.length!=0">
              <swiper-slide v-for="(item, index) in swiperitem" data-index="index" :key="index" class="item">
                <img class='swiImg' :src='item.pic' />
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <!-- 轮播 -->
        <!-- 右侧 -->
        <div class=""></div>
        <!-- 右侧 -->
      </div>
      <!-- 最近更新 -->
      <div class="step_2">
          <h2>最近更新</h2>
          <div class="recent_updates_box">
              <div class="updata_model" v-for="item in updatalist">
                <div class="updata_pic">
                  <img src="../../../static/img/1.jpg">
                </div>
                <div class="updata_text">
                    <p class="updata_title">琴之森 第二季</p>
                    <p class="updata_txt">更新至 <span class="updata_to">5话</span></p>
                </div>
              </div>
          </div>
      </div>
      <!-- 最近更新 -->

      <!-- 连载动画 -->
      <div class="step_2">
          <h2>连载动画</h2>
          <div class="recent_updates_box">
              <div class="updata_model" v-for="item in updatalist">
                <div class="updata_pic">
                  <img src="../../../static/img/1.jpg">
                </div>
                <div class="updata_text">
                    <p class="updata_title">琴之森 第二季</p>
                    <p class="updata_txt">更新至 <span class="updata_to">5话</span></p>
                </div>
              </div>
          </div>
      </div>
      <!-- 连载动画 -->

      <!-- 完结动画 -->
      <div class="step_2">
          <h2>完结动画</h2>
          <div class="recent_updates_box">
              <div class="updata_model" v-for="item in updatalist">
                <div class="updata_pic">
                  <img src="../../../static/img/1.jpg">
                </div>
                <div class="updata_text">
                    <p class="updata_title">琴之森 第二季</p>
                    <p class="updata_txt">更新至 <span class="updata_to">5话</span></p>
                </div>
              </div>
          </div>
      </div>
      <!-- 完结动画 -->

      <!-- 咨询  视频投稿 -->
      
      <!-- 咨询  视频投稿 -->

    </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
require("swiper/dist/css/swiper.css");
export default {
  components:{
    swiper,
    swiperSlide
  },
  created() {
      this.swiperOption.autoplay = this.swiperitem.length != 1 ? {
        delay: 1500,
        stopOnLastSlide: false,
        disableOnInteraction: false
      } :false;
  },
  data(){
      return {
        swiperitem:[
          {"pic":"https://i0.hdslb.com/bfs/bangumi/1437f73392b6102b3e326c25fbdefdcb19a02e40.jpg@1260w_600h.jpg"},
          {"pic":"https://i0.hdslb.com/bfs/bangumi/968989e1d57ff4b90ef339b1f45a513908a44b3e.jpg@1260w_600h.jpg"},
          {"pic":"https://i0.hdslb.com/bfs/bangumi/5b4a5810cc5abe2c5fe7ba15ff9c29616f24fd87.jpg@1260w_600h.jpg"},
          {"pic":"https://i0.hdslb.com/bfs/bangumi/414e64f18007cfbf2c2843f4349648aeab606070.jpg@1260w_600h.jpg"},
          {"pic":"https://i0.hdslb.com/bfs/bangumi/aa62d282902dc9ac6dea5a3f8a8290b526dda143.jpg@1260w_600h.jpg"}
        ],
        swiperOption:{
          notNextTick:true,
          loop:true,
          initialSlide:0,
          autoplay:{
            delay:1500,
            stopOnLastSlide: false,
            disableOnInteraction: false
          },
          speed:800,
          direction:"horizontal",
          grabCursor:true,
        },
        updatalist:[
          {"id":1},
          {"id":2},
          {"id":3},
          {"id":4},
          {"id":5},
          {"id":6},
          {"id":7},
          {"id":8},
          {"id":9},

        ]
      }
    },
    mounted(){

    }
}
</script>
<style scoped="">
.anime_page {
    position: relative;
    width: 100%;
    margin-top: 10px;
}
.step_1 {
    width: 100%;
    height: 310px;
    margin-bottom: 10px;
}
.lunbo {
    width: 620px;
    height: 300px;
    position: relative;
    float: left;
}
.swiper-container {
    width: 620px;
    height: 300px;
}
.swiper-slide img {
    width: 100%;
    height: 100%;
}
.swiText {
    display: inline-block;
    position: relative;
    top: -15px;
    z-index: 10;
    color: chartreuse;
}
.step_2 {
    position: relative;
    width: 100%;
    height: 350px;
    overflow: hidden;
}
.step_2 h2 {
    font-size: 24px;
    line-height: 24px;
    font-weight: 400;
    float: left;
    color: #222;
    position: relative;
    display: block;
    width: 100%;
}
.recent_updates_box {
    position: relative;
    top: 10px;
    width: 100%;
    height: 300px;
    overflow: hidden;
}
.updata_model {
    width: 266px;
    height: 108px;
    float: left;
    padding-bottom: 36px;
    padding-right: 86px;
}
.updata_pic {
    width: 72px;
    height: 72px;
    float: left;
}
.updata_pic img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
}
.updata_text {
    float: left;
    width: 96px;
    height: 72px;
    margin-left: 12px;
    position: relative;
}
.updata_title {
    height: 57px;
    line-height: 18px;
    overflow: hidden;
    text-align: left;
    width: 100%;
    margin-top: -3px;
    word-break: break-all;
    word-wrap: break-word;
    color: #000;
}
.updata_txt {
    position: absolute;
    bottom: 0;
    text-align: left;
    margin-top: 2px;
    left: 0;
    white-space: nowrap;
    color: #aaa;
}
.updata_to {
    background: #ff8eb3;
    color: #fff;
    width: 36px;
    display: inline-block;
    text-align: center;
    border-radius: 10px;
}
</style>
