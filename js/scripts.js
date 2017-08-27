$(document).ready(function () {
    $(".openNav").on('click', function (event) {
        event.preventDefault();
        $(".overlay").addClass('open');

    });
    $('.closeNav').on('click', function (event) {
        event.preventDefault();
        $('.overlay').removeClass('open');
    });
    $("form").submit(function(event){
        event.preventDefault();
        var userEmail =$("#email").val();
        console.log(userEmail);
        alert(userEmail + " has been successfully added to our email list. Thank you.")
        
        $("#email").val("");
    })
});
