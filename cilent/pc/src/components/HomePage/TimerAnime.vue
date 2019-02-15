<template>
    <div class="timeranime_page">

        <div class="timeline_header">
              <!--<div class="arrow_left"></div>-->
              <div class="tl_weeks">
                    <div class="tl_head" v-for="(item,index) in daylist">
                        <div class="tl_day">
                            <span class="indicator"></span>
                            <div class="day_of_week" :class="item.classname"></div>
                            <span class="t_date"></span>
                            <span class="t_week">{{item.week}}</span>
                        </div>
                    </div>
              </div>
             <!-- <div class="arrow_right"></div>-->
        </div>


    </div>
</template>

<script>
export default {
    data(){
        return {
            daylist:[
                {
                    week:"周一" ,
                    weekid:1,
                    classname:"week_1"

                },
                {
                    week:"周二",
                    weekid:2,
                    classname:"week_2"
                },
                {
                    week:"周三",
                    weekid:3,
                    classname:"week_3"
                },
                {
                    week:"周四",
                    weekid:4,
                    classname:"week_4"
                },
                {
                    week:"周五",
                    weekid:5,
                    classname:"week_5"
                },
                {
                    week:"周六",
                    weekid:6,
                    classname:"week_6"
                },
                {
                    week:"周日",
                    weekid:7,
                    classname:"week_7"
                }
            ],
            istoday:4,
        }
    }
}
</script>

<style scoped>
.today {
color:pink
}
    .timeranime_page {
        width:100%;
        position:absolute;
        height:500px;

    }
    .timeline_header {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 60px;
        margin: 0 auto;
        background: #fff;
        box-shadow: 0 10px 10px #fff;
        z-index: 10;
        transition: height .3s;
    }
    .timeline_header .arrow_left {
        position: absolute;
        top: 38px;
        left: 0;
        width: 14px;
        height: 26px;
        background: url(../../../static/img/icons.png) no-repeat -77px -542px;
        background-size: 247px 663px;
        cursor: pointer;
        animation-fill-mode: both;
        z-index: 100;
    }
    .timeline_header .arrow_right {
        position: absolute;
        top: 38px;
        right: 0;
        width: 14px;
        height: 26px;
        background: url(../../../static/img/icons.png) no-repeat -158px -542px;
        background-size: 247px 663px;
        cursor: pointer;
        animation-fill-mode: both;
        z-index: 100;
    }
    .tl_weeks {
        position: relative;
        height: 66px;
        overflow: hidden;
        box-shadow: inset 0 -33px 22px 12px #fff;
        z-index: 1;
    }
    .tl_head {
        position: relative;
        width: 178px;
        height: 66px;
        float: left;
        animation-fill-mode: both;
    }
    .tl_head .tl_day {
        position: absolute;
        bottom: 0;
        left: 33px;
        float: left;
        padding: 10px 10px 2px;
        background: #fff;
    }
    .tl_head .tl_day .indicator {
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 80px;
        height: 3px;
        margin-left: -40px;
        padding: 0;
        background: #dedede;
        border-radius: 8px;
        display: inline-block;
    }
    .tl_head .tl_day span {
        font-size: 14px;
        color: #999;
        display: inline-block;
        text-align: center;
    }
    .tl_head .tl_day .day_of_week {
        width: 38px;
        height: 36px;
        display: inline-block;
    }
    .tl_head .week_4 {
        background: url(../../../static/img/icons.png) -146px -252px;
        background-size: 247px 663px;
    }
    .tl_head .week_5 {
        background: url(../../../static/img/icons.png) -146px -324px;
        background-size: 247px 663px;
    }
    .tl_head .week_6 {
        background: url(../../../static/img/icons.png) -146px -396px;
        background-size: 247px 663px;
    }
    .tl_head .week_7 {
        background: url(../../../static/img/icons.png) -146px -468px;
        background-size: 247px 663px;
    }
    .tl_head .week_3 {
        background: url(../../../static/img/icons.png) -146px -180px;
        background-size: 247px 663px;
    }
    .tl_head .week_2 {
        background: url(../../../static/img/icons.png) -146px -108px;
        background-size: 247px 663px;
    }
    .tl_head .week_1 {
        background: url(../../../static/img/icons.png) -146px -36px;
        background-size: 247px 663px;
    }
    .tl_head .tl_day span.t_date {
        position: absolute;
        left: 52px;
        top: 12px;
        width: 40px;
        font-size: 12px;
    }
    .tl_head .tl_day span.t_week {
        position: relative;
        left: 0;
        top: -2px;
        width: 40px;
    }
    .timeline_header .tl_weeks:after {
        position: absolute;
        top: 50px;
        left: 0;
        right: 0;
        border-bottom: 1px solid #e7e7e7;
        content: "";
        z-index: -1;
    }
</style>
