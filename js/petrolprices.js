$(window).scroll(function(){
    $('.headerbar').toggleClass('scrolled', $(this).scrollTop() > 10)
});

$(document).ready(function(){
    $(".albeve").click(function(){
        $(".ab").slideToggle()
        $(".alcobeve").toggleClass("fa-caret-right")
    });
})

$(document).on('click', '.categoryitem', function(){
    localStorage.setItem("ClickedId", this.id);
    window.location.href= 'Petrol_Price.html'
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
