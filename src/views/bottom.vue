<template>
  <div>
    <div class="bottom_d">
      <p class="gift_d">小礼物走一走，来简书关注我</p>
      <a @click="status1=true" class="dashang_d" href="javaScript:;">赞赏支持</a>
      <div v-show="status1" class="erweima_d">
        二维码收款
        <a @click="status1=false" class="off_d" href="javaScript:;">×</a>
      </div>

      <div style="background:#fff;margin:50px auto 0;" class="user_d clear user2">
        <img class="avatar_d" v-bind:src="user.src1" />
        <div style="margin-top:27px;">
          <p v-text="user.name"></p>
          <p>
            <span v-for="item in avatar" :key="item.id" v-text="item"></span>
          </p>
        </div>
      </div>
      <div style="background:#fff;margin:0px auto 0;" v-text="like" class="user_text_d"></div>
      <a @click="num++" class="like_num_d" href="javascript:;">
        <span>喜欢</span>
        <span v-text="num" class="num_d"></span>
      </a>
      <p class="clear">
        <span style="font-size:20px;font-weight:600;line-height:64px; float:left;">56条评论</span>
        <span class="justlook_d">只看作者</span>
      </p>

      <div class="comment_d clear" v-for="(item,index) in commentList" :key="item.id">
        <img class="img_user_d" v-bind:src="item.src" />
        <div style="margin-left:10px; float:left;">
          <p class="name_user_d" v-text="item.name"></p>
          <p>
            <span v-text="index+1+'楼'"></span>
          </p>
        </div>
        <p style="margin-top:74px; font-size:18px;" v-text="item.content"></p>
        <p style="color:#666666;margin-top:5px;">
          <span class="zan iconfont icon-zan1">赞</span>
          <span class="huifu_d icon-pinglun iconfont">回复</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      user: {
        src1:
          "https://upload.jianshu.io/users/upload_avatars/5032359/06841bd8-4e1e-46a1-9607-6a4decb756eb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96",
        name: "极客萝卜"
      },
      avatar: [
        "2019.02.14 14:46",
        "字数",
        "1386",
        "阅读",
        "14139评论",
        "34喜欢",
        "267"
      ],
      like: "欢迎关注公众号悠聘生活，我们一起探索找工作那些事",
      loading1: true,
      status1: false,
      num: 0,
      commentList: [
        {
          src:"https://upload.jianshu.io/users/upload_avatars/17515586/877d06fb-b9cc-413c-a0c7-9fa8e7e58583.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp",
          name: "北京融金汇银刘鹏",
          content:
            "我觉得你对诺基亚一无所知:smirk:"
        },
        {
          src:"https://upload.jianshu.io/users/upload_avatars/639522/00af07f7298a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp",
          name: "陆格淡 ",
          content: "欣赏，一起努力！💪💪🍄🍄"
        },
        {
          src:"https://upload.jianshu.io/users/upload_avatars/16451805/75dfe2c0-1b32-4a86-ac18-1d95d524f852?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp",
          name: "马甲破了",
          content: "有点贵啊，1+7标配855才2999"
        },
        {
          src:
            "https://cdn2.jianshu.io/assets/default_avatar/12-aeeea4bedf10f2a12c0d50d626951489.jpg",
          name: "忘忧老酒",
          content: "哈哈哈看了一篇😂😂😂"
        },
        {
          src:
            "https://upload.jianshu.io/users/upload_avatars/17877133/5fe601d7-f402-485a-978b-7c8120067b4a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp",
          name: "酒意坊红酒商城",
          content:
            "酒意坊红酒商城采用了会员分销模式，会员分销分四级！一级25%的佣金，二级10%的佣金，三级3%的佣金，四级2%的佣金。（注册会员不需要任何费用）所有佣金系统自动返在客户的余额里，可以直接提现或者进行购买商城商品！"
        }
      ]
    };
  }
};
</script>
