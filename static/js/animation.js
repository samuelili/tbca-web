/**
 * Created by samuel on 12/30/16.
 */
$(function() {
  var animationClasses = '.fade-bottom, .zoom-in';

  function findAnimate() {
    //noinspection CssInvalidPseudoSelector
    $('.watch-animate:in-viewport').find(animationClasses).addClass('animate');
  }
  $(window).scroll(findAnimate);
  findAnimate();
});