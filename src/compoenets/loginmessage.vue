<style>
 body{
     background-color: #F1F1F1;
 }
 input:focus{
     outline: none;
 }
 .input_box_d input{
     width: 300px;height: 50px;
     font-size: 14px;
     background-color: #F7F7F7;
     border: 1px transparent;
     text-indent: 3em;
     
 }
 .l_title_reg:hover{
     border-bottom: 4px solid #EA6F5A;
 }
</style>

<template>
    <div>
        <a class="Jane_logo" href="javascript:;">
            <img src="https://cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt="">
        </a>
        <div class="main_login">

            <div class="login_title">
                <a class="l_title_log login_active_d" href="javascript:;">登录</a>
                <b>·</b>
                <a class="l_title_reg" href="javascript:;">注册</a>
            </div>
            <div class="input_box_d">
                <div class="ipt_login">
                    <i class="iconfont icon-iconzh1" ></i>
                    <input  type="text" maxlength="30" placeholder="手机号或邮箱" >
                </div>
                <div class="ipt_regis">
                    <input style="border-top:1px solid #c8c8c8;" type="password" maxlength="30" placeholder="密码" >
                    <i class="iconfont icon-mima"></i>

                </div>
            </div>
            <p class="clear" style="line-height:40px; font-size:14px; color:#969696;" ><input type="checkbox">记住我<span style="float:right;" >登录遇到问题?</span></p>
            <a class="btn_login_d" href="javascript:;">登录</a>
            <p style="text-align:center; margin-top:50px;color:#B5B5B5;"> <span class="horizontal_d" ></span> 社交账号登录<span class="horizontal2_d" ></span></p>
            <div class="otherlog_d">
                <a class="otherlog_wb iconfont icon-weibo" href="javascript:;"></a>
                <a class="otherlog_wx iconfont icon-weixin" href="javascript:;"></a>
                <a class="otherlog_qq iconfont icon-qq" href="javascript:;"></a>
                <a class="otherlog_qt iconfont" href="javascript:;">其他</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data:function(){
        return{

        }
    },

    

}
</script>
