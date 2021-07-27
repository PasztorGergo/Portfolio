$('html').on('scroll',()=>{
    if(window.scrollY <= 0)
        $('nav').removeClass('scroll');
    $('nav').addClass('scroll');
});