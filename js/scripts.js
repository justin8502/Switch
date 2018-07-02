$(document).ready(function() {
	$(".fade1").hide().fadeIn(1500);
	var i;
	function fadename(){
		for(i = 0; i < 50; i++){
		$('.fade2')
		  .delay(12)
		  .queue(function (next) { 
		    $(this).css("width", $(this).width() + 5); 
		    next(); 
		 });
		}
	}
	fadename();
	var isleft = false;
	const introHeight1 = document.querySelector('.fade3').offsetHeight + ($(window).height()/1.3);
	const introHeight2 = document.querySelector('.fade3').offsetHeight + ($(window).height());
	const introHeight3 = document.querySelector('.fade5').offsetHeight + ($(window).height()*1.3);

	window.addEventListener(
	    'scroll',
	    function() {
	      if (window.scrollY > introHeight1) {
	        $('.fade3').fadeIn();
	      } 
	    },
	    false
	 );



	window.addEventListener(
	    'scroll',
	    function() {
	      if (window.scrollY > introHeight2 & !isleft) {
			var i;
			for(i = 0; i < 20; i++){
			$('.fade4')
			  .delay(20)
			  .queue(function (next) { 
			    $(this).css("padding-left", "-=1"); 
			    $(this).css("opacity", "+=.1")
			    next(); 
			 });
			}
			isleft = true;
	      } 
	    },
	    false
	 );

	window.addEventListener(
	    'scroll',
	    function() {
	      if (window.scrollY > introHeight3) {
	        $('.fade5').fadeIn();
	      } 
	    },
	    false
	 );
});