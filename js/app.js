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


$(document).ready(function(){
    $(".darkicon").click(function(){
        $("body").toggleClass("dark-mode");
        if($("body").hasClass("dark-mode")){
            localStorage.setItem("theme", "aqbnela")
            $(".darkicon").attr("class", "darkicon fa fa-light fa-sun fa-2x");
        }else{
            localStorage.setItem("theme", "aqcxela");
            $(".darkicon").attr("class", "darkicon fa fa-light fa-moon fa-2x"); 
        }
  });
        if(localStorage.getItem("theme")== "aqcxela"){
            $("body").attr("class", "light")
        }else{
            $("body").attr("class", "dark-mode")
            $(".darkicon").attr("class", "darkicon fa fa-light fa-sun fa-2x");
        }
});


$(document).on('click', '.categoryitem', function(){
    localStorage.setItem("ClickedId", this.id);
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
        window.location.href= 'https://worldwideprices.com/'
    })
})
