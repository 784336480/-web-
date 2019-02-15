<template>
    <div class="serialization_anime_page">
      <!--===================番剧模板=================================-->
        <div class="anime_box" v-for="(item,index) in serialization_data" :class="{rightline:index%2 != 0}" >
            <div class="anime_img">
                <img :src="item.anime_img">
            </div>
            <div class="anime_title">
                <div class="anime_name"><p>{{item.bgname}}</p></div>
                <div class="anime_number"><p>#{{item.isdirty}}</p></div>
                <div class="title_footer">
                    <div class="scource"><p>哔哩哔哩番剧</p></div>
                    <div class="v-info">
                        <span class="v-info-i">
                            <i title="观看" class="b-icon b-icon-v-play"></i>
                            <span>16.0万</span>
                        </span>
                        <span class="v-info-i">
                            <i title="弹幕" class="b-icon b-icon-v-dm"></i>
                            <span>7255</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import {
  GET_SERIALIZATIONANIME
}from "../../api/anime.js"
export default{
    data(){
        return {
            serialization_data:[],
        }
    },
    mounted(){
      this.getSerializationAnime()
    },
    methods:{
        async getSerializationAnime(){
           let resdata=await GET_SERIALIZATIONANIME();
           // console.log(resdata)
           this.serialization_data=resdata.data;
        }
    }
}

</script>

<style scoped>

  .serialization_anime_page {
      position: relative;
      top: 10px;
  }
  .anime_box {
      float: left;
      width: 50%;
      padding: 20px;
      border-bottom: 1px solid #eee;
      border-right: 1px solid #eee;
  }
  .rightline {
    border-right: none;
  }
  .anime_img {
      width:100px;
      height:100px;
      float:left;
      cursor: pointer;
  }
  .anime_img img {
      width:100%;
      height:100%;
  }
  .anime_title {
      float: left;
      width: 300px;
      position: relative;
      left: 30px;
  }
  .anime_name {
      margin-bottom:20px;
      cursor: pointer;
  }
  .anime_number {
      margin-bottom:20px;
  }
  .scource {
      float: left;
      width: 100px;
  }
  .v-info {
      float: right;
  }
  .b-icon {
      display: inline-block;
      vertical-align: middle;
      width: 12px;
      height: 12px;
      background: url(../../../static/img/biliicons.png) no-repeat;
  }
  .b-icon.b-icon-v-play {
      background-position: -282px -90px;
  }
  .b-icon.b-icon-v-dm {
      background-position: -282px -218px;
  }
</style>
