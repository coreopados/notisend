$(document).ready(function () {



    AOS.init();


    $('.review-slider-2').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: $('.prev-button'),
        nextArrow: $('.next-button'),
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1360,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    dots: true
                }
    },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    dots: true,
                    variableWidth: true
                }
    }
  ]

    });


    $('.mobile-button').on('click', function () {
        event.preventDefault()
        $('.mobile-button').toggleClass('active');
        $('header.mobile nav').toggleClass('active');


        if ($('.mobile-button').hasClass('active')) {
            $('html').css('overflow-y', 'hidden')
        } else {
            $('html').css('overflow-y', 'unset')
        }

    })


    $('.mobile-button-2').on('click', function () {
        event.preventDefault()
        $('.mobile-button-2').toggleClass('active');
        $('header.mobile .nav-2').toggleClass('active');


        if ($('.mobile-button-2').hasClass('active')) {
            $('html').css('overflow-y', 'hidden')
        } else {
            $('html').css('overflow-y', 'unset')
        }

    })


})



$(window).scroll(function () {

    var toggler = 0;

    if (pageYOffset > 100 && window.innerWidth > 991) {

        if (toggler === 0) {
            $('#section-1 header.desktop').css('opacity', '0')

            $('#section-2 header.desktop').addClass('active')
            //            $('#section-2 header.mobile').css('display', 'none')
            toggler = 1

        }

    } else if (pageYOffset < 10 && window.innerWidth > 991) {
        $('#section-1 header.desktop').css('opacity', '1')

        $('#section-2 header.desktop').removeClass('active')
        //        $('#section-2 header.mobile').css('display', 'none')

        toggler = 0

    }


    if (pageYOffset > 100 && window.innerWidth < 991) {

        if (toggler === 0) {
            $('#section-1 header.mobile').css('opacity', '0')

            $('#section-2 header.mobile').addClass('active')

            toggler = 1

        }

    } else if (pageYOffset < 10 && window.innerWidth < 991) {
        $('#section-1 header.mobile').css('opacity', '1')

        $('#section-2 header.mobile').removeClass('active')


        toggler = 0

    }
})


$(window).on('resize', function () {
    if (window.innerWidth < 991) {
        $('#section-2 header.mobile').removeClass('active')
        $('.nav-2.active,.mobile-button-2').removeClass('active')
        $('html').css('overflow-y', 'unset')
    } else {
        $('#section-2 header.desktop').removeClass('active')
        $('.nav-2.active,.mobile-button-2').removeClass('active')
        $('html').css('overflow-y', 'unset')
    }


})
