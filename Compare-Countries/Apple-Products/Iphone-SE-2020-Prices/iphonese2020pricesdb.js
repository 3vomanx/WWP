var iphonese2020db = [
    'Brazil', '968$', '1',
    'Turkey', '935$', '2',
    'Hungary', '793$', '3',
    'Poland', '745$', '4',
    'Mexico', '738$', '5',
    'Denmark', '732$', '6',
    'Czech Republic', '727$', '7',
    'Sweden', '696$', '8',
    'Belgium', '686$', '9',
    'Finland', '686$', '10',
    'France', '686$', '11',
    'Ireland', '686$', '12',
    'Italy', '686$', '13',
    'Netherlands', '686$', '14',
    'Portugal', '686$', '15',
    'Spain', '686$', '16',
    'Austria', '676$', '17',
    'Germany', '675$', '18',
    'India', '668$', '19',
    'Luxembourg', '664$', '20',
    'United Kingdom', '623$', '21',
    'Norway', '618$', '22',
    'Philippines', '609$', '23',
    'Switzerland', '602$', '24',
    'New Zealand', '597$', '25',
    'Thailand', '588$', '26',
    'Singapore', '577$', '27',
    'China', '561$', '28',
    'Malaysia', '560$', '29',
    'UAE', '558$', '30',
    'Korea', '547$', '31',
    'Taiwan', '535$', '32',
    'Australia', '534$', '33',
    'Hong Kong', '529$', '34',
    'Japan', '519$', '35',
    'Canada', '481$', '36',
    'USA', '479$', '37', 
]

window.addEventListener("load", function(){

    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;

    for(var g = -1; g < iphonese2020db.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = iphonese2020db[g];
    
      var next = g + 1;
      if (next%perrow==0 && next!=iphonese2020db.length) {
        row = table.insertRow();

        var title = document.getElementById('prodtitle')
        title.innerText = 'iPhone SE 2020, prices'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'iPhone SE prices by country, around the world, 2022'
        var categoryitem = document.getElementById('categoryitem36')
        categoryitem.classList.add("itemselected")
    }

    $(document).ready(function(){
        $(".headerbar img").click(function(){
            window.location.href= 'https://worldwideprices.com/'
        })
    })
  }
})