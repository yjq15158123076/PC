<style lang="styl">
/* h1{
    color: yellow; 主界面组件
} */
</style> 

<template>
  <div style="margin-top:66px;">
    <div class="parent_d">
      <h3 class="title_d" v-text="title"></h3>
      <div class="user_d clear">
        <img style="margin-top:3px;border:none;" class="avatar_d" v-bind:src="user.src" />
        <div>
          <p v-text="user.name"></p>
          <p>
            <span v-for="item in avatar" :key="item" v-text="item"></span>
          </p>
        </div>
      </div>
      <p
        v-for="item in more_and_more"
        :key="item.id"
        v-text="item"
        style="font-size:18px;margin:30px;"
      ></p>
      <!-- 段落结束
      -->
      <p class="gift_d">小礼物走一走，来简书关注我</p>
      <a @click="status1=true" class="dashang_d" href="javaScript:;">赞赏支持</a>
      <div v-show="status1" class="erweima_d">
        二维码收款
        <a @click="status1=false" class="off_d" href="javaScript:;">×</a>
      </div>

      <div style="background:#fff;margin:50px auto 0;" class="user_d clear user2">
        <img class="avatar_d" v-bind:src="user.src" />
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
        <span @click="onlyread()"  style="cursor: pointer;" class="justlook_d">只看作者</span>
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
//   console.log(111)

function cut(a) {
  var ss = a.split("-");
  return ss;
}
export default {
  data: function() {
    return {
      title: "当面试官问你“还有什么要问的吗”该怎么回答？",
      loading1: true,
      // true1:true,
      status1: false,
      num: 0,
      ss:
        "你还有什么要问的吗？-当HR提出这个问题的时候，就表示这场面试已经快要结束了，这个时候有经验的求职者就会抓住机会，-好好表现自己，为自己争取机会。很多没有求职经验，或者经验不丰富的，面对HR的这个突如其来的问题搞得有点懵，大脑一片空白，只能说没有什么问题了。-有一部分求职者心中有问题，比如工作方向，薪资待遇等问题，害怕问这个会给HR留下不好的印象，只能说没有什么问题了。-最后造成的后果就是面试完了，还是有很多疑问，就算公司给了offer，你也会心存疑虑，所以，很多时候，机会就算这样白白溜走的。-有问题一定要问-首先分析一下，你害怕给面试官留下不好的印象所以不问，所以你是想拿到这份offer的。-如果你不问，公司给你offer，你还是有很多顾虑和疑问，带着这些上班也不踏实。-更严重的是，上了1个月的班发现薪资和你预想的不一样，因为面试的时候你没问清，工资都达不到你的预期，上班哪还有动力呢？你还要辞职找工作，浪费很多时间。-所以，有问题一定要问，当HR对你说，还有什么想要问的吗？这是你面试过程中唯一掌握的主动权，必须要好好的把握住机会。-让HR知道你对此次面试的认真程度，也是间接的告诉HR你不是在应付面试。-其实面试本就是一个相互了解的过程，只有双方了解清楚，才能更好的进行交流。-应该问哪些-很多的求职者听到HR的提问时，脑袋中想提的问题就是五险一金，休息时间，加班时长，但是又怕提问这些，会让HR觉得反感，太过于谨慎。-提问完可能就拿不到offer了，就立马回答“没有其他的问题了”。-面对这样的情况，怎样提问，提问什么样的问题才不会让HR觉的你顾虑太多，并且可以让HR更加了解你。 -多提与面试职位相关的问题：-我面试的职位主要职责是什么呢？-在未来的一段时间，该岗位部门的发展目标是什么？-从员工角度来看，我们公司相对于同行业的优势在哪里？-从招聘信息来看，公司更偏向有经验的，对于没有经验的，在面试时有哪些考虑呢？-面试结果什么时候通知呢？-从面试者的角度来看，以上问题可以更好的了解该岗位的职责，了解公司对该岗位的重视程度以及发展规划，可以更好的预估自己未来的发展。-即使未能录取，但是HR的回答也能更好的帮助你了解该职位的市场需求情况，有利于你的下一场面试。-从HR的角度来看，你的提问可以看出你对该职位的重视程度，以及对自己未来发展的重视，表明你是一个有计划，懂得规划自己事业的人，-很明显，在HR的眼中，这些提问就是加分项。-哪些不该问少提自我为中心的问题：贵公司主要是做什么的？-如果不缴纳五险一金是否可以折现成工资？-入职后多久可以晋升？-如果入职后对职位不满意，是否可以转岗？-很明显，以上问题，可以看出求职者在面试之前对应聘的职位没有很好的了解，是一个很重视个人利益，以自我为中心的人。-在HR眼中你是一个急功近利，目光短浅的人，这样的人通常难当大任，难以做出大的贡献，被录用的几率很小。-虽然很多HR会说有什么问题都可以问，不需要顾虑，你要是真相信了，那你怕不是傻子哟，如果真的什么都问，基本上这场面试凉凉了。-所以作为一个求职者，一定要学会擅于观察HR的反应，做到随机应变。-面试心得我们提问不是为了提问才提问，而是为了了解面前的这份工作是不是自己想做的，避免入职后出现工作与应聘职位的差距。-所以，当HR提出：你还有什么要问的吗？-切记，不要什么都问，也不要盲目的去问一些死记硬背的问题。-因为这样做不但不会为你面试加分，还会在HR心中留下不好的印象，前面的努力就白费了。",

      like: "欢迎关注公众号悠聘生活，我们一起探索找工作那些事",

      user: {
        src:"https://upload.jianshu.io/users/upload_avatars/13884026/7644ae79-c484-4bbe-8081-65028f41a9f1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96",
        name: "唐明毓"
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
      more_and_more: [],
      commentList: [
        {
          src:"https://upload.jianshu.io/users/upload_avatars/18070764/e6dd695f-8a8c-418a-a73f-fbcfcb67b854?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp",
          name: "紫澜轩",
          content: "个人觉得说的还是有道理的，有的初入职场，还是会搞得一头雾水，不知道问啥"
        },
        {
          src:"https://upload.jianshu.io/users/upload_avatars/15772504/eba94477-7834-4752-934d-e8a58075aa67?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp",
          name: "阮新宇 ",
          content: "看完之后觉得很有感触"
        },
        {
          src:"https://cdn2.jianshu.io/assets/default_avatar/1-04bbeead395d74921af6a4e8214b4f61.jpg",
          name: "峰回路转_芦苇上的尖",
          content: "你这是哪来的名单啊？"
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
        },
        {
          src:"https://upload.jianshu.io/users/upload_avatars/13884026/7644ae79-c484-4bbe-8081-65028f41a9f1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96",
          name: "唐明毓",
          content:"谢谢大家的支持~"
        }
      ]
    };
  },
  mounted: function() {
    this.success();
  },

  methods: {
    success() {
    this.more_and_more=cut(this.ss);
    },

    loading(loading1) {
      if (this.srcs.src === "") {
        return false;
      }
    },
    onlyread(){
      var commentList=this.commentList;
      var self=this.user.name;

      for(var i=0;i<commentList.length;i++ ){
        // console.log(commentList[i].name)
        if(self==commentList[i].name){
          console.log(i)
        }else{
          // alert("作者暂没有评论，稍后再来康康");
          // console.log(i);
        }
      }
      
    }
  }
};
</script>