var winedb = [
    "Denmark", '35.18$','1',
    'Malaysia', '22.97$','2',
    'Thailand', '18.81$','3',
    'India', "18.24$",'4',
    'Domin. Rep.', '18.12$','5',
    'Singapore','17.95$','6',
    'Costa Rica','17.83$','7',
    'Indonesia','17.83$','8',
    'Norway','13.35$','9',
    'Ireland','13.35$','10',
    'UA Emirates','12.80$','11',
    'Hong Kong','12.74$','12',
    'Burma','12.62$','13',
    'Macao','12.37$','14',
    'Russia', '12.05$','15',
    'Finland','11.97$','16',
    'Colombia','11.43$','17',
    'Philippines','11.42$','18',
    'Mexico','11.04$','19',
    'Nigeria','10.92$','20',
    'Canada','10.45$','21',
    'Brazil','10.33$','22',
    'China','9.01$','23',
    'USA','8.97$','24',
    'Switzerland','8.85$','25',
    'UK','8.67$','26',
    'New Zealand','8.65$','27',
    'Sweden','8.59$','28',
    'Panama','8.55$','29',
    'Ukraine',	'8.13$','30',
    'Lithuania','7.86$','31',
    'France','7.65$','32',
    'Slovenia','7.64$','33',
    'Germany','7.54$','34',
    'Hungary','7.31$','35',
    'Poland','7.07$','36',
    'Italy','6.78$','37',
    'Australia','6.70$','38',
    'Netherlands','6.55$','39',
    'Japan','6.47$','40',
    'Czechia','5.55$','41',
];

window.addEventListener("load", function(){

    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;

    for(var g = -1; g < winedb.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = winedb[g];
    
      var next = g + 1;
      if (next%perrow==0 && next!=winedb.length) {
        row = table.insertRow();

        var title = document.getElementById('prodtitle')
        title.innerText = 'Wine Prices'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Wine prices by country, around the world, 2022'
        var categoryitem = document.getElementById('categoryitem1')
        categoryitem.classList.add("itemselected")
    }

    $(document).ready(function(){
        $(".headerbar img").click(function(){
            window.location.href= 'https://worldwideprices.com/'
        })
    })
  }
})
