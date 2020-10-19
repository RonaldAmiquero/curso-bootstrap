$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

$(document).on('click', '.navbar-collapse.show', function(e) {
    $(this).collapse('hide');
});