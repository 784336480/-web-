<template>
  <div class="animeplay_page">
      <!-- ++++导航背景+++++++++++++++++++++++++ -->
        <header-bg :blurBg="1"></header-bg>
        <!--背景图片-->
        <div class="bg_Image_box"></div>

      <!-- ++++主体内容+++++++++++++++++++++++++ -->
        <div class="animeplaybox">
          <!-- 1.+++++++++++番剧名 + 第几话-->
            <div class="bgtitle">
              <!-- 番剧名，左浮动 -->
              <div class="bgname">
                  <h1>不愉快的怪物庵 续：第一话 肢帘</h1>
              </div>
              <!-- 承包番剧，右浮动 -->
              <div class="bgcontract">
                    <div class="btn_sponsor_wrapper">
                      <span class="sponsor_count">
                        已有<span>2232</span>人承包</span>
                        <a href="javascript:;" class="sponsor_btn">我要承包</a>
                        <div class="pic_wrapper"></div>
                    </div>
              </div>
            </div>
          <!-- 番剧名 + 第几话-->

          <!-- 2.+++++++++++视频播放 -->
            <div class="player_wrapper">
              <div class="player_box">
                <!-- 2.1 +++++++++video+弹幕 -->
                <div class="player_video">
                    <video src="../../../static/video/buy.mp4" controls></video>
                    <div class="danmu_box">
                      <div class="inputbar">
                          <div class="danmaku_clear">
                            <span class="danmu_clear_text">关闭弹幕</span>
                          </div>
                          <input class="danmaku_input" placeholder="您可以在这里输入弹幕吐槽哦~">
                          <div class="video_hint">
                            <a href="#" target="_blank">弹幕礼仪 &gt;</a>
                          </div>
                          <div class="btn_send bqui_button">
                            <span class="bpui_button_text">发送 &gt;</span>
                          </div>
                      </div>
                    </div>
                </div>
                <!-- video+弹幕 -->

                <!-- 2.2 +++++++++++番剧列表 -->
                <div class="anime_list">

                    <div class="list_menu">
                        <span v-for="(item,index) in listmenu" @click="listMenuClick(index)" :class="{'isActive':index == i}" >{{item.title}}</span>
                    </div>

                    <div class="anime_list_box">
                        <div class="anime_one_cover">
                          <img src="../../../static/img/1.jpg">
                        </div>
                        <div class="anime_one_title">
                          <h3>第一话 肢帘</h3>
                        </div>
                    </div>
                    <div class="anime_list_box">
                        <div class="anime_one_cover">
                          <img src="../../../static/img/1.jpg">
                        </div>
                        <div class="anime_one_title">
                          <h3>第一话 肢帘</h3>
                        </div>
                    </div>
                </div>
                <!-- 番剧列表 -->

              </div>

            </div>
          <!-- 视频播放 -->

          <!-- 3.+++++++++++番剧剧情列表 -->
            <div class="anime_info_wrapper">
                <div class="anime_info">
                  <!-- 3.1=========番剧封面图 -->
                  <div class="info_cover">
                    <a href="//www.bilibili.com/bangumi/media/md5267026/" target="_blank">
                      <img src="https://i0.hdslb.com/bfs/bangumi/aa63146a22d33b8822455e2dc7a35710edb85aad.png@240w_320h.png" alt="" class="">
                    </a>
                  </div>
                  <!-- 番剧封面图 -->

                  <!-- 右边  番剧名+每集列表 -->
                  <div class="info_right">
                    <!-- 3.2=========番剧名 -->
                    <div class="info_title">
                      <h2>不愉快的怪物庵 续</h2>
                      <div class="bangumi_collect">
                          <div class="bangumi-btn">
                            <div class="btn-follow">
                              <i></i>追番
                            </div>
                          </div>
                      </div>
                    </div>
                    <!-- 番剧名-->

                    <div class="anime_list_wrapper">
                        <!-- 3.3 ========TV -->
                        <div class="top_block">
                          <div class="slider_content">
                            <ul class="season_list">
                              <li class="season_item on">TV</li>
                            </ul>
                          </div>
                        </div>
                        <!-- TV -->

                        <!-- 3.4========番剧每集列表 -->
                        <div class="bottom_block">
                            <div class="slider_wrapper">
                              <div class="bottom_content">
                                <ul class="episode_list">
                                    <li title="第一话：肢帘" class="episode_item">
                                        <h4 class="ep_index">第一话</h4>
                                        <p class="ep_title">肢帘</p>
                                    </li>
                                    <li title="第一话：肢帘" class="episode_item">
                                        <h4 class="ep_index">第一话</h4>
                                        <p class="ep_title">肢帘</p>
                                    </li>
                                    <li title="第一话：肢帘" class="episode_item">
                                        <h4 class="ep_index">第一话</h4>
                                        <p class="ep_title">肢帘</p>
                                    </li>
                                </ul>
                              </div>

                            </div>
                        </div>
                        <!-- 番剧每集列表 -->
                    </div>
                  </div>
                  <!-- 右边  番剧名+每集列表 -->
                </div>
            </div>
          <!-- 番剧剧情列表 -->

          <!-- 4.++++++++++点评 -->
            <div class="bangumi_comment_wrapper">
                <div  class="bangumi-media" scrollshow="true">
                  <!-- 4.1 评分 -->
                  <div class="bangumi-media-header">
                    <h4>点评</h4>
                    <div class="rate-wrapper">
                      <div class="rate-score">9.7</div>
                      <div class="rate-info">
                        <ul class="star-wrapper">
                            <li class="star-item"></li>
                            <li class="star-item"></li>
                            <li class="star-item"></li>
                            <li class="star-item"></li>
                            <li class="star-item"></li>
                        </ul>
                        <p class="info-wrapper">4.4万人评分</p>
                      </div>
                      <div class="btn-go-write">
                        <i class="icon-write"></i>去写点评
                      </div>
                    </div>
                    <a href="javascript:void(0)" target="_blank" class="btn-more-review">查看全部点评</a>
                  </div>
                  <!-- 评分 -->

                  <!-- 4.2评分内容 -->
                  <div class="bangumi-media-body">
                    <ul class="bangumi-review-list">

                      <li class="bangumi-review-item">
                        <a href="javascript:void(0)" target="_blank">
                          <div class="item-header">
                            <a href="javascript:void(0)" target="_blank" class="author-name is-vip">美雪酱</a>
                            <ul class="item-star-wrapper">
                              <li class="author-stat"></li>
                              <li class="author-stat"></li>
                              <li class="author-stat"></li>
                              <li class="author-stat"></li>
                              <li class="author-stat"></li>
                            </ul>
                            <span class="pub-time">2018-11-27</span>
                          </div>
                          <div class="long-title">近期的感想（十几集后再更新）</div>
                          <p class="review-content long"> 怎么说呢，虽然最近很多人说剧情开始拖沓带水了，可是一个人一个口味，一般番快节奏都是因为12集的限制，但是史莱姆经费够用，工期够足，所以这样做没什么问题。 虽然我不是原作党，但是我也感觉到一些单集节奏上的问题，可我并没有因此不舒服，除去原作党和无脑的小学生（此处不特指真正意义上的小学生，而是大脑方面的），动画党对这种风格的排斥也反映了我们生活中一些不好的东西。 心浮气躁和安静不下来，毕竟现在生活节</p>
                        </a>
                      </li>

                      <li class="bangumi-review-item">
                        <a href="javascript:void(0)" target="_blank">
                          <div class="item-header">
                            <a href="javascript:void(0)" target="_blank" class="author-name is-vip">美雪酱</a>
                            <ul class="item-star-wrapper">
                              <li class="author-stat"></li>
                              <li class="author-stat"></li>
                              <li class="author-stat"></li>
                              <li class="author-stat"></li>
                              <li class="author-stat"></li>
                            </ul>
                            <span class="pub-time">2018-11-27</span>
                          </div>
                          <div class="long-title">近期的感想（十几集后再更新）</div>
                          <p class="review-content long"> 怎么说呢，虽然最近很多人说剧情开始拖沓带水了，可是一个人一个口味，一般番快节奏都是因为12集的限制，但是史莱姆经费够用，工期够足，所以这样做没什么问题。 虽然我不是原作党，但是我也感觉到一些单集节奏上的问题，可我并没有因此不舒服，除去原作党和无脑的小学生（此处不特指真正意义上的小学生，而是大脑方面的），动画党对这种风格的排斥也反映了我们生活中一些不好的东西。 心浮气躁和安静不下来，毕竟现在生活节</p>
                        </a>
                      </li>

                      <li class="bangumi-review-item">
                        <a href="javascript:void(0)" target="_blank">
                          <div class="item-header">
                            <a href="javascript:void(0)" target="_blank" class="author-name is-vip">美雪酱</a>
                            <ul class="item-star-wrapper">
                              <li class="author-stat"></li>
                              <li class="author-stat"></li>
                              <li class="author-stat"></li>
                              <li class="author-stat"></li>
                              <li class="author-stat"></li>
                            </ul>
                            <span class="pub-time">2018-11-27</span>
                          </div>
                          <div class="long-title">近期的感想（十几集后再更新）</div>
                          <p class="review-content long"> 怎么说呢，虽然最近很多人说剧情开始拖沓带水了，可是一个人一个口味，一般番快节奏都是因为12集的限制，但是史莱姆经费够用，工期够足，所以这样做没什么问题。 虽然我不是原作党，但是我也感觉到一些单集节奏上的问题，可我并没有因此不舒服，除去原作党和无脑的小学生（此处不特指真正意义上的小学生，而是大脑方面的），动画党对这种风格的排斥也反映了我们生活中一些不好的东西。 心浮气躁和安静不下来，毕竟现在生活节</p>
                        </a>
                      </li>


                    </ul>
                  </div>
                  <!-- 评分内容 -->
                </div>

            </div>
          <!-- 点评 -->

          <!-- 5.++++++++++用户评论番剧  每一集 -->
            <div class="user_comment_wrapper">
                <div class="comment_wrapper">
                  <!-- 5.1 评论总数 -->
                    <div class="comment_title">
                        <span class="results">941</span>评论
                    </div>
                  <!-- 评论总数 -->

                  <!-- 5.2用户评论 -->
                    <div class="comm">
                        <div class="comment_send">

                        </div>
                    </div>
                  <!-- 用户评论 -->

                </div>
            </div>
          <!-- 用户评论番剧  每一集 -->




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
      listmenu:[
        {title:"番剧列表"},
        {title:"推荐番剧"},
        {title:"弹幕列表"}

      ],
      i:0,
    }
  },
  methods:{
    listMenuClick(index){
      this.i=index;
    }
  }
}

</script>

<style scoped>

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
      width: 100%;
      margin: 0 auto;
      min-height: 500px;
  }
  .bgtitle {
      width: 80%;
      margin: 0 auto;
      position: relative;
      height: 100px;
      top:20px;
  }
  .bgcontract {
      position: relative;
      float: right;
  }
  .bgname {
      float: left;
  }
  .bgname h1 {
      font-size: 18px;
      font-weight: 400;
      color: #222;
      line-height: 100px;
      height: 100px;
      max-width: 700px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
  }
  .btn_sponsor_wrapper {
      position: relative;
      padding-left: 62px;
      padding-top: 23px;
  }
  .btn_sponsor_wrapper .sponsor_count {
      position: absolute;
      right: 0;
      top: 0;
      font-size: 12px;
      line-height: 1;
      color: #99a2aa;
  }
  .btn_sponsor_wrapper .sponsor_count span {
      color: #222;
      font-weight: 700;
  }
  .btn_sponsor_wrapper a.sponsor_btn {
      display: inline-block;
      vertical-align: top;
      min-width: 150px;
      height: 48px;
      line-height: 48px;
      border-radius: 4px;
      font-size: 18px;
      cursor: pointer;
      text-align: center;
      padding: 0 20px 0 22px;
      color: #fff;
      background-color: #f5b23d;
  }
  .btn_sponsor_wrapper .pic_wrapper {
      position: absolute;
      width: 86px;
      height: 100px;
      top: -20px;
      cursor: pointer;
      left: 16px;
      background-repeat: no-repeat;
      background-image: url("../../../static/img/func-icons.png");
      background-position: 0 0;
  }
  .player_wrapper {
      position: relative;
      width: 100%;
      background-color: #f6f9fa;
      border-top: 1px solid #e5e9ef;
      border-bottom: 1px solid #e5e9ef;
      padding: 20px 0;
      margin-top: 15px;
      min-height: 590px;
  }
  .player_box {
      width: 80%;
      margin: 0 auto;
      height: 550px;
      box-shadow: 0 0 5px #ddd;
  }
  .player_video {
      float: left;
      width: 70%;
      height: 504px;
  }
  .player_video video {
      display: inline-block;
      width: 100%;
      height: 504px;
      object-fit: fill;
  }
  .anime_list {
      width: 30%;
      height: 550px;
      float: left;
      background: #fff;
      position: relative;
      border-left: 1px solid #e2e2e2;
      box-sizing: border-box;
      vertical-align: top;
  }
  .danmu_box {
      width: 100%;
      height:46px;
      background: #fff;
      position: relative;
      top: -5px;
      background: linear-gradient(#f5f5f5,#fff);
  }
  .inputbar {
      width: 100%;
      height: 46px;
      position: relative;
  }
  .danmaku_clear {
      float: left;
      width: 9%;
      height: 46px;
      line-height: 46px;
      padding-left: 9px;
      cursor: pointer;
  }
  .danmaku_input {
      float: left;
      height: 46px;
      width: 70%;
      box-sizing: border-box;
      padding: 0 10px;
      background: transparent;
      font-size: 12px;
      color: #6b6b6b;
      border:0;
      border-left:1px solid #eee;
  }
  input:focus {
      outline: none;
  }
  .video_hint {
      float: left;
      color: #99a2aa;
      height: 46px;
      line-height: 46px;
      width: 9%;
  }
  .video_hint a {
      font-size: 12px;
      color: #99a2aa;
  }
  .btn_send {
      float: left;
      height: 40px;
      line-height: 40px;
      margin: 4px 5px 4px 9px;
      padding: 0 10px 0 14px;
      width:8%;
      text-align: center;
  }
  .bqui_button {
      color: #fff;
      cursor: pointer;
      text-align: center;
      border-radius: 4px;
      background-color: #00a1d6;
      vertical-align: middle;
      border: 1px solid #00a1d6;
      padding: 0 10px;
      line-height: 38px;
      height: 38px;
      outline: none;
      overflow: visible;
  }
  .bpui_button_text {
      pointer-events: none;
  }
  .anime_list_box {
      width: 90%;
      height: 90px;
      position: relative;
      margin: 10px auto;
  }
  .anime_one_cover {
      width: 80px;
      height: 80px;
      float: left;
      cursor: pointer;
  }
  .anime_one_cover img {
      width: 100%;
      height: 100%;
  }
  .anime_one_title {
      float: left;
      height: 80px;
      line-height: 80px;
      margin-left: 15px;
      cursor: pointer;
  }
  .list_menu {
      width: 100%;
      position: relative;
      height: 37px;
      font-size: 16px;
      border-bottom: 1px solid #eee;
      line-height: 37px;
      text-align: center;
  }
  .list_menu span {
    width: 33%;
    float: left;
    cursor: pointer;
  }
  .list_menu span:hover {
    color:#00a1d6;
  }
  .isActive {
    border-bottom: 1px solid #00a1d6;
    color:#00a1d6;
  }
  .anime_info_wrapper {
    position: relative;
    z-index: 100;
    padding: 24px 0 20px;
    margin: 0 auto;
    border-bottom: 1px solid #e5e9ef;
    width: 80%;
    height: 205px;
  }
  .anime_info {
    position: relative;
    width: 100%;
    height: 160px;
  }
  .info_cover {
      width: 120px;
      height: 160px;
      float: left;
      border-radius: 4px;
      overflow: hidden;
  }
  .info_cover img {
      display: block;
      width: 100%;
      height: 100%;
  }
  .info_right {
      padding-left: 144px;
      height: 160px;
  }
  .info_title {
      height: 38px;
  }
  .info_title h2 {
      color: #222;
      font-weight: 400;
      font-size: 18px;
      line-height: 18px;
      height: 100%;
      float: left;
      width: 70%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
  }
  .bangumi-btn {
      float: left;
      margin-right: 20px;
  }
  .bangumi_collect {
    float: left;
  }
  .btn-follow {
        width: 80px;
        height: 28px;
        line-height: 28px;
        background-color: #f36392;
        border: 1px solid #f36392;
        border-radius: 4px;
        text-align: center;
        color: #fff;
        font-size: 14px;
        cursor: pointer;
    }
    .btn-follow i {
        display: inline-block;
        vertical-align: middle;
        width: 14px;
        height: 14px;
        margin-right: 7px;
        background-repeat: no-repeat;
        background-image: url("../../../static/img/biliicons.png");
        background-position: -665px -1882px;
    }

  .anime_list_wrapper {
      margin-top: 9px;
      height: 113px;
  }
  .top_block {
      position: relative;
      height: 26px;
      border-bottom: 1px solid #e5e9ef;
  }
  .slider_content {
      overflow: hidden;
      padding-right: 100px;
      margin-right: 74px;
      position: relative;
      width: 100%;
  }
  .season_list {
      height: 27px;
      white-space: nowrap;
  }
  .season_item {
      position: relative;
      display: inline-block;
      vertical-align: top;
      margin-right: 30px;
      line-height: 1;
      height: 26px;
      border-bottom: 1px solid rgba(0,0,0,0);
      font-size: 12px;
      cursor: pointer;
  }
  .season_item.on {
      color: #00a1d6;
      border-bottom-color: #00a1d6;
  }
  .season_item.on:after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-3px);
      border-bottom: 3px solid #00a1d6;
      border-top: 0;
      border-left: 3px solid rgba(0,0,0,0);
      border-right: 3px solid rgba(0,0,0,0);
      box-sizing: border-box;
    }
    .bottom_block {
       padding-top: 14px;
    }
    .slider_wrapper {
        position: relative;
        width: 100%;
    }
    .bottom_content {
        overflow: hidden;
    }
    .episode_list {
        margin-top: 6px;
        min-height: 66px;
        white-space: nowrap;
    }
    .episode_item {
        position: relative;
        display: inline-block;
        vertical-align: top;
        margin-right: 10px;
        width: 100px;
        height: 66px;
        cursor: pointer;
        background-color: #fff;
        border: 1px solid #e5e9ef;
        border-radius: 4px;
        padding: 8px;
    }
    .episode_item:hover {
      border:1px solid #00a1d6;
    }
    .episode_item:hover .ep_index {
      color: #00a1d6;
    }
    .episode_item:hover .ep_title {
      color: #00a1d6;
    }
    .ep_index {
        line-height: 2;
        color: #000;
        font-weight: 400;
        white-space: nowrap;
        height: 19px;
    }
    .ep_title {
        white-space: normal;
        color: #99a2aa;
        line-height: 30px;
        max-height: 32px;
        word-break: break-word;
        word-wrap: break-word;
    }
    .epActive {
      background-color: #00a1d6;
      border-color: #00a1d6;
      color: #fff;
    }

    /* 评分样式-stat */
    .bangumi_comment_wrapper {
        width: 80%;
        margin: 0 auto;
        height: 254px;
        position: relative;
        padding-bottom: 20px;
        border-bottom: 1px solid #e5e9ef;
    }
    .bangumi-media-header {
        width: 100%;
        height: 71px;
        padding-top: 20px;
    }
    .bangumi-media-header h4 {
        float: left;
        line-height: 24px;
        height: 24px;
        font-size: 18px;
        color: #222;
        font-weight: 700;
    }
    .rate-wrapper {
        float: left;
        margin-left: 20px;
        margin-top: -5px;
        height: 36px;
    }
    .rate-score {
        height: 36px;
        float: left;
        font-size: 36px;
        line-height: 36px;
        color: #ffa726;
        font-weight: 700;
    }
    .rate-info {
        float: left;
        margin-left: 12px;
    }
    .star-wrapper {
        position: relative;
        display: block;
        height: 12px;
        margin-top: 4px;
    }
    .rate-info .star-wrapper li {
        position: relative;
        display: inline-block;
        vertical-align: top;
        width: 16px;
        height: 16px;
        background-size: cover;
        background-position: 50%;
        background-repeat: no-repeat;
        font-size: 12px;
        color: #ffa726;
        background:url('../../../static/img/light.png') no-repeat -5px -5px;
    }
    .rate-info .info-wrapper {
        color: #99a2aa;
        font-size: 12px;
        line-height: 16px;
        margin-top: 6px;
    }
    .rate-wrapper .btn-go-write {
        display: block;
        margin-left: 40px;
        float: left;
        height: 32px;
        font-size: 14px;
        color: #222;
        line-height: 32px;
        cursor: pointer;
    }
    .icon-write {
      background: url("../../../static/img/write_comment.png") no-repeat ;
      width: 32px;
      height: 32px;
      margin-right: 8px;
      float: left;
    }
    .btn-more-review {
        float: right;
        line-height: 22px;
        border: 1px solid #b7c0cc;
        border-radius: 4px;
        height: 22px;
        padding: 0 10px;
        font-size: 12px;
        color: #6e7579;
    }
    /* 点评头部样式--end */

    /* 点评内容样式--start */
    .bangumi-media-body {
       width: 100%;
       height: 162px;
    }
    .bangumi-review-list {
        display: block;
        float: left;
        width: 100%;
    }
    .bangumi-review-item {
        float: left;
        width: 32.5%;
        height: 162px;
        margin-right: 13px;
        border-radius: 4px;
        background-color: #f4f5f7;
        padding: 20px;
        box-sizing: border-box;
        overflow: hidden;
    }
    .bangumi-review-item:last-child {
        margin-right: 0;
    }
    .bangumi-review-item .item-header {
        position: relative;
        height: 16px;
        margin-bottom: 12px;
    }

    .item-star-wrapper {
        position: relative;
        display: block;
        height: 16px;
        float: left;
        margin-left: 8px;
    }
    .item-star-wrapper li {
        position: relative;
        float: left;
        width: 16px;
        height: 16px;
        background: url('../../../static/img/light.png') no-repeat -5px -5px;
    }
    .author-name {
        display: block;
        float: left;
        height: 16px;
        line-height: 16px;
        font-size: 12px;
        color: #6d757a;
        max-width: 130px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .pub-time {
        height: 16px;
        float: right;
        line-height: 16px;
        color: #99a2aa;
        font-size: 12px;
    }
    .bangumi-review-item .long-title {
        min-height: 24px;
        max-height: 48px;
        line-height: 24px;
        font-size: 14px;
        color: #212121;
        font-weight: 700;
        margin-bottom: 6px;
    }
    .bangumi-review-item .long-title, .bangumi-review-item .review-content {
        word-wrap: break-word;
        word-break: break-word;
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
    }
    .bangumi-review-item .review-content.long {
        color: #6d757a;
        max-height: 60px;
        -webkit-line-clamp: 3
    }
    .review-content {
        font-size: 12px;
        color: #222;
        line-height: 20px;
        -webkit-line-clamp: 4;
        max-height: 80px;
    }
    /* 评分样式-end */

    /* 用户评论样式-start */
    .user_comment_wrapper {
        width: 80%;
        min-height: 500px;
        margin: 0 auto;
        position: relative;
    }
    .comment_wrapper {
        width: 100%;
        height:100%;
    }
    .comment_title {
        padding-top: 18px;
        font-size: 18px;
        line-height: 20px;
        height: 20px;
        color: #222;
        margin-bottom: 10px;
    }
    /* 用户评论样式-end */



</style>
