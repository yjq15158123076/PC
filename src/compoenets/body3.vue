<template>
<div>
    <div class="body_parent_d">
        <div v-for="item in bditemList" :key="item.id"  class="body_item_d">
            <p style="font-size:16px; margin:20px;line-height:30px;" v-text="item.tips" ></p>
            <img style=" display:block; margin:0 auto; text-align:center; " v-bind:src="item.src" alt="">
        </div>
    </div>
</div>
</template>
<script>
export default {
    data:function(){
        return{
            bditemList:[
                {
                    tips:"提起三防手机，大家就会想到：厚重的机身、毫无美感的外观以及凑合的性能。一段时间以来，三防手机以其简单耐用的特性，似乎成了送父母长辈的“不二之选“。因为长辈在日常使用手机的时候难免会跌落进水，三防手机的防护性能让父母少了后顾之忧。",
                    src:"https://upload-images.jianshu.io/upload_images/5032359-6804bb721f994bd7.jpg!thumbnail?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp",
                },
                {
                    tips:"随着科技的进步和发展，为长辈选购三防手机的观念也与时俱进，第一要耐摔，第二还要求防水（保不齐哪天一个失手掉进水里），第三声音要大！第四也是最主要的就是性能要够用，免得老人说儿女为自己买的手机卡。AGM作为三防手机的领先厂商，旗下的手机不仅在吴京的《战狼》系列电影大出风头，还让大家改变了对三防手机傻大黑粗的看法。AGM  X3 Turbo作为一款旗舰三防手机，跟其他的三防手机有啥不一样呢？下来萝卜为大家揭晓一下。",
                    src:"https://upload-images.jianshu.io/upload_images/5032359-986118c39a2f6f2f.jpg!thumbnail?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp"
                },
                {
                    tips:"首先这款手机的外观进行了重新设计，力求在保持轻薄机身的同时尽可能带来舒适的握持感，机身的弧度完美的贴合了手掌的曲线。屏幕方面，大家平时使用的手机如果果奔的话，难免会刮伤屏幕，贴膜又让手感大打折扣。但AGM X3 Turbo在这方面做的很贴心：加持了康宁第五代大猩猩玻璃为手机保驾护航，而且免去不会贴膜的困扰，因为它根本不用贴膜！",
                    src:"https://upload-images.jianshu.io/upload_images/5032359-e98843dca834f598.jpg!thumbnail?imageMogr2/auto-orient/strip%7CimageView2/2/w/790/format/webp"
                },
                {
                    tips:"",
                    src:"https://upload-images.jianshu.io/upload_images/5032359-d1f19440c03298fa.jpg!thumbnail?imageMogr2/auto-orient/strip%7CimageView2/2/w/790/format/webp"
                },
                {
                    tips:"有了耐看的外观，内在也要能打才行。AGM X3 Turbo“祖传”的高质量天线以及独立的芯片系统让延续了信号劲性能强这一光荣传统，对户外用户来说，信号的好坏关系着个人的生命安全，有了AGM X3 Turbo之后，去荒芜的野外和深山，信号比普通手机强出不少，出门从此不怕遇到危险无法求救。同时，AGM X3 Turbo作为旗舰级的三防手机，IP68级别防水认证自然不会缺席，如果你热爱水下运动，哪怕在水里拍照片也不怕，分享到朋友圈还会引来一大波朋友的点赞，是不是很有面子？此外购买AGM X3 Turbo的用户，还能享受长达一年的意外防水维修服务，有了它你出门尽管随意造，坏了包修包赔。",
                    src:"https://upload-images.jianshu.io/upload_images/5032359-141446c65d80ee0c.jpg!thumbnail?imageMogr2/auto-orient/strip%7CimageView2/2/w/790/format/webp"
                },
                {
                    tips:"三防其实在生活中还是很常用的，比如快递小哥、外卖小哥在送货的时候，如果不小心摔落手机，轻则屏幕碎裂重则手机解体，不仅耽误送货的时间，另购手机也要多花一笔费用。而AGM  X3 Turbo机身四个边角采用软胶加持和航空级铝合金边框的加固设计，不怕意外摔落，同时也通过了军标认证。加上AGM还为这款手机附上长达一年的碎屏险，彻底免除后顾之忧。",
                    src:"https://upload-images.jianshu.io/upload_images/5032359-f80c7676a3b8b03a.jpg!thumbnail?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp"
                },
                {
                    tips:"性能方面，AGM X3 Turbo搭载了一颗主频高达2.8GHz满血版高通骁龙845芯片，同时5.99英寸18.9比例的大屏幕也为这款手机加分不少，吃鸡开黑完全能满足要求。4100mAh大电池的加持，户外待机时间杠杠的，同时AGM X3 Turbo支持QC 3.0有线快充+10W QI无线充电，无论是在充电还是在续航方面，这款新机都会给你满满的安全感。",
                    src:"https://upload-images.jianshu.io/upload_images/5032359-1385468a713c6c67.jpg!thumbnail?imageMogr2/auto-orient/strip%7CimageView2/2/w/790/format/webp"
                },
                {
                    tips:"如果你把AGM X3 Turbo送给老爸，老爸到手的第一感觉便是：声音大！因为AGM X3 Turbo搭载了后置JBL双喇叭享受环绕音，Smart PA音频芯片也让其在处理音质上得到了大幅提升。再也不用担心普通手机声音小联系不上家中的老爸，同时出门跳个舞还能当个小外放，让隔壁家的张大爷跟李大叔羡慕嫉妒恨。",
                    src:"https://upload-images.jianshu.io/upload_images/5032359-d858f55f93159bda.jpg!thumbnail?imageMogr2/auto-orient/strip%7CimageView2/2/w/790/format/webp"
                },
                {
                    tips:"硬汉的机身造型和酷炫的黑色手机主题，给老爸使用后，老爸对手机爱不释手，没事出门遛弯儿经常给老伙计炫耀手机的三防性能，比如摔落进水全不怕，双麦克风降噪通话清晰，按下AI快捷键后，进行一键呼叫联系人、打开APP、查询天气时间路况等信息。语音识别率也挺高，让手机用起来更轻松，看的老伙计更是心痒难耐。",
                    src:"https://upload-images.jianshu.io/upload_images/5032359-b9612139f965c960.jpg!thumbnail?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp"
                },
                {
                    tips:"综合来说，AGM  X3  Turbo搭载了4100mAh大电池，正常待机可以使用好几天，无论看视频还是刷微信，完全游刃有余，而对于一些喜欢拍照的用户，这款新机所搭载的1200万+2400万景深后置双摄像头，通过Arcsoft调校摄像头，无需复杂的操作，选好角度按下快门即可拍出非常漂亮的照片。",
                    src:"https://upload-images.jianshu.io/upload_images/5032359-b2975dfdbaa54d29.jpg!thumbnail?imageMogr2/auto-orient/strip%7CimageView2/2/w/790/format/webp"
                },
                {
                    tips:"AGM  X3  Turbo无论是在拍照还是机身品质与性能方面，算是三防手机中的佼佼者。这款手机无论户外探险还是送给爸妈，都是不错的礼物，快递、外卖小哥使用也不怕手机摔坏无法按时送达，实用性还是比较高的。而售价方面则是3999元起，这也是这个价位大家唯一能买到IP68级别防水的手机，同时全系标配8+128GB存储组合，不知道大家对这款三防手机怎么看呢？欢迎留下精彩的意见。",
                    src:"https://upload-images.jianshu.io/upload_images/5032359-ecdf392f1fb96a2d.jpg!thumbnail?imageMogr2/auto-orient/strip%7CimageView2/2/w/790/format/webp"
                },
            ]
        }
    },

}
</script>
