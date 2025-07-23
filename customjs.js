//Create Variables Here
	var pageLoadtop = function(){
		$(window).on('beforeunload', function(){
			$(window).scrollTop(0);
		});
	};
	
	var aboutSlider = function(){
		$('.owl-controls .owl-prev, .owl-controls .owl-next').click(function() {
			 var t = $(".owl-item.active.center");
			 var itemDataID = t.find(".item").attr("data-id");
			$('.ourteam-slider-content').removeClass('is-active');
			$('#'+itemDataID+'.ourteam-slider-content').toggleClass('is-active');
		});
	};
	
	var smoothSlide = function(){
		$('.navigate-scroll').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
				  $('html, body').animate({
					scrollTop: target.offset().top + (-80)
				  }, 1000);
				  return false;
				}
			}
		});
	};
	
	var shrinkNav = function(){
		$(window).scroll(function() {
		  if ($(document).scrollTop() > 50) {
			$('nav').addClass('shrink');
		  } else {
			$('nav').removeClass('shrink');
		  }
		});
		
		$(".float-landing .media-right").click(function(){
			$(".float-landing").toggleClass("floating-slide");
			$(".float-landing .fa-map-marker").toggleClass("bounce");
		});
		
	};
	
	var owlCarousel = function(){
		$(".owl-prev").removeAttr("style");
		
		$('.owl-carousel').owlCarousel({
			items : 5,
			center : true,
			loop : true,
			touchDrag : false,
			mouseDrag: false,
			autoplay: false,
			autoplayHoverPause:true,
			responsiveClass: true,
			navigation: true,
			dots : false, 
			nav: true,
            navText: ["<i class='fa fa-chevron-circle-left' aria-hidden='true'></i>","<i class='fa fa-chevron-circle-right' aria-hidden='true'></i>"],
			responsive: {
				0:{
					items: 3,
					nav: true,
					margin: 0
				},
				600:{
					items: 3,
					nav: true,
					margin: 0
				},
				768: {
					items: 5,
					margin: 0
				}
            }
		});
	};
	


//Initiate Variables Here

//Initiate when file is loaded
$(document).ready(function(){	
	shrinkNav();
	owlCarousel();
});	


//Initiate on Resize
$(window).resize(function(){
	
});


//Initiate on Load
$(window).load(function(){
	pageLoadtop();
	smoothSlide();
});







