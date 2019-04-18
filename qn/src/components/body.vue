<template>
    <div>
        <div class="block1">
            <div class="main">
                <div class="video-box">
                    <!-- 视频 -->
                    <video class="bgv"  autoplay loop muted width="100%">
                        <source src="http://127.0.0.1:3500/video/0d78f74fcef226a455856e5cf3af701e.mp4" type="video/mp4">
                        <source src="http://127.0.0.1:3500/video/de66d522dc58172ffb05681af4456e17.webm" type="video/webm">
                    </video>
                    <!-- 视频小块按钮 -->
                    <div class="btn-kaiqi"></div>
                </div>
                <!-- 视频下方块内容 -->
                <div class="item clearfix">
                    <!-- 意见投放箱子 -->
                    <div class="mailbox">
                        <!-- 关闭X -->
                        <div class="close" @click="mailboxclose"></div>
                    </div>
                    <!-- 下载游戏 -->
                    <div id="links">
                        <a href="javascript:;" id="links_download" target="_blank" class="g-thide"></a>
                        <!-- 口袋版 -->
                        <router-link to="/koudai" id="links_koudai" target="_blank" class="g-thide"></router-link>
                        <!-- 下载游戏下方列表 -->
                        <ul class="clearfix" style="list-style:none">
                            <li v-for="(item,i) of list0" :key="item.id">
                                <a href="javascript:;" target="_blank">
                                    <i class="icon" :class="item ?'icon'+i : ''"></i>
                                    <em>{{item}}</em>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="banner" class="fl">
                        <div id="hotlinkbox-switch">
                            <a href="javascript:;" class="current" title="官方">官方</a>
                            <a href="javascript:;" title="合作">合作</a>
                        </div>
                        <!-- 轮播 -->
                        <div id="hotlinkbox-content">
                            <div id="hotlinkbox1" class="current">
                                <div class="hd">
                                    <ul class="g-clr">
                                        <li style="width:140px" :class="{on:b==i}" v-for="(item,i) of bodylist" :key="item.id" @mouseover="stop" @mouseout="start" :data-i="i">{{item.ntitle}}</li>
                                    </ul>
                                </div>
                                <div class="tempWrap" style="overflow:hidden;position:relative;width:700px">
                                    <ul class="adbase-ctn" style="width:4500px;position:relative;overflow:hidden;padding:0px;margin:0px;">
                                        <li class="clone" style="width:700px">
                                            <a href="javascript:;" target="_blank" v-show='b==0'>
                                                <img :src="bodylist[0].npic" alt="">
                                            </a>
                                        </li>
                                        <li class="clone" style="width:700px">
                                            <a href="javascript:;" target="_blank" v-show='b==1'>
                                                <img :src="bodylist[1].npic" alt="" style="margin-top:-22px">
                                            </a>
                                        </li>
                                        <li class="clone" style="width:700px">
                                            <a href="javascript:;" target="_blank" v-show='b==2'>
                                                <img :src="bodylist[2].npic" alt="" style="margin-top:-42px">
                                            </a>
                                        </li>
                                        <li class="clone" style="width:700px">
                                            <a href="javascript:;" target="_blank" v-show='b==3'>
                                                <img :src="bodylist[3].npic" alt="" style="margin-top:-63px">
                                            </a>
                                        </li>
                                        <li class="clone" style="width:700px">
                                            <a href="javascript:;" target="_blank" v-show='b==4'>
                                                <img :src="bodylist[4].npic" alt="" style="margin-top:-85px">
                                            </a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="newsbox" class="f1">
                        <!-- 表头 -->
                        <div class="newsbox-tab">
                            <ul>
                                <li v-for="item of xinwen" :key="item.id">
                                    <a href="javascript:;" target="_blank">{{item}}</a>
                                    <i></i>
                                </li>
                            </ul>
                        </div>
                        <!-- 热点 -->
                        <div class="newsbox-hot">
                            <p v-for="item of redianlist" :key="item.id">
                                <a href="javascript:;" target="_blank">{{item.rtitle}}</a>
                                <i class="icon icon26"></i>
                            </p>
                        </div>
                        <!-- 新闻列表 -->
                        <div class="newsbox-list">
                            <div class="tempWrap" style="overflow:hidden;position:relative;width:410px">
                                <div class="bd" style="width:2870px;overflow:hidden;padding:0px;margin:0px;left:-1230px">
                                    <ul class="clone" style="float:left;width:410px">
                                        <li v-for="item of xinwenlist" :key="item.id">
                                            <span class="date">{{item.xdata}}</span>
                                            <a href="javascript:;" target="_blank">{{item.xtitle}}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- 搜索功能区 -->
                        <div class="content-box" id="searchbox">
                            <div class="g-clr" id="qsearch">
                                <ul class="f1 g-clr">
                                    <li>
                                        <a href="javascript:;" target="_blank">服务器查询</a>
                                    </li>
                                </ul>
                                <ul class="fr g-clr" >
                                    <li v-for="item of xinwensousuo" :key="item.id">
                                        <a href="javascript:;" target="_blank">{{item}}</a>
                                    </li>
                                </ul>
                            </div>
                            <!-- 搜索框 -->
                            <div id="search">
                                <input type="text" id="searchKeyWords" name="qs" placeholder="请输入关键字">
                                <a href="javascript:;" class="btn" target="_blank">搜索</a>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="block2" id="job" :style="op">
            <div class="main animate">
                <!-- 左 -->
                <div class="race_nav">
                    <!-- 吊坠 -->
                    <div class="suizi"></div>
                    <!-- 上 -->
                    <div class="cloud1"></div>
                    <!-- 下 -->
                    <div class="cloud2"></div>
                    <!-- 职业列表 -->
                    <ul @mouseover="changenav">
                        <li @mouseover="changenav4">
                            <a href="javascript:;" class="nav4 active">画魂</a>
                            <b class="new"></b>
                        </li>
                        <li @mouseover="changenav5">
                            <a href="javascript:;" class="nav5">偃师</a>
                        </li>
                        <li @mouseover="changenav6">
                            <a href="javascript:;" class="nav6">甲士</a>
                        </li>
                        <li @mouseover="changenav3">
                            <a href="javascript:;" class="nav3">射手</a>
                        </li>
                        <li @mouseover="changenav2">
                            <a href="javascript:;" class="nav2">刀客</a>
                        </li>
                        <li @mouseover="changenav8">
                            <a href="javascript:;" class="nav8">侠客</a>
                        </li>
                        <li  @mouseover="changenav9">
                            <a href="javascript:;" class="nav9">方士</a>
                        </li>
                        <li @mouseover="changenav7">
                            <a href="javascript:;" class="nav7">医师</a>
                        </li>
                        <li @mouseover="changenav1">
                            <a href="javascript:;" class="nav1">魅者</a>
                        </li>
                        <li @mouseover="changenav10">
                            <a href="javascript:;" class="nav10">异人</a>
                        </li>
                    </ul>
                </div>
                <div class="race_list">
                    <!-- 魅者 -->
                    <div class="mz race_block" v-show="mz==1"> 
                        <div class="name"></div>
                        <div class="line"></div>
                        <router-link to="/hh-m" class="detail_btn" >查看详情
                            <i></i>
                        </router-link>
                        <div class="leida"></div>
                        <div class="body-video">
                            <video src="http://127.0.0.1:3500/video/mz.mp4" autoplay loop></video>
                            <div class="border" @click="openvideo">
                                <i></i>
                            </div>
                        </div>
                        <div class="sex">
                            <a href="javascript:;" class="s_male" @mouseover="changeSex1">冷月心</a>
                            <a href="javascript:;" class="s_female active " @mouseover="changeSex1">风摇筝</a>
                        </div>
                        <div class="male person lyx"></div>
                        <div class="female person fyz" :style="fyzyd"></div>
                    </div>
                    <!-- 断恨刀客 -->
                    <div class="duanhen race_block" v-show="dk==1">
                        <div class="name"></div>
                        <div class="line"></div>
                        <router-link to="/hh-m" class="detail_btn" >查看详情
                            <i></i>
                        </router-link>
                        <div class="leida"></div>
                        <div class="body-video">
                            <video src="http://127.0.0.1:3500/video/dhdk.mp4" autoplay loop muted></video>
                            <div class="border" @click="openvideo">
                                <i></i>
                            </div>
                        </div>
                        <div class="sex">
                            <a href="javascript:;" class="s_male" @mouseover="changeSex2">卓断水</a>
                            <a href="javascript:;" class="s_female active " @mouseover="changeSex2">杨梦言</a>
                        </div>
                        <div class="male person zds"></div>
                        <div class="female person ymy" :style="ymyyd"></div>
                    </div>
                    <!-- 射手 -->
                    <div class="duanhen ss race_block" v-show="ss==1">
                        <div class="name"></div>
                        <div class="line"></div>
                        <router-link to="/hh-m" class="detail_btn" >查看详情
                            <i></i>
                        </router-link>
                        <div class="leida"></div>
                        <div class="body-video">
                            <video src="http://127.0.0.1:3500/video/ss.mp4" autoplay loop muted></video>
                            <div class="border" @click="openvideo">
                                <i></i>
                            </div>
                        </div>
                        <div class="sex">
                            <a href="javascript:;" class="s_male" @mouseover="changeSex3">聂秋鹰</a>
                            <a href="javascript:;" class="s_female active " @mouseover="changeSex3">萧若兰</a>
                        </div>
                        <div class="male person nqy"></div>
                        <div class="female person xrl" :style="xrlyd"></div>
                    </div>
                    <!-- 画魂 -->
                    <div class="duanhen hh race_block summ" v-show="hh==1">
                        <div class="name"></div>
                        <div class="line"></div>
                        <router-link to="/hh-m" class="detail_btn" >查看详情
                            <i></i>
                        </router-link>
                        <div class="leida"></div>
                        <div class="body-video">
                            <video src="http://127.0.0.1:3500/video/d3afc120-48a8-4b35-922d-6109b42e8657.mp4" autoplay loop muted></video>
                            <div class="border" @click="openvideo">
                                <i></i>
                            </div>
                        </div>
                        <div class="sex">
                            <a href="javascript:;" class="s_male" @mouseover="changeSex4">乔寻影</a>
                            <a href="javascript:;" class="s_female active " @mouseover="changeSex4">水凝墨</a>
                        </div>
                        <div class="male person qxy"></div>
                        <div class="female person snm"></div>
                    </div>
                    <!-- 偃师 -->
                    <div class="duanhen ys race_block" v-show="ys==1">
                        <div class="name"></div>
                        <div class="line"></div>
                        <router-link to="/hh-m" class="detail_btn" >查看详情
                            <i></i>
                        </router-link>
                        <div class="leida"></div>
                        <div class="body-video">
                            <video src="http://127.0.0.1:3500/video/yanshi.mp4" autoplay loop muted></video>
                            <div class="border" @click="openvideo">
                                <i></i>
                            </div>
                        </div>
                        <div class="sex">
                            <a href="javascript:;" class="s_male" @mouseover="changeSex5">檀无心</a>
                            <a href="javascript:;" class="s_female active " @mouseover="changeSex5">阮烟罗</a>
                        </div>
                        <div class="male person twx"></div>
                        <div class="female person ryl" :style="rylyd"></div>
                    </div>
                    <!-- 金刚甲 -->
                    <div class="duanhen jingang race_block" v-show="js==1">
                        <div class="name"></div>
                        <div class="line"></div>
                        <router-link to="/hh-m" class="detail_btn" >查看详情
                            <i></i>
                        </router-link>
                        <div class="leida"></div>
                        <div class="body-video">
                            <video src="http://127.0.0.1:3500/video/js.mp4" autoplay loop muted></video>
                            <div class="border" @click="openvideo">
                                <i></i>
                            </div>
                        </div>
                        <div class="sex">
                            <a href="javascript:;" class="s_male" @mouseover="changeSex6">霍击蒙</a>
                            <a href="javascript:;" class="s_female active " @mouseover="changeSex6">石云馨</a>
                        </div>
                        <div class="male person hjm"></div>
                        <div class="female person syx" :style="syxyd"></div>
                    </div>
                    <!-- 医师 -->
                    <div class="duanhen yishi race_block" v-show="yishi==1">
                        <div class="name"></div>
                        <div class="line"></div>
                        <router-link to="/hh-m" class="detail_btn" >查看详情
                            <i></i>
                        </router-link>
                        <div class="leida"></div>
                        <div class="body-video">
                            <video src="http://127.0.0.1:3500/video/ys.mp4" autoplay loop muted></video>
                            <div class="border" @click="openvideo">
                                <i></i>
                            </div>
                        </div>
                        <div class="sex">
                            <a href="javascript:;" class="s_male" @mouseover="changeSex7">步临风</a>
                            <a href="javascript:;" class="s_female active " @mouseover="changeSex7">殷紫萍</a>
                        </div>
                        <div class="male person blf"></div>
                        <div class="female person yzp" :style="yzpyd"></div>
                    </div>
                    <!-- 侠客 -->
                    <div class="duanhen xk race_block" v-show="xk==1">
                        <div class="name"></div>
                        <div class="line"></div>
                        <router-link to="/hh-m" class="detail_btn" >查看详情
                            <i></i>
                        </router-link>
                        <div class="leida"></div>
                        <div class="body-video">
                            <video src="http://127.0.0.1:3500/video/xk.mp4" autoplay loop muted></video>
                            <div class="border" @click="openvideo">
                                <i></i>
                            </div>
                        </div>
                        <div class="sex">
                            <a href="javascript:;" class="s_male" @mouseover="changeSex8">沈昊空</a>
                            <a href="javascript:;" class="s_female active " @mouseover="changeSex8">沈傲霜</a>
                        </div>
                        <div class="male person shk"></div>
                        <div class="female person sas"  :style="sasyd"></div>
                    </div>
                    <!-- 方士 -->
                    <div class="duanhen fs race_block" v-show="fs==1">
                        <div class="name"></div>
                        <div class="line"></div>
                        <router-link to="/hh-m" class="detail_btn" >查看详情
                            <i></i>
                        </router-link>
                        <div class="leida"></div>
                        <div class="body-video">
                            <video src="http://127.0.0.1:3500/video/fs-skill.mp4" autoplay loop muted></video>
                            <div class="border" @click="openvideo">
                                <i></i>
                            </div>
                        </div>
                        <div class="sex">
                            <a href="javascript:;" class="s_male" @mouseover="changeSex9">莫忘尘</a>
                            <a href="javascript:;" class="s_female active " @mouseover="changeSex9">纳兰青桑</a>
                        </div>
                        <div class="male person mwc"></div>
                        <div class="female person nlqs" :style="nlqsyd"></div>
                    </div>
                    <!-- 异人 -->
                    <div class="duanhen yr race_block" v-show="yr==1">
                        <div class="name"></div>
                        <div class="line"></div>
                       <router-link to="/hh-m" class="detail_btn" >查看详情
                            <i></i>
                        </router-link>
                        <div class="leida"></div>
                        <div class="body-video">
                            <video src="http://127.0.0.1:3500/video/yr.mp4" autoplay loop muted></video>
                            <div class="border" @click="openvideo">
                                <i></i>
                            </div>
                        </div>
                        <div class="sex">
                            <a href="javascript:;" class="s_male" @mouseover="changeSex10">叶葬花</a>
                            <a href="javascript:;" class="s_female active " @mouseover="changeSex10">花渐隐</a>
                        </div>
                        <div class="male person yzh"></div>
                        <div class="female person hjy" :style="hjyyd"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="block3 animate show" id="media">
            <div class="role">
                <div class="main clearfix">
                    <!-- 左派列表 -->
                    <ul class="nav f1">
                        <li class="s_nav s_nav1 s_navvan active">
                            <div class="wave">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_569b3b6.png" alt="" class="wave1">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_569b3b6.png" alt="" class="wave2">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_569b3b6.png" alt="" class="wave3">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_569b3b6.png" alt="" class="wave4">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_569b3b6.png" alt="" class="wave5">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_569b3b6.png" alt="" class="wave6">
                            </div>
                        </li>
                        <li class="s_nav s_nav2">
                            <div class="wave">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_569b3b6.png" alt="" class="wave1">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_569b3b6.png" alt="" class="wave2">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_569b3b6.png" alt="" class="wave3">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_569b3b6.png" alt="" class="wave4">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_569b3b6.png" alt="" class="wave5">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_569b3b6.png" alt="" class="wave6">
                            </div>
                        </li>
                        <li class="s_nav s_nav3">
                            <div class="wave">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_569b3b6.png" alt="" class="wave1">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_569b3b6.png" alt="" class="wave2">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_569b3b6.png" alt="" class="wave3">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_569b3b6.png" alt="" class="wave4">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_569b3b6.png" alt="" class="wave5">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_569b3b6.png" alt="" class="wave6">
                            </div>
                        </li>
                        <li class="s_nav s_nav4">
                            <div class="wave">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_569b3b6.png" alt="" class="wave1">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_569b3b6.png" alt="" class="wave2">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_569b3b6.png" alt="" class="wave3">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_569b3b6.png" alt="" class="wave4">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_569b3b6.png" alt="" class="wave5">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_569b3b6.png" alt="" class="wave6">
                            </div>
                        </li>
                        <div class="cover"></div>
                        <li class="suizi"></li>
                    </ul>
                    <!-- 内容 -->
                    <div class="tabs f1" :style="op1">
                        <!-- 精彩视频 -->
                        <ul class="clearfix" id="jcsp">
                            <li class="body-video" :class="{lione:sTop>=1000,li0:i==0,li1:i==1,li2:i==2,li3:i==3,li4:i==4,li5:i==5}" v-for="(item,i) of jingcaishipinlist" :key="item.id">
                                <div class="img-wrap">
                                    <img :src="item.jvideo" alt="">
                                </div>
                                <div class="mask">
                                    <div class="btn-video">
                                        <i></i>
                                    </div>
                                </div>
                                <div class="bottom">
                                    <i class="icon-video"></i>
                                    {{item.jtitle}}
                                </div>
                            </li>
                        </ul>
                        <a href="javascript:;" target="_blank" class="more">查看更多</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="block4" id="data">
            <div class="block4_bg"></div>
            <div class="main">
                <div id="pangyao"></div>
                <div class="g_item1 animate clearfix show">
                    <div class="guide f1">
                        <div class="title">
                            <div class="wave">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_6b13910.png" alt="" class="wave1">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_6b13910.png" alt="" class="wave2">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_6b13910.png" alt="" class="wave3">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_6b13910.png" alt="" class="wave4">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_6b13910.png" alt="" class="wave5">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_6b13910.png" alt="" class="wave6">
                            </div>
                            <a href="javascript:;" target="_blank" class="more">
                                <i></i>
                            </a>
                        </div>
                        <ul class="guide-list guide-list1">
                            <li>
                                <a href="javascript:;" target="_blank">
                                    <i class="icon icon1"></i>
                                    <span>领取礼包</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;" target="_blank">
                                    <i class="icon icon2"></i>
                                    <span>探索指南</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;" target="_blank">
                                    <i class="icon icon3"></i>
                                    <span>入门指南</span>
                                </a>
                            </li>
                        </ul>
                        <ul class="guide-list guide-list-link">
                            <li v-for="item of list1" :key="item.id">
                                <a href="javascript:;" target="_blank">{{item}}</a>
                            </li>
                        </ul>
                        <ul class="guide-list guide-list-link guide-list-link2">
                            <li v-for="item of list2" :key="item.id">
                                <a href="javascript:;" target="_blank">{{item}}</a>
                            </li>
                        </ul>
                        <ul class="guide-list guide-list-link guide-list-link3">
                            <li v-for="item of list3" :key="item.id">
                                <a href="javascript:;" target="_blank">{{item}}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="bbs f1">
                        <div class="title">
                            <a href="javascript:;" target="_blank" class="more">
                                <i></i>
                            </a>
                            <div class="wave">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_6b13910.png" alt="" class="wave1">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_6b13910.png" alt="" class="wave2">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_6b13910.png" alt="" class="wave3">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_6b13910.png" alt="" class="wave4">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_6b13910.png" alt="" class="wave5">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_6b13910.png" alt="" class="wave6">
                            </div>
                        </div>
                        <div class="bbs-img">
                            <ul class="adbase-ctn clearfix" style="background:none;list-style:none">
                                <li>
                                    <a href="javascript:;" target="_blank">
                                        <img src="http://127.0.0.1:3500/img/index_show/5caac0e92786fd059c7c7dccSzuZTN9802.jpg">
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;" target="_blank">
                                        <img src="http://127.0.0.1:3500/img/index_show/5caac0b196dee45df33dcb47J5TeizdH02.jpg">
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <ul class="bbs-ul">
                            <li class="clearfix" v-for="item of list4" :key="item.id">
                                <a href="javascript:;">
                                    <p>{{item.title}}</p>
                                    <span class="date">{{item.time}}</span>
                                </a>
                            </li>
                        </ul>
                        <div class="bbs-img2">
                            <ul class="adbase-ctn clearfix" style="background:none;list-style:none">
                                <li>
                                    <a href="javascript:;" target="_blank">
                                        <img src="http://127.0.0.1:3500/img/index_show/5caac1172786fdfef4d73448AHoD2EZ402.jpg">
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <ul class="bbs-ul2">
                            <li class="clearfix" v-for="item of list5" :key="item.id">
                                <a href="javascript:;">
                                    <p>{{item.title}}</p>
                                    <span class="date">{{item.time}}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="md f1">
                        <div class="title">
                            <a class="goto-zrx-btn more" href="javascript:;" target="_blank">
                                <i></i>
                            </a>
                            <div class="wave">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_6b13910.png" alt="" class="wave1">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_6b13910.png" alt="" class="wave2">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_6b13910.png" alt="" class="wave3">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_6b13910.png" alt="" class="wave4">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_6b13910.png" alt="" class="wave5">
                                <img src="http://127.0.0.1:3500/img/index_show/wave1_6b13910.png" alt="" class="wave6">
                            </div>
                        </div>
                        <div class="zrx" id="zrxContainer">
                            <div class="bd">
                                <ul style="list-style:none" v-show="lb==1">
                                    <li>
                                        <div class="content">
                                            <div class="item">
                                                <a href="javascript:;" target="_blank">
                                                    <img src="http://127.0.0.1:3500/img/index_show/20190410113700.jpg" alt="" class="avatar">
                                                </a>
                                            </div>
                                            <div class="item">
                                                <a href="javascript:;" target="_blank">
                                                    <img src="http://127.0.0.1:3500/img/index_show/20190410113642.jpg" alt="" class="avatar">
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul style="list-style:none" v-show="lb==2">
                                    <li>
                                        <div class="content">
                                            <div class="item">
                                                <a href="javascript:;" target="_blank">
                                                    <img src="http://127.0.0.1:3500/img/index_show/20190410113642.jpg" alt="" class="avatar">
                                                </a>
                                            </div>
                                            <div class="item">
                                                <a href="javascript:;" target="_blank">
                                                    <img src="http://127.0.0.1:3500/img/index_show/20190410113700.jpg" alt="" class="avatar">
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul style="list-style:none" v-show="lb==3">
                                    <li>
                                        <div class="content">
                                            <div class="item">
                                                <a href="javascript:;" target="_blank">
                                                    <img src="http://127.0.0.1:3500/img/index_show/0190410113705.jpg" alt="" class="avatar">
                                                </a>
                                            </div>
                                            <div class="item">
                                                <a href="javascript:;" target="_blank">
                                                    <img src="http://127.0.0.1:3500/img/index_show/0190410113705.jpg" alt="" class="avatar">
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="swiper-group" @click="lbgo">
                                <div class="swiper-button-prev"></div>
                                <div class="swiper-button-next"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 视频弹窗 -->
        <div id="pop_video">
            <div class="videoCon">
                <div id="pop_vv"></div>
                <a id="close_pv" href="javascript:void(0)" class="btn_close" @click="closevideo">x</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            b:0,
            t:null,
            mz:0,
            dk:0,
            ss:0,
            hh:1,
            ys:0,
            js:0,
            yishi:0,
            xk:0,
            fs:0,
            yr:0,
            list0:["快速注册","充值中心","全新口袋版","帐号中心","领取礼包","藏宝阁"],
            xinwen:["最新","消息","公告","活动","热帖"],
            redianlist:[],
            xinwenlist:[],
            jingcaishipinlist:[],
            xinwensousuo:["装备","石之灵","帮会","家园","藏宝阁"],
            list1:["快速升级","贸易指南","三界伙伴","装备介绍","零售系统","坐骑系统"],
            list2:["帮会联赛","关宁校场","寇岛围攻","镖行天下","宁远觉华","十世镜","京师妖奇谈","京师保卫战"],
            list3:["婚姻系统","养育系统","家园系统","生活系统","雷峰塔","海陆空领地"],
            list4:[
                {title:"[视频]小奶狗和大狼狗，你爱哪一款？",time:"04/03"},
                {title:"[攻略]名家装修分享——海底世界",time:"04/03"},
                {title:"[话题]对我侠侣感兴趣？不好意思嘤嘤怪，他是直男",time:"04/03"},
            ],
            list5:[
                {title:"[手绘]捉住一只沈傲霜小姐姐",time:"04/02"},
                {title:"[攻略]世间安得双全法，不负如来不负卿",time:"04/01"},
                {title:"[话题]在游戏中，你更看重友情还是爱情？",time:"04/01"},
            ],
            lb:1,
            sTop:0,
            op:{opacity:'0',marginTop:"557px"},
            rylyd:{top:""},
            fyzyd:{top:""},
            ymyyd:{top:""},
            xrlyd:{top:""},
            syxyd:{top:""},
            yzpyd:{top:""},
            sasyd:{top:""},
            nlqsyd:{top:""},
            hjyyd:{top:""},
            // 
            op1:{opacity:"0"},
            li0:{top:"264px",left:"768px"},
            li1:{top:"468px",left:"0px"},
            li2:{top:"223px",left:"-600px"},
            li3:{top:"-550px",left:"700px"},
            li4:{top:"-550px",left:"0px"},
            li5:{top:"-550px",left:"-700px"},
            // 
            bodylist:[
                {nid:"",npic:"",ntitle:""},
                {nid:"",npic:"",ntitle:""},
                {nid:"",npic:"",ntitle:""},
                {nid:"",npic:"",ntitle:""},
                {nid:"",npic:"",ntitle:""},
            ],
        }
    },
    methods:{
        // 关闭箱子
        mailboxclose(){
            $(".mailbox").remove();
        },
        // 职业
        changenav(e){
            $(e.target).addClass("active").parent().siblings().children().removeClass("active");
        },
        // 魅
        changenav1(e){
            if (this.mz==0){
                this.mz=1;
                this.dk=0;
                this.ss=0;
                this.hh=0;
                this.ys=0;
                this.js=0;
                this.yishi=0;
                this.xk=0;
                this.fs=0;
                this.yr=0;
                setInterval(()=>{this.mzyd()},20);
            }
        },
        // 刀客
        changenav2(e){
            if (this.dk==0){
                this.dk=1;
                this.mz=0;
                this.ss=0;
                this.hh=0;
                this.ys=0;
                this.js=0;
                this.yishi=0;
                this.xk=0;
                this.fs=0;
                this.yr=0;
                setInterval(()=>{this.dkyd()},20);
            }
        },
        // 射手
        changenav3(e){
            if (this.ss==0){
                this.mz=0;
                this.dk=0;
                this.ss=1;
                this.hh=0;
                this.ys=0;
                this.js=0;
                this.yishi=0;
                this.xk=0;
                this.fs=0;
                this.yr=0;
                setInterval(()=>{this.ssyd()},20);
            }
        },
        // 画魂
        changenav4(e){
            if (this.hh==0){
                this.mz=0;
                this.dk=0;
                this.ss=0;
                this.hh=1;
                this.ys=0;
                this.js=0;
                this.yishi=0;
                this.xk=0;
                this.fs=0;
                this.yr=0;
            }
        },
        // 偃师
        changenav5(e){
            if (this.ys==0){
                this.mz=0;
                this.dk=0;
                this.ss=0;
                this.hh=0;
                this.ys=1;
                this.js=0;
                this.yishi=0;
                this.xk=0;
                this.fs=0;
                this.yr=0;
                setInterval(()=>{this.ysyd()},20);
            }
        },
        // 甲士
        changenav6(e){
            if (this.js==0){
                this.mz=0;
                this.dk=0;
                this.ss=0;
                this.hh=0;
                this.ys=0;
                this.js=1;
                this.yishi=0;
                this.xk=0;
                this.fs=0;
                this.yr=0;
                setInterval(()=>{this.jsyd()},20);
            }
        },
        // 医师
        changenav7(e){
            if (this.yishi==0){
                this.mz=0;
                this.dk=0;
                this.ss=0;
                this.hh=0;
                this.ys=0;
                this.js=0;
                this.yishi=1;
                this.xk=0;
                this.fs=0;
                this.yr=0;
                setInterval(()=>{this.yishiyd()},20);
            }
        },
        // 侠客
        changenav8(e){
            if (this.xk==0){
                this.mz=0;
                this.dk=0;
                this.ss=0;
                this.hh=0;
                this.ys=0;
                this.js=0;
                this.yishi=0;
                this.xk=1;
                this.fs=0;
                this.yr=0;
                setInterval(()=>{this.xkyd()},20);
            }
        },
        // 方士
        changenav9(e){
            if (this.fs==0){
                this.mz=0;
                this.dk=0;
                this.ss=0;
                this.hh=0;
                this.ys=0;
                this.js=0;
                this.yishi=0;
                this.xk=0;
                this.fs=1;
                this.yr=0;
                setInterval(()=>{this.fsyd()},20);
            }
        },
        // 异人
        changenav10(e){
            if (this.fs==0){
                this.mz=0;
                this.dk=0;
                this.ss=0;
                this.hh=0;
                this.ys=0;
                this.js=0;
                this.yishi=0;
                this.xk=0;
                this.fs=0;
                this.yr=1;
                setInterval(()=>{this.yryd()},20);
            }
        },
        // 性别
        changeSex1(e){
            $(e.target).addClass("active").siblings().removeClass("active");
            if ($(e.target).html()=="冷月心"){
                $(".fyz").css("opacity","0");
                $(".lyx").css("opacity","1");
            }else{
                $(".fyz").css("opacity","1");
                $(".lyx").css("opacity","0");
            }
        },
        changeSex2(e){
            $(e.target).addClass("active").siblings().removeClass("active");
            if ($(e.target).html()=="卓断水"){
                $(".ymy").css("opacity","0");
                $(".zds").css("opacity","1");
            }else{
                $(".ymy").css("opacity","1");
                $(".zds").css("opacity","0");
            }
        },
        changeSex3(e){
            $(e.target).addClass("active").siblings().removeClass("active");
            if ($(e.target).html()=="聂秋鹰"){
                $(".xrl").css("opacity","0");
                $(".nqy").css("opacity","1");
            }else{
                $(".xrl").css("opacity","1");
                $(".nqy").css("opacity","0");
            }
        },
        changeSex4(e){
            $(e.target).addClass("active").siblings().removeClass("active");
            if ($(e.target).html()=="乔寻影"){
                $(".snm").css("opacity","0");
                $(".qxy").css("opacity","1");
            }else{
                $(".snm").css("opacity","1");
                $(".qxy").css("opacity","0");
            }
        },
        changeSex5(e){
            $(e.target).addClass("active").siblings().removeClass("active");
            if ($(e.target).html()=="檀无心"){
                $(".ryl").css("opacity","0");
                $(".twx").css("opacity","1");
            }else{
                $(".ryl").css("opacity","1");
                $(".twx").css("opacity","0");
            }
        },
        changeSex6(e){
            $(e.target).addClass("active").siblings().removeClass("active");
            if ($(e.target).html()=="霍击蒙"){
                $(".syx").css("opacity","0");
                $(".hjm").css("opacity","1");
            }else{
                $(".syx").css("opacity","1");
                $(".hjm").css("opacity","0");
            }
        },
        changeSex7(e){
            $(e.target).addClass("active").siblings().removeClass("active");
            if ($(e.target).html()=="步临风"){
                $(".yzp").css("opacity","0");
                $(".blf").css("opacity","1");
            }else{
                $(".yzp").css("opacity","1");
                $(".blf").css("opacity","0");
            }
        },
        changeSex8(e){
            $(e.target).addClass("active").siblings().removeClass("active");
            if ($(e.target).html()=="沈昊空"){
                $(".sas").css("opacity","0");
                $(".shk").css("opacity","1");
            }else{
                $(".sas").css("opacity","1");
                $(".shk").css("opacity","0");
            }
        },
        changeSex9(e){
            $(e.target).addClass("active").siblings().removeClass("active");
            if ($(e.target).html()=="莫忘尘"){
                $(".nlqs").css("opacity","0");
                $(".mwc").css("opacity","1");
            }else{
                $(".nlqs").css("opacity","1");
                $(".mwc").css("opacity","0");
            }
        },
        changeSex10(e){
            $(e.target).addClass("active").siblings().removeClass("active");
            if ($(e.target).html()=="叶葬花"){
                $(".hjy").css("opacity","0");
                $(".yzh").css("opacity","1");
            }else{
                $(".hjy").css("opacity","1");
                $(".yzh").css("opacity","0");
            }
        },
        ysyd(){
            this.rylyd.top="-272px";
        },
        mzyd(){
            this.fyzyd.top="-272px";
        },
        dkyd(){
            this.ymyyd.top="-272px";
        },
        ssyd(){
            this.xrlyd.top="-272px";
        },
        jsyd(){
            this.syxyd.top="-272px";
        },
        xkyd(){
            this.sasyd.top="-272px";
        },
        yishiyd(){
            this.yzpyd.top="-272px"
        },
        fsyd(){
            this.nlqsyd.top="-272px";
        },
        yryd(){
            this.hjyyd.top="-272px";
        },
        wrap(){
            this.t = setInterval(()=>{
                if(this.b<5){
                    this.b++;
                    if(this.b==5){
                        this.b=0;
                    }
                }
            },3000);
        },
        stop(e){
           var i=e.target.dataset.i;
           this.b=i;
           clearInterval(this.t);
            this.t=null;
        },
        start(){
            this.wrap();
        },
        lbchange(){
            setInterval(()=>{
                if (this.lb<5){
                    this.lb++;
                    if (this.lb==4){
                        this.lb=1;
                    }
                }
            },5000);
        },
        lbgo(e){
            if ($(e.target).is(".swiper-button-prev")){
                this.lb--;
                if (this.lb==0){
                    this.lb=3;
                }
            }
            if ($(e.target).is(".swiper-button-next")){
                this.lb++;
                if (this.lb==4){
                    this.lb=1;
                }
            }
        },
        openvideo(e){
            $("#pop_video").css("display","block");
            var a = $(e.target).parent().prevAll();
            $("#pop_vv").empty().after(a).append(a).children().css("height","100%").css("width","100%").attr("controls","true");
        },
        closevideo(){
            $("#pop_video").css("display","none");
        },
        handleScroll(){
            var scrollTop=window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            var scroll=scrollTop;
            this.sTop=scroll;
            if(scroll>=400){
                this.op.opacity=1;
                this.op.marginTop=60+"px";
            }
            if (scroll<400){
                this.op.opacity=0; 
            }
            if (scroll>=1000){
                this.op1.opacity=1;
            }
            if (scroll>=1000){
                this.li0.top=0;
                this.li0.left=0;
                this.li1.top=0;
                this.li1.left=0;
                this.li2.top=0;
                this.li2.left=0;
                this.li3.top=0;
                this.li3.left=0;
                this.li4.top=0;
                this.li4.left=0;
                this.li5.top=0;
                this.li5.left=0;
            }
        },
        qnIndex(){
            var url = "http://127.0.0.1:3500/index/body"
            this.axios.get(url).then(result=>{
                this.bodylist=result.data.data;
            });
        },
        getredian(){
            var url = "http://127.0.0.1:3500/index/redian";
            this.axios.get(url).then(result=>{
                this.redianlist=result.data.data;
            });    
        },
        getxinwen(){
            var url = "http://127.0.0.1:3500/index/xinwen";
            this.axios.get(url).then(result=>{
                this.xinwenlist=result.data.data;
            });
        },
        getjingcaishipin(){
            var url = "http://127.0.0.1:3500/index/jingcaishipin";
            this.axios.get(url).then(result=>{
                this.jingcaishipinlist=result.data.data;
            })
        },
    },
    created(){
        this.lbchange();
        this.handleScroll();
        this.qnIndex();
        this.getredian();
        this.getxinwen();
        this.getjingcaishipin();
        this.wrap();
    },
    mounted() {
        window.addEventListener('scroll',this.handleScroll,true); 
    },
}
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    a {
        text-decoration: none;
    }
    /* 视频开始 */
    .main {
        width: 1451px;
        padding-top: 740px;
        margin: 0 auto;
        position: relative;
    }
    .main .video-box {
        position: fixed;
        left: -261px;
        top: -80px;
        width: 2164px;
        pointer-events: none;
    }
    /* 视频中的小块按钮 */
    /* 背景定位区 */
    .pop-huba, #media .tabs .more:hover, #media .tabs .more, .block1 .btn-kaiqi, #job .ss .leida, #job .mz .leida, #job .hh .leida, #job .jingang .leida, #job .zhanhun .leida, #job .cangren .leida, #job .ys .leida, #job .xk .leida, #job .yr .leida, #job .yishi .leida, #job .fs .leida, #job .duanhen .leida, .slidebar .koudai_code .code, .slidebar .slide-code .code, .block1 .top-video .border, #job .sex, #media .nav .suizi, .pop-mailbox .content.content-1 textarea, .block1 .mailbox:hover, .block1 .mailbox, #job .body-video i, #job .body-video .border, .pop-mailbox .content.content-1 .btn-submit, .pop-mailbox .content.content-1 .btn-submit:hover, #job .race_list .detail_btn:hover, #job .race_list .detail_btn {
        background-image: url(http://127.0.0.1:3500/img/index/index_z_d27c443.png);
    }
    .main .video-box .btn-kaiqi {
        background-position: -114px -748px;
    }
    .main .video-box .btn-kaiqi {
        position: absolute;
        left: 50%;
        margin-left: -369px;
        margin-top: 73px;
        top: 479px;
        width: 42px;
        height: 209px;
        background-repeat: no-repeat;
    }

    /* 轮播块 */
    .block1 .item {
        position: relative;
        z-index: 5;
    }
    .block1 .mailbox {
        width: 119px;
        height: 71px;
        cursor: pointer;
        position: absolute;
        top: -72px;
        left: 42px;
        
        background-repeat: no-repeat;
    }
    .block1 .mailbox {
        background-position: -812px -964px;
    }
    .block1 .mailbox:hover{
        background-position: -693px -964px;
    }
    .slidebar .slide-toggle i, .block1 .mailbox .close, #data .g_item1 .more i, .icon26 {
        background-image: url(http://127.0.0.1:3500/img/index/index_z_d27c443.png);
    }
    .block1 .mailbox .close {
        background-position: -1440px -62px;
    }
    
    .block1 .mailbox .close {
        width: 14px;
        height: 14px;
        cursor: pointer;
        position: absolute;
        top: -14px;
        right: 17px;
        -webkit-transition: top 1s;
        -moz-transition: top 1s;
        -ms-transition: top 1s;
        -o-transition: top 1s;
        transition: top 1s;
        background-repeat: no-repeat;
    }
    /* 容器 */
    #links {
        background-position: 0px 0px;
    }
    #links {
        width: 190px;
        height: 400px;
        background-repeat: no-repeat;
        margin: 0;
    }
    /*  */
    #links a {
        display: block;
    }
    #links_download {
        background: url(http://127.0.0.1:3500/img/index/down_26e4b6f.gif) no-repeat;
        width: 190px;
        height: 80px;
        position: relative;
    }
    .g-thide {
        text-indent: -9999px;
    }
    /* 背景定位区 */
    #links, #links_koudai, #links_koudai:hover, #links .icon0, #links .icon1, #links .icon2, #links .icon3, #links .icon4, #links .icon5 {
        background-image: url(http://127.0.0.1:3500/img/index/links_z_5c53c5f.png);
    }
    #links_koudai {
        background-position: -190px 0px;
    }
    #links_koudai {
        width: 190px;
        height: 80px;
        -webkit-transition: all .5s ease;
        -moz-transition: all .5s ease;
        -ms-transition: all .5s ease;
        -o-transition: all .5s ease;
        transition: all .5s ease;
        background-repeat: no-repeat;
    }
    /* 下载游戏下方列表 */
    #links li {
        float: left;
        width: 50%;
        height: 80px;
    }
    #links .icon0 {
        background-position: -190px -160px;
        background-repeat: no-repeat;
    }
    #links li i {
        width: 30px;
        height: 30px;
        display: block;
        margin: 15px auto 3px;
        -webkit-transition: all .5s ease;
        -moz-transition: all .5s ease;
        -ms-transition: all .5s ease;
        -o-transition: all .5s ease;
        transition: all .5s ease;
    }
    #links li i:hover{
        transform:rotateY(180deg);
    }
    #links li em {
        display: block;
        font-style: normal;
        color: #fff;
        font-size: 12px;
        text-align: center;
        -webkit-transition: all .5s ease;
        -moz-transition: all .5s ease;
        -ms-transition: all .5s ease;
        -o-transition: all .5s ease;
        transition: all .5s ease;
    }
    #links li em:hover{
        transform:rotateY(40deg);
    }
    
    #links .icon1 {
        background-position: -220px -160px;
        background-repeat: no-repeat;
    }
    #links .icon2 {
        background-position: -250px -160px;
        background-repeat: no-repeat;
    }
    #links .icon3 {
        background-position: -280px -160px;
        background-repeat: no-repeat;
    }
    #links .icon4 {
        background-position: -310px -160px;
        background-repeat: no-repeat;
    }
    #links .icon5 {
        background-position: -340px -160px;
        background-repeat: no-repeat;
    }
    /* 中间 */
    /* 容器 */
    #banner {
        width: 700px;
        height: 400px;
        position: relative;
        background: #fff;
        margin-top:-399px;
        margin-left: 211px;
    }
    .fl {
        float: left;
    }
    #hotlinkbox-switch {
        position: absolute;
        z-index: 1;
        right: 0;
        top: 0;
    }
    #hotlinkbox-content {
        width: 700px;
        height: 400px;
    }

    #hotlinkbox-switch a:hover, #hotlinkbox-switch a.current {
        background: #ae844f;
        color: #fff;
    }
    #hotlinkbox-switch a {
        display: block;
        width: 50px;
        height: 30px;
        line-height: 30px;
        background: #fff;
        color: #ae844f;
        font-size: 14px;
        text-align: center;
        float: left;
    }
    #hotlinkbox-content>div.current {
        display: block;
    }
    #hotlinkbox-content .hd {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 36px;
        left: 0;
        bottom: 0;
    }
    /* 右边 */
    #newsbox {
        position: absolute;
        width: 470px;
        height: 400px;
        top:0px;
        left: 937px;
        background: #fff;
        overflow: hidden;
    }
    #newsbox .newsbox-tab {
        width: 410px;
        height: 45px;
        margin: 10px auto 0;
        border-bottom: 1px solid #d5d2d2;
        box-sizing: border-box;
    }
    #newsbox .newsbox-tab li {
        float: left;
        width: 82px;
        text-align: center;
        height: 45px;
        line-height: 45px;
        position: relative;
        overflow: hidden;
    }
    #newsbox .newsbox-tab li a {
        color: #303030;
        display: block;
        width: 100%;
        height: 35px;
        margin-bottom: 10px;
    }
    #newsbox .newsbox-tab li:hover a, #newsbox .newsbox-tab li.on a {
        color: #b79b58;
        font-weight: 700;
    }
    #newsbox .newsbox-tab li:hover i, #newsbox .newsbox-tab li.on i {
        background: url(http://127.0.0.1:3500/img/index/new-active_7ae264a.png) no-repeat;
        width: 73px;
        height: 10px;
        position: absolute;
        bottom: 0;
        left: 5px;
        -webkit-transform: translateY(0);
        -moz-transform: translateY(0);
        -ms-transform: translateY(0);
        -o-transform: translateY(0);
        transform: translateY(0);
        -webkit-opacity: 1;
        -moz-opacity: 1;
        opacity: 1;
        filter: alpha(opacity=100);
    }
    /* 热搜 */
    #newsbox .newsbox-hot {
        width: 410px;
        margin: 0 auto;
        padding: 10px 0 0;
    }
    #newsbox .newsbox-hot p {
        line-height: 26px;
        height: 26px;
        overflow: hidden;
        width: 100%;
        font-weight: 700;
        text-align: left;
    }
    #newsbox .newsbox-hot a {
        color: #ce0f00;
        font-size: 16px;
    }
    #newsbox .newsbox-hot a:hover {
        text-decoration: underline;
    }
    #newsbox .newsbox-hot .icon {
        display: inline-block;
        margin-left: 3px;
    }
    .icon26 {
        width: 31px;
        height: 12px;
        background-repeat: no-repeat;
        background-position: -1466px -62px;
    }
    /* 消息内容 */
    #newsbox .newsbox-list {
        padding-top: 10px;
        width: 410px;
        margin: 0 auto;
        height: 200px;
        font-size: 14px;
        overflow: hidden;
        position: relative;;
    }
    #newsbox .newsbox-list li {
        background: url(http://127.0.0.1:3500/img/index/news-li_9d32798.png) no-repeat left 10px;
        padding-left: 15px;
        width: 395px;
        overflow: hidden;
        height: 32px;
        color: #444;
        line-height: 32px;
    }
    #newsbox .newsbox-list li .date {
        float: right;
    }
    #newsbox .newsbox-list li a {
        font-size: 14px;
        color: #686868;
        z-index: 999999;
    }
    #newsbox .newsbox-list li a:hover {
        text-decoration: underline;
    }
    /* 搜索功能区 */
    #searchbox {
        height: 70px;
        background: #fff;
        width: 411px;
        margin: 0 auto;
        border-top: 1px dashed #ccc;
    }
    #searchbox #qsearch {
        height: 32px;
        line-height: 32px;
        width: 411px;
        margin: 0 auto;
    }
    #searchbox #qsearch li {
        height: 32px;
        line-height: 32px;
        float: left;
        margin-right: 2px;
        list-style: none;
    }
    #searchbox #qsearch a {
        color: #3e3a39;
        font-size: 12px;
        padding-left: 6px;
        background: url(http://127.0.0.1:3500/img/index/li2_d3e1170.gif) no-repeat left center;
    }
    .fr {
        float: right;
    }
    #searchbox #qsearch .fr a {
        color: #5f6abd;
    }
    #searchbox #search {
        background-position: -1378px -32px;
    }
    #searchbox #search {
        width: 411px;
        height: 27px;
        margin: 0 auto;
        background-repeat: no-repeat;
    }
    #searchbox #searchKeyWords {
        width: 375px;
        height: 27px;
        border: 0;
        background: transparent;
        display: block;
        float: left;
        text-indent: 10px;
        line-height: 27px;
        color: #000;
    }
    #searchbox #search .btn {
        width: 33px;
        height: 27px;
        text-indent: -999em;
        display: block;
        float: right;
    }
    #searchbox #search .btn:hover {
        background-position: -1345px -32px;
        background-repeat: no-repeat;
    }
    /* 轮播 */
    /* #hotlinkbox-content>div.current {
        display: block;
    } */
   #hotlinkbox-content .hd {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 36px;
        left: 0;
        bottom: 0;
    }
    #hotlinkbox-content .hd li:hover, #hotlinkbox-content .hd li.on, #hotlinkbox-content .hd li.current {
        color: #f8f8ff;
        background: #cebbff;
    }
    #hotlinkbox-content .hd li {
        float: left;
        overflow: hidden;
        height: 36px;
        line-height: 36px;
        background: #8584c3;
        text-align: center;
        font-size: 14px;
        color: #f8f8ff;
        cursor: pointer;
    }
    /* 视频结束 */


    /* 背景定位区 */
    #job .sex .s_female, #job .sex .s_female:hover, #job .sex .s_female.active, #job .sex .s_male, #job .sex .s_male:hover, #job .sex .s_male.active, .slidebar .slide-top, .slidebar .slide-top:hover, .slidebar .slide-goindex, .slidebar .slide-goindex:hover, #newsbox .newsbox-list .news-special .icon32, .pop-mailbox .content.content-1 input, #data .g_item1 .more, #data .icon3, #data .icon1, #zrxContainer .swiper-button-next, #zrxContainer .swiper-button-prev, #searchbox #search .btn:hover, #searchbox #search, #job .race_list .detail_btn i, .slidebar .slide-icons .xs1 span, .slidebar .slide-icons .xs2 span, .slidebar .slide-icons .xs3 span, .slidebar .slide-icons .xs4 span, .pop-mailbox .content.content-1 p::before, #media .icon-game, #media .icon-work, #media .icon-video, #media .icon-music, .slidebar .slide-toggle.open i {
        background-image: url(http://127.0.0.1:3500/img/index/index_z_d27c443.png);
    }

    /* 第二层职业介绍 */
    /* .block2{
        opacity: 0;
    } */
    #job {
        background: url(http://127.0.0.1:3500/img/index/bg2_c5c2994.jpg) no-repeat center top;
        height: 500px;
        position: relative;
        margin-top: 51px;
        opacity: 0;
        -o-transform: all 2s;
        -moz-transform: all 2s;
        -webkit-transform: all 2s;
        -ms-transform: all 2s;
        transition: all 2s;
        /* width: 1718px; */
    }
   #job .main {
        height: 572px;
        position: relative;
        top: -72px;
    }
    /* .main {
        width: 1400px;
        margin: 0 auto;
        position: relative;
    } */

    .show {
        display: block !important;
    }
    #job .race_nav {
        border-bottom: 1px solid #d5d2d2;
        position: absolute;
        left: -180px;
        top: 67px;
        z-index: 2;
        background: url(http://127.0.0.1:3500/img/index/nav-bg_4973dba.png) no-repeat;
        width: 375px;
        height: 505px;
    }
    #job .suizi {
        background: url(http://127.0.0.1:3500/img/index/suizi_27a3f4c.png) no-repeat;
        width: 22px;
        height: 107px;
        position: absolute;
        left: 164px;
        top: 5px;
        -webkit-transform-origin: center top;
        transform-origin: center top;
        -webkit-animation: suizi 3s linear infinite 300ms 0 ease;
        -moz-animation: suizi 3s linear infinite 300ms 0 ease;
        -ms-animation: suizi 3s linear infinite 300ms 0 ease;
        animation: suizi 3s linear infinite 300ms 0 ease;
        -moz-animation: suizi 3s linear infinite;
        -webkit-animation: suizi 3s linear infinite;
        -o-animation: suizi 3s linear infinite;
        -ms-animation: suizi 3s linear infinite;
        animation: suizi 3s linear infinite;
    }
    @-ms-keyframes suizi {
        0% {transform:rotate(-15deg)}
        25% {transform:rotate(0deg)}
        50% {transform:rotate(15deg);}
        75% {transform:rotate(0deg);}
        100% {transform:rotate(-15deg);}
    }
    @-webkit-keyframes suizi {
        0% {transform:rotate(-15deg)}
        25% {transform:rotate(0deg)}
        50% {transform:rotate(15deg);}
        75% {transform:rotate(0deg);}
        100% {transform:rotate(-15deg);}
    }
    @-o-keyframes suizi {
        0% {transform:rotate(-15deg)}
        25% {transform:rotate(0deg)}
        50% {transform:rotate(15deg);}
        75% {transform:rotate(0deg);}
        100% {transform:rotate(-15deg);}
    }
    @-moz-keyframes suizi {
        0% {transform:rotate(-15deg)}
        25% {transform:rotate(0deg)}
        50% {transform:rotate(15deg);}
        75% {transform:rotate(0deg);}
        100% {transform:rotate(-15deg);}
    }
    @keyframes suizi {
        0% {transform:rotate(-15deg)}
        25% {transform:rotate(0deg)}
        50% {transform:rotate(15deg);}
        75% {transform:rotate(0deg);}
        100% {transform:rotate(-15deg);}
    }
    #job .cloud1 {
        background: url(http://127.0.0.1:3500/img/index/cloud1_15f9a08.png) no-repeat;
        position: absolute;
        left: 0;
        top: 0;
        width: 375px;
        height: 505px;
        -webkit-animation: cloud1 8s linear infinite 300ms 0 ease;
        -moz-animation: cloud1 8s linear infinite 300ms 0 ease;
        -ms-animation: cloud1 8s linear infinite 300ms 0 ease;
        animation: cloud1 8s linear infinite 300ms 0 ease;
        -moz-animation: cloud1 8s linear infinite;
        -webkit-animation: cloud1 8s linear infinite;
        -o-animation: cloud1 8s linear infinite;
        -ms-animation: cloud1 8s linear infinite;
        animation: cloud1 8s linear infinite;
    }
    @-ms-keyframes cloud1 {
        0% {transform:translateX(5%)}
        25% {transform:translateX(0)}
        50% {transform:translateX(5%)}
        75% {transform:translateX(0)}
        100% {transform:translateX(5%)}
    }
    @-o-keyframes cloud1 {
        0% {transform:translateX(5%)}
        25% {transform:translateX(0)}
        50% {transform:translateX(5%)}
        75% {transform:translateX(0)}
        100% {transform:translateX(5%)}
    }
    @-moz-keyframes cloud1 {
        0% {transform:translateX(5%)}
        25% {transform:translateX(0)}
        50% {transform:translateX(5%)}
        75% {transform:translateX(0)}
        100% {transform:translateX(5%)}
    }
    @-webkit-keyframes cloud1 {
        0% {transform:translateX(5%)}
        25% {transform:translateX(0)}
        50% {transform:translateX(5%)}
        75% {transform:translateX(0)}
        100% {transform:translateX(5%)}
    }
    @keyframes cloud1 {
        0% {transform:translateX(5%)}
        25% {transform:translateX(0)}
        50% {transform:translateX(5%)}
        75% {transform:translateX(0)}
        100% {transform:translateX(5%)}
    }
    #job .cloud2 {
        background: url(http://127.0.0.1:3500/img/index/cloud2_a04dc46.png) no-repeat;
        position: absolute;
        left: 0;
        top: 0;
        width: 375px;
        height: 505px;
        -webkit-animation: cloud2 10s linear infinite 300ms 0 ease;
        -moz-animation: cloud2 10s linear infinite 300ms 0 ease;
        -ms-animation: cloud2 10s linear infinite 300ms 0 ease;
        animation: cloud2 10s linear infinite 300ms 0 ease;
        -moz-animation: cloud2 10s linear infinite;
        -webkit-animation: cloud2 10s linear infinite;
        -o-animation: cloud2 10s linear infinite;
        -ms-animation: cloud2 10s linear infinite;
        animation: cloud2 10s linear infinite;
    }
    @-ms-keyframes cloud2 {
        0% {transform:translateX(-5%)}
        25% {transform:translateX(0)}
        50% {transform:translateX(-5%)}
        75% {transform:translateX(0)}
        100% {transform:translateX(-5%)}
    }
    @-o-keyframes cloud2 {
        0% {transform:translateX(-5%)}
        25% {transform:translateX(0)}
        50% {transform:translateX(-5%)}
        75% {transform:translateX(0)}
        100% {transform:translateX(-5%)}
    }
    @-moz-keyframes cloud2 {
        0% {transform:translateX(-5%)}
        25% {transform:translateX(0)}
        50% {transform:translateX(-5%)}
        75% {transform:translateX(0)}
        100% {transform:translateX(-5%)}
    }
    @-webkit-keyframes cloud2 {
        0% {transform:translateX(-5%)}
        25% {transform:translateX(0)}
        50% {transform:translateX(-5%)}
        75% {transform:translateX(0)}
        100% {transform:translateX(-5%)}
    }
    @keyframes cloud2 {
        0% {transform:translateX(-5%)}
        25% {transform:translateX(0)}
        50% {transform:translateX(-5%)}
        75% {transform:translateX(0)}
        100% {transform:translateX(-5%)}
    }
    #job .race_nav>ul {
        width: 130px;
        height: 500px;
        position: absolute;
        top: 40px;
        right: 45px;
        list-style: none;
    }
    #job .race_nav>ul>li {
        width: 115px;
    }
    #job .race_nav li {
        height: 30px;
        text-align: center;
        margin-bottom: 12px;
        position: relative;
    }
    
    #job .race_nav li a {
        text-indent: -999em;
        display: block;
        font-size: 16px;
        line-height: 50px;
        background: url(http://127.0.0.1:3500/img/index/nav_de36200.png) no-repeat;
        width: 88px;
        height: 30px;
    }
    #job .race_nav li .new {
        position: absolute;
        right: -5px;
        top: 9px;
        width: 30px;
        height: 10px;
        background: url(http://127.0.0.1:3500/img/index/new_82d2045.png) right bottom no-repeat;
    }
    
    /* 画魂 */
    #job .race_nav .nav4:hover,#job .race_nav .nav4.active {
        background-position: -88px -129px;
    }
    #job .race_nav .nav4 {
        background-position: 0 -129px;
    }
    /* #job .race_nav .nav4hh{
        background-position: -88px -129px !important;
    } */
    /*  */

    /* 偃师 */
    #job .race_nav .nav5 {
        background-position: 0 -171px;
    }
    #job .race_nav .nav5:hover, #job .race_nav .nav5.active {
        background-position: -88px -171px;
    }
    /*  */

    /* 甲士 */
    #job .race_nav .nav6:hover, #job .race_nav .nav6.active {
        background-position: -88px -216px;
    }
    #job .race_nav .nav6 {
        background-position: 0 -216px;
    }
    /*  */

    /* 射手 */
    #job .race_nav .nav3 {
        background-position: 0 -85px;
    }
    #job .race_nav .nav3:hover, #job .race_nav .nav3.active {
        background-position: -88px -85px;
    }
    /*  */

    /* 刀客 */
    #job .race_nav .nav2:hover, #job .race_nav .nav2.active {
        background-position: -88px -42px;
    }

    #job .race_nav .nav2 {
        background-position: 0 -42px;
    }
    /*  */

    /* 侠客 */
    #job .race_nav .nav8 {
        background-position: 0 -302px;
    }
    #job .race_nav .nav8:hover, #job .race_nav .nav8.active {
        background-position: -88px -302px;
    }
    /*  */

    /* 方士 */
    #job .race_nav .nav9 {
        background-position: 0 -345px;
    }
    #job .race_nav .nav9:hover, #job .race_nav .nav9.active {
        background-position: -88px -345px;
    }
    /*  */

    /* 医师 */
    #job .race_nav .nav7 {
        background-position: 0 -260px;
    }
    #job .race_nav .nav7:hover, #job .race_nav .nav7.active {
        background-position: -88px -260px;
    }
    /*  */

    /* 魅者 */
    #job .race_nav .nav1 {
        background-position: 0 0;
    }
    #job .race_nav .nav1:hover, #job .race_nav .nav1.active {
        background-position: -88px 0;
    }
    /*  */

    /* 异人 */
    #job .race_nav .nav10 {
        background-position: 0 bottom;
    }
    #job .race_nav .nav10:hover, #job .race_nav .nav10.active {
        background-position: -88px bottom;
    }
    /*  */

    /* 分支 */
   
    /* 显示区 */
    #job .race_list {
        position: absolute;
        width: 1420px;
        height: 558px;
        top:180px;
        left: 201px;
        bottom: 0;
        z-index: 1;
    }
    /* 魅者 */
    #job .mz .name {
        background: url(http://127.0.0.1:3500/img/index/mz_6040f04.png) no-repeat;
        width: 432px;
        height: 94px;
        margin-top: -210px;
        margin-left: -455px;
    }
    #job .race_list .name {
        position: absolute;
        top: 100px;
        left: 471px;
        transform: translateY(50px);
        -webkit-transform: translateY(50px);
    }
    #job .line {
        background: url(http://127.0.0.1:3500/img/index/line_9a32266.png) no-repeat;
        width: 476px;
        height: 25px;
        position: absolute;
        left: -7px;
        top: -23px;
        transform: translateY(50px);
        -webkit-transform: translateY(50px);
    }
    #job .race_list .detail_btn {
        background-position: -574px -1117px;
        position: absolute;
        left: 10px;
        top: 238px;
        width: 285px;
        height: 54px;
        text-align: center;
        color: #fff;
        font-size: 22px;
        line-height: 54px;
        z-index: 2;
        transform: translateY(50px);
        -webkit-transform: translateY(50px);
        background-repeat: no-repeat;
    }
    #job .race_list .detail_btn:hover i{
        transform:rotate(180deg);
    }
    #job .race_list .detail_btn i {
        background-position: -1222px -62px;
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-left: 5px;
        vertical-align: middle;
        -webkit-transition: transform .3s ease;
        -moz-transition: transform .3s ease;
        -ms-transition: transform .3s ease;
        -o-transition: transform .3s ease;
        transition: transform .3s ease;
        background-repeat: no-repeat;
    }
    #job .mz .leida {
        background-position: -326px -748px;
    }
    #job .mz .leida {
        background-repeat: no-repeat;
    }
    #job .race_list .leida {
        position: absolute;
        width: 170px;
        height: 153px;
        top: 34px;
        left: 322px;
        transform: translateY(50px);
        -webkit-transform: translateY(50px);
    }
    #job .body-video {
        background: url(http://127.0.0.1:3500/img/index/video_9e2b564.png) no-repeat;
        width: 285px;
        height: 164px;
        position: absolute;
        left: 9px;
        top: 33px;
        z-index: 2;
        -webkit-transition: all 5s;
        -o-transition: all 5s;
        -moz-transition: all 5s;
        transition: all 5s;
        /* transform: translateY(50px);
        -webkit-transform: translateY(50px); */
    }
    #job .body-video video {
        display: block;
        width: 277px;
        height: 156px;
        margin-left: 4px;
        margin-top: 4px;
    }
    #job .sex {
        background-position: -641px -964px;
    }
    #job .sex {
        position: absolute;
        left: 538px;
        top: 246px;
        width: 52px;
        height: 101px;
        z-index: 2;
        background-repeat: no-repeat;
    }
    #job .sex .s_male:hover, #job .sex .s_male.active {
        background-position: -1006px -833px;
        background-repeat: no-repeat;
    }
    #job .sex .s_male {
        background-position: -1144px -918px;
        background-repeat: no-repeat;
    }
    #job .sex .s_female:hover, #job .sex .s_female.active {
        background-position: -1098px -918px;
        background-repeat: no-repeat;
    }
    #job .sex .s_female {
        background-position: -1052px -918px;
        background-repeat: no-repeat;
    }
    #job .sex a {
        width: 46px;
        height: 46px;
        margin: 0 auto 6px;
        display: block;
        font-size: 0;
    }
    #job .sex .s_female {
        background-position: -1052px -918px;
    }
    #job .sex .s_female {
        background-repeat: no-repeat;
    }
    #job .sex a {
        width: 46px;
        height: 46px;
        margin: 0 auto 6px;
        display: block;
        font-size: 0;
    }
    #job .mz .male{
        background: url(http://127.0.0.1:3500/img/index/mz-nan_17570fe.png) no-repeat;
        opacity: 0;
        -o-transform: all 1.5s;
        -moz-transform: all 1.5s;
        -webkit-transform: all 1.5s;
        -ms-transform: all 1.5s;
        transition: all 1.5s;
    }
    #job .race_list .person {
        width: 1920px;
        height: 665px;
        position: absolute;
        left: -479px;
        top:-255px;
        bottom: 0;
        /* transform: translateX(100px);
        -webkit-transform: translateX(100px); */
    }
    #job .mz .female {
        background: url(http://127.0.0.1:3500/img/index/mz-nv_82fbd9a.png) no-repeat;
        opacity: 1;
        top:277px;
        transition: all 2s;
    }
    /* #job .race_list .person {
        width: 1828px;
        height: 665px;
        position: absolute;
        left: -479px;
        top:479px;
        bottom: 0;
        transition: all 1.5s;
        transform: translateX(100px);
        -webkit-transform: translateX(100px);
    } */
    /* 视频里的按钮 */
    #job .body-video .border {
        width: 65px;
        height: 64px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -32px;
        margin-top: -32px;
        background-position: -996px -964px;
        background-repeat: no-repeat;
    }
    #job .body-video i {
        width: 65px;
        height: 64px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -32px;
        margin-top: -32px;
        cursor: pointer;
        -webkit-animation: play 3s linear infinite 300ms 0 ease;
        -moz-animation: play 3s linear infinite 300ms 0 ease;
        -ms-animation: play 3s linear infinite 300ms 0 ease;
        animation: play 3s linear infinite 300ms 0 ease;
        -moz-animation: play 3s linear infinite;
        -webkit-animation: play 3s linear infinite;
        -o-animation: play 3s linear infinite;
        -ms-animation: play 3s linear infinite;
        animation: play 3s linear infinite;
        background-repeat: no-repeat;
    }
    #job .body-video i {
        background-position: -931px -964px;
    }
    @-ms-keyframes play {
        0% {transform: rotate(0deg)}
        20% {transform: rotate(60deg)}
        40% {transform: rotate(120deg)}
        60% {transform: rotate(180deg)}
        80% {transform: rotate(270deg)}
        100% {transform: rotate(360deg)}
    }
    @-webkit-keyframes play {
        0% {transform: rotate(0deg)}
        20% {transform: rotate(60deg)}
        40% {transform: rotate(120deg)}
        60% {transform: rotate(180deg)}
        80% {transform: rotate(270deg)}
        100% {transform: rotate(360deg)}
    }
    @-moz-keyframes play {
        0% {transform: rotate(0deg)}
        20% {transform: rotate(60deg)}
        40% {transform: rotate(120deg)}
        60% {transform: rotate(180deg)}
        80% {transform: rotate(270deg)}
        100% {transform: rotate(360deg)}
    }
    @-o-keyframes play {
        0% {transform: rotate(0deg)}
        20% {transform: rotate(60deg)}
        40% {transform: rotate(120deg)}
        60% {transform: rotate(180deg)}
        80% {transform: rotate(270deg)}
        100% {transform: rotate(360deg)}
    }
    @keyframes play {
        0% {transform: rotate(0deg)}
        20% {transform: rotate(60deg)}
        40% {transform: rotate(120deg)}
        60% {transform: rotate(180deg)}
        80% {transform: rotate(270deg)}
        100% {transform: rotate(360deg)}
    }
    /* 断刀 */
    #job .duanhen .name {
        width: 494px;
        height: 80px;
        margin-top: -209px;
        margin-left: -473px;
        background: url(http://127.0.0.1:3500/img/index/duanhen_31c2dd7.png) no-repeat;
    }
    #job .duanhen .male {
        background: url(http://127.0.0.1:3500/img/index/duanhen-nan_7348d8f.png) no-repeat;
        opacity: 0;
    }
    #job .duanhen .female {
        background: url(http://127.0.0.1:3500/img/index/duanhen-nv_9d25668.png) no-repeat;
        opacity: 1;
        transition: all 2s;
        /* top:300px; */
    }
    #job .duanhen .ymy{
        top:300px;
        transition: all 2s;
    }
    #job .duanhen .leida {
        background-position: 0px -964px;
        background-repeat: no-repeat;
    }

    /* 射手 */
    #job .ss .name {
        background: url(http://127.0.0.1:3500/img/index/ss_f23a02e.png) no-repeat;
        width: 431px;
        height: 93px;
    }
    #job .ss .male {
        background: url(http://127.0.0.1:3500/img/index/ss-nan_1263b9a.png) no-repeat;
    }
    #job .ss .female {
        background: url(http://127.0.0.1:3500/img/index/ss-nv_8e18e95.png) no-repeat;
        transition: all 2s;
        top:300px;
    }
    #job .ss .leida {
        background-position: -156px -748px;
        background-repeat: no-repeat;
    }

    /* 画魂 */
    #job .hh .name {
        background: url(http://127.0.0.1:3500/img/index/hh_9b3dcf9.png) no-repeat;
        width: 430px;
        height: 93px;
    }
    #job .hh .male {
        background: url(http://127.0.0.1:3500/img/index/hh-nan_0ad30ee.png) no-repeat;
    }
    #job .hh .female {
        background: url(http://127.0.0.1:3500/img/index/hh-nv_a22b896.png) no-repeat;
    }
    #job .hh .leida {
        background-position: -496px -748px;
        background-repeat: no-repeat;
    }
    /* 偃师 */
    #job .ys .name {
        background: url(http://127.0.0.1:3500/img/index/yans_a41dd1c.png) no-repeat;
        width: 432px;
        height: 92px;
    }
    #job .ys .male {
        background: url(http://127.0.0.1:3500/img/index/yans-nan_e0b7f9d.png) no-repeat;
    }
    #job .ys .female {
        background: url(http://127.0.0.1:3500/img/index/yans-nv_2b747ac.png) no-repeat;
    }
    #job .ys .leida {
        background-position: -1052px -153px;
    }
    #job .ys .leida {
        background-repeat: no-repeat;
    }
    #job .ys .female{
        transition: all 2s;
        top:300px;
    }
    /* 金刚甲 */
    #job .jingang .name {
        width: 499px;
        height: 81px;
        background: url(http://127.0.0.1:3500/img/index/jingang_9256cc1.png) no-repeat;
    }
    #job .jingang .male {
        background: url(http://127.0.0.1:3500/img/index/jingang-nan_55817a7.png) no-repeat;
    }
    #job .jingang .female {
        background: url(http://127.0.0.1:3500/img/index/jingang-nv_5330489.png) no-repeat;
        top:300px;
        transition: all 2s;
    }
    #job .jingang .leida {
        background-position: -666px -748px;
        background-repeat: no-repeat;
    }
    /* 医师 */
    #job .yishi .name {
        width: 428px;
        height: 93px;
        background: url(http://127.0.0.1:3500/img/index/ys_7291ef2.png) no-repeat;
    }
    #job .yishi .leida {
        background-position: -1052px -612px;
        background-repeat: no-repeat;
    }
    #job .yishi .male {
        background: url(http://127.0.0.1:3500/img/index/ys-nan_ef9b44e.png) no-repeat;
    }
    #job .yishi .female {
        background: url(http://127.0.0.1:3500/img/index/ys-nv_fe8ede0.png) no-repeat;
        top:300px;
    }
    /* 侠客 */
    #job .xk .name {
        width: 432px;
        height: 95px;
        background: url(http://127.0.0.1:3500/img/index/xk_bc3ae01.png) no-repeat;
    }
    #job .xk .leida {
        background-repeat: no-repeat;
        background-position: -1052px -306px;
    }
    #job .xk .male {
        background: url(http://127.0.0.1:3500/img/index/xk-nan_7ffe64f.png) no-repeat;
    }
    #job .xk .female {
        background: url(http://127.0.0.1:3500/img/index/xk-nv_3479986.png) no-repeat;
        top:300px;
    }
    /* 方士 */
    #job .fs .name {
        width: 429px;
        height: 92px;
        background: url(http://127.0.0.1:3500/img/index/fs_ef77185.png) no-repeat;
    }
    #job .fs .leida {
        background-position: -1052px -765px;
        background-repeat: no-repeat;
    }
    #job .fs .male {
        background: url(http://127.0.0.1:3500/img/index/fs-nan_5e3ffbb.png) no-repeat;
    }
    #job .fs .female {
        background: url(http://127.0.0.1:3500/img/index/fs-nv_2d69d76.png) no-repeat;
        top:300px;
    }
    /* 异人 */
    #job .yr .name {
        width: 432px;
        height: 92px;
        background: url(http://127.0.0.1:3500/img/index/yr_2c2be80.png) no-repeat;
    }
    #job .yr .leida {
        background-position: -1052px -459px;
        background-repeat: no-repeat;
    }
    #job .yr .male {
        background: url(http://127.0.0.1:3500/img/index/yr-nan_48934fc.png) no-repeat;
    }
    #job .yr .female {
        background: url(http://127.0.0.1:3500/img/index/yr-nv_5d7e54c.png) no-repeat;
        top:300px;
    }



    /*  */
     



    /* 展示区 */
    #media {
        height: 550px;
        position: relative;
        overflow: hidden;
        z-index: 2;
        /* 临时背景色 */
        background: #e5e5e5;
    }
    #media .role {
        background: url(http://127.0.0.1:3500/img/index/bg-role_26b7662.png) no-repeat center bottom;
        width: 100%;
        height: 622px;
    }

    #media .nav {
        padding-top: 14px;
        width: 125px;
        height: 442px;
        position:absolute;
        left: 242px;
        top:74px;
        list-style: none;
        background: url(http://127.0.0.1:3500/img/index_show/nav_41eecb3.png) no-repeat;
    }
    .s_nav.active {
        color: #fff0c3;
        background: url(http://127.0.0.1:3500/img/index_show/nav2_bb817e8.png) no-repeat;
    }
    #media .nav .s_nav1 {
        height: 71px;
    }
    #media .nav .s_nav {
        cursor: pointer;
        width: 125px;
        height: 70px;
        padding-top: 12px;
        font-size: 0;
        text-align: center;
        color: #ebe5ff;
        line-height: 1.2;
        position: relative;
    }
    #media .s_navvan{
        margin-top: -14px;
        height: 86px !important;
    }
    #media .nav .s_nav:hover, #media .nav .s_nav.active {
        color: #fff0c3;
        background: url(http://127.0.0.1:3500/img/index_show/nav2_bb817e8.png) no-repeat;
    }
    #media .nav .s_nav:hover .wave, #media .nav .s_nav.active .wave {
        display: block;
    }
    #media .wave {
        width: 115px;
        height: 27px;
        position: absolute;
        bottom: 0;
        left: 5px;
        overflow: hidden;
        display: none;
    }
    #media .wave .wave1, #media .wave .wave2 {
        left: 0;
        top: 0;
    }
    #media .wave .wave2, #media .wave .wave4, #media .wave .wave6 {
        -webkit-animation: wave2 10s linear infinite 300ms 0 ease;
        -moz-animation: wave2 10s linear infinite 300ms 0 ease;
        -ms-animation: wave2 10s linear infinite 300ms 0 ease;
        animation: wave2 10s linear infinite 300ms 0 ease;
        -moz-animation: wave2 10s linear infinite;
        -webkit-animation: wave2 10s linear infinite;
        -o-animation: wave2 10s linear infinite;
        -ms-animation: wave2 10s linear infinite;
        animation: wave2 10s linear infinite;
    }
    #media .wave .wave1,#media .wave .wave3, #media .wave .wave5 {
        -webkit-animation: wave2 6s linear infinite 300ms 0 ease;
        -moz-animation: wave2 6s linear infinite 300ms 0 ease;
        -ms-animation: wave2 6s linear infinite 300ms 0 ease;
        animation: wave2 6s linear infinite 300ms 0 ease;
        -moz-animation: wave2 6s linear infinite;
        -webkit-animation: wave2 6s linear infinite;
        -o-animation: wave2 6s linear infinite;
        -ms-animation: wave2 6s linear infinite;
        animation: wave2 6s linear infinite;
    }
    @-webkit-keyframes wave2{
        0%{transform:translateX(0)}
        100%{transform:translateX(-230px)}
    }
    @-moz-keyframes wave2{
        0%{transform:translateX(0)}
        100%{transform:translateX(-230px)}
    }
    @-o-keyframes wave2{
        0%{transform:translateX(0)}
        100%{transform:translateX(-230px)}
    }
    @-ms-keyframes wave2{
        0%{transform:translateX(0)}
        100%{transform:translateX(-230px)}
    }
    @keyframes wave2{
        0%{transform:translateX(0)}
        100%{transform:translateX(-230px)}
    }
    #media .wave .wave1, #media .wave .wave2 {
        left: 0;
        top: 0;
    }
    #media .wave img {
        width: 100%;
        display: block;
        position: absolute;
    }
    #media .wave .wave3, #media .wave .wave4 {
        left: 115px;
        top: 0;
    }
    #media .wave .wave5, #media .wave .wave6 {
        left: 230px;
        top: 0;
    }
    #media .nav .s_nav2:hover,#media .nav .s_nav2.active{
        background-position:0 -96px;
    }
    #media .nav .s_nav3:hover,#media .nav .s_nav3.active{
        background-position:0 -178px;
    }
     #media .nav .s_nav4:hover,#media .nav .s_nav4.active{
        background-position:0 -260px;
    }
    #media .cover {
        background-position: -1663px -621px;
        width: 125px;
        height: 49px;
        position: absolute;
        bottom: 80px;
        left: 0;
        background-repeat: no-repeat;
    }
    #media .nav .suizi {
        background-position: -1427px -276px;
    }
    #media .nav .suizi {
        width: 12px;
        height: 85px;
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -6px;
        -webkit-transform-origin: center top;
        transform-origin: center top;
        -webkit-animation: suizi 3s linear infinite 300ms 0 ease;
        -moz-animation: suizi 3s linear infinite 300ms 0 ease;
        -ms-animation: suizi 3s linear infinite 300ms 0 ease;
        animation: suizi 3s linear infinite 300ms 0 ease;
        -moz-animation: suizi 3s linear infinite;
        -webkit-animation: suizi 3s linear infinite;
        -o-animation: suizi 3s linear infinite;
        -ms-animation: suizi 3s linear infinite;
        animation: suizi 3s linear infinite;
        background-repeat: no-repeat;
    }
    /* 后续 */
    #media .cover,#media .nav .suizi,#media .tabs li,#media #jcsp .btn-video, #media #jcsp .btn-video i,#media .icon-video,#media .tabs .more:hover,#media .tabs .more,#data .guide .title,#data .g_item1 .more,#data .bbs .title,#data .icon1,#data .icon2,#data .icon3,#data .md .title,#zrxContainer .swiper-button-next,#zrxContainer .swiper-button-prev{
        background-image: url(http://127.0.0.1:3500/img/index/index_z_f1581f1.png);
    }

    /* 内容 */
    #media .tabs {
        width: 1002px;
        /* margin-top: 110px; */
        position: absolute;
        /* top:0px;
        left: 0px; */
        top: 114px;
        left: 367px;
        transition: all 4.5s;
    }
    /* 精彩视频 */
    #media .tabs li {
        background-position: -1052px -505px;
        width: 330px;
        height: 216px;
        margin-right: 4px;
        margin-bottom: 4px;
        overflow: hidden;
        position: relative;
        float: left;
        cursor: pointer;
        background-repeat: no-repeat;
        list-style: none;
        -o-transition: all 5s;
        -moz-transition: all 5s;
        -webkit-transition: all 5s;
        transition: all 5s;
    }
    #media .tabs .img-wrap {
        width: 330px;
        height: 180px;
        overflow: hidden;
    }
    #media .tabs img {
        display: block;
        width: 330px;
        -webkit-transition: transform 1s ease-out;
        -moz-transition: transform 1s ease-out;
        -ms-transition: transform 1s ease-out;
        -o-transition: transform 1s ease-out;
        transition: transform 1s ease-out;
    }
    #media .tabs li:hover img{
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -ms-transform: scale(1.1);
        -o-transform: scale(1.1);
        transform: scale(1.1)
    }
    #media .tabs .mask {
        /* display: none; */
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0.9;
    }
    #media #jcsp .btn-video {
        background-position: -1591px -276px;
        width: 76px;
        height: 76px;
        position: absolute;
        left: 50%;
        margin: 52px 0 0 -38px;
        background-repeat: no-repeat;
    }
    #media #jcsp .btn-video i {
        background-position: -1439px -276px;
    }
    #media #jcsp .btn-video i {
        width: 76px;
        height: 76px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -38px 0 0 -38px;
        background-repeat: no-repeat;
    }
    #media #jcsp li:hover i{
        -moz-animation:rotate 2s ease infinite;
        -webkit-animation:rotate 2s ease infinite;
        -o-animation:rotate 2s ease infinite;
        -ms-animation:rotate 2s ease infinite;
        animation:rotate 2s ease infinite;
    }
    @-webkit-keyframes rotate{
        0% {transform:rotate(0deg)}
        100%{transform:rotate(360deg)}
    }
    @-moz-keyframes rotate{
        0%{transform:rotate(0deg)}
        100%{transform:rotate(360deg)}
    }
    @-o-keyframes rotate{
        0%{transform:rotate(0deg)}
        100%{transform:rotate(360deg)}
    }
    @-ms-keyframes rotate{
        0%{transform:rotate(0deg)}
        100%{transform:rotate(360deg)}
    }
    @keyframes rotate{
        0%{transform:rotate(0deg)}
        100%{transform:rotate(360deg)}
    }

    #media i {
        display: inline-block;
        width: 17px;
        height: 17px;
        vertical-align: sub;
        margin-right: 3px;
    }
    #media .tabs .bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 330px;
        height: 32px;
        line-height: 30px;
        font-size: 14px;
        color: #fff;
        text-align: center;
    }
    #media .icon-video {
        background-position: -1558px -847px;
    }
    #media .icon-video {
        background-repeat: no-repeat;
    }
    #media #jcsp {
        -o-transition: all 5s;
        -webkit-transition: all 5s;
        -moz-transition: all 5s;
        transition: all 5s;
    }
    #media #jcsp li:hover i{
        -webkit-animation:rotate 2s ease infinite 300ms 0 ease;
        -moz-animation:rotate 2s ease infinite 300ms 0 ease;
        -ms-animation:rotate 2s ease infinite 300ms 0 ease;
        animation:rotate 2s ease infinite 300ms 0 ease;
        -moz-animation:rotate 2s ease infinite;
        -webkit-animation:rotate 2s ease infinite;
        -o-animation:rotate 2s ease infinite;
        -ms-animation:rotate 2s ease infinite;
        animation:rotate 2s ease infinite
    }
    #media .tabs .more:hover {
        background-position: 0px -748px;
        background-repeat: no-repeat;
    }
    #media .tabs .more {
        display: block;
        position: absolute;
        right: -53px;
        bottom: 5px;
        width: 57px;
        height: 216px;
        text-indent: -999em;
        background-repeat: no-repeat;
        background-position: -57px -748px;
    }
   
    /*  */
    #data {
        position: relative;
        overflow: hidden;
        background: url(http://127.0.0.1:3500/img/footer/bg4_1f5d783.jpg) no-repeat;
        z-index: 1;
        height: 1330px;
    }
    /* .wrap {
        overflow: hidden;
        background: #f2f1ff url(https://qn.res.netease.com/pc/gw/20171101180612/img/bg4_1f5d783.jpg) no-repeat center 2318px;
    } */
    /* #data>.block4_bg{
        position: absolute;
        height: 100px;
        background: url(http://127.0.0.1:3500/img/footer/bg4_1f5d783.jpg);
    } */
    #pangyao {
        display: block;
        position: absolute;
        top: 276px;
        right: 200px;
        width: 300px;
        height: 300px;
        z-index: 99;
        background: url(http://127.0.0.1:3500/img/index_show/pangyao_aa9db43.png);
        -webkit-animation: pangyao 4s steps(50) infinite 300ms 0 ease;
        -moz-animation: pangyao 4s steps(50) infinite 300ms 0 ease;
        -ms-animation: pangyao 4s steps(50) infinite 300ms 0 ease;
        animation: pangyao 4s steps(50) infinite 300ms 0 ease;
        -moz-animation: pangyao 4s steps(50) infinite;
        -webkit-animation: pangyao 4s steps(50) infinite;
        -o-animation: pangyao 4s steps(50) infinite;
        -ms-animation: pangyao 4s steps(50) infinite;
        animation: pangyao 4s steps(50) infinite;
    }
    @-webkit-keyframes pangyao{
        0%{background-position:0 0}
        100%{background-position:0 -15000px}
    }
    @-moz-keyframes pangyao{
        0%{background-position:0 0}
        100%{background-position:0 -15000px}
    }
    @-ms-keyframes pangyao{
        0%{background-position:0 0}
        100%{background-position:0 -15000px}
    }
    @-o-keyframes pangyao{
        0%{background-position:0 0}
        100%{background-position:0 -15000px}
    }
    @keyframes pangyao{
        0%{background-position:0 0}
        100%{background-position:0 -15000px}
    }
    @-webkit-keyframes pangyao{
        0%{background-position:0 0}
        100%{background-position:0 -15000px}
    }
    @-moz-keyframes pangyao{
        0%{background-position:0 0}
        100%{background-position:0 -15000px}
    }
    @-ms-keyframes pangyao{
        0%{background-position:0 0}
        100%{background-position:0 -15000px}
    }
    @-o-keyframes pangyao{
        0%{background-position:0 0}
        100%{background-position:0 -15000px}
    }
    @keyframes pangyao{
        0%{background-position:0 0}
        100%{background-position:0 -15000px}
    }
   .animate.show {
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
    }
    .g_item1{
        position: absolute;
        top: 70px;
    }
    #data .guide {
        background: url(http://127.0.0.1:3500/img/index_show/bg_b7ac883.jpg) no-repeat;
        width: 425px;
        height: 477px;
        overflow: hidden;
    }
    #data .bbs {
        width: 425px;
        height: 477px;
        background: #fff;
        margin-left: 10px;
    }
    #data .md {
        width: 425px;
        height: 326px;
        margin-left: 10px;
        background: #fff;
    }
    #data .md .title {
        background-position: -1427px -558px;
    }
    #data .md .title {
        width: 425px;
        height: 63px;
        position: relative;
        background-repeat: no-repeat;
    }
    #data .guide .title {
        background-position: -1427px -432px;
    }
    #data .guide .title {
        width: 425px;
        height: 63px;
        background-repeat: no-repeat;
    }
    #data .g_item1 .title {
        position: relative;
    } 
    #data .g_item1 .wave {
        position: absolute;
        left: 0;
        width: 100%;
        height: 44px;
        bottom: 0;
        overflow: hidden;
    }
    #data .g_item1 .wave .wave1, #data .g_item1 .wave .wave2 {
        left: 0;
        top: 0;
    }
    #data .g_item1 .wave .wave3, #data .g_item1 .wave .wave4 {
        left: 425px;
        top: 0;
    }
    #data .g_item1 .wave .wave5, #data .g_item1 .wave .wave6 {
        left: 850px;
        top: 0;
    }
    #data .g_item1 .wave .wave1, #data .g_item1 .wave .wave3, #data .g_item1 .wave .wave5 {
        -webkit-animation: wave 10s linear infinite 300ms 0 ease;
        -moz-animation: wave 10s linear infinite 300ms 0 ease;
        -ms-animation: wave 10s linear infinite 300ms 0 ease;
        animation: wave 10s linear infinite 300ms 0 ease;
        -moz-animation: wave 10s linear infinite;
        -webkit-animation: wave 10s linear infinite;
        -o-animation: wave 10s linear infinite;
        -ms-animation: wave 10s linear infinite;
        animation: wave 10s linear infinite;
    }
    #data .g_item1 .wave .wave2, #data .g_item1 .wave .wave4, #data .g_item1 .wave .wave6 {
        -webkit-animation: wave 20s linear infinite 300ms 0 ease;
        -moz-animation: wave 20s linear infinite 300ms 0 ease;
        -ms-animation: wave 20s linear infinite 300ms 0 ease;
        animation: wave 20s linear infinite 300ms 0 ease;
        -moz-animation: wave 20s linear infinite;
        -webkit-animation: wave 20s linear infinite;
        -o-animation: wave 20s linear infinite;
        -ms-animation: wave 20s linear infinite;
        animation: wave 20s linear infinite;
    }
    #data .g_item1 .wave img {
        width: 100%;
        display: block;
        position: absolute;
    }
    /* #data img {
        -webkit-transition: all 1s ease;
        -moz-transition: all 1s ease;
        -ms-transition: all 1s ease;
        -o-transition: all 1s ease;
        transition: all 1s ease;
    } */
    #data .g_item1 .more {
        background-position: -1647px -784px;
    }
    #data .g_item1 .more {
        width: 30px;
        height: 30px;
        position: absolute;
        z-index: 3;
        right: 20px;
        top: 16px;
        background-repeat: no-repeat;
    }
    .slidebar .slide-toggle.open i, #media .audio-box .audio-slide .slide-thumb, #data .g_item1 .more i, .icon26{
        background-image: url(http://127.0.0.1:3500/img/index_show/index_z_f1581f1.png);
    }
    #data .g_item1 .more i {
        background-position: -1847px -395px;
    }
    #data .g_item1 .more i {
        display: block;
        width: 12px;
        height: 12px;
        margin: 9px auto;
        -webkit-transition: all .5s ease;
        -moz-transition: all .5s ease;
        -ms-transition: all .5s ease;
        -o-transition: all .5s ease;
        transition: all .5s ease;
        background-repeat: no-repeat;
    }
    #data .g_item1 .more:hover i{
        transform: rotate(720deg)
    }
    #data .bbs .title {
        background-position: -1427px -495px;
    }
    #data .bbs .title {
        width: 425px;
        height: 63px;
        position: relative;
        background-repeat: no-repeat;
    }
    @-webkit-keyframes wave{
        0%{transform:translateX(0)}
        100%{transform:translateX(-850px)}
    }
    @-moz-keyframes wave{
        0%{transform:translateX(0)}
        100%{transform:translateX(-850px)}
    }
    @-o-keyframes wave{
        0%{transform:translateX(0)}
        100%{transform:translateX(-850px)}
    }
    @-ms-keyframes wave{
        0%{transform:translateX(0)}
        100%{transform:translateX(-850px)}
    }
    @keyframes wave{
        0%{transform:translateX(0)}
        100%{transform:translateX(-850px)}
    }
    #data img {
        -webkit-transition: all 1s ease;
        -moz-transition: all 1s ease;
        -ms-transition: all 1s ease;
        -o-transition: all 1s ease;
        transition: all 1s ease;
    }
    #data img:hover {
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -ms-transform: scale(1.1);
        -o-transform: scale(1.1);
        transform: scale(1.1);
    }
    /* guide-list */
    #data .guide-list {
        width: 280px;
        margin-left: 130px;
        height: 60px;
        padding: 22px 0;
        list-style: none;
    }
    #data .guide-list li {
        width: 82px;
        text-align: center;
        float: left;
    }
    #data .guide-list a {
        text-align: center;
        display: block;
        width: 100%;
        color: #5a5a5a;
        font-size: 14px;
    }
    #data .guide-list li i {
        display: block;
        margin: 5px auto 4px;
        -webkit-transition: all 1.5s ease;
        -moz-transition: all 1.5s ease;
        -ms-transition: all 1.5s ease;
        -o-transition: all 1.5s ease;
        transition: all 1.5s ease;
    }
    #data .guide-list li i:hover{
        transform: rotateY(360deg);
    }
    #data .icon1 {
        background-position: -1677px -784px;
    }
    #data .icon1 {
        width: 33px;
        height: 28px;
        background-repeat: no-repeat;
    }
    #data .icon2 {
        background-position: -1803px -784px;
    }
    #data .icon2 {
        width: 32px;
        height: 26px;
        background-repeat: no-repeat;
    }
    #data .icon3 {
        background-position: -1710px -784px;
    }
    #data .icon3 {
        width: 30px;
        height: 28px;
        background-repeat: no-repeat;
    }
    #data .guide-list-link {
        margin-left: 144px;
    }
    #data .guide-list-link li {
        height: 28px;
        line-height: 28px;
    }
    #data .guide-list a:hover{
        color: #c7ae69;
    }
    #data .guide-list-link2 {
        height: 80px;
        padding: 10px 0;
    }
    /* #data .guide-list-link li {
        height: 28px;
        line-height: 28px;
    } */
    #data .guide-list-link3 {
        padding: 25px 0;
    }
    #data .guide-list-link a, #data .guide-list-link2 a, #data .guide-list-link3 a {
        text-align: left;
    }

    /* 第二栏 */
    #data .bbs-img ul {
        width: 366px;
        margin: 20px auto 10px;
    }
    #data .bbs-img li {
        float: left;
        width: 175px;
        height: 110px;
        margin-right: 10px;
    }
    #data .bbs li {
        height: 22px;
        margin: 3px auto;
        overflow: hidden;
    }
    #data .bbs-img li img {
        display: block;
        width: 100%;
        height: 100%;
    }
    #data .bbs-img li {
        float: left;
        width: 175px;
        height: 110px;
        margin-right: 8px;
    }
    #data .bbs-ul, #data .bbs-ul2 {
        width: 366px;
        margin: 0 auto;
        font-size: 14px;
        list-style: none;
    }
    #data .bbs-ul a, #data .bbs-ul2 a {
        color: #444;
    }
    #data .bbs-ul a:hover, #data .bbs-ul2 a:hover{
        color:#c7ae69;
    }
    #data .bbs p {
        width: 285px;
        float: left;
        height: 22px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: left;
    }
    #data .bbs .date {
        float: right;
    }
    #data .bbs-img2 ul {
        width: 366px;
        margin: 14px auto;
    }
    #data .bbs-img2 li {
        height: 65px;
    }
    /* 右边轮播 */
    #zrxContainer {
        position: relative;
    }
    #zrxContainer .swiper-button-prev {
        background-position: -1755px -784px;
    }
    #zrxContainer .swiper-button-prev, #zrxContainer .swiper-button-next {
        opacity: .75;
    }
    #zrxContainer .swiper-button-prev {
        top: 50%;
        left: 3px;
        width: 15px;
        height: 27px;
        position: absolute;
        cursor: pointer;
        background-repeat: no-repeat;
    }
    #zrxContainer .swiper-button-next {
        background-position: -1740px -784px;
    }
    #zrxContainer .swiper-button-next {
        width: 15px;
        height: 27px;
        position: absolute;
        top: 50%;
        right: 5px;
        cursor: pointer;
        background-repeat: no-repeat;
    }
    #zrxContainer .content {
        width: 370px;
        margin: 20px auto;
    }
    #zrxContainer .item {
        display: inline-block;
        margin: 0 6px;
        width: 170px;
        height: 220px;
        vertical-align: top;
        border: 1px solid #fff;
        overflow: hidden;
    }
    #zrxContainer .item a {
        display: block;
        overflow: hidden;
    }
    #zrxContainer .item .avatar {
        display: block;
        width: 170px;
    }
    /* 视频弹窗 */
    #pop_video {
        width: 854px;
        background: #000;
        height: 480px;
        z-index: 9999999999;
        position: fixed;
        left: 50%;
        margin-left: -427px;
        top: 228.5px;
        display: none;
    }
    #pop_video .videoCon {
        position: absolute;
        width: 1072px;
        height: 699px;
        top: 50%;
        left: 50%;
        margin-top: -349.5px;
        margin-left: -536px;
        background: url(http://127.0.0.1:3500/img/index_show/videoBg_e10a3d6.png) 0 0 no-repeat;
    }
    #pop_video #pop_vv {
        position: absolute;
        top: 63px;
        left: 92px;
        height: 560px;
        width: 854px;
        margin: 0 auto;
    }
    .btn-yu_yue, .top-video .border, .logo, .go-index, .go-index:hover, .top-video .play-icon, #pop_video #close_pv {
        background-image: url(http://127.0.0.1:3500/img/index_show/common-top_z_4ba4caa.png);
    }
    #pop_video #close_pv {
        background-position: 0px -209px;
    }
    #pop_video #close_pv {
        font-size: 0;
        position: absolute;
        top: 66px;
        right: 65px;
        width: 25px;
        height: 25px;
        -webkit-transition: transform .3s ease-in-out;
        -moz-transition: transform .3s ease-in-out;
        -ms-transition: transform .3s ease-in-out;
        -o-transition: transform .3s ease-in-out;
        transition: transform .3s ease-in-out;
        background-repeat: no-repeat;
    }
    #pop_video #close_pv:hover{
        -webkit-transform:rotate(90deg);
        -moz-transform:rotate(90deg);
        -ms-transform:rotate(90deg);
        -o-transform:rotate(90deg);
        transform:rotate(90deg);
    }
    #media #jcsp .li0{
        top:264px;
        left:768px;
    }
    #media #jcsp .li1{
       top:468px;
       left:0px;
    }
    #media #jcsp .li2{
        top:264px;
        left:768px;
    }
    #media #jcsp .li3{
        top:-550px;
        left:700px;
    }
    #media #jcsp .li4{
        top:-550px;
        left:0px;
    }
    #media #jcsp .li5{
       top:-550px;
       left:-700px;
    }
    #media #jcsp .lione{
        top:0;
        left: 0;
    }
</style>
