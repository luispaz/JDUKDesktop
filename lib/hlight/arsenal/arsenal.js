/***

 * --- --- --- --- ---
 * JD Sports Fashion plc
 * IBM WebSphere Commerce Platform
 * Khaleel Mughal
 * --- --- --- --- ---
 * #ARSENALFOOTBALL
 * --- --- --- --- ---

**/

// START
// -- Load Program

jQuery(document).ready(function ($) {
	
	// VARS
	$.fx.speeds._default = 250;
	jQuery('.fademe').fadeIn(1200);	
	
	// MIDDLE SPOT ANIMATIONS
	// -- Fade the user mouse selected box and fade others out
	
		var divToAnimate=".topspots a";	// WHAT ARE FADING?
		var fadedBoxesFirst="yes";	// SHOULD BOXES START FADED; yes, no
		var onSpeed=250;			// HOVER OVER SPEEDS
		var offSpeed=250;
		
		if(fadedBoxesFirst=="yes"){jQuery(divToAnimate).css('opacity', 1);jQuery(divToAnimate).hover(function(){jQuery(divToAnimate).not(jQuery(this)).stop().animate({opacity:.5},onSpeed);},function(){jQuery(divToAnimate).stop().animate({opacity:1});},offSpeed);}else{jQuery(divToAnimate).css('opacity', 35);jQuery(divToAnimate).hover(function(){jQuery(divToAnimate).not(jQuery(this)).stop().animate({opacity:1},onSpeed);},function(){jQuery(divToAnimate).stop().animate({opacity:.5});},offSpeed);}
	
});