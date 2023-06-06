var xiaomi13ultradb = [
    'Coming', 'Soon', 'WWP',
]


window.addEventListener("load", function(){

    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;

    for(var g = -1; g < xiaomi13ultradb.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = xiaomi13ultradb[g];
    
      var next = g + 1;
      if (next%perrow==0 && next!=xiaomi13ultradb.length) {
        row = table.insertRow();

        var title = document.getElementById('prodtitle')
        title.innerText = 'Xiaomi 13 Ultra'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Coming Soon!'
        var categoryitem = document.getElementById('categoryitem15')
        categoryitem.classList.add("itemselected")
    }

    $(document).ready(function(){
        $(".headerbar img").click(function(){
            window.location.href= 'https://worldwideprices.com/'
        })
    })
  }
})