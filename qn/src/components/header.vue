<template>
    <div>
        <div class="topnav">
            <div class="navbg"></div>
            <ul id="navbar" class="g-clr">
                <li style="width:138px" >
                    <router-link id="nav_home" to="/" title="新倩女幽魂官方网站" class="on">
                        <span>首页</span>
                    </router-link>
                </li>
                <li style="height:80px"  @mouseover.stop="show" @mouseleave.stop="hiden">
                    <a id="nav_news" href="javascript:;" target="_blank">
                        <span>新闻公告</span>
                    </a>
                    <div class="subnav">
                        <a href="javascript:;" target="_blank" class="first">最新新闻</a>
                        <a href="javascript:;" target="_blank">热点新闻</a>
                        <a href="javascript:;" target="_blank">官方公告</a>
                        <a href="javascript:;" target="_blank" class="last">主题活动</a>
                    </div>
                </li>
                <li style="height:80px" @mouseover.stop="show" @mouseleave.stop="hiden">
                    <a id="nav_download" href="javascript:;" target="_blank">
                        <span>下载专区</span>
                    </a>
                    <div class="subnav">
                        <a href="javascript:;" target="_blank" class="first">游戏下载</a>
                        <a href="javascript:;" target="_blank">注册帐号</a>
                        <a href="javascript:;" target="_blank">领取礼包</a>
                        <a href="javascript:;" target="_blank" class="last">官方助手app</a>
                    </div>
                </li>
                <li style="margin-right:280px;height:80px" @mouseover.stop="show" @mouseleave.stop="hiden">
                    <a id="nav_guide" href="javascript:;" target="_blank">
                        <span>游戏资料</span>
                    </a>
                    <div class="subnav">
                        <a href="javascript:;" target="_blank" class="first">新手宝典</a>
                        <router-link to="/hh-m" target="_blank">职业门派</router-link>
                        <a href="javascript:;" target="_blank">主角剧情</a>
                        <a href="javascript:;" target="_blank" class="last">任务攻略</a>
                    </div>
                </li>
                <li style="height:80px" @mouseover.stop="show" @mouseleave.stop="hiden">
                    <a id="nav_video" href="javascript:;" target="_blank" class>
                        <span>视听盛宴</span>
                    </a>
                    <div class="subnav">
                        <a href="javascript:;" target="_blank" class="first">精彩视频</a>
                        <a href="javascript:;" target="_blank">原声音乐</a>
                        <a href="javascript:;" target="_blank" class="last">游戏图鉴</a>
                    </div>
                </li>
                <li style="height:80px" @mouseover.stop="show" @mouseleave.stop="hiden">
                    <a id="nav_service" href="javascript:;" target="_blank" title="新倩女幽魂客服专区">
                        <span>客服服务</span>
                    </a>
                    <div class="subnav">
                        <a href="javascript:;" target="_blank" class="first">自助百宝箱</a>
                        <a href="javascript:;" target="_blank">帐号保护</a>
                        <a href="javascript:;" target="_blank">帐号安全</a>
                        <a href="javascript:;" target="_blank">角色查询</a>
                        <a href="javascript:;" target="_blank" class="last">心易服务</a>
                    </div>
                </li>
                <li style="height:80px" @mouseover.stop="show" @mouseleave.stop="hiden">
                    <a id="nav_communicate" href="javascript:;">
                        <span>玩家交流</span>
                        <em class="new"></em>
                    </a>
                    <div class="subnav">
                        <a href="javascript:;" target="_blank" class="first">全新口袋版</a>
                        <a href="javascript:;" target="_blank">梦岛社区</a>
                        <a href="javascript:;" target="_blank">同人站</a>
                        <a id="topmenu_weixin" rel="aside_weixin">官方微信</a>
                        <a href="javascript:;" target="_blank" id="topmenu_weibo" rel="aside_weibo" class="last">官方微博</a>
                    </div>
                </li>
                <li style="height:80px" @mouseover.stop="show" @mouseleave.stop="hiden">
                    <a id="nav_bbs" href="javascript:;" target="_blank" title="新倩女幽魂官方论坛" class>
                        <span>官方论坛</span>
                    </a>
                    <div class="subnav">
                        <a href="javascript:;" target="_blank" id="topmenu_ds" rel="aside_ds" class="first">网易大神</a>
                        <a href="javascript:;" target="_blank" id="topmenu_bbs" rel="aside_bbs" class="last">官方论坛</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        show(e){
            var a = $(e.target);
            a.parent().parent().css("height","258px");
        },
        hiden(e){
            var a = $(e.target);
            // console.log(a);
            a.css("height","80px");
        },
        
    },
    created() {
    },
}
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .topnav {
        width: 100%;
        position: relative;
        min-width: 1400px;
        z-index: 99999;
    }
    .topnav .navbg {
        width: 100%;
        height: 80px;
        background: url(http://127.0.0.1:3500/img/index/nav_e38f008.png) no-repeat center top;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
 
    }
    .topnav ul {
        width: 1400px;
        height: 80px;
        margin: 0 auto;
        position: relative;
        z-index: 3;
    }
    .topnav ul li {
        -webkit-transition: height .3s linear 0s;
        -moz-transition: height .3s linear 0s;
        -ms-transition: height .3s linear 0s;
        -o-transition: height .3s linear 0s;
        transition: height .3s linear 0s;
        width: 140px;
        overflow: hidden;
        float: left;
        height: 80px;
    }
    .topnav ul a {
        width: 140px;
        height: 80px;
        display: block;
        text-indent: -999em;
        overflow: hidden;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        /* border: 1px solid red; */
    }
    .topnav ul .luntan_code, #aside_bbs, #aside_ds, #aside_weixin, #aside_weibo, #sidebar_weibocode, .topnav ul #nav_home span, .topnav ul #nav_news span, .topnav ul #nav_download span, .topnav ul #nav_guide span, .topnav ul #nav_video span, .topnav ul #nav_service span, .topnav ul #nav_communicate span, .topnav ul #nav_bbs span {
        background-image: url(http://127.0.0.1:3500/img/index/topmenu_z_068aa7a.png);
    }
    .topnav ul #nav_home span {
        background-position: -683px 0px;
        background-repeat: no-repeat;
    }
    .topnav ul a:hover span, .topnav ul a.current span, .topnav ul a.on span {
        -webkit-opacity: 1;
        -moz-opacity: 1;
        opacity: 1;
        filter: alpha(opacity=100);
    }
    .topnav ul a span {
        display: block;
        width: 140px;
        height: 80px;
        text-indent: -999em;
        overflow: hidden;
        -webkit-opacity: 0;
        -moz-opacity: 0;
        opacity: 0;
        filter: alpha(opacity=0);
        -webkit-transition: all .2s linear 0s;
        -moz-transition: all .2s linear 0s;
        -ms-transition: all .2s linear 0s;
        -o-transition: all .2s linear 0s;
        transition: all .2s linear 0s;
    }
    .topnav ul a {
        width: 140px;
        height: 80px;
        display: block;
        text-indent: -999em;
        overflow: hidden;
    }
    /* 新闻公告 */
    .topnav ul #nav_news span {
        background-position: -822px 0px;
    }
    .topnav ul #nav_news span {
        background-repeat: no-repeat;
    }
    /* 结束 */
    /* 下载专区 */
    .topnav ul #nav_download span {
        background-position: -962px 0px;
    }
    .topnav ul #nav_download span {
        background-repeat: no-repeat;
    }
    /* 结束 */

    /* 游戏资料 */
    .topnav ul #nav_guide span {
        background-position: -1102px 0px;
    }
    .topnav ul #nav_guide span {
        background-repeat: no-repeat;
    }
    /* 结束 */

    /* 视听盛宴 */
    .topnav ul #nav_video span {
        background-position: -1522px 0px;
    }
    .topnav ul #nav_video span {
        background-repeat: no-repeat;
    }
    /* 结束 */

    /* 客服专区 */
    .topnav ul #nav_service span {
        background-position: -1662px 0px;
    }
    .topnav ul #nav_service span {
        background-repeat: no-repeat;
    }
    /* 结束 */

    /* 玩家交流 */
    .topnav ul #nav_communicate span {
        background-position: -1802px 0px;
    }
    .topnav ul #nav_communicate span {
        background-repeat: no-repeat;
    }
    .topnav ul #nav_communicate {
        position: relative;
    }
    .new {
        position: absolute;
        width: 32px;
        height: 32px;
        top: 0;
        left: 0;
        background: url(http://127.0.0.1:3500/img/index/new_82d2045.png) 0 -34px no-repeat;
        font-weight: 700;
        font-style: italic;
    }
    a#nav_communicate {}
    /* 结束 */

    /* 官方论坛 */
    .topnav ul #nav_bbs span {
        background-position: -1942px 0px;
    }
    .topnav ul #nav_bbs span {
        background-repeat: no-repeat;
    }
    /* 结束 */


    /* 隐藏区 */
    .topnav ul .subnav {
        width: 140px;
    }
    
    .topnav ul .subnav a.first {
        padding-top: 5px;
    }
    .topnav ul .subnav a {
        height: 30px;
        text-indent: 0;
        line-height: 30px;
        text-align: center;
        font-size: 14px;
        color: #fedede;
        background: url(http://127.0.0.1:3500/img/index/navbg3_9ba5d75.png) repeat;
    }
    .topnav ul .subnav a.last {
        height: 60px;
        background: url(http://127.0.0.1:3500/img/index/navbg4_1f5a40f.png) repeat center top;
    }
    /* .topnav ul a:hover span, .topnav ul a.current span, .topnav ul a.on span {
        opacity: 1;
    } */
    



</style>
