var $slider = $('.slider');

if ($slider.length) {
    var currentSlide;
    var slidesCount;
    var sliderCounter = document.createElement('div');
    sliderCounter.classList.add('slider__counter');

    var updateSliderCounter = function(slick, currentIndex) {
        currentSlide = slick.slickCurrentSlide() + 1;
        slidesCount = slick.slideCount;
        $(sliderCounter).html('<span class="currentslide"> 0' + currentSlide + '</span>' + '/' + '<span class="totalslides">0' + slidesCount + '</span>')
    };

    $slider.on('init', function(event, slick) {
        $slider.append(sliderCounter);
        updateSliderCounter(slick);
    });

    $slider.on('afterChange', function(event, slick, currentSlide) {
        updateSliderCounter(slick, currentSlide);
    });

    $slider.slick();
}

$(document).on('click', '.buttons-polls ul li ', function() {
    $(this).addClass('active').siblings().removeClass('active');
});


$(document).ready(function() {
    var scrollTop = 0;
    $(window).scroll(function() {
        scrollTop = $(window).scrollTop();

        if (scrollTop >= 10) {
            $('header').addClass('stickyheader');
            $('.mainlogo').addClass('scrolled');
            $('.maintagline').addClass('scrolled');
        } else if (scrollTop < 10) {
            $('header').removeClass('stickyheader');
            $('.mainlogo').removeClass('scrolled');
            $('.maintagline').removeClass('scrolled');

        }

    });

});

$(document).ready(function() {
    var scrollTop = 0;
    $('.nav-custom .header-mainmenu').scroll(function() {
        scrollTop = $(this).scrollTop();

        if (scrollTop >= 10) {
            $('.nav-active .nav-custom').addClass('stickymenuicon');
        } else if (scrollTop < 10) {
            $('.nav-active .nav-custom').removeClass('stickymenuicon');
        }

    });

});

const app = (() => {
    let body;
    let menu;
    let menuItems;

    const init = () => {
        body = document.querySelector('body');
        menu = document.querySelector('.menu-icon');
        menuItems = document.querySelectorAll('.nav__list-item');
    }

    $(".menu-icon").click(function() {

        if ($("body").hasClass("nav-active")) {
                $('body').addClass('special-class'); 

            setTimeout(function(){ 
                 
                $('body').removeClass('nav-active'); 
            }, 200);
            



        } else {

            $('body').addClass('nav-active');
            $('body').removeClass('special-class');

        }

    });


    const toggleClass = (element, stringClass) => {
        if (element.classList.contains(stringClass))
            element.classList.remove(stringClass);
        else
            element.classList.add(stringClass);
    }

    init();
})();