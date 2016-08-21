$( document ).ready( function() { 
    $("div > ul.mpc:not(.run)").css("opacity","0");
	$( window ).scroll( function () {

	    $("div > ul.mpc").inVP( .60, function() {

	            $("div > ul.mpc:not(.run)").each(function(e) {
	                $(this).addClass("run");
	                $(this).css("position","relative");
	                $(this).css("top","25px");
	                $(this).delay(200+e*230).animate({top:"-10px",opacity:1},300).animate({top:"0px",opacity:1},300);
	            });

	        } );
		
	} );



 } );