var xiaomiredmik50idb = [
    'Coming', 'Soon', 'WWP',

]


window.addEventListener("load", function(){

    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;

    for(var g = -1; g < xiaomiredmik50idb.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = xiaomiredmik50idb[g];
    
      var next = g + 1;
      if (next%perrow==0 && next!=xiaomiredmik50idb.length) {
        row = table.insertRow();

        var title = document.getElementById('prodtitle')
        title.innerText = 'Xiaomi Redmi K50I'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Coming Soon!'
        var categoryitem = document.getElementById('categoryitem14')
        categoryitem.classList.add("itemselected")
    }

    $(document).ready(function(){
        $(".headerbar img").click(function(){
            window.location.href= 'https://worldwideprices.com/'
        })
    })
  }
})