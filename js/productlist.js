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

$(document).on('click', '.listitem', function(){
    localStorage.setItem("ClickedId", this.id);
});

$(document).ready(function(){
    $(".headerbar img").click(function(){
        window.location.href= 'https://worldwideprices.com/'
    })
})

$(document).ready(function(){
    $(".darkicon1").click(function(){
        $("body").toggleClass("dark-mode");
    if($("body").hasClass("dark-mode")){
        localStorage.setItem("theme", "aqbnela")

        $(".darkicon1").attr("name", "sunny");
    }else{
        localStorage.setItem("theme", "aqcxela")
        $(".darkicon1").attr("name", "moon"); 
    }
  });
        if(localStorage.getItem("theme")== "aqcxela"){
            $("body").attr("class", "light")
        }else{
            $("body").attr("class", "dark-mode")
            $(".darkicon1").attr("name", "sunny");
        }
});
