<style lang="styl">
/* h1{
    color: yellow; 主界面组件
} */
.Appmain{
  margin-top: 66px;
}
</style> 

<template>
  <div class="Appmain" >
    <!-- <h1>主界面组件</h1> -->
    <div class="parent_d">
      <h3 class="title_d" v-text="title"></h3>
      <div class="user_d clear">
        <img
        style="margin-top:3px;border:none;"
          class="avatar_d"
          src="https://upload.jianshu.io/users/upload_avatars/6540595/1134628a-2531-4753-9a62-5a0289d1afb6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"
        >
        <div>
          <p v-text="user.name"></p>
          <p>
            <span v-for="item in avatar" :key="item" v-text="item"></span>
          </p>
        </div>
      </div>
      <!-- 段落开始 -->
      <p style="margin-top:50px;font-size:16px;">以下是完整名单 :</p>
      <div class="paragraph_d" v-for="(item) in srcs" :key="item" >
        <p style="font-size:160x;font-weight:600" class="title_name_d" v-text="item.title"></p>
        <img v-bind:src="item.src" >
        <p style="text-align:center" v-show="item.src?ture:false"><span>图片发自简书App</span></p>
        <p class="Description_d" v-text="item.content"></p>
      </div>
      <!-- 段落结束 -->
      <p class="gift_d">小礼物走一走，来简书关注我</p>
      <a @click="status=true" class="dashang_d" href="javaScript:;">赞赏支持</a>
      <div v-show="status" class="erweima_d">
        二维码收款
        <a @click="status=false" class="off_d" href="javaScript:;">×</a>
      </div>


       <div style="background:#fff;margin:50px auto 0;" class="user_d clear user2">
        <img
          class="avatar_d"
          src="https://upload.jianshu.io/users/upload_avatars/6540595/1134628a-2531-4753-9a62-5a0289d1afb6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"
        >
        <div style="margin-top:27px;">
          <p v-text="user.name"></p>
          <p>
            <span v-for="item in avatar" :key="item" v-text="item"></span>
          </p>
        </div>
      </div>
      <div style="background:#fff;margin:0px auto 0;" v-text="like" class="user_text_d">  </div>
      <a @click="num++" class="like_num_d" href="javascript:;"><span>喜欢</span><span v-text="num" class="num_d"></span></a>
      <p class="clear"> <span style="font-size:20px;font-weight:600;line-height:64px; float:left;" >56条评论</span> <span class="justlook_d" >只看作者</span> </p>
      
      
      <div class="comment_d clear" v-for="(item,index) in commentList" :key="item">

      <img  class="img_user_d" v-bind:src="item.src">
      <div style="margin-left:10px; float:left;">
        <p class="name_user_d"  v-text="item.name"></p>
      <p><span v-text="index+1+'楼'" ></span></p>
      </div>
      <p style="margin-top:74px; font-size:18px;" v-text="item.content" ></p>
      <p style="color:#666666;margin-top:5px;" ><span class="zan iconfont icon-zan1" >赞</span><span class="huifu_d icon-pinglun iconfont" >回复</span></p>
      </div>
      


    </div>
  </div>
</template>


<script>
// import Head from "./conponents/Header.vue";
// import Tab from "./views/Tab.vue";
export default {
  data: function() {
    return {
      title: "BBC评出21世纪最伟大的100部电影，你看过几部？",
      loading1: true,
      // true1:true,
      status:false,
      num:0,
      like:"喜欢读书、写作、旅行、音乐、电影等，希望结识情趣爱好相同的朋友。",
      user: {
        src:
          "https://upload.jianshu.io/users/upload_avatars/6540595/1134628a-2531-4753-9a62-5a0289d1afb6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96",
        name: "雅雅sy"
      },
      avatar: [
        "2019.02.21 09:33*",
        "字数",
        "4173",
        "阅读",
        "39230评论",
        "56喜欢",
        "1867"
      ],
      srcs:[
          {
              title:"1、《穆赫兰道》大卫·林奇 (2001)1",
              src:"https://upload-images.jianshu.io/upload_images/6540595-1218a9a37a84955d.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/600/format/webp",
              content:"BBC点评说：林奇的这部电影华美之极又痛苦之极，神秘诡谲又莫名熟悉，无论你套以何种解释，那些画面都能超越南加州，反观现实，并驻留在我们的脑海里，钻进我们的睡梦之中、恐惧深处，潜入我们无法名状的性情和肉欲中。"
          },
          {
              title:"2,《花样年华》王家卫 (2000)",
              src:"https://upload-images.jianshu.io/upload_images/6540595-92447f94e34ada84.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp",
              content:"BBC称王家卫是“世界影坛最臭名昭著的完美主义者”，并称“从来没有哪部电影能将失落和欲望的普遍主题讲述得如此流畅”。"
          },
          {
              title:"3、《血色将至》保罗·托马斯·安德森(2007)",
              src:"https://upload-images.jianshu.io/upload_images/6540595-6c5c59ecfda3952d.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/600/format/webp",
              content:"1898年，银矿工丹尼尔·普莱恩惟尤因井下作业事故摔断了腿，但他因祸得福了解到秘密的石油信息。BBC认为，几乎无声的开场使得保罗·托马斯·安德森这部《血色将至》像是锻造出来的，而不是拍出来的。“半带疯狂地见证着最具美国特色的贪欲、工业、虚伪和喧嚣。”",
          },
          {
              title:"4、《千与千寻》宫崎骏 (2001)",
              src:"https://upload-images.jianshu.io/upload_images/6540595-0b1396a99290a41d.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/700/format/webp",
              content:"BBC评价宫崎骏的《千与千寻》时说：“确实以其高度成熟的画面语言、精心阐述的决心、勇气与乐观等主题而显得更加出彩。”宫崎骏这个关于小女孩努力解救父母的故事就像是带我们回到一个手绘动画的时代。在当时的美国，动画长片已基本上都由电脑绘图，但《千与千寻》却带着可爱的手绘质感。",
          },
          {
              title:"5、《少年时代》理查德·林克莱特 (2014)",
              src:"https://upload-images.jianshu.io/upload_images/6540595-2d6514531c7648da.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/600/format/webp",
              content:"本片讲述一个男孩从6岁到18岁的成长历程，导演理查德·林克莱特花了12年时间来完成这部作品。“在这样一个时代，社会的方方面面都在快节奏发展，而林克莱特却慢下步伐，耐心讲述了一个带有我们这个时代强烈印记的故事。”BBC这样说，“我们看着整个剧组，包括伊桑·霍克和出色的帕特丽夏·阿奎特，在眼前慢慢成长、老去，每一帧画面都因此增添了一抹辛酸滋味。”",
          },
          {
              title:"6、《暖暖内含光》米歇尔·冈瑞( 2004)",
              src:"",
              content:"这是一个分手分出一堆问题的故事，但它绝不是一部普通的浪漫幻想爱情片。BBC说：“影片主演金·凯瑞这次跳脱了他一贯无厘头喜剧的风格，饰演了一个长期陷入忧郁和茫然，并努力想逃离这一切的男人。”",
          },
          {
              title:"7、《生命之树》泰伦斯·马力克 (2011)",
              src:"https://upload-images.jianshu.io/upload_images/6540595-4aaaf2cd185d222b.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/600/format/webp",
              content:"“这是一部充满诗意的电影。”影片故事开始于一个1950年代，生活在美国中西部的家庭，电影跟随着大儿子杰克的生命展开，穿过其无辜天真的童年到幻灭的成人时代，他力图与他的父亲（布拉德·皮特饰）达成和解。",
          },
          {
              title:"8、《一一》杨德昌 (2000)",
              src:"https://upload-images.jianshu.io/upload_images/6540595-997f862aa563a0cf.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/600/format/webp",
              content:"在影片《一一》中，杨德昌将一个台北家庭中各个成员的不同故事混叠在一起叙述，故事里，一家人因陷入不同生命阶段的特殊困境而互相隔绝。",
          },
          {
              title:"9、《一次别离》阿斯哈·法哈蒂 (2011)",
              src:"",
              content:"影片探讨的话题更与普通人的生活密切相关：爱情和亲情的冲突、是否要抛下患老人痴呆的父亲出国、雇主与女佣相互猜疑、婚姻破碎下的亲情矛盾、家长与子女之间缺乏信任度等，这些都能引起观众的共鸣。BBC说：“阿斯哈·法哈蒂强烈的戏剧冲突没有对任何角色进行完全的褒贬。他将电影中的场景刻画得自然真实，到头来还让观众为了相互折磨的主人公们胸口发闷。”",
          },
          {
              title:"10、《老无所依》伊桑·科恩 / 乔尔·科恩 (2007)",
              src:"https://upload-images.jianshu.io/upload_images/6540595-7de6adbb5f24df2f.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/600/format/webp",
              content:"读过科马克·麦卡锡的小说《老无所依》的人都会对书中那个反派有一个鲜明印象。书中的冷血杀手安东·齐格已经深深烙进我们的意识中，但影片中巴登的演绎太有力度，他用随意不经心的暴力表达华丽丽地将我们制服，把观众脑海中先前的印象一抹而光。",
          },
          {
              title:"11、《醉乡民谣》伊桑·科恩 / 乔尔·科恩(2013)",
              src:"https://upload-images.jianshu.io/upload_images/6540595-7ad0005dfbd05706.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/600/format/webp",
              content:"故事发生在六十年代的美国格林威治村，讲诉了一个民谣歌手，他发丝凌乱，挣扎着告诉世界自己的才华。但无人驻足，无人在意。科恩兄弟的这部作品描画了一个没人关爱的失败者辛酸落魄又旋律悠扬的生活。“一切都以典型的科恩兄弟式的方式展现出来。”",
          },
          {
              title:"12、《十二宫 》大卫·芬奇(2007)",
              src:"",
              content:"《十二宫》是大卫·芬奇一部细腻、惊艳、货真价实的犯罪电影，讲述一名报纸漫画家卷入70年代的十二宫连环杀人案的故事。“电影在让人惊叹的细节中发展，把观众拖入一个欲罢不能的世界，最细微的暗示都可能是最大的线索。然而，却给了疯魔者们一个最害怕的梦魇：真相永远不可知晓。”",
          },
          {
              title:"13、《人类之子》阿方索·卡隆 (2006)",
              src:"",
              content:"BBC说：“《人类之子》不同于本世纪任何一部电影，也许迥异于历史上任何一部电影，回答了什么是生命的意义。”",
          },
          {
              title:"14、《杀戮演绎》乔什·奥本海默 (2012)",
              src:"",
              content:"从1965年到1966年，在印度尼西亚的军事政变后，安瓦尔屠杀了近千人。他为那些他肆意杀害的生命抽泣、呕吐、感叹，但我们并不知道他是不是真的在忏悔，或者这只是他做作地表演。这部电影是对举国遗忘一段历史这种现象的深刻而多层次的研究，同时也是对自我欺骗的力量和追寻真相与道德角力的探索。“它作为21世纪最伟大的纪录片的地位，将会长远地保持下去。”",
          },
          {
              title:"15、《四月三周两天》克里斯蒂安·蒙久 (2007)",
              src:"",
              content:"一个场景只有一个长镜头，没有背景音乐。蒙久这部作品摘得2007年金棕榈奖。作为罗马尼亚新浪潮的试金石，它以准确的视觉、清晰的剧本和以超然的视角完成了一次质朴的惊艳。1980年代，罗马尼亚堕胎还是违法的，片中的秘密堕胎贯穿着犯罪惊悚片的紧张感，让人想起了齐奥塞斯库独裁统治下无情压抑的氛围。",
          },
          {
              title:"16、《神圣车行》（Holy Motors）-路易·卡拉克斯-2012年",
              src:"",
              content:"",
          },
          {
              title:"17、《潘神的迷宫》（Pan's Labyrinth）-吉尔莫·德尔·托罗-2006年",
              src:"",
              content:"",
          },
          {
              title:"18、《白丝带》（The White Ribbon）-迈克尔·哈内克-2009年",
              src:"",
              content:"",
          },
          {
              title:"19、《疯狂的麦克斯4：狂暴之路》（Mad Max: Fury Road）-乔治·米勒-2015年",
              src:"",
              content:"",
          },
          {
              title:"20、《纽约提喻法》（Synecdoche, New York）-查理·考夫曼-2008年",
              src:"",
              content:"",
          },
          {
              title:"21、《布达佩斯大饭店》（The Grand Budapest Hotel）-韦斯·安德森-2014年",
              src:"",
              content:"",
          },
          {
            title:"22、《迷失东京》（Lost in Translation）-索菲亚·科波拉-2003年",
            src:"",
              content:"",
            
          },
          {
            title:"23、《隐藏摄像机》（Caché）-迈克尔·哈内克-2005年",
            src:"",
              content:"",
            
          },
          {
            title:"24、《大师》（The Master）-保罗·托马斯·安德森-2012年",
            src:"",
              content:"",
          },
          {
            title:"25、《记忆碎片》（Memento）-克里斯托弗·诺兰-2000年",
            src:"",
              content:"",
          },
          {
            title:"26、《第25小时》（25th Hour）-斯派克·李-2002年",
            src:"",
              content:"",
          },
          {
            title:"27、《社交网络》（The Social Network）-大卫·芬奇-2010年",
            src:"",
              content:"",
          },
          {
            title:"28、《对她说》（Talk to Her）-佩德罗·阿莫多瓦-2002年",
            src:"",
              content:"",
          },
          {
            title:"29、《机器人总动员》（WALL-E）-安德鲁·斯坦顿-2008年",
            src:"",
              content:"",
          },
          {
            title:"30、《老男孩》（Oldboy）-朴赞郁-2003年",
            src:"",
              content:"",
          },
          {
            title:"31、《玛格丽特》（Margaret）-肯尼斯·罗纳根-2011年",
            src:"",
              content:"",
          },
          {
            title:"32、《窃听风暴》（The Lives of Others）-弗洛里安·亨克尔·冯·多纳斯马-2006年",
          },
          {
            title:"33、《黑暗骑士》（The Dark Knight）-克里斯托弗·诺兰-2008年",
          },
          {
            title:"34、《索尔之子》（Son of Saul）-拉斯洛·杰莱斯-2015年",
          },
          {
            title:"35、《卧虎藏龙》（Crouching Tiger, Hidden Dragon）-李安-2000年",
          },
          {
            title:"36、《廷巴克图》（Timbuktu）-阿伯德拉马纳·希萨柯-2014年",
          },
          {
            title:"37、《能召回前世的布米叔叔》（Uncle Boonmee Who Can Recall His PastLives）-阿彼察邦·韦拉斯哈古-2010年",
          },
          {
            title:"38、《上帝之城》（City of God）-费尔南多·梅里尔斯-2002年",
          },
          {
            title:"39、《新世界》（The New World）-泰伦斯·马利克-2005年",
          },
          {
            title:"40、《断背山》（Brokeback Mountain）-李安-2005年",
          },
          {
            title:"41、《头脑特工队》（Inside Out）-彼特·道格特-2015年",
          },
          {
            title:"42、《爱》（Amour）-迈克尔·哈内克-2012年",
          },
          {
            title:"43、《忧郁症》（Melancholia）-拉斯·冯·提尔-2011年",
          },
          {
            title:"44、《为奴十二年》（12 Years a Slave）-史蒂夫·麦奎因-2013年",
          },
          {
            title:"45、《阿黛尔的生活》（Blue Is the Warmest Color）-阿布戴·柯西胥-2013年",
          },
          {
            title:"46、《原样复制》（Certified Copy）-阿巴斯·基亚罗斯塔米-2010年",
          },
          {
            title:"47、《利维坦》（Leviathan）-安德烈·维雅简锡夫-2014年",
          },
          {
            title:"48、《布鲁克林》（Brooklyn）-约翰·克劳利-2015年",
          },
          {
            title:"49、《再见语言》（Goodbye to Language）-让-吕克·戈达尔-2014年",
          },
          {
            title:"50、《刺客聂隐娘》（The Assassin）-侯孝贤-2015年",
          },
          {
            title:"51、《盗梦空间》（Inception）-克里斯托弗·诺兰-2010年",
          },
          {
            title:"52、《热带疾病》（Tropical Malady）-阿彼察邦·韦拉斯哈古-2004年",
          },
          {
            title:"53、《红磨坊》（Moulin Rouge!）-巴兹·鲁赫曼-2001年",
          },
          {
            title:"54、《安纳托利亚往事》（Once Upon a Time in Anatolia）-努利·毕格·杰朗-2011年",
          },
          {
            title:"55、《修女艾达》（Ida）-保罗·帕夫利克夫斯基-2013年",
          },
          {
            title:"56、《鲸鱼马戏团》（Werckmeister Harmonies）-贝拉·塔尔-2000年"
          },
          {
            title:"57、《猎杀本·拉登》（Zero Dark Thirty）-凯瑟琳·毕格罗-2012年"
          },
          {
            title:"58、《穆拉戴》（Moolaadé）-乌斯曼·塞姆班-2004年"
          },
          {
            title:"59、《暴力史》（A History of Violence）-大卫·柯南伯格-2005年"
          },
          {
            title:"60、《恋爱症候群》（Syndromes and a Century）-阿彼察邦·韦拉斯哈古-2006年"
          },
          {
            title:"61、《皮囊之下》（Under the Skin）-乔纳森·格雷泽-2013年"
          },
          {
            title:"62、《无耻混蛋》（Inglourious Basterds）-昆汀·塔伦蒂诺-2009年"
          },
          {
            title:"63、《都灵之马》（The Turin Horse）-贝拉·塔尔、阿尼亚斯·赫拉尼茨基-2011年"
          },
          {
            title:"64、《绝美之城》（The Great Beauty）-保罗·索伦蒂诺-2013年"
          },
          {
            title:"65、《鱼缸》（Fish Tank）-安德里亚·阿诺德-2009年"
          },
          {
            title:"66、《春夏秋冬又一春》（Spring, Summer, Fall, Winter…and Spring）-金基德-2003年"
          },
          {
            title:"67、《拆弹部队》（The Hurt Locker）-凯瑟琳·毕格罗-2008年"
          },
          {
            title:"68、《天才一族》（The Royal Tenenbaums）-韦斯·安德森-2001年"
          },
          {
            title:"69、《卡罗尔》（Carol）-托德·海恩斯-2015年"
          },
          {
            title:"70、《我们讲述的故事》（Stories We Tell）-萨拉·波莉-2012年"
          },
          {
            title:"71、《塔布》（Tabu）-米盖尔·戈麦斯-2012年"
          },
          {
            title:"72、《唯爱永生》（Only Lovers Left Alive）-吉姆·贾木许-2013年"
          },
          {
            title:"73、《爱在日落黄昏时》（Before Sunset）-理查德·林克莱特-2004年"
          },
          {
            title:"74、《春假》（Spring Breakers）-哈莫尼·科林-2012年"
          },
          {
            title:"75、《性本恶》（Inherent Vice）-保罗·托马斯·安德森-2014年"
          },
          {
            title:"76、《狗镇》（Dogville）-拉斯·冯·提尔-2003年"
          },
          {
            title:"77、《潜水钟与蝴蝶》（The Diving Bell and the Butterfly）-朱利安·施纳贝尔-2007年"
          },
          {
            title:"78、《华尔街之狼》（The Wolf of Wall Street）-马丁·斯科塞斯-2013年"
          },
          {
            title:"79、《几近成名》（Almost Famous）-卡梅伦·克罗-2000年"
          },
          {
            title:"80、《回归》（The Return）-安德烈·萨金塞夫-2003年"
          },
          {
            title:"81、《羞耻》（Shame）-史蒂夫·麦奎因-2011年"
          },
          {
            title:"82、《严肃的男人》（A Serious Man）-科恩兄弟-2009年"
          },
          {
            title:"83、《人工智能》（A.I. Artificial Intelligence）-史蒂文·斯皮尔伯格-2001年"
          },
          {
            title:"84、《她》（Her）-斯派克·琼斯-2013年"
          },
          {
            title:"85、《预言者》（A Prophet）-雅克·欧迪亚-2009年"
          },
          {
            title:"86、《远离天堂》（Far From Heaven）-托德·海因斯-2002年"
          },
          {
            title:"87、《天使爱美丽》（Amélie）-让-皮埃尔·热内-2001年"
          },
          {
            title:"88、《焦点》（Spotlight）-汤姆·麦卡锡-2015年"
          },
          {
            title:"89、《无头的女人》（The Headless Woman）-卢奎西亚·马特尔-2008年"
          },
          {
            title:"90、《钢琴家》（The Pianist）-罗曼·波兰斯基-2002年"
          },
          {
            title:"91、《谜一样的双眼》（The Secret in Their Eyes）-胡安·何塞·坎帕内利亚-2009年"
          },
          {
            title:"92、《神枪手之死》（The Assassination of Jesse James by the Coward RobertFord）-安德鲁·多米尼克-2007年"
          },
          {
            title:"93、《美食总动员》（Ratatouille）-布拉德·伯德-2009年"
          },
          {
            title:"94、《生人勿进》（Let the Right One In）-托马斯·阿尔弗雷德森-2008年"
          },
          {
            title:"95、《月升王国》（Moonrise Kingdom）-韦斯·安德森-2012年"
          },
          {
            title:"96、《海底总动员》（Finding Nemo）-安德鲁·斯坦顿-2003年"
          },
          {
            title:"97、《白色物质》（White Material）-克莱尔·德尼-2009年"
          },
          {
            title:"98、《十段生命的律动》（Ten）-阿巴斯·基阿鲁斯达米-2002年"
          },
          {
            title:"99、《我和拾穗者》（The Gleaners and I）-阿涅斯·瓦尔达-2000年"
          },
          {
            title:"100、《卡洛斯》（Carlos）-奥利维耶·阿萨亚斯-2010年"
          },
          {
            title:"101、《梦之安魂曲》（Requiem for a Dream）-达伦·阿罗诺夫斯基-2000年"
          },
          {
            title:"102、《托尼·厄德曼》（Toni Erdmann）-玛伦·阿德-2016年"
          },
      ],
      commentList:[
        {
          src:"https://upload.jianshu.io/users/upload_avatars/6540595/1134628a-2531-4753-9a62-5a0289d1afb6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96",
          name:"G你好色彩",
          content:"都是好电影，感谢分享",
        },
        {
          src:"https://upload.jianshu.io/users/upload_avatars/17973050/975192cb-af56-4219-beb4-fe05e9f80cdb?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp",
          name:"叶墨_2fc5",
          content:"千与千寻呀",
        },
        {
          src:"https://upload.jianshu.io/users/upload_avatars/5559570/fd091e74-7598-4e6c-a4ee-61b124d7a158.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp",
          name:"峰回路转_芦苇上的尖",
          content:"你这是哪来的名单啊？",
        },
        {
          src:"https://cdn2.jianshu.io/assets/default_avatar/12-aeeea4bedf10f2a12c0d50d626951489.jpg",
          name:"忘忧老酒",
          content:"哈哈哈看了一篇😂😂😂",
        },
        {
          src:"https://upload.jianshu.io/users/upload_avatars/17877133/5fe601d7-f402-485a-978b-7c8120067b4a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp",
          name:"酒意坊红酒商城",
          content:"酒意坊红酒商城采用了会员分销模式，会员分销分四级！一级25%的佣金，二级10%的佣金，三级3%的佣金，四级2%的佣金。（注册会员不需要任何费用）所有佣金系统自动返在客户的余额里，可以直接提现或者进行购买商城商品！",
        },
        {
          src:"",
          name:"",
          content:"",
        },
        {
          src:"",
          name:"",
          content:"",
        },
        {
          src:"",
          name:"",
          content:"",
        },
      ],

      methods: {

            // console.log(this.srcs.src) ,

        loading(loading1){
          
          if(this.srcs.src===""){
            return false;
          }
        },

      }
    };
  }
};
</script>