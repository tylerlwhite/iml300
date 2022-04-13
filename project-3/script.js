$(document).ready(function () {

  
    $('.img2').click(function () {
        $(this).toggleClass("smaller");
    });

    $(function () {
        $(".img1").draggable();
    });   
});
