/**
 * Created by Samuel Li on 2/18/2017.
 */
$(function() {
    var animationClasses = '.fade-bottom, .zoom-in';

    function findAnimate() {
        $('.watch-animate:in-viewport').find(animationClasses).addClass('animate');
    }
    $(window).scroll(findAnimate);
    findAnimate();
});