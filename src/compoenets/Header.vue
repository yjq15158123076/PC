<template>
  <div>
    <div class="parent_d">
      <h3 class="title_d" v-text="title"></h3>
      <div class="user_d clear">
        <img style="margin-top:3px;border:none;" class="avatar_d" v-bind:src="user.src1" />
        <div>
          <p v-text="user.name"></p>
          <p>
            <span v-for="item in avatar" :key="item" v-text="item"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      title: "845+4100mAh不怕摔泡不坏，实力表现让魅族小米汗颜",
      user: {
        src1:
          "https://upload.jianshu.io/users/upload_avatars/5032359/06841bd8-4e1e-46a1-9607-6a4decb756eb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96",
        name: "极客萝卜"
      },
      avatar: [
        "2019.04.02 17:03",
        "字数",
        "1560",
        " 阅读",
        " 971",
        "评论",
        "3",
        "喜欢",
        "12",
      ]
    };
  }
};
</script>
