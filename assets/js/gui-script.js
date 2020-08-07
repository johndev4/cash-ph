$(document).ready(function () {
    //Go to top script--
    $('#to-top').click(function () {
        $('html').animate({
            scrollTop: 0
        }, 'slow');
    });

    window.onscroll = function () {
        if (window.scrollY > 0) {
            $('.top-btn').css('display', 'block');
        } else {
            $('.top-btn').css('display', 'none');
        }
    }
    //Go to top script--
});