//通过id获取标签
function my$(id) {//通过id
    return document.getElementById(id);
}
//通过选择器获取单个标签
function sct$(selector){//通过选择器
    return document.querySelector(selector);
}
//通过选择器获器多个元素
function scts$(selectAll) {//通过选择器获取集合
    var doms=document.querySelectorAll(selectAll);
    if (doms.length == 1){
       return doms[0];
    } else{
        return Array.prototype.slice.call(doms,0);
        // return Array.prototype.slice.apply(doms,[0]);
        // return Array.prototype.slice.bind(doms,0)();
    }
}
//通过标签获取元素
function name$(tagName) {//通过标签
    var doms=document.getElementsByTagName(tagName);
    if (doms.length == 1){
        return doms[0];
    } else{
        return Array.prototype.slice.call(doms,0);
        // return Array.prototype.slice.apply(doms,[0]);
        // return Array.prototype.slice.bind(doms,0)();
    }
}
//获取样式
function getStyle(element, attr) {//获取计算后的样式 带单位
    return window.getComputedStyle ? window.getComputedStyle(element, null)[attr] : window.body.currentStyle[attr] || 0;
}
//封装多个动画
function animate(element, json, fn) {//封装任意多个动画函数
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        var flag = true;//默认假设全部到达目标
        for (var attr in json) {   //获取元素这个属性的当前的值
            if (attr == "opacity") {//判断是不是透明度
                var current = getStyle(element, attr) * 100;   //获取当前透明度放大100倍
                var target = json[attr] * 100;//目标放大100倍
                var step = (target - current) / 10;     //移动步数
                step = step > 0 ? Math.ceil(step) : Math.floor(step); //判断是正数还是负数
                current += step;
                element.style[attr] = current / 100; //到达目标缩小100倍
            }
            else if (attr == "zIndex") {
                element.style[attr] = json[attr];
            }
            else {//普通属性
                var current = parseInt(getStyle(element, attr));
                var target = json[attr];//当前属性对应的目标值
                var step = (target - current) / 10;     //移动步数
                step = step > 0 ? Math.ceil(step) : Math.floor(step); //判断是正数还是负数
                current += step;
                element.style[attr] = current + "px";
            }
            if (current != target) {  //判断是否全部到达目标
                flag = false;
            }
        }
        if (flag) {
            clearInterval(element.timeId);       //全部到达目标清理定时器
            if (fn) {     //全部到达目标指向这个函数  前提是传入了这个函数
                fn();
            }
        }

        // console.log("目标:"+target+",当前:"+current+",每次的移动步数:"+step);
    }, 20)
}
//获取时间
function getDates(dt) {
    var str = "";//存储时间的字符串
    //获取年
    var year = dt.getFullYear();
    //获取月
    var month = dt.getMonth() + 1;
    //获取日
    var day = dt.getDate();
    //获取小时
    var hour = dt.getHours();
    //获取分钟
    var min = dt.getMinutes();
    //获取秒
    var sec = dt.getSeconds();
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    str = year + "年" + month + "月" + day + "日 " + hour + ":" + min + ":" + sec;
    return str;
}
//获取页面向上向左卷曲的距离
function getScroll() {
    return {
        top: window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0,
        left: window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft||0
    };
}


//设置任意的一个元素,移动到指定的目标位置
function animate(element, target) {
    clearInterval(element.timeId);
    //定时器的id值存储到对象的一个属性中
    element.timeId = setInterval(function () {
        //获取元素的当前的位置,数字类型
        var current = element.offsetLeft;
        //每次移动的距离
        var step = 10;
        step = current < target ? step : -step;
        //当前移动到位置
        current += step;
        if (Math.abs(current - target) > Math.abs(step)) {
            element.style.left = current + "px";
        } else {
            //清理定时器
            clearInterval(element.timeId);
            //直接到达目标
            element.style.left = target + "px";
        }
    }, 10);
}