$(document).ready(function(){
    $('.mobile-menu .toggle').on('click', function(){
        $('.navigation nav ul').stop().slideToggle();
    })
});