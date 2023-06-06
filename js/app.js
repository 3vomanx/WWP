
window.addEventListener("load", function(){
    var categorysection = 
    '<ul class="category">'+
        '<li class="categorytitle albeve"><i class="fa fa-regular fa-caret-down alcobeve" style="font-size: 25px;">'+
        '</i>Alcoholic Beverages</li>'+
            '<li class="categoryitem ab" id="0">'+
                '<a href="/Compare-Countries/Alcoholic-Beverages/Beer-Prices/" target="_parent" id="categoryitem">Beer</a>'+
            '</li>'+
            '<li class="categoryitem ab" id="1">'+
                '<a href="/Compare-Countries/Alcoholic-Beverages/Wine-Prices/" target="_parent" id="categoryitem1">Wine</a>'+
            '</li>'+
            '<li class="categoryitem ab" id="2">'+
                '<a href="/Compare-Countries/Alcoholic-Beverages/Whiskey-Prices/" target="_parent" id="categoryitem2">Whiskey</a>'+
           '</li>'+
            '<li class="categoryitem ab" id="3">'+
                '<a href="/Compare-Countries/Alcoholic-Beverages/Vodka-Prices/" target="_parent" id="categoryitem3">Vodka</a>'+
            '</li>'+
    '</ul>'+
    '<ul class="category">'+
        '<li class="categorytitle bfitems"><i class="fa fa-regular fa-caret-down basicfooditems" style="font-size: 25px;">'+
        '</i>Basic Food Items</li>'+
            '<li class="categoryitem bfi" id="4">'+
                '<a href="/Compare-Countries/Basic-Food-Items/Flour-Prices/" target="_parent" id="categoryitem4">Flour</a>'+
            '</li>'+
            '<li class="categoryitem bfi" id="5">'+
                '<a href="/Compare-Countries/Basic-Food-Items/Rice-Prices/" target="_parent" id="categoryitem5">Rice</a>'+
            '</li>'+
            '<li class="categoryitem bfi" id="6">'+
                '<a href="/Compare-Countries/Basic-Food-Items/Sugar-Prices/" target="_parent" id="categoryitem6">Sugar</a>'+
            '</li>'+
            '<li class="categoryitem bfi" id="7">'+
                '<a href="/Compare-Countries/Basic-Food-Items/Salt-Prices/" target="_parent" id="categoryitem7">Salt</a>'+
            '</li>'+
            '<li class="categoryitem bfi" id="8">'+
                '<a href="/Compare-Countries/Basic-Food-Items/Milk-Prices/" target="_parent" id="categoryitem8">Milk</a>'+
            '</li>'+
            '<li class="categoryitem bfi" id="9">'+
                '<a href="/Compare-Countries/Basic-Food-Items/Eggs-Prices/" target="_parent" id="categoryitem9">Eggs</a>'+
            '</li>'+
            '<li class="categoryitem bfi" id="10">'+
                '<a href="/Compare-Countries/Basic-Food-Items/Cooking-Oil-Prices/" target="_parent" id="categoryitem10">Cooking Oil</a>'+
            '</li>'+
            '<li class="categoryitem bfi" id="11">'+
                '<a href="/Compare-Countries/Basic-Food-Items/Beef-Prices/" target="_parent" id="categoryitem11">Beef</a>'+
            '</li>'+
            '<li class="categoryitem bfi" id="12">'+
                '<a href="/Compare-Countries/Basic-Food-Items/Poultry-Prices/" target="_parent" id="categoryitem12">Poultry</a>'+
            '</li>'+
    '</ul>'+
    '<ul class="category">'+
        '<li class="categorytitle eltro"><i class="fa fa-regular fa-caret-down electronics" style="font-size: 25px;">'+
        '</i>Electronics</li>'+
            '<li class="categoryitem elnics" id="13">'+
                '<a href="/Compare-Countries/Electronics/GoPro-Hero-11-Prices/" target="_parent" id="categoryitem13">GoPro Hero 11</a>'+
            '</li>'+
            '<li class="categoryitem elnics" id="14">'+
                '<a href="/Compare-Countries/Electronics/Xiaomi-Redmi-K50I-Prices/" target="_parent" id="categoryitem14">Xiaomi Redmi K50I</a>'+
            '</li>'+
            '<li class="categoryitem elnics" id="15">'+
                '<a href="/Compare-Countries/Electronics/Xiaomi-13-Ultra-Prices/" target="_parent" id="categoryitem15">Xiaomi 13 Ultra</a>'+
            '</li>'+ 
    '</ul>'+
    '<ul class="category">'+
        '<li class="categorytitle appro"><i class="fa fa-regular fa-caret-down appleproducts" style="font-size: 25px;">'+
        '</i>Apple Products</li>'+
            '<li class="categoryitem appleprod" id="16">'+
                '<a href="/Compare-Countries/Apple-Products/Iphone14-Prices/" target="_parent" id="categoryitem16">IPhone 14, 128GB</a>'+
            '</li>'+
            '<li class="categoryitem appleprod" id="33">'+
                '<a href="/Compare-Countries/Apple-Products/Iphone14-Pro-Max-512GB-Prices/" target="_parent" id="categoryitem33">IPhone 14 Pro Max, 512GB</a>'+
            '</li>'+
            '<li class="categoryitem appleprod" id="17">'+
                '<a href="/Compare-Countries/Apple-Products/Ipad-pro-11-Prices/" target="_parent" id="categoryitem17">Ipad Pro 11, 128GB</a>'+
            '</li>'+
            '<li class="categoryitem appleprod" id="18">'+
                '<a href="/Compare-Countries/Apple-Products/Apple-Watch-8-Prices/" target="_parent" id="categoryitem18">Apple Watch 8, 41mm</a>'+
            '</li>'+
            '<li class="categoryitem appleprod" id="19">'+
                '<a href="/Compare-Countries/Apple-Products/Macbook-Pro-14-Prices/" target="_parent" id="categoryitem19">Macbook Pro 14, 512 GB</a>'+
            '</li>'+
    '</ul>'+
    '<ul class="category">'+
        '<li class="categorytitle soni"><i class="fa fa-regular fa-caret-down sony" style="font-size: 25px;">'+
        '</i>Sony</li>'+
            '<li class="categoryitem sonyprod" id="20">'+
                '<a href="/Compare-Countries/Sony/Playstation-4-Prices/" target="_parent" id="categoryitem20">Playstation 4</a>'+
            '</li>'+
            '<li class="categoryitem sonyprod" id="21">'+
                '<a href="/Compare-Countries/Sony/Playstation-5-Prices/" target="_parent" id="categoryitem21">Playstation 5</a>'+
            '</li>'+
    '</ul>'+
    '<ul class="category">'+
        '<li class="categorytitle fruandvege"><i class="fa fa-regular fa-caret-down fruavege" style="font-size: 25px;">'+
        '</i>Fruit And Vegetables</li>'+
            '<li class="categoryitem fruvege" id="22">'+
                '<a href="/Compare-Countries/Fruit-And-Vegetables/Apple-Prices/" target="_parent" id="categoryitem22">Apple</a>'+
            '</li>'+
            '<li class="categoryitem fruvege" id="23">'+
                '<a href="/Compare-Countries/Fruit-And-Vegetables/Banana-Prices/" target="_parent" id="categoryitem23">Banana</a>'+
            '</li>'+
            '<li class="categoryitem fruvege" id="24">'+
                '<a href="/Compare-Countries/Fruit-And-Vegetables/Bean-Prices/" target="_parent" id="categoryitem24">Bean</a>'+
            '</li>'+
            '<li class="categoryitem fruvege" id="25">'+
                '<a href="/Compare-Countries/Fruit-And-Vegetables/Carrot-Prices/" target="_parent" id="categoryitem25">Carrot</a>'+
            '</li>'+
            '<li class="categoryitem fruvege" id="26">'+
                '<a href="/Compare-Countries/Fruit-And-Vegetables/Onion-Prices/" target="_parent" id="categoryitem26">Onion</a>'+
            '</li>'+
            '<li class="categoryitem fruvege" id="27">'+
                '<a href="/Compare-Countries/Fruit-And-Vegetables/Potatoes-Prices/" target="_parent" id="categoryitem27">Potatoes</a>'+
            '</li>'+
    '</ul>'+
    '<ul class="category">'+
        '<li class="categorytitle noalco"><i class="fa fa-regular fa-caret-down noabe" style="font-size: 25px;">'+
        '</i>Non-Alcoholic Beverages</li>'+
            '<li class="categoryitem nonabe" id="28">'+
                '<a href="/Compare-Countries/Non-Alcoholic-Beverages/Bottled-Water-Prices/" target="_parent" id="categoryitem28">Bottled Water</a>'+
            '</li>'+
            '<li class="categoryitem nonabe" id="29">'+
                '<a href="/Compare-Countries/Non-Alcoholic-Beverages/Coca-Cola-0.5L-Prices/" target="_parent" id="categoryitem29">Coca-Cola 0.5L</a>'+
            '</li>'+
            '<li class="categoryitem nonabe" id="30">'+
                '<a href="/Compare-Countries/Non-Alcoholic-Beverages/Coffee-Prices/" target="_parent" id="categoryitem30">Coffee</a>'+
            '</li>'+
            '<li class="categoryitem nonabe" id="31">'+
                '<a href="/Compare-Countries/Non-Alcoholic-Beverages/Orange-Juice-Prices/" target="_parent" id="categoryitem31">Orange Juice</a>'+
            '</li>'+
            '<li class="categoryitem nonabe" id="32">'+
                '<a href="/Compare-Countries/Non-Alcoholic-Beverages/RedBull-Prices/" target="_parent" id="categoryitem32">RedBull</a>'+
            '</li>'+
    '</ul>'

    document.getElementById("categoryplace").innerHTML = categorysection;




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
})