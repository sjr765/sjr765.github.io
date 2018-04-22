$(document).ready(function() {
    $('.hover-text').hide();
    $('.hover-container-left').hide();
    $('.picone').animate({
        opacity:1
        
    });

    $('.picone').hover(function() {
        $(this).stop().animate({opacity:.4},200);
        $('.hover-text').fadeIn();
        $('.hover-container-left').fadeIn();

    }, function() {
        $('.picone').stop().animate({opacity:1},500)
        $('.hover-text').fadeOut();
        $('.hover-container-left').fadeOut();

    });


});