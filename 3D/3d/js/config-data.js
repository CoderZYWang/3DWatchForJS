/*
 *  Product : mkj005
 *  	操作说明：将"mkj005"全部替换为新的产品名
 * 
 * 	@file 3d_demo_mobile
 * 	@version 2.0
 * 	@date 2015-08-17
*/
var Showec_Config_mkj005={
  JS_FilePath4Web : "../imgs/imgsForweb",//小图路径：本地
  JS_FilePath4Big : "../imgs/imgsForbig",//大图路径：本地
  Showec_lenght : 40, //张数配置
  Showec_bigWith : 1322,  //大图宽度，按输出大图的宽度，一定要设
  Showec_bigHight : 1322,  //大图高度，按输出大图的高度，一定要设
  Showec_Fps : 10,  //播放速度，多少张/秒
  Showec_Auto : true, //是否自动播放
  Showec_Delay : 3, //拖动后，是停顿多少秒就播放
}
document.writeln("<div class=\"tax-padding\"><div class=\"tax-contianer\"><div id=\"circlr\">");
for(var i=0;i<Showec_Config_mkj005.Showec_lenght;i++){
	document.writeln("<img data-src=" + Showec_Config_mkj005.JS_FilePath4Web + "/" + i + ".jpg>");
}
document.writeln("<div id=\"loader\"></div></div></div></div>");
document.writeln("<div class=\"tax-tools\"><button class=\"tax-play\"onclick=\"tax_auto_paly(); return false\"style=\"display:none;\">开始</button><button class=\"tax-stop\"onclick=\"crl.stop(); return false\">停止</button><button id=\"btn\"class=\"tax-zoom\"onclick=\"crl.stop(); return false\">放大宝贝</button></div>");
document.writeln("<div class=\"pswp\"tabindex=\"-1\"role=\"dialog\"aria-hidden=\"true\"><div class=\"pswp__bg\"></div><div class=\"pswp__scroll-wrap\"><div class=\"pswp__container\"><div class=\"pswp__item\"></div><div class=\"pswp__item\"></div><div class=\"pswp__item\"></div></div><div class=\"pswp__ui pswp__ui--hidden\"><div class=\"pswp__top-bar\"><div class=\"pswp__counter\"></div><button class=\"pswp__button pswp__button--close\"title=\"Close (Esc)\"></button><button class=\"pswp__button pswp__button--zoom\"title=\"Zoom in/out\"></button><div class=\"pswp__preloader\"><div class=\"pswp__preloader__icn\"><div class=\"pswp__preloader__cut\"><div class=\"pswp__preloader__donut\"></div></div></div></div></div><div class=\"pswp__share-modal pswp__share-modal--hidden pswp__single-tap\"><div class=\"pswp__share-tooltip\"></div></div><button class=\"pswp__button pswp__button--arrow--left\"title=\"Previous (arrow left)\"></button><button class=\"pswp__button pswp__button--arrow--right\"title=\"Next (arrow right)\"></button><div class=\"pswp__caption\"><div class=\"pswp__caption__center\"></div></div></div></div></div>");

var crl = circlr('circlr', {
    scroll: false,
    loader: 'loader',
    autoplay: Showec_Config_mkj005.Showec_Auto,
    playSpeed: Showec_Config_mkj005.Showec_Fps*10,
});

var t 
function tax_auto(){crl.play();$(".tax-stop").show();$(".tax-play").hide()}function tax_auto_paly(){clearTimeout(t);crl.play()}$(document).ready(function(){$(".tax-stop").click(function(){$(".tax-play").show();$(".tax-stop").hide()});$(".tax-play").click(function(){$(".tax-stop").show();$(this).hide()});$("#circlr").on("touchstart || mousedown",function(){clearTimeout(t);$(".tax-play").show();$(".tax-stop").hide()});$("#circlr").on("touchend || mouseup",function(){t=setTimeout("tax_auto();",Showec_Config_mkj005.Showec_Delay*1000)})});


function openPhotoSwipe(src) {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [{
        src: src,
        w: Showec_Config_mkj005.Showec_bigWith, 
        h: Showec_Config_mkj005.Showec_bigHight  
    }];

    // define options (if needed)
    var options = {        
        history: false,
        focus: false,
        showAnimationDuration: 0,
        hideAnimationDuration: 0
    };
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};
$("#btn").click(function() {
    var imgSrcs = $("#circlr>img");
    var src = "../imgs/"+Showec_Config_mkj005.JS_FilePath4Big+"/0.jpg";
    for (var i = 0; i < imgSrcs.length; i++) {
        if (imgSrcs[i].style.display == "block") {
            var path = imgSrcs[i].src.split("/");
            src = "../imgs/"+Showec_Config_mkj005.JS_FilePath4Big+"/" + path[path.length - 1];
        }
    }
    openPhotoSwipe(src);
});
