$(document).on('click', '.categorybox', function(){
    localStorage.setItem("ClickedId", this.id);
});

$(window).scroll(function(){
    $('.headerbar').toggleClass('scrolled', $(this).scrollTop() > 1)
});

$(document).ready(function(){
    $(".main").click(function(){
        $(".main").toggleClass("fa-bars")
    })
})

$(document).ready(function(){
    $(".main").click(function(){
        $(".sidePanel").toggleClass("sidepushed")
        $(".sidepanelbtn").toggleClass("sidebtnpushed")
    })
})

$(document).ready(function(){
    $(".headerbar img").click(function(){
        window.location.href= 'index.html'
    })
})