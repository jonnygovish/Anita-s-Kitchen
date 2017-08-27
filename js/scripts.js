$(document).ready(function () {
    $(".openNav").on('click', function (event) {
        event.preventDefault();
        $(".overlay").addClass('open');

    });
    $('.closeNav').on('click', function (event) {
        event.preventDefault();
        $('.overlay').removeClass('open');
    });
});
