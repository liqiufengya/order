(function($){
    $.fn.commentImg = function(options){
        var defaults = {
            activeClass: 'current',
            nextButton: '.next',
            prevButton: '.prev',
            imgNavBox:'.photos-thumb',
            imgViewBox:'.photo-viewer'
        };

        var opts = $.extend({},defaults, options);
        this.each(function(){
            var _this =$(this),
                imgNav =_this.find(opts.imgNavBox).children(),
                imgViewBox =_this.find(opts.imgViewBox),
                prevBtn = _this.find(opts.prevButton),
                nextBtn = _this.find(opts.nextButton),
                src = '',
                img = new Image();
            function setViewImg(viewSrc, width, height){
                var url=viewSrc.substr(-3);
                if(url=="flv"||url=="mp4"||url=="3GP"||url=="AVI"||url=="MKV"||url=="WMV"||url=="MPG"||url=="VOB"||url=="SWF"||url=="MOV"){
                    imgViewBox.show(0,function(){
                        var imageWidth = width?width:1130;
                        var imageHeight = height?height:500;
                        $(this).css({ "width": imageWidth, "height": imageHeight }).find("video").show().attr('src', src);
                        $(this).css({ "width": imageWidth, "height": imageHeight }).find("img").hide();
                    });
                }else{
                    img.src = viewSrc;
                    img.onload = function () {
                        var imageWidth = img.width;
                        var imageHeight = img.height;
                        imgViewBox.show(0,function(){
                            $(this).css({ "width": imageWidth, "height": imageHeight }).find("img").show().attr('src', src);
                            $(this).css({ "width": imageWidth, "height": imageHeight }).find("video").hide();
                        });
                    }
                }
            }

            imgNav.on("click",function(){
                $(this).toggleClass(opts.activeClass).siblings().removeClass(opts.activeClass);
                if($(this).hasClass(opts.activeClass)){
                    src = $(this).attr('data-src');
                    var width = $(this).attr('data-width');
                    var height = $(this).attr('data-height')
                    setViewImg(src, width, height);
                }else{
                    imgViewBox.css({ "width": 0, "height": 0 }).hide();
                }
            });

            imgViewBox.on("click",function(){
                imgNav.removeClass(opts.activeClass);
                $(this).css({ "width": 0, "height": 0 }).hide();
            });

            prevBtn.hover(function () {
                var index = imgNav.index(_this.find(opts.imgNavBox).children("." + opts.activeClass));
                if (index < 1) {
                    $(this).css({"cursor":"default"}).children().hide();
                } else {
                    $(this).css({"cursor":"pointer"}).children().show();
                }
            }, function () {
                $(this).css({"cursor":"default"}).children().hide();
            });

            nextBtn.hover(function () {
                var index = imgNav.index(_this.find(opts.imgNavBox).children("." + opts.activeClass));
                if (index >= imgNav.length - 1) {
                    $(this).css({"cursor":"default"}).children().hide();
                } else {
                    $(this).css({"cursor":"pointer"}).children().show();
                }
            }, function () {
                $(this).css({"cursor":"default"}).children().hide();
            });

            prevBtn.on("click",function (e) {
                e.stopPropagation();
                var index = imgNav.index(_this.find(opts.imgNavBox).children("." + opts.activeClass));
                if (index > 0) {
                    index--;
                    imgNav.eq(index).toggleClass(opts.activeClass).siblings().removeClass(opts.activeClass);
                    src = imgNav.eq(index).attr('data-src');
                    var width = imgNav.eq(index).attr('data-width');
                    var height = imgNav.eq(index).attr('data-height')
                    setViewImg(src, width, height);
                }
                if (index <= 0) {
                    $(this).css({"cursor":"default"}).children().hide();
                }
            });

            nextBtn.on("click",function (e) {
                e.stopPropagation();
                var index = imgNav.index(_this.find(opts.imgNavBox).children("." + opts.activeClass));
                if (index < imgNav.length - 1) {
                    index++;
                    imgNav.eq(index).toggleClass(opts.activeClass).siblings().removeClass(opts.activeClass);
                    src = imgNav.eq(index).attr('data-src');
                    var width = imgNav.eq(index).attr('data-width');
                    var height = imgNav.eq(index).attr('data-height')
                    setViewImg(src, width, height);
                }
                if (index >= imgNav.length - 1) {
                    $(this).css({"cursor":"default"}).children().hide();
                }
            })

        })

    }

})(jQuery);

var strong=document.querySelector('strong');
strong.onclick=function(){
    alert('您还没有登录哦！');
};