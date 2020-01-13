

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
    // $(window).on('load', function () {
    //     $("div.preloader ul.preloader").fadeOut(1000, function () {
    //         $(this).parent().fadeOut(500, function () {
    //             $("body").css("overflow-y", "auto");
    //             $(this).remove();
    //         });
    //     });
    // });

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
    // $(window).scroll(function () {
    //     var scrolltop = $(window).scrollTop();
    //     var scrolltrigger = $(".s-services").offset().top;
    //     if (scrolltop >= scrolltrigger) {
    //         $("a.gotoup").fadeIn();

    //     }
    //     else {
    //         $("a.gotoup").fadeOut(100);

    //     }
    // });


    // $(" a.gotoup ").click(function (e) {
    //     e.preventDefault();
    //     $("html,body").animate({
    //         scrollTop: $($(this).data("scroll")).offset().top + 1
    //     }, 1000)


    // });

    /* ======= gotoUp ======= */


/* ======= sticky Navbar ======= */
    //var navbar = document.getElementById("#s-header");
    //  var sticky = navbar.offsetTop;
    // $( window ).scroll(function(){
    //     if (window.pageYOffset >= sticky) {
    //                     navbar.classList.add("sticky")
    //                 } else {
    //                     navbar.classList.remove("sticky");
    //                 }
    // } );

/* ======= sticky Navbar ======= */




});