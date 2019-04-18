<template>
    <div>
        <div class="d1"></div>


        <footer id="footer">
            <div id="NIE-copyRight">
                <div class="nie-copyright-new-inner">
                    <div class="nie-cn-part1">
                        <span class="nie-cn-logo">
                            <a href="javascript:;" target="_blank" class="a0">
                                <img src="http://127.0.0.1:3500/img/footer/netease.2.png" alt="">
                            </a>
                            <a class="a1" href="javascript:;" target="_blank">
                                <img src="http://127.0.0.1:3500/img/footer/nie.2.png">
                            </a>
                            <a class="a2" href="javascript:;" target="_blank">
                                <img src="http://127.0.0.1:3500/img/footer/leihuo.2.png">
                            </a>
                            <a class="a3" href="javascript:;" target="_blank">
                                <img src="http://127.0.0.1:3500/img/footer/fuxi.2.png">
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
                                <a href="javascript:;" v-for="item of list0" :key="item.id">{{item}}</a>
                                 <!-- <a href="javascript:;" target="_blank">客户服务</a>
                                  - <a href="javascript:;" target="_blank">相关法律</a> - <a href="javascript:;" target="_blank">网易游戏</a> - <a href="javascript:;" target="_blank">隐私政策</a> - <a href="javascript:;" target="_blank">联系我们</a> - <a href="javascript:;" target="_blank">商务合作</a> - <a href="javascript:;" target="_blank">加入我们</a> -->
                            </i>
                            <br>
                            <i class="nie-cn-nav-i2">
                                杭州网易雷火科技有限公司版权所有 ©1997-2019 
                                <a class="nie-cn-guardianship" href="javascript:;" target="_blank">点击查看家长监护工程 &gt; </a>
                            </i>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list0:["公司简介"," - ","客户服务"," - ","相关法律"," - ","网易游戏"," - ","隐私政策"," - ","联系我们"," - ","商务合作"," - ","加入我们"],
        }
    },
    methods: {
        
    },
    created() {
        
    },
}
</script>
<style scoped>
   #footer {
    color: #fff;
    height: 60px;
    overflow: hidden;
    zoom: 1;
    padding: 20px 0;
    background: #1d1d25;
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
    /* #NIE-copyRight span, #NIE-copyRight a {
        color: #000;
    } */
    .nie-copyright-new-inner .nie-cn-nav {
        display: inline-block;
        vertical-align: top;
        position: relative;
        z-index: 1;
    }
    .nie-copyright-new-inner .nie-cn-nav i {
        font-style: normal;
        color: #fff;
    }
    #NIE-copyRight span, #NIE-copyRight a {
        color: #fff;
    }
    .nie-copyright-new-inner .nie-cn-nav a {
        text-decoration: none;
        color: #fff;
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
        color: #fff;
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
</style>
