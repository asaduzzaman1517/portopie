(function($) {
    "use strict"
    jQuery(document).ready(function($) {
        // menu-sidebar-activation
        $('.menu-bar').on('click', function() {
            $('.menu-bar').toggleClass('active');
        });
        $('.menu-bar').on('click', function() {
            $('.menu-sidebar').toggleClass('active');
        });
        // smooth-scroll-activation
        $(".main-menu ul li a").on('click', function(event) {
            var linkHref = $(this).attr("href");
            var headerHeight = $(".header-top-area").outerHeight();
            $("html, body").animate({
                scrollTop: $(linkHref).offset().top - headerHeight
            }, 1200);
            event.preventDefault();
        });
        // menu-item-activation
        $(".main-menu ul li").on('click', function() {
            var tabClass = $(this).attr("class");
            $(this).addClass("active").siblings().removeClass("active");
            $("." + tabClass + "-content").addClass("active").siblings().removeClass("active");
        });
        // progress-bar-activation
        $('.ui-ux-design').animate({
            width: '75%'
        }, 1000);
        $('.front-end-design').animate({
            width: '80%'
        }, 1000);
        $('.wordpress-development').animate({
            width: '90%'
        }, 1000);
        $('.sass').animate({
            width: '40%'
        }, 1000);
        $('.smacss').animate({
            width: '60%'
        }, 1000);
        // counter-up-activation
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
        // owl-carousel-activation
        $('.quote-slider').owlCarousel({
            loop: true,
            margin: 30,
            items: 2,
            autoplay: true,
            autoplayTimeout: 3000,
            nav: false,
            navText: false,
            dots: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 1
                },
                991: {
                    items: 2
                }
            }
        });
        // portfolio-tab-activation
        $(".portfolio-tab ul li").on('click', function() {
            var tabClass = $(this).attr("class");
            $(this).addClass("active").siblings().removeClass("active");
            $("." + tabClass + "-content").addClass("active").siblings().removeClass("active");
        });
        // mixitup-activation
        var containerEl = document.querySelector('.portfolio-items');
        var mixer = mixitup(containerEl);
    });

    jQuery(window).on('load', function() {
        // animation-activation
        new WOW().init();
        // portfolio-preloader-activation
        $('.portopie-preloader').fadeOut(500);
    });
})(jQuery);
