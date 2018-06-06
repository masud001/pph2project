//document ready function
$(document).ready(function(){
	var masud = $(".masud").length;
	console.log("length : "+ masud);
	$(".masud").click(function(){
		// $(this).addClass("img-overlay");
	});
});

// window resize function
$(window).on("resize", function(){
	var width = $(window).width();
	var outWindowWidth = window.outerWidth;
	var innerWindowWidth = window.innerWidth;

	console.log("width : "+ width);
	console.log("outWindowWidth : "+ outWindowWidth);
	console.log("innerWindowWidth : "+ innerWindowWidth);


}).resize();