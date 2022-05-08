$(function () {
  var wjx_none = '☆'; // 空心五角星
  var wjx_sel = '★'; // 实心五角星
  $('.xx li').on('mouseleave', function () {
    if ($('li.current').length === 0) {
      $('.xx li').text(wjx_none);
    }else{
      $('li.current').text(wjx_sel).prevAll('li').text(wjx_sel).end().nextAll('li').text(wjx_none);
    }
  })
  $('.xx li').on('click', function () {
    $(this).attr('class', 'current').siblings('li').removeAttr('class');
  })
})

    //获取元素对象
      var modal = document.querySelector('.modal');
      var close = document.querySelector('.close');
      var pj = document.querySelectorAll('.pj-header');
      var bg = document.querySelector('.pj-bg');
    // 单击弹出遮罩层和模态框
      for(var i =0;i<pj.length;i++){
         pj[i].addEventListener('click', function () {
         modal.style.display = 'block';
         bg.style.display = 'block';

        close.addEventListener('click', function () {
        modal.style.display = 'none';
        bg.style.display = 'none';
     });
     });
     }
     