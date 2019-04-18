<template>
    <div>
        <div id="innerBot" class="animate show" :style="opfooter">
            <div class="main">
                <div class="g_item clearfix">
                    <!-- 客户中心 -->
                    <div class="service f1">
                        <ul class="links clearfix">
                            <li v-for="item of list1" :key="item.id">
                                <a href="javascript:;" target="_blank">{{item}}</a>
                            </li>
                        </ul>
                        <div class="phone">
                            服务电话<br>95163520
                        </div>
                        <ul class="clearfix" id="servicebox-link">
                            <li>
                                <a href="javascript:;" target="_blank" id="servicebox-link1">原创作者联盟</a>
                            </li>
                            <li><a href="javascript:;" target="_blank" id="servicebox-link2">心易服务</a></li>
                        </ul>
                    </div>
                    <!-- 三个小块 -->
                    <ul class="gzh f1">
                        <li>
                            <a href="javascript:;" target="_blank" id="quickbox_weibo" >
                                <div class="circle"></div>
                                <div :class="sTop >= 2324 ? 'person' : '' "></div>
                                <div class="btn"></div>
                                倩女官方微博
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" target="_blank" id="quickbox_weixin">
                                <div class="circle"></div>
                                <div :class="sTop >= 2324 ? 'person' : '' "></div>
                                <div class="btn"></div>
                                倩女官方微信
                            </a>
                        </li>
                        <li style="margin-right: 0">
                            <a href="javascript:;" target="_blank" id="quickbox_comic">
                                <div class="circle"></div>
                                <div :class="sTop >= 2324 ? 'person' : '' "></div>
                                <div class="btn"></div>
                                网易大神
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- 分享到 -->
                <div id="bottomshare" style="display:block">
                    <div class="NIE-share NIE-share2">
                        <span class="NIE-share-txt">分享到:</span>
                        <ul class="NIE-share-iconBtn">
                            <li>
                                <a class="iconfont NIE-share-btn23" href="javascript:;" title="分享到微信二维码" target="_self">
                                    <img src="http://127.0.0.1:3500/img/footer/157.gif" alt="">
                                </a>
                            </li>
                            <li>
                                <a class="iconfont NIE-share-btn23" href="javascript:;" title="分享到易信" target="_self">
                                    <img src="http://127.0.0.1:3500/img/footer/157.gif" alt="">
                                </a>
                            </li>
                            <li>
                                <a class="iconfont NIE-share-btn23" href="javascript:;" title="分享到微博" target="_self">
                                    <img src="http://127.0.0.1:3500/img/footer/157.gif" alt="">
                                </a>
                            </li>
                            <li>
                                <a class="iconfont NIE-share-btn23" href="javascript:;" title="分享到QQ空间" target="_self">
                                    <img src="http://127.0.0.1:3500/img/footer/157.gif" alt="">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <footer id="footer">
                    <div id="NIE-copyRight">
                        <div class="nie-copyright-new-inner">
                            <div class="nie-cn-part1">
                                <span class="nie-cn-logo">
                                    <a href="javascript:;" target="_blank" class="a0">
                                        <img src="http://127.0.0.1:3500/img/footer/netease.1.png" alt="">
                                    </a>
                                    <a class="a1" href="javascript:;" target="_blank">
                                        <img src="http://127.0.0.1:3500/img/footer/nie.1.png">
                                    </a>
                                    <a class="a2" href="javascript:;" target="_blank">
                                        <img src="http://127.0.0.1:3500/img/footer/leihuo.1.png">
                                    </a>
                                    <a class="a3" href="javascript:;" target="_blank">
                                        <img src="http://127.0.0.1:3500/img/footer/fuxi.1.png">
                                    </a>
                                    <a class="a4" href="javascript:;" target="_blank">
                                        <img src="http://127.0.0.1:3500/img/footer/wen.png">
                                    </a>
                                    <a class="a5" href="javascript:;" target="_blank">
                                        <img src="http://127.0.0.1:3500/img/footer/wen2.png">
                                    </a>
                                </span>
                                <span class="nie-cn-nav">
                                    <i class="nie-cn-nav-i1">
                                        <a href="javascript:;" target="_blank">公司简介</a> - <a href="javascript:;" target="_blank">客户服务</a> - <a href="javascript:;" target="_blank">相关法律</a> - <a href="javascript:;" target="_blank">网易游戏</a> - <a href="javascript:;" target="_blank">隐私政策</a> - <a href="javascript:;" target="_blank">联系我们</a> - <a href="javascript:;" target="_blank">商务合作</a> - <a href="javascript:;" target="_blank">加入我们</a>
                                    </i>
                                    <br>
                                    <i class="nie-cn-nav-i2">
                                    杭州网易雷火科技有限公司版权所有 ©1997-2019 
                                        <a class="nie-cn-guardianship" href="javascript:;" target="_blank">点击查看家长监护工程 &gt; </a>
                                    </i>
			                    </span>
                                <div class="nie-cn-part2">
                                    <p>本游戏适合16岁以上的玩家进入。</p>
                                    <p>积极健康的游戏心态是健康游戏的开端，本游戏故事情节设置紧凑，请您合理控制游戏时间，避免沉溺游戏影响生活，注意自我保护，防范网络陷阱。</p>
                                    <a href="javascript:;" target="_blank">《网络游戏管理暂行办法》</a> 
                                    <span>文网游备字[2011]C-RPG007号</span> <span>《网络文化经营许可证》</span> <span>浙网文[2019]1372-138号</span> <span>ISBN 978-7-89462-834-3</span> 
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            sTop:0,
            list1:["帐号安全","帐号修复","帐号保护","防沉迷查询","客服专区","自助百宝箱"],
            opfooter:{opacity:"0"},
        }
    },
    methods: {
        handleScroll(){
            var scrollTop=window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            var scroll=scrollTop;
            if (scroll>=2124){
                this.opfooter.opacity=1;
            }
            this.sTop=scroll;
        }
    },
    mounted() {
        window.addEventListener('scroll',this.handleScroll,true); 
    },
    created() {
        
    },
}
</script>
<style scoped>
    .wrap #innerBot {
        position: relative;
        margin-top: -230px;
        background: 0 0;
    }
    #innerBot {
        /* background: url(http://127.0.0.1:3500/img/footer/bg_272be41.png) no-repeat center bottom; */
        height: 504px;
        /* padding-top: 425px; */
        margin-top: -579px;
        overflow: hidden;
        z-index: 10000;
        opacity: 0;
        position: relative;
        -webkit-transition: all .5s;
        -moz-transition: all .5s;
        transition: all .5s;
        /* margin-left: px; */
    }
    /* .animate.show {
        opacity: 1;
        -webkit-animation: show .3s ease-out both 300ms 0 ease;
        -moz-animation: show .3s ease-out both 300ms 0 ease;
        -ms-animation: show .3s ease-out both 300ms 0 ease;
        animation: show .3s ease-out both 300ms 0 ease;
        -moz-animation: show .3s ease-out both;
        -webkit-animation: show .3s ease-out both;
        -o-animation: show .3s ease-out both;
        -ms-animation: show .3s ease-out both;
        animation: show .3s ease-out both;
    } */
    .show {
        display: block!important;
    }
    #innerBot .main {
        width: 1400px;
        margin: 0 auto;
        position:relative;
    }
    #innerBot .g_item {
        margin-left: 32px;
        overflow: hidden;
    }
    /* 客户中心 */
    #innerBot .g_item .service, #innerBot #quickbox_weibo .btn, #innerBot #quickbox_weibo .btn:hover, #innerBot #quickbox_weixin .btn, #innerBot #quickbox_comic .btn {
        background-image: url(http://127.0.0.1:3500/img/footer/bottom_z_2817377.png);
    }
    #innerBot .g_item .service {
        background-position: 0px 0px;
    }
    #innerBot .g_item .service {
        width: 490px;
        height: 213px;
        overflow: hidden;
        position: relative;
        font-size: 14px;
        background-repeat: no-repeat;
    }
    #innerBot .g_item .service .links {
        width: 188px;
        height: 100px;
        margin-top: 92px;
        margin-left: 42px;
    }
    #innerBot .g_item .service li {
        list-style: circle;
        width: 94px;
        height: 34px;
        float: left;
        /* list-style: none; */
    }
    #innerBot .g_item .service a {
        color: #504f58;
        /* color: #ffffff; */
        text-decoration: none;
    }
    #innerBot .g_item .service a:hover,#innerBot .g_item .service li:hover{
        text-decoration: none;
        color: #c7ae69;
    }
    #innerBot .g_item .service .phone {
        position: absolute;
        left: 320px;
        top: 21px;
        color: #4f4690;
    }
    #innerBot .g_item #servicebox-link {
        width: 154px;
        height: 108px;
        position: absolute;
        left: 288px;
        top: 97px;
    }
    #innerBot .g_item #servicebox-link li {
        width: 77px;
        height: 54px;
        float: left;
        list-style: none;
    }
    #innerBot .g_item #servicebox-link #servicebox-link1 {
        background-position: 0 0;
    }
    #innerBot .g_item #servicebox-link a {
        display: block;
        background: url(http://127.0.0.1:3500/img/footer/btn_c2870a4.png) no-repeat;
        width: 77px;
        height: 54px;
        text-indent: -999em;
    }
    #innerBot .g_item #servicebox-link #servicebox-link2 {
        background-position: -77px 0;
    }
    #innerBot .g_item #servicebox-link #servicebox-link1:hover{
        background-position:0 -108px
    }
    #innerBot .g_item #servicebox-link #servicebox-link2:hover{
        background-position:-77px -108px
    }
    #innerBot .g_item #servicebox-link #servicebox-link3:hover{
        background-position:0 -162px
    }
    /* 三个块 */
    #innerBot .g_item .gzh {
        margin-left: 62px;
        list-style: none;
    }
    #innerBot .g_item .gzh li {
        float: left;
        margin-right: 80px;
    }
    #innerBot #quickbox_weibo {
        width: 216px;
        height: 213px;
        position: relative;
        overflow: hidden;
    }
    #innerBot .g_item .gzh a {
        display: block;
        font-size: 0;
    }
    #innerBot #quickbox_weibo .circle {
        background: url(http://127.0.0.1:3500/img/footer/wb-code_0496e88.png) no-repeat;
    }
    #innerBot #quickbox_weibo .person {
        width: 112px;
        height: 148px;
        top: 64px !important;
        left: 103px !important;
        background: url(http://127.0.0.1:3500/img/footer/wb-person_c358365.png) no-repeat;
    }
    #innerBot #quickbox_weibo .btn {
        background-position: 0px -213px;
        background-repeat: no-repeat;
    }
    #innerBot #quickbox_weibo .circle, #innerBot #quickbox_weibo .person, #innerBot #quickbox_weibo .btn {
        width: 225px;
        height: 213px;
        position: absolute;
        left: 0;
        top: 0;
    }
    #innerBot #quickbox_weixin {
        width: 212px;
        height: 213px;
        position: relative;
        cursor: default;
    }
    #innerBot #quickbox_weixin .circle {
        background: url(http://127.0.0.1:3500/img/footer/wx-code_aa3d0f5.png) no-repeat;
    }
    #innerBot #quickbox_weixin .person {
        width: 86px;
        height: 137px;
        top: 63px !important;
        left: 124px !important;
        background: url(http://127.0.0.1:3500/img/footer/wx-person_d76007d.png) no-repeat;
    }
    #innerBot #quickbox_weixin .btn {
        background-position: -490px 0px;
        background-repeat: no-repeat;
    }
    
    #innerBot #quickbox_weixin .circle, #innerBot #quickbox_weixin .person, #innerBot #quickbox_weixin .btn {
        width: 212px;
        height: 213px;
        position: absolute;
        left: 0;
        top: 0;
    }
    #innerBot .g_item .gzh li {
        float: left;
        margin-right: 80px;
    }
    #innerBot #quickbox_comic {
        width: 222px;
        height: 213px;
        position: relative;
        cursor: default;
    }
    #innerBot #quickbox_comic .circle {
        background: url(http://127.0.0.1:3500/img/footer/mh-code_39f0904.png) no-repeat;
    }
    #innerBot #quickbox_comic .person {
        top: 8px  !important;
        left: -3px !important;
        background: url(http://127.0.0.1:3500/img/footer/mh-person_c7c077d.png) no-repeat;
    }
    #innerBot #quickbox_comic .btn {
        background-position: 0px -426px;
        background-repeat: no-repeat;
    }
    
    #innerBot #quickbox_comic .circle, #innerBot #quickbox_comic .person, #innerBot #quickbox_comic .btn {
        width: 222px;
        height: 213px;
        position: absolute;
        left: 0;
        top: 0;
    }
    .show #quickbox_comic .person {
        -webkit-animation: bottom .5s .7s ease-out both 300ms 0 ease;
        -moz-animation: bottom .5s .7s ease-out both 300ms 0 ease;
        -ms-animation: bottom .5s .7s ease-out both 300ms 0 ease;
        animation: bottom .5s .7s ease-out both 300ms 0 ease;
        -moz-animation: bottom .5s .7s ease-out both;
        -webkit-animation: bottom .5s .7s ease-out both;
        -o-animation: bottom .5s .7s ease-out both;
        -ms-animation: bottom .5s .7s ease-out both;
        animation: bottom .5s .7s ease-out both;
    }
    .show #quickbox_weixin .person {
        -webkit-animation: bottom .5s .4s ease-out both 300ms 0 ease;
        -moz-animation: bottom .5s .4s ease-out both 300ms 0 ease;
        -ms-animation: bottom .5s .4s ease-out both 300ms 0 ease;
        animation: bottom .5s .4s ease-out both 300ms 0 ease;
        -moz-animation: bottom .5s .4s ease-out both;
        -webkit-animation: bottom .5s .4s ease-out both;
        -o-animation: bottom .5s .4s ease-out both;
        -ms-animation: bottom .5s .4s ease-out both;
        animation: bottom .5s .4s ease-out both;
    }
    .show #quickbox_weibo .person {
        -webkit-animation: bottom .5s .1s ease-out both 300ms 0 ease;
        -moz-animation: bottom .5s .1s ease-out both 300ms 0 ease;
        -ms-animation: bottom .5s .1s ease-out both 300ms 0 ease;
        animation: bottom .5s .1s ease-out both 300ms 0 ease;
        -moz-animation: bottom .5s .1s ease-out both;
        -webkit-animation: bottom .5s .1s ease-out both;
        -o-animation: bottom .5s .1s ease-out both;
        -ms-animation: bottom .5s .1s ease-out both;
        animation: bottom .5s .1s ease-out both;
    }
    @-moz-keyframes bottom{
        0%{opacity:1;transform:translateY(200px)}
        40%{opacity:1;transform:translateY(5px)}
        60%{opacity:1;transform:translateY(15px)}
        85%{opacity:1;transform:translateY(3px)}
        100%{opacity:1;transform:translateX(0px)}
    }
    @-ms-keyframes bottom{
        0%{opacity:1;transform:translateY(200px)}
        40%{opacity:1;transform:translateY(5px)}
        60%{opacity:1;transform:translateY(15px)}
        85%{opacity:1;transform:translateY(3px)}
        100%{opacity:1;transform:translateX(0px)}
    }
    @-webkit-keyframes bottom{
        0%{opacity:1;transform:translateY(200px)}
        40%{opacity:1;transform:translateY(5px)}
        60%{opacity:1;transform:translateY(15px)}
        85%{opacity:1;transform:translateY(3px)}
        100%{opacity:1;transform:translateX(0px)}
    }
    @-o-keyframes bottom{
        0%{opacity:1;transform:translateY(200px)}
        40%{opacity:1;transform:translateY(5px)}
        60%{opacity:1;transform:translateY(15px)}
        85%{opacity:1;transform:translateY(3px)}
        100%{opacity:1;transform:translateX(0px)}
    }
    @keyframes bottom{
        0%{opacity:1;transform:translateY(200px)}
        40%{opacity:1;transform:translateY(5px)}
        60%{opacity:1;transform:translateY(15px)}
        85%{opacity:1;transform:translateY(3px)}
        100%{opacity:1;transform:translateX(0px)}
    }
    /* 分享到 */
    wrap #innerBot #bottomshare {
        margin-top: 40px;
    }
    #innerBot #bottomshare {
        text-align: center;
        margin-top: 60px;
        margin-bottom: 25px;
    }
    .NIE-share {
        line-height: 0!important;
        position: relative;
        font-size: 0;
        display: inline-block;
    }
    #innerBot #bottomshare .NIE-share-txt {
        color: #6768b9;
    }
    .NIE-share2 .NIE-share-txt {
        height: 36px;
        line-height: 36px;
        font-size: 18px;
        font-weight: 700;
    }
    .NIE-share .NIE-share-txt {
        display: inline-block;
        float: left;
        height: 20px;
        line-height: 20px;
        font-size: 21px;
    }
    span.NIE-share *, .NIE-share *, .sideBarShareBox * {
        text-decoration: none;
        font-weight: 400;
        text-align: left;
        font-family: simSun,Arial;
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        -o-box-sizing: content-box;
        -ms-box-sizing: content-box;
        box-sizing: content-box;
    }
    .NIE-share .NIE-share-iconBtn {
        list-style: none;
        float: left;
        padding: 0;
        margin: 0;
    }
    #innerBot #bottomshare .NIE-share .NIE-share-iconBtn li {
        margin-left: 4px;
    }
    .NIE-share .NIE-share-iconBtn li {
        float: left;
    }
    #innerBot #bottomshare .NIE-share-iconBtn a {
        color: #6768b9;
    }
    .NIE-share2 .NIE-share-iconBtn a {
        line-height: 36px;
        font-size: 36px;
    }
    .NIE-share .NIE-share-iconBtn a {
        display: inline-block;
        float: left;
        font-size: 20px;
        line-height: 20px;
        text-decoration: none;
        color: #000;
        margin-right: 3px;
    }


    /* 底部 */
    .nie-copyright-new-inner {
        width: 1110px;
        text-align: left;
        margin: 0 auto;
        padding: 15px 0 10px;
        font-size: 12px;
        line-height: 20px;
    }
    #NIE-copyRight span, #NIE-copyRight a {
        color: #000;
    }
    .nie-copyright-new-inner .nie-cn-logo {
        display: inline-block;
        vertical-align: middle;
        height: 48px;
        min-width: 300px;
    }
    #NIE-copyRight span, #NIE-copyRight a {
        color: #000;
    }
    .nie-copyright-new-inner .nie-cn-logo a {
        display: inline-block;
        vertical-align: top;
        margin-top: 2px;
    }
    .nie-copyright-new-inner .nie-cn-logo a.a0 img {
        padding-right: 0;
    }
    .nie-copyright-new-inner .nie-cn-logo img {
        padding-right: 15px;
        padding-top: 5px;
        border: 0;
        vertical-align: middle;
    }
    /* 简介 */
    #NIE-copyRight span, #NIE-copyRight a {
        color: #000;
    }
    .nie-copyright-new-inner .nie-cn-nav {
        display: inline-block;
        vertical-align: top;
        position: relative;
        z-index: 1;
    }
    .nie-copyright-new-inner .nie-cn-nav i {
        font-style: normal;
    }
    #NIE-copyRight span, #NIE-copyRight a {
        color: #000;
    }
    .nie-copyright-new-inner .nie-cn-nav a {
        text-decoration: none;
    }
    .nie-copyright-new-inner .nie-cn-nav i.nie-cn-nav-i2 {
        height: 28px;
        line-height: 28px;
        text-align: left;
    }
    #NIE-copyRight a.nie-cn-guardianship {
        color: #fff;
    }
    #NIE-copyRight span, #NIE-copyRight a {
        color: #000;
    }
    .nie-copyright-new-inner .nie-cn-nav a.nie-cn-guardianship {
        display: inline-block;
        color: #fff;
        background-color: #610000;
        position: absolute;
        z-index: 2;
        right: 0;
        height: 26px;
        line-height: 26px;
        padding: 0 3px;
        top: 21px;
    }
    .nie-copyright-new-inner .nie-cn-nav a {
        text-decoration: none;
    }
    .nie-copyright-new-inner .nie-cn-nav a:hover{
        text-decoration: underline;
    }
    .nie-copyright-new-inner .nie-cn-part2 {
        padding-top: 10px;
        line-height: 24px;
    }
    .nie-copyright-new-inner .nie-cn-part2 a {
        text-decoration: none;
        display: inline-block;
        vertical-align: top;
    }
</style>
