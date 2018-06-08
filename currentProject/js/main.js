//document ready function
$(document).ready(function(){
	// mobile menu toggle function
	$('#mobile-menu-toggle').click(function( e ){
		e.preventDefault();
		$('#wrapper').toggleClass('mobile-menu-dispaly');
	});

	// header search field display
	$(".user-search i.fa-search").click(function( e ){
		$('.search-field').toggleClass('serach-field-display');
	});

});










// window resize function
$(window).on("resize", function(){

	

}).resize();