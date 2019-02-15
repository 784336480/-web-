<template>
  <div class="animeplay_page">
      <header-bg :blurBg="1"></header-bg>
      <!--背景图片-->
      <div class="bg_Image_box"></div>

      <div class="animeplaybox">
        <!-- 番剧名 + 第几话-->
        <div class="bgtitle">
          <div class="bgname">
              <h3>不愉快的怪物庵 续：第一话 肢帘</h3>
          </div>
          <!-- 承包番剧 -->
          <div class="bgcontract">
              <div class="header-pay-banner">
                <div class="btn-sponsor-wrapper">
                  <span class="sponsor-count">
                    已有<span>2232</span>人承包</span>
                    <a href="javascript:;" class="sponsor-btn">我要承包</a>
                    <div class="pic-wrapper"></div>
                  </div>
                </div>
          </div>
        </div>

      </div>

  </div>

</template>
<script>
import HeaderBg from '../header/HeaderBg.vue';
export default {
  components: {
      HeaderBg,
  },
  data(){
    return  {

    }
  },
  methods:{

  }
}

</script>

<style scoped="">
  .bg_Image_box {
      position: relative;
      z-index: 199;
      height: 170px;
      margin-top: -42px;
      background: #eee;
      background-position: center -10px;
      background-repeat: no-repeat;
      background:url("../../../static/img/blur_bg_1.png");
  }
  .animeplaybox {
    width: 80%;
    margin: 0 auto;
    min-height: 500px;
  }
  .header-pay-banner {
      position: relative;
      float: right;
  }
  .btn-sponsor-wrapper {
      position: relative;
      padding-left: 62px;
      padding-top: 23px;
  }
  .btn-sponsor-wrapper .sponsor-count {
      position: absolute;
      right: 0;
      top: 0;
      font-size: 12px;
      line-height: 1;
      color: #99a2aa;
  }
  .btn-sponsor-wrapper .sponsor-count span {
      color: #222;
      font-weight: 700;
  }
</style>
