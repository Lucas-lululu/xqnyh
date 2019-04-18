<template>
    <div>
        <div class="index">
            <div class="main">
                <a href="javascript:;" class="logo"></a>
                <div class="link clearfix">
                    <a href="javascript:;" class="down f1">下载口袋版</a>
                    <a href="javascript:;" class="goindex">进入官网</a>
                    <div id="Mshare" class="f1" style="display:block">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
   
}
</script>
<style scoped>
    .index {
        width: 100%;
        height: 1080px;
        top: 0;
        left: 0;
        background: url(http://127.0.0.1:3500/img/koudai/bg_7494ba8.jpg) no-repeat center top;
        position: absolute;
        /* position: fixed !important; */
    }
    .main {
        width: 1200px;
        margin: 0 auto;
        position: relative;
    }
    .index .logo,.link,.link clearfix,.link .down{
        background-image: url(http://127.0.0.1:3500/img/koudai/index_z_dca0026.png);
    }
    .index .logo {
        background-position: -497px 0px;
        position: absolute;
        display: block;
        top: 228px;
        left: 0;
        width: 212px;
        height: 59px;
        background-repeat: no-repeat;
    }
    .link {
        background-position: 0px -547px;
        position: absolute;
        right: 30px;
        top: 45px;
        width: 327px;
        height: 35px;
        font-size: 14px;
        z-index: 9;
        background-repeat: no-repeat;
    }
    .link .down:hover {
        background-position: -381px -258px;
    }
    .link .down:hover {
        color: #fff;
        background-repeat: no-repeat;
    }
    .link .down {
        background-position: -381px -287px;
    }
    .link .down {
        background-position: -381px -287px;
        display: block;
        color: #fff;
        font-weight: 700;
        width: 102px;
        height: 29px;
        margin: 3px 0 0 3px;
        line-height: 29px;
        text-align: center;
        float: left;
        background-repeat: no-repeat;
    }
    .link .goindex {
        display: block;
        float: left;
        width: 88px;
        line-height: 35px;
        color: #be355d;
        font-weight: 700;
        position: relative;
        margin-left: 10px;
    }
    #Mshare {
        width: 115px;
        height: 32px;
        float: left;
        margin-top: 7px;
        margin-left: 10px;
        overflow: hidden;
    }
    .NIE-share {
        line-height: 0 !important;
        position: relative;
        font-size: 0;
        display: inline-block;
    }
    
    .NIE-share-clearfix {
        clear: both;
        width: 0;
        height: 0;
        overflow: hidden;
    }
</style>
