<template>
    <div>
        <div class="header-y clear">
            <div class="width-limit-y" >
                <a href="" class="logo-y">
                    <img src="../images/Head-Y/1.png" alt="">
                </a>
                <a href="javascript:;" class="btn write-btn-y" target="_blank">
                    <img src="../images/Head-Y/2.jpg" class="iconfont ic-write-y">
                    写文章
                </a>
                <a href="javascript:;" class="btn sign-up-y">注册</a>
                <a href="javascript:;" class="btn log-in-y">登录</a>
                <div class="zs-y">
                    <a href="javascript:;">
                        <img src="../images/Head-Y/3.png" alt="">
                    </a>
                </div>
                <a href="javascript:;" class="style-mode-btn-y">
                    <img src="../images/Head-Y/4.jpg" alt="">
                </a>
                <div class="container-y clear">
                    <ul class="navbar-nav-y">
                        <li class="tab active-y">
                            <a href="javascript:;">
                                <img src="../images/Head-Y/5.jpg" alt="">
                                <span class="menu-text-y">首页</span>
                            </a>
                        </li>
                        <li class="tab-y">
                            <a href="javascript:;">
                                <img src="../images/Head-Y/6.jpg" alt="">
                                <span class="menu-icon-y">下载App</span>
                            </a>
                        </li>
                        <li class="search-y">
                            <form action="">
                                <input type="text" placeholder="搜索" class="search-input-y" @click="ss">
                                <div class="yc-y">
                                    <div class="rm-y">
                                        热门搜索
                                    </div>
                                    <ul>
                                        <li><a href="javascript:;">手帐</a></li>
                                        <li><a href="javascript:;">书法</a></li>
                                        <li><a href="javascript:;">PPT</a></li>
                                        <li><a href="javascript:;">穿搭</a></li>
                                        <li><a href="javascript:;">打碗碗花</a></li>
                                        <li><a href="javascript:;">简书</a></li>
                                        <li><a href="javascript:;">姥姥的澎湖湾</a></li>
                                        <li><a href="javascript:;">设计</a></li>
                                        <li><a href="javascript:;">创业</a></li>
                                        <li><a href="javascript:;">交友</a></li>
                                    </ul>
                                </div>



                                <a href="javascript:;" class="search-btn-y">
                                    <img src="../images/Head-Y/7.jpg" alt="">
                                </a>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .header-y {
        width: 100%;
        height: 55px;
        min-height: 50px;
        margin-bottom: 20px;
        border: 1px solid transparent;
        border-width: 0 0 1px;
        background-color: #fff;
        border-color: #f0f0f0;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
    }

    .header-y:before {
        content: " ";
        display: table;
    }

    .width-limit-y {
        min-width: 768px;
        max-width: 1440px;
        margin: 0 auto;
    }

    .logo-y {
        float: left;
        width: 100px;
        height: 56px;
        padding: 0;
    }

    .logo-y > img {
        height: 100%;
        vertical-align: middle;
    }

    .write-btn-y {
        float: right;
        width: 100px;
        height: 40px;
        line-height: 24px;
        padding: 6px 12px;
        margin: 8px 12px 0;
        border-radius: 20px;
        font-size: 15px;
        color: #fff;
        background-color: #EC6149;
        box-sizing: border-box;
    }

    .ic-write-y {
        margin-right: 3px;
        font-size: 19px;
        vertical-align: middle;
    }

    .sign-up-y {
        float: right;
        width: 80px;
        height: 38px;
        line-height: 24px;
        margin: 9px 5px 0 15px;
        padding: 6px 12px;
        border: 1px solid rgba(236, 97, 73, .7);
        border-radius: 20px;
        font-size: 15px;
        color: #ea6f5a;
        background-color: transparent;
        box-sizing: border-box;
        text-align: center;
    }

    .sign-up-y:hover {
        background-color: #FEF7F6;
    }

    .log-in-y {
        float: right;
        margin: 11px 6px 0 10px;
        font-size: 15px;
        color: #969696;
        padding: 6px 12px;
        font-weight: 500;
    }

    .zs-y {
        float: right;
        height: 55px;
        padding: 15px 0px;
        margin: 0 12px;
        box-sizing: border-box;
    }

    .zs-y > a {
        width: 100%;
        height: 100%;
    }

    .zs-y > a > img {
        height: 25px;
        vertical-align: middle;
    }

    .style-mode-btn-y {
        float: right;
        line-height: 20px;
        padding: 17px 10px;
        font-size: 24px;
        color: #969696;
    }

    .container-y {
        width: 960px;
        height: 55px;
        margin-right: auto;
        margin-left: auto;
        padding-left: 15px;
        padding-right: 15px;
    }

    .navbar-nav-y {
        float: left;
        margin: 0;
    }

    .navbar-nav-y li {
        margin-right: 10px;
        float: left;
    }

    .active-y {
        color: #ea6f5a;
        background: none;
        height: 56px;
        line-height: 26px;
        padding: 15px;
    }

    .menu-text-y {
        color: #ea6f5a;
    }

    .active-y img {
        vertical-align: middle;
    }

    .tab-y {
        height: 56px;
        line-height: 26px;
        padding: 15px;
        color: #333;
    }

    .tab-y:hover {
        background-color: #F5F5F5;
    }

    .menu-icon-y {
        color: #333;
    }

    .search-y {
        padding-left: 15px;
    }

    .search-y > form {
        position: relative;
        top: 9px;
        margin: 0 0 20px;
    }

    .search-input-y {
        padding: 0 40px 0 20px;
        width: 240px;
        height: 38px;
        font-size: 14px;
        border: 1px solid #eee;
        border-radius: 40px;
        background: #eee;
        outline: none;
    }

    .yc-y{
        position:absolute;
        padding: 20px 20px 10px;
        border-bottom: 1px solid #f0f0f0;
        background-color: #fff;
        box-shadow: 0 0 8px rgba(0,0,0,.2);
        margin-top: 5px;
        display: none;
    }

    .rm-y{
        height: 20px;
        margin-bottom: 10px;
        font-size: 14px;
        color: #969696;
    }

    .yc-y ul{
        display: block;
    }

    .yc-y li{
        margin-right: 10px;
        display: inline-block;
        line-height: 28px;
    }

    .yc-y a{
        padding: 2px 6px;
        font-size: 12px;
        color: #787878;
        border: 1px solid #ddd;
        border-radius: 3px;
    }

    .search-btn-y {
        position: absolute;
        top: 4px;
        right: 5px;
        width: 30px;
        height: 30px !important;
        line-height: normal !important;
        padding: 0 !important;
        color: #969696 !important;
        text-align: center;

    }

    .search-btn-y > img {
        margin: 5px -1px 0 0;
    }
</style>



<script>

    export default {
        methods:{
            ss(){
                var dian=document.getElementsByClassName("yc-y")[0];
                dian.style.display="block";
                window.event? window.event.cancelBubble = true  : e.stopPropagation();
            },
            show(){
                var dian=document.getElementsByClassName("yc-y")[0];
                dian.style.display="none";
            }
        },
        mounted(){
                document.addEventListener("click",this.show)

        }
    }
</script>