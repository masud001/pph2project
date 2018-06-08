//document ready function
$(document).ready(function(){
	// mobile menu toggle function
	$('#mobile-menu-toggle').click(function( e ){
		e.preventDefault();
		$('#wrapper').toggleClass('mobile-menu-dispaly');
	});

	// header search field display
	$(".user-search i.fa-search, .header-search-btn i.fa-search").click(function( e ){
		$('.search-field').toggleClass('serach-field-display');
	});

	$('.modal-upload-video').click( function(e){
		$('.video-url-form').toggleClass('add-video-display');
	});
	// hide youtube url fild by clicking cross btn
	$('.video-url-form span i.fa-times').click(function( e ){
		$('.video-url-form').toggleClass('add-video-display');
	});

});










// window resize function
$(window).on("resize", function(){

	

}).resize();