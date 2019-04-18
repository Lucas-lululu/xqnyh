<template>
    <div>
        <div class="topNav">
            <div class="navCon">
                <a href="javascript:;" target="_blank"></a>
                <ul @click="changelist">
                    <li class="nav-li04">
                        <i class="nav-new">new</i>
                        <a href="javascript:;" id="hhhh">画魂</a>
                    </li>
                    <li class="nav-li03">
                        <a href="javascript:;">偃师</a>
                    </li>
                    <li class="nav-li01">
                        <a href="javascript:;" class="Tcurrent">甲士</a>
                    </li>
                    <li class="nav-li02">
                        <a href="javascript:;" class="Tcurrent">射手</a>
                    </li>
                    <li class="nav-li05">
                        <a href="javascript:;" class="Tcurrent">刀客</a>
                    </li>
                    <li class="nav-li06">
                        <a href="javascript:;" class="Tcurrent">侠客</a>
                    </li>
                    <li class="nav-li07">
                        <a href="javascript:;" class="Tcurrent">方士</a>
                    </li>
                    <li class="nav-li08">
                        <a href="javascript:;" class="Tcurrent">医师</a>
                    </li>
                    <li class="nav-li09">
                        <a href="javascript:;" class="Tcurrent">魅者</a>
                    </li>
                    <li class="nav-li10">
                        <a href="javascript:;" class="Tcurrent">异人</a>
                    </li>
                </ul>
                <router-link to="/" class="nav-back">返回首页</router-link>
            </div>
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
        changelist(e){
            $(e.target).addClass("active").parent().siblings().children().removeClass("active");
        },
    },
    created() {
        
    },
}
</script>
<style scoped>
    ul {
        padding-left: 0;
        list-style-type: none;
    }
    a {
        text-decoration: none;
    }
    .topNav {
        width: 100%;
        position: relative;
        z-index: 99;
        background: url(http://127.0.0.1:3500/img/job/top-nav-bg2_cf8d767.png) no-repeat center top;
        font-family: "微软雅黑";
        min-width: 1200px;
        height: 65px;
    }
    .navCon {
        width: 1200px;
        position: absolute;
        left: 50%;
        margin-left: -600px;
    }
    .job-link {
        width: 236px;
        height: 65px;
        position: absolute;
        left: 0;
        top: 0;
    }
    .navCon ul {
        width: 883px;
        height: 73px;
        padding-left: 236px;
    }
    .navCon ul li {
        width: 88px;
        height: 73px;
        float: left;
        position: relative;
    }
    .navCon .nav-new {
        width: 30px;
        height: 15px;
        position: absolute;
        right: -2px;
        top: 6px;
        background-position: -884px 0;
        text-indent: -99em;
        overflow: hidden;
    }
    .navCon ul li a, .navCon .nav-new, .navCon .nav-back {
        background: url(http://127.0.0.1:3500/img/job/nav-sprite_5f22511.png) no-repeat;
    }
    .navCon ul li a {
        width: 88px;
        height: 73px;
        float: left;
        color: #fff;
        font-size: 0;
        line-height: 73px;
    }
    .navCon .nav-li04 a {
        background-position: -265px 0;
    }
    .navCon .nav-new {
        width: 30px;
        height: 15px;
        position: absolute;
        right: -2px;
        top: 6px;
        background-position: -884px 0;
        text-indent: -99em;
        overflow: hidden;
    }
    .navCon .nav-li04 a:hover, .navCon .nav-li04 a.active{
        background-position: -265px -73px;
    }
    .navCon .nav-li04 a {
        background-position: -265px 0;
    }
    .navCon .nav-li03 a {
        width: 88px;
        background-position: -176px 0;
    }
    .navCon .nav-li01 a {
        background-position: 0 0;
    }
    .navCon .nav-li02 a {
        background-position: -88px 0;
    }
    .navCon .nav-li05 a {
        width: 89px;
        background-position: -353px 0;
    }
    .navCon .nav-li06 a {
        background-position: -440px 0;
    }
    .navCon .nav-li07 a {
        background-position: -528px 0;
    }
    .navCon .nav-li08 a {
        background-position: -616px 0;
    }
    .navCon .nav-li09 a {
        background-position: -704px 0;
    }
    .navCon .nav-li10 a {
        background-position: -792px 0;
    }
    .navCon .nav-li03 a:hover,.navCon .nav-li03 a.active{
        background-position: -176px -73px;
    }
    .navCon .nav-li01 a:hover,.navCon .nav-li01 a.active{
        background-position: 0 -73px;
    }
    .navCon .nav-li02 a:hover,.navCon .nav-li02 a.active{
        background-position: -88px -73px;
    }
    .navCon .nav-li05 a:hover,.navCon .nav-li05 a.active{
        background-position: -353px -73px;
    }
    .navCon .nav-li06 a:hover,.navCon .nav-li06 a.active{
        background-position: -440px -73px;
    }
    .navCon .nav-li07 a:hover,.navCon .nav-li07 a.active{
        background-position: -528px -73px;
    }
    .navCon .nav-li08 a:hover,.navCon .nav-li08 a.active{
        background-position: -616px -73px;
    }
    .navCon .nav-li09 a:hover,.navCon .nav-li09 a.active{
        background-position: -704px -73px;
    }
    .navCon .nav-li10 a:hover,.navCon .nav-li10 a.active{
        background-position: -792px -73px;
    }
    /* back 返回首页*/
    .navCon .nav-back {
        display: block;
        position: absolute;
        top: 15px;
        left: 50%;
        margin-left: 524px;
        width: 100px;
        height: 36px;
        line-height: 24px;
        font-size: 0;
        background-position: -886px -76px;
        padding-left: 28px;
    }
    .navCon .nav-back:hover{
        background-position: -886px -113px;
    }
</style>
