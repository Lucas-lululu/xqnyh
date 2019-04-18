<template>
    <div class="wrap">
        <div class="main">
            <!-- 视频 -->
            <video id="bgvideo" width="1920" height="1080" autoplay loop muted>
                <source src="http://127.0.0.1:3500/video/job/hh/nhh_v2.mp4" type="video/mp4">
                <source src="http://127.0.0.1:3500/video/job/hh/nhh_v2.webm" type="video/webm">
            </video>
            <!-- 上 -->
            <div class="top">
                <!-- 门派 -->
                <div class="top-right">
                    <div class="story story-no-close"></div>
                </div>
                <!-- 职业 -->
                <div class="top-right-2">
                    <div class="slogan"></div>
                </div>
                <!-- 名字 -->
                <div class="top-left">
                    <div class="name"></div>
                    <div class="switch-sex">
                        <router-link to="/hh" target="_blank" class="switch switch-f"></router-link>
                        <router-link to="/hh-m" class="switch switch-m active"></router-link>
                    </div>
                </div>
            </div>
            <!-- 中 -->
            <div class="middle">
                <div class="video_story video" @click="openVideo">
                    <video src="http://127.0.0.1:3500/video/job/hh/d3afc120-48a8-4b35-922d-6109b42e8657.mp4" autoplay loop muted></video>
                    <a href="javascript:;" class="J_V_hh sp_common"></a>
                    <div class="b-angel"> 
                        <div class="b-circle"></div>
                    </div>
                </div>
                <div class="skills_box">
                    <h2 class="sp_common tit1"></h2>
                    <ul class="cf">
                        <li>
                            <div class="pic_info">
                                <img src="http://127.0.0.1:3500/img/job/jn01.jpg" alt="">
                                <b>天地留白</b>
                            </div>
                            <div class="des_info">
                                <span>描述</span>
                                <p>对范围内的目标造成多次伤害，范围依次扩大。</p>
                                <span>等级</span>
                                <p>120级可学</p>
                            </div>
                        </li>
                    </ul>
                    <h2 class="sp_common tit2"></h2>
                    <ul class="cf">
                        <li>
                            <div class="fLeft pic_info">
                                <img src="http://127.0.0.1:3500/img/job/jn02.jpg" width="32" height="32">
                                <b>吴带当风</b>
                            </div>
                            <div class="fLeft des_info">
                                <span>描述</span><p>二段技能，释放一段降低自身受到的伤害，同时提高气血恢复效果，释放二段爆掉一段状态后回复自身气血。</p>
                                <span>等级</span><p>45级可学，设色技能</p>
                            </div>
                        </li>
                        <li>
                            <div class="fLeft pic_info">
                                <img src="http://127.0.0.1:3500/img/job/jn03.jpg" width="32" height="32">
                                <b>投笔破幻</b>
                            </div>
                            <div class="fLeft des_info">
                                <span>描述</span><p>瞬移至指定地点，且使范围内自身绘制的物品爆裂产生伤害，并附加相应的状态，提升破墨韵和庄周梦蝶的伤害。</p>
                                <span>等级</span><p>55级可学，设色技能</p>
                            </div>
                        </li>
                        <li>
                            <div class="fLeft pic_info">
                                <img src="http://127.0.0.1:3500/img/job/jn04.jpg" width="32" height="32">
                                <b>庄周梦蝶</b>
                            </div>
                            <div class="fLeft des_info">
                                <span>描述</span><p>对单体目标造成水伤害，弹道技能。</p>
                                <span>等级</span><p>105级可学，设色技能</p>
                            </div>
                        </li>
                    </ul>
                    <a href="javascript:;" target="_blank" class="btn_moreskill"></a>
                </div>
            </div>
            <!-- 下 -->
            <div class="bottom">
                <div class="menpai"></div>
                <div class="imgList_show">
                    <div class="slide">
                        <div class="slideCon">
                            <ul>
                                <li class="slideLi">
                                    <img src="http://127.0.0.1:3500/img/job/tgg01.jpg" alt="" v-show="b==0">
                                </li>
                                <li class="slideLi">
                                    <img src="http://127.0.0.1:3500/img/job/tgg02.jpg" alt="" v-show="b==1">
                                </li>
                                <li class="slideLi">
                                    <img src="http://127.0.0.1:3500/img/job/tgg03.jpg" alt="" v-show="b==2">
                                </li>
                                <li class="slideLi">
                                    <img src="http://127.0.0.1:3500/img/job/tgg04.jpg" alt="" v-show="b==3">
                                </li>
                                <li class="slideLi">
                                    <img src="http://127.0.0.1:3500/img/job/tgg05.jpg" alt="" v-show="b==4">
                                </li>
                            </ul>
                        </div>
                        <a href="javascript:;" class="arrow-left sp_common aleft" @click="wrap" data-fx="0"></a>
                        <a href="javascript:;" class="arrow-right sp_common aleft" @click="wrap" data-fx="1"></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="popVideo" style="display:none">
            <div>
                <video controls="controls" controlslist="nodownload" width="700" height="394" autoplay="autoplay" src="http://127.0.0.1:3500/video/job/hh/hh.mp4"></video>
                <a href="javascript:;" id="videoClose" class="btn_close sp_common" @click="closeVideo">X</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            b:0,
            dj:this.$route.query.dj,
        }
    },
    methods: {
        closeVideo(){
            $(".popVideo").css("display","none");
        },
        openVideo(){
            $(".popVideo").css("display","block");
        },
        wrap(e){
            if (e.target.dataset.fx==1){
                this.b++;
                if (this.b>=1){
                    if (this.b==5){
                        this.b=0;
                    }
                }
            }
            if (e.target.dataset.fx==0){
                if (this.b==0){
                    this.b=5
                }
                if (this.b>=1){
                    this.b--;
                }
            }
        },
        djhh(){
            $(".nav-new").siblings().addClass("active");
        },
    },
    mounted() {
        this.djhh();
    },
    created() {
        // this.djhh();
    },
}
</script>
<style scoped>
    .wrap {
        background: url(http://127.0.0.1:3500/img/job/bg_4849f39.jpg) no-repeat center top;
        width: 100%;
        height: 2180px;
        font-family: KaiTi,'楷体_GB2312',KaiTi_GB2312,Kai;
        overflow: hidden;
    }
    .main {
        height: 100%;
        width: 1200px;
        margin: 0 auto;
        position: relative;
        border-top: 1px solid transparent;
    }
    #bgvideo {
        position: absolute;
        top: -1px;
        left: -361px;
    }
    .top {
        height: 930px;
        position: relative;
        z-index: 1;
    }
    .top-right {
        float: right;
        width: 250px;
        height: 700px;
        position: relative;
    }
    .top-right .story {
        background: url(http://127.0.0.1:3500/img/job/story_69cad7d.png);
        position: absolute;
        top: 60px;
        left: auto;
        right: 0;
        width: 116px;
        height: 541px;
    }
    .slogan, .name, .switch-sex, .b-circle, .s-circle, .btn_moreskill:hover, .btn_moreskill, .tit2, .tit1, .b-angel, .s-angel {
        background-image: url(http://127.0.0.1:3500/img/job/hh-m_z_851d0cd.png);
    }
    .slogan {
        background-position: 0px 0px;
        width: 338px;
        height: 463px;
        float: right;
        margin-top: 50px;
        background-repeat: no-repeat;
    }
    .name {
        background-position: -338px 0px;
        width: 124px;
        height: 294px;
        margin-top: 50px;
        margin-left: 7px;
        background-repeat: no-repeat;
    }
    .switch-f {
        display: block;
        width: 52px;
        height: 50px;
        position: absolute;
        top: 50px;
        left: 0;
    }
    .switch-m {
        display: block;
        width: 52px;
        height: 50px;
        position: absolute;
        top: 0;
        left: 0;
    }
    .switch-sex {
        background-position: -338px -294px;
        float: left;
        width: 52px;
        height: 101px;
        top: 15px;
        left: 7px;
        position: relative;
        background-repeat: no-repeat;
    }
    /* 按钮 */
    .btn_moreskill {
        background-position: -165px -463px;
        width: 165px;
        height: 46px;
        display: block;
        margin-top: 15px;
        background-repeat: no-repeat;
    }
    .btn_moreskill:hover{
        background-position: 0 -463px;
    }
    /* 中 */
    .middle {
        height: 730px;
        position: relative;
        z-index: 1;
    }
    .video_story {
        width: 473px;
        height: 300px;
        float: left;
        margin-top: 260px;
        margin-left: 100px;
        position: relative;
    }
    .video_story video {
        width: 100%;
        height: 266px;
        border-top-left-radius: 60px;
        -webkit-border-top-left-radius: 60px;
        border-bottom-right-radius: 60px;
        -webkit-border-bottom-right-radius: 60px;
    }
    .video a {
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        background: url(http://127.0.0.1:3500/img/job/blank.gif);
    }
    .skills_box {
        float: right;
    }
    .b-angel {
        background-position: -518px -93px;
        width: 26px;
        height: 37px;
        position: absolute;
        top: 121px;
        left: 225px;
        pointer-events: none;
        background-repeat: no-repeat;
    }
    .b-circle {
        background-position: -462px 0px;
        width: 93px;
        height: 93px;
        position: absolute;
        top: -28px;
        left: -37px;
        background-repeat: no-repeat;
        -webkit-animation: run 2s linear infinite both;
        -moz-animation: run 2s linear infinite both;
        -o-animation: run 2s linear infinite both;
        animation: run 2s linear infinite both;
    }
    @-moz-keyframes run {
        0% {transform: rotate(0deg)}
        100% {transform: rotate(360deg)}
    }
    @-o-keyframes run {
        0% {transform: rotate(0deg)}
        100% {transform: rotate(360deg)}
    }
    @-webkit-keyframes run {
        0% {transform: rotate(0deg)}
        100% {transform: rotate(360deg)}
    }
    @keyframes run {
        0% {transform: rotate(0deg)}
        100% {transform: rotate(360deg)}
    }
    /* 职业技能 */
    .skills_box {
        float: right;
    }
    .tit1 {
        background-position: 0px -509px;
    }
    .tit1 {
        width: 142px;
        height: 40px;
        margin-bottom: 15px;
        background-repeat: no-repeat;
    }
    .tit1 {
        width: 142px;
        height: 40px;
        margin-bottom: 15px;
    }
    .tit2 {
        background-position: -330px -463px;
    }
    .tit2 {
        width: 142px;
        height: 40px;
        margin: 43px 0 20px;
        background-repeat: no-repeat;
    }
    .tit2 {
        /* background: url(http://127.0.0.1:3500/img/job/sprite_2b2f88c.png) no-repeat -245px -292px; */
        width: 142px;
        height: 40px;
        margin: 43px 0 20px;
    }
    .cf {
        list-style: none;
        zoom: 1;
    }
    .skills_box li {
        clear: both;
        height: 80px;
    }
    .pic_info {
        width: 64px;
        height: 64px;
        background: #7fb2fa;
        border: #253f7a solid 1px;
        text-align: center;
        padding-top: 7px;
        color: #fff;
        box-sizing: border-box;
        float: left;
    }
    .pic_info img {
        display: block;
        margin: 0 auto 6px;
    }
    .pic_info b {
        line-height: 0;
        font-size: 14px;
        color: #fff;
    }
    .des_info {
        float: left;
        width: 485px;
        font-size: 16px;
        color: #253f7a;
    }
    .des_info span {
        clear: both;
        border: 1px solid #323470;
        float: left;
        margin-left: 20px;
        line-height: 18px;
    }
    .des_info p {
        padding-left: 60px;
        line-height: 20px;
        margin-bottom: 5px;
    }
    /* 下 */
    .bottom {
        height: 450px;
        position: relative;
    }
    .menpai {
        background: url(http://127.0.0.1:3500/img/job/menpai_a028e98.png) no-repeat;
        width: 268px;
        height: 421px;
        top:20px;
        position:absolute;
        left: 420px;
    }
    .imgList_show {
        float: right;
        margin-right: -20px;
        margin-top: 115px;
    }
    .slide {
        width: 465px;
        height: 190px;
        padding: 1px;
        position: relative;
    }
    .slide .slideCon {
        width: 465px;
        height: 190px;
        overflow: hidden;
        position: relative;
    }

    /* 左右按钮 */
    /* .sp_common {
        background: url(http://127.0.0.1:3500/img/job/sp-commmon_5f6fb44.png) no-repeat;
    } */
    .arrow-left, .arrow-right, .arrow-left:hover, .arrow-right:hover{
        background-image: url(http://127.0.0.1:3500/img/job/common_z_c27b148.png);
    }
    .arrow-left:hover {
        background-position: -104px -93px;
        background-repeat: no-repeat;
    }
    .arrow-left {
        background-position: -56px -93px;
    }
    .arrow-right {
        background-position: -80px -93px;
        right: -30px;
        background-repeat: no-repeat;
    }
    .arrow-left {
        background-position: -56px -93px;
        background-repeat: no-repeat;
        left: -30px;
    }
    .arrow-left, .arrow-right, .maskBg {
        width: 24px;
        height: 46px;
        overflow: hidden;
        display: block;
        position: absolute;
        top: 72px;
        cursor: pointer;
    }
   /* 打开视频 */
   .popVideo {
        height: 394px;
        z-index: 110;
        position: fixed;
        left: 50%;
        margin-left: -350px;
        top: 33%;
        width: 700px;
    }
    div.popVideo>div{
        position:relative;
        left:0;
        top:0;
        display:inline-block;
        width:700px;
       height:394px
    }
    .popVideo video {
        width: 700px;
        height: 394px;
        background: #000;
    }
    /* X */
    .btn_close {
        display: block;
        width: 34px;
        height: 37px;
        outline: 0;
        position: absolute;
        right: -34px;
        top: 0;
        font-size: 30px;
        text-decoration: none;
        background: #000;
        color: #fff;
        text-align: center;
    }
</style>
