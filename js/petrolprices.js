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

// $(document).ready(function(){
//     $(".darkicon").click(function(){
//         $("body").toggleClass("dark-mode");
//         if($("body").hasClass("dark-mode")){
//             $(".darkicon").attr("class", "darkicon fa fa-light fa-sun fa-2x");
//         }else{
//             $(".darkicon").attr("class", "darkicon fa fa-light fa-moon fa-2x"); 
//         }
//   });
// });

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