/**
 * Created by samuel on 12/30/16.
 */
$(function() {
  var $tbcaTitle = $('#animate-tbca-title');
  var titleChars = ['', 't','b','c','a'];

  function titleLoop(index) {
    if (index != titleChars.length) {
      setTimeout(function() {
        $tbcaTitle.append(titleChars[index]);
        titleLoop(index + 1);
      }, 500);
    }
  }

  titleLoop(0);
});