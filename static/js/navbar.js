/**
 * Created by Samuel on 12/29/2016.
 */

$(function () {
    var $navbar = $('.navbar-custom');
    this.processScroll = function () {
        if ($(window).scrollTop() < 5) // give safe margin
            $navbar.addClass('at-top');
        else
            $navbar.removeClass('at-top');
    };

    this.processScroll();

    $(window).scroll(this.processScroll);
});