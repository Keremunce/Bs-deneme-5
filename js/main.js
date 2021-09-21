$(window).scroll(function(){
    $('.navbar').toggleClass('scrolled', $(this).scrollTop()>50);
});

$(".navbar-toggler").click(function() {
    $("nav").css("background", "#111111")
});

let video = document.querySelector('.hero');
window.addEventListener('scroll', function() {
    let value =   .9   + window.scrollY / -600;
    video.style.opacity = value;
});
