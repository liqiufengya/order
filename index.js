// 轮播
$(document).ready(function() {
    var length,
        currentIndex = 0,
        interval,
        hasStarted = false, //是否已经开始轮播
        t = 3000; //轮播时间间隔
    length = $('.slider-panel').length;
    
    //将除了第一张图片隐藏
    $('.slider-panel:not(:first)').hide();
    //将第一个slider-item设为激活状态
    $('.slider-item:first').addClass('slider-item-selected');
    //隐藏向前、向后翻按钮
    $('.slider-page').hide();
    
    //鼠标上悬时显示向前、向后翻按钮,停止滑动，鼠标离开时隐藏向前、向后翻按钮，开始滑动
    $('.slider-panel, .slider-pre, .slider-next').hover(function() {
        stop();
        $('.slider-page').show();
    }, function() {
        $('.slider-page').hide();
        start();
    });
    
    $('.slider-item').hover(function(e) {
        stop();
        var preIndex = $(".slider-item").filter(".slider-item-selected").index();
        currentIndex = $(this).index();
        play(preIndex, currentIndex);
    }, function() {
        start();
    });
    
    $('.slider-pre').unbind('click');
    $('.slider-pre').bind('click', function() {
        pre();
    });
    $('.slider-next').unbind('click');
    $('.slider-next').bind('click', function() {
        next();
    });
    
    /**
     * 向前翻页
     */
    function pre() {
        var preIndex = currentIndex;
        currentIndex = (--currentIndex + length) % length;
        play(preIndex, currentIndex);
    }
    /**
     * 向后翻页
     */
    function next() {
        var preIndex = currentIndex;
        currentIndex = ++currentIndex % length;
        play(preIndex, currentIndex);
    }
    /**
     * 从preIndex页翻到currentIndex页
     * preIndex 整数，翻页的起始页
     * currentIndex 整数，翻到的那页
     */
    function play(preIndex, currentIndex) {
        $('.slider-panel').eq(preIndex).fadeOut(500)
            .parent().children().eq(currentIndex).fadeIn(1000);
        $('.slider-item').removeClass('slider-item-selected');
        $('.slider-item').eq(currentIndex).addClass('slider-item-selected');
    }
    
    /**
     * 开始轮播
     */
    function start() {
        if(!hasStarted) {
            hasStarted = true;
            interval = setInterval(next, t);
        }
    }
    /**
     * 停止轮播
     */
    function stop() {
        clearInterval(interval);
        hasStarted = false;
    }
    
    //开始轮播
    start();
});



//下拉菜单
$(".nav > li").mouseover(function(){
  $(this).children("ul").slideDown(200);
});
$(".nav > li").mouseleave(function(){
  $(this).children("ul").slideUp(200);
});


//用户登录 
  var ff=0;
  var on_login = document.getElementById("login");
  on_login.addEventListener('click',function(){
    var login_expand=document.getElementById('loginff')
    login_expand.style.display="block";
   var close_obj= document.getElementById('close');
   close_obj.addEventListener("click",function(){
    login_expand.style.display="none";
   })
  })
  function p1(){
    document.getElementById("q1").innerHTML=" ";
    document.getElementById("q2").innerHTML=" ";
    var name = document.getElementById("name").value;
    var pw = document.getElementById("pw").value;
    if(name==""){
        document.getElementById("q1").innerHTML="用户名不能为空！"
        onover();
        return;
    }
    if(name=="19300103"){
      if(pw=="19300103"){
        location.href='index.html'
      }else{
        document.getElementById("q2").innerHTML="密码错误！";
      }
    }else{
      document.getElementById("q1").innerHTML="请输入有效的用户名！";
    }
  }


//加入购物车弹窗提示 
  var strong=$('strong')
  console.log(strong);
  $('strong').click(function(){
    alert('你还没有登录哦！')
  })

//tab栏 
  $(".tab_list li").click(function(){
    $(this).addClass("current").siblings().removeClass("current");
    var index = $(this).index();
    console.log(index);
    $(".tab_con .item").eq(index).show().siblings().hide();
  });


//每日推荐栏 
  $(".f").mouseenter(function(){
    $(this).children("img").animate({width:"200%",height:"200%",marginTop:"-50%",marginLeft:"-50%"})   
  }).mouseleave(function(){
    $(this).children("img").animate({width:"100%",height:"100%",marginTop:0,marginLeft:0}) 
  })


//飘窗 
var ggRoll={
  roll:document.getElementById("roll"),
  speed:20,
  statusX:1,
  statusY:1,
  x:100,
  y:300,
  winW:document.documentElement.clientWidth-document.getElementById("roll").offsetWidth,
  winH:document.documentElement.clientHeight-document.getElementById("roll").offsetHeight,
  Go: function(){
      this.roll.style.left = this.x+'px';
      this.roll.style.top = this.y+'px';
      this.x = this.x+(this.statusX?-1:1)
      if(this.x<0){this.statusX=0}
      if(this.x>this.winW){this.statusX=1}
      this.y = this.y+(this.statusY?-1:1)
      if(this.y<0){this.statusY=0}
      if(this.y>this.winH){this.statusY=1} 
  }
};
var interval=setInterval("ggRoll.Go()",ggRoll.speed);
ggRoll.roll.onmouseover= function(){clearInterval(interval)};
ggRoll.roll.onmouseout=function(){interval=setInterval("ggRoll.Go()",ggRoll.speed)};

