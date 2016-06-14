$(document).ready(function(){

	//$(".contact-info > a").hide();

	$(".profile-headshot").promise().done(function(){

	$(this).delay(200).animate({opacity: 1}, 1000);

	$(".title-wrapper > h1").delay(250).animate({opacity: 1}, 1000);

	$(".title-wrapper > p").delay(500).animate({opacity: 1}, 1000);

	$(".contact-info > a").delay(700).each( function(e) {

		//$(this).delay(100*e).animate({opacity: 1,top:0}, 1000);

	} );

	$("main").delay(800).animate({opacity: 1},1000);

	});



});