$(document).ready(function () {
    $('nav').toggleClass('border-bottom shadow-sm scrolled', $(this).scrollTop() > 30);
    $('p.backTop').toggleClass('show', $(this).scrollTop() > 300);
});

$(window).scroll(function () {
    $('nav').toggleClass('border-bottom shadow-sm scrolled', $(this).scrollTop() > 30);
    $('p.backTop').toggleClass('show', $(this).scrollTop() > 300);
})