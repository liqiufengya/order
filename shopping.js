  $(function () {
    $(".checkall").change(function () {
      $(".jc, .checkall").prop("checked", $(this).prop("checked"));
      getSum();	// 调用
      if ($(this).prop("checked")) {
        $(".itme").addClass("check-itme");
      } else {
        $(".itme").removeClass("check-itme");
      }
    });
    $(".jc").change(function () {
      if ($(".jc:checked").length === $(".jc").length) {
        $(".checkall").prop("checked", true);
      } else {
        $(".checkall").prop("checked", false);
      }
      getSum();	// 调用
      if ($(this).prop("checked")) {
        $(this).parents(".itme").addClass("check-itme");
      } else {
        $(this).parents(".itme").removeClass("check-itme");
      }
    });
    $(".in").click(function () {
      // 得到当前兄弟文本框的值
      var n = $(this).siblings(".it").val();
      n++;
      $(this).siblings(".it").val(n);
      var p = $(this).parents(".pn").siblings(".p-price").html();
      p = p.substr(1);
      var price = (p * n).toFixed(2);  // 将计算结果保留2位小数
      $(this).parents(".pn").siblings(".ps").html("¥" + price);
      getSum();	// 调用
    });
    $(".de").click(function () {
      // 得到当前兄弟文本框的值
      var n = $(this).siblings(".it").val();
      if (n == 1) {
        return false;
      }
      n--;
      $(this).siblings(".it").val(n);
      // 将“+”按钮中新增的代码复制到此处即可
      var p = $(this).parents(".pn").siblings(".p-price").html();
      p = p.substr(1);
      var price = (p * n).toFixed(2);  // 将计算结果保留2位小数
      $(this).parents(".pn").siblings(".ps").html("¥" + price);
      getSum();	// 调用
    });
    $(".it").change(function () {
      // 先得到文本框的里面的值，然后乘以当前商品的单价
      var n = $(this).val();
      // 当前商品的单价
      var p = $(this).parents(".pn").siblings(".p-price").html();
      p = p.substr(1);
      var price = (p * n).toFixed(2);
      $(this).parents(".pn").siblings(".ps").html("￥" + price);
      getSum();	// 调用
    });
    function getSum() {
      // 计算总件数
      var count = 0;
      var item = $(".jc:checked").parents(".itme");
      item.find(".it").each(function (i, ele) {
        count += parseInt($(ele).val());
      });
      $(".ams em").text(count);
      // 计算总额
      var money = 0;
      item.find(".ps").each(function (i, ele) {
        money += parseFloat($(ele).text().substr(1));
      });
      $(".pum").text("¥" + money.toFixed(2));
    }
    getSum();
    $(".pa a").click(function () {
      $(this).parents(".itme").remove();
      getSum();
    });
    $(".rb").click(function () {
      $(".jc:checked").parents(".itme").remove();
      getSum();
    });
    $(".ca").click(function () {
      $(".itme").remove();
      getSum();
    })
  });