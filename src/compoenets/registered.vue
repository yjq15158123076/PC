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


</style>

<template>
    <div>
        <a class="Jane_logo" href="javascript:;">
            <img src="https://cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt="">
        </a>
        <div class="main_login" style="height:550px">

            <div class="login_title">
                <a class="l_title_log " href="javascript:;">登录</a>
                <b>·</b>
                <a class="l_title_reg login_active_d" href="javascript:;">注册</a>
            </div>
            <div class="input_box_d">
                <div class="ipt_login">
                    <i class="iconfont icon-iconzh1" ></i>
                    <input type="text" maxlength="30" placeholder="你的昵称" >
                </div>
                <div class="ipt_phone">
                    <input  v-model="amount" @input="changeInt(amount)" style="border-top:1px solid #c8c8c8;" type="text" maxlength="11" placeholder="手机号码" >
                    <i class="iconfont icon-44"></i>
                </div>
                <div class="ipt_regis ipt_regis_zhuce ">
                    <input style="border-top:1px solid #c8c8c8;" type="password" maxlength="30" placeholder="设置密码" >
                    <i style="top:125px;"  class="iconfont icon-mima"></i>
                </div>
            </div>
            <a style="margin-top:20px;" class="btn_login_d" href="javascript:;">注册</a>
            <p class="iagreen_d" >点击 “注册” 即表示您同意并愿意遵守简书 <span>用户协议</span>和 <span>隐私政策</span> 。</p>
            <p style="text-align:center; margin-top:15px;color:#B5B5B5;"> <span class="horizontal_d" ></span> 社交账号直接注册<span class="horizontal2_d" ></span></p>
            <div class="otherlog_d">
                <a class="otherlog_wx iconfont icon-weixin" href="javascript:;"></a>
                <a class="otherlog_qq iconfont icon-qq" href="javascript:;"></a>
            </div>
        </div>
    </div>
</template>
<script>
var TEL_REGEXP = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;

function validateTel (tel){
      if(TEL_REGEXP.test(tel)){
        return true;
      }
      return false;
}
export default {
    data:function(){
        return{
            tel:null,

        }
    },
        methods:{
        changeInt(msg) {
                // 判断是否为正整数
                console.log( 1+ msg);
                var reg = /^[1-9]\d*$/;
                console.log(reg.test(msg));
                if(reg.test(msg)==false){
                    alert("请输入正确的手机号码")
                }
            },
    }
    

}
</script>
