$(document).ready(function(){

   /* $('#quote').flipQuote({
    container: '#container'
    });*/



	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	$('#sun_1').mouseenter(function(){
		$("#Introimg").attr("src","image/sun_1.png");
	});
	$('#sun_1').mouseleave(function(){
		$("#Introimg").attr("src","image/sun_all.png");
	});
	$('#sun_2').mouseenter(function(){
		$("#Introimg").attr("src","image/sun_2.png");
	});
	$('#sun_2').mouseleave(function(){
		$("#Introimg").attr("src","image/sun_all.png");
	});
	$('#sun_3').mouseenter(function(){
		$("#Introimg").attr("src","image/sun_3.png");
	});
	$('#sun_3').mouseleave(function(){
		$("#Introimg").attr("src","image/sun_all.png");
	});
	$('#sun_4').mouseenter(function(){
		$("#Introimg").attr("src","image/sun_4.png");
	});
	$('#sun_4').mouseleave(function(){
		$("#Introimg").attr("src","image/sun_all.png");
	});
	$('#main img').mouseenter(function(){
		$(this).css('opacity', '1'); 
	});
	$('#main img').mouseleave(function(){
		$(this).css('opacity', '0.45');
		$("#season_content").text("季節是每年循環出現的地理景觀相差比較大的幾個時間段。不同的地區，其季節的劃分也是不同的。對溫帶地區而言，一年分為四季，即春季、夏季、秋季、冬季；在這些季節裡又分為四季，即溫季、熱季、涼季、寒季；而對於赤道地區只有旱季和雨季，或無季相之分。在兩極地區，並非只有冬季，但春秋季不明顯，以北極為例，五月到九月為夏季，十月到隔年四月為冬季。");
	});
	$('#main div').mouseenter(function(){
		$(this).addClass('box');
	});
	$('#main div').mouseleave(function(){
		$(this).removeClass('box');

	});
	$("#north").mouseenter(function(){
        $("#season_content").text("夏至，是二十四節氣之一。每年6月21日前後太陽到達黃經90°時開始。是最早被確定的一個節氣。西元前7世紀，古人用土圭量日影，夏至這一天日影最短，因此把這一天稱作「夏至」。");
    });

    $("#west").mouseenter(function(){
        $("#season_content").text("aaa");
    });
    $("#south").mouseenter(function(){
        $("#season_content").text("bbb");
    });
    $("#east").mouseenter(function(){
        $("#season_content").text("ccc");
    });
});