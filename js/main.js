(function ($) {
    "use strict";

    // Disable Spinner
    var spinner = function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    };
    spinner();
    
    // Disable WOW.js (no animations)
    // new WOW().init(); // Removed to stop animations

    // Disable Sticky Navbar movement
    $(window).scroll(function () {
        $('.sticky-top').removeClass('shadow-sm').css('top', '0px');
    });

    // Disable Back to top button
    $(window).scroll(function () {
        $('.back-to-top').hide();
    });

    // Disable Facts counter
    $('[data-toggle="counter-up"]').text(function () {
        return $(this).attr('data-count'); // Set the static value based on the initial count
    });

    // Disable Portfolio isotope and filter functionality
    // No filtering behavior
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

})(jQuery);
