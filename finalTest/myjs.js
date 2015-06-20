$(document).ready(function(){
	$('#main img').mouseenter(function(){
		$(this).css('opacity', '1');
	});
	$('#main img').mouseleave(function(){
		$(this).css('opacity', '0.45');
	});
	$('#main div').mouseenter(function(){
		$(this).addClass('box');
	});
	$('#main div').mouseleave(function(){
		$(this).removeClass('box');
	});
	$("#north").click(function(){
        $("#myModal").modal();
    });
    $("#west").click(function(){
        $("#myModal").modal();
    });
    $("#south").click(function(){
        $("#myModal").modal();
    });
    $("#east").click(function(){
        $("#myModal").modal();
    });
});