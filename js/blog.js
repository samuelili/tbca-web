/**
 * Created by Samuel on 2/22/2017.
 */

$(function() {
    $.ajax({
        url: 'static/blog.md',
        dataType: 'text',
        type: 'GET',
        async: true,
        success: function(md) {
            $('#markdown').html(marked(md));
        }
    });
});