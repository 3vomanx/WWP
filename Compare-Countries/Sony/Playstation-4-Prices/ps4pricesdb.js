var playstation4db = [
    'Coming', 'Soon', 'WWP',

]


window.addEventListener("load", function(){

    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;

    for(var g = -1; g < playstation4db.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = playstation4db[g];
    
      var next = g + 1;
      if (next%perrow==0 && next!=playstation4db.length) {
        row = table.insertRow();

        var title = document.getElementById('prodtitle')
        title.innerText = 'Playstation 4'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Coming Soon!'
        var categoryitem = document.getElementById('categoryitem20')
        categoryitem.classList.add("itemselected")
    }

    $(document).ready(function(){
        $(".headerbar img").click(function(){
            window.location.href= 'https://worldwideprices.com/'
        })
    })
  }
})