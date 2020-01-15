// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

$(document).ready(function () {

     /* ======= Scroll To Fixed Menu ======= */ 
$(window).scroll(function(){
    if ($(window).scrollTop() >= 30) {
        $('#mainNav').addClass('fixed-top-r');
    } else {
        $('#mainNav').removeClass('fixed-top-r');
    }
});
     /* ======= Scroll To Fixed Menu ======= */ 
    /* ======= Preloader ======= */

    $(window).on('load', function () {
        $("div.preloading .preloader").fadeOut(1000, function () {
            $(this).parent().fadeOut(500, function () {
                $("body").css("overflow-y", "auto");
                $(this).remove();
            });
        });
    });

    /* ======= Preloader ======= */
    /* ======= Slider ======= */
                    
        $('.clients-carousel').slick({

        slidesToShow: 4,
        slidesToScroll: 4,
        pauseOnFocus:false,
        pauseOnHover:false,
        prevArrow: '<i class="fa fa-angle-right"></i>',
        nextArrow: '<i class="fa fa-angle-left"></i>',
        autoplay:true,
        infinite: true,
        speed: 1000,

        responsive: [{
                 breakpoint: 768,
                 settings: {
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 1
                
                    }
                  },
                  {
                 breakpoint: 480,
                 settings: {
                  arrows: false, 
                  slidesToShow: 1,
                  slidesToScroll: 1
                
                    }
                 },

                ]

    });

    /* ======= Slider ======= */


    /* ======= gotoUp ======= */
    // Scroll To Top Btn Show
    $(window).scroll(function(){
        var tsticky = $('.gotoup'),
            scroll = $(window).scrollTop();
        if (scroll >= 200) tsticky.addClass('show');
        else tsticky.removeClass('show');
    });


    $(" a.gotoup ").click(function (e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop: $($(this).data("scroll")).offset().top + 1
        }, 1000)


    });

    /* ======= gotoUp ======= */
   /* ======= Smooth scrolling ======= */
   
	// Smooth scrolling using jQuery easing
	$("a.clickItem").on('click', function(e) {
        var target = $(this.hash);
        target = target.length ? target : $('meta[name="' + this.hash.slice(1) + '"]');
            if (target.length) {
            $('html, body').animate({
                scrollTop: (target.offset().top + 1)
            }, 1000, "easeInOutExpo");
                return false;
            }
        });

        $(".nav-link.clickItem").click(function(){
            $('.nav-link.clickItem').removeClass("active");
            $(this).addClass("active");
        }); 
	// Closes responsive menu when a scroll trigger link is clicked
	$('.nav-link.clickItem').click(function() {
		$('.navbar-collapse').collapse('hide');
    });
    
    // Scrollspy offset
	$('body').scrollspy({
		target: '#mainNav',
		offset: 30
	});
   /* ======= Smooth scrolling ======= */




});