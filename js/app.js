$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 10)
});

$(document).ready(function(){
    $(".alcobeve").click(function(){
        $(".ab").slideToggle()
        $(".alcobeve").toggleClass("fa-caret-right")
    });
    $(".basicfooditems").click(function(){
        $(".bfi").slideToggle()
        $(".basicfooditems").toggleClass("fa-caret-right")
    });
    $(".electronics").click(function(){
        $(".elnics").slideToggle()
        $(".electronics").toggleClass("fa-caret-right")
    });
    $(".appleproducts").click(function(){
        $(".appleprod").slideToggle()
        $(".appleproducts").toggleClass("fa-caret-right")
    });
    $(".sony").click(function(){
        $(".sonyprod").slideToggle()
        $(".sony").toggleClass("fa-caret-right")
    });
    $(".fruavege").click(function(){
        $(".fruvege").slideToggle()
        $(".fruavege").toggleClass("fa-caret-right")
    });
    $(".noabe").click(function(){
        $(".nonabe").slideToggle()
        $(".noabe").toggleClass("fa-caret-right")
    });
    $(".restau").click(function(){
        $(".resto").slideToggle()
        $(".restau").toggleClass("fa-caret-right")
    });
})

$(document).on('click', '.categoryitem', function(){
    localStorage.setItem("ClickedId", this.id);
    window.location.href= 'Rankings.html'
});

