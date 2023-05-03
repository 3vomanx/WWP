$(window).scroll(function(){
    $('.headerbar').toggleClass('scrolled', $(this).scrollTop() > 1)
});

$(document).ready(function(){
    $(".albeve").click(function(){
        $(".ab").slideToggle()
        $(".alcobeve").toggleClass("fa-caret-right")
    });
    $(".bfitems").click(function(){
        $(".bfi").slideToggle()
        $(".basicfooditems").toggleClass("fa-caret-right")
    });
    $(".eltro").click(function(){
        $(".elnics").slideToggle()
        $(".electronics").toggleClass("fa-caret-right")
    });
    $(".appro").click(function(){
        $(".appleprod").slideToggle()
        $(".appleproducts").toggleClass("fa-caret-right")
    });
    $(".soni").click(function(){
        $(".sonyprod").slideToggle()
        $(".sony").toggleClass("fa-caret-right")
    });
    $(".fruandvege").click(function(){
        $(".fruvege").slideToggle()
        $(".fruavege").toggleClass("fa-caret-right")
    });
    $(".noalco").click(function(){
        $(".nonabe").slideToggle()
        $(".noabe").toggleClass("fa-caret-right")
    });
})

$(document).on('click', '.categoryitem', function(){
    localStorage.setItem("ClickedId", this.id);
    window.location.href= 'Rankings.html'
});

$(document).on('click', '.categorybox', function(){
    localStorage.setItem("ClickedId", this.id);
    window.location.href= 'Rankings.html'
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
