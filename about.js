 // 鼠标指针经过左侧的li
 $("#left li").mouseover(function () {
    var index = $(this).index();	// 得到当前li的索引
    console.log(index);
    // 让右侧盒子相应索引的图片显示出来
    $("#nr div").eq(index).show();
    // 将其他图片隐藏起来
    $("#nr div").eq(index).siblings().hide();
  });

  $("#left li").mouseover(function(){
    var index=$(this).index();
    console.log(index);
    $("#nr div").eq(index).show();
    $("#nr div").eq(index).siblings().hide();
});
    var note=document.getElementsByClassName('note')
    console.log(note[0].innerText);

//留言板
var btn = document.querySelector('button');
var text = document.querySelector('textarea');
var ol = document.querySelector('ol');
// 2. 注册事件
btn.onclick = function () {
  if (text.value == '') {
    alert('您还没有输入内容哦！！！');
    return false;
  } else {
    // (1) 创建元素
    var li = document.createElement('li');
    li.innerHTML = text.value + '<a href="javascript:;">删除</a>';
    // (2) 添加元素
    ol.insertBefore(li, ol.children[0]);
    var as = document.querySelectorAll('a');
    for (var i = 0; i < as.length; i++) {
      as[i].onclick = function () {
        ol.removeChild(this.parentNode);
      };
    }
  }
};