var iphone13128gbdb = [
    'Turkey', '1,431$', '1',
    'Brazil', '1,310$', '2',
    'Hungary', '1,143$', '3',
    'Poland', '1,081$', '4',
    'Mexico', '1,078$', '5',
    'Czech Republic', '1,065$', '6',
    'Denmark', '1,054$', '7',
    'Italy', '1,024$', '8',
    'Sweden', '1,015$', '9',
    'Finland', '1,014$', '10',
    'Ireland', '1,014$', '11',
    'Portugal', '1,014$', '12',
    'Belgium', '992$', '13',
    'France', '992$', '14',
    'Netherlands', '992$', '15',
    'Spain', '992$', '16',
    'Austria', '981$', '17',
    'Germany', '981$', '18',
    'Luxembourg', '959$', '19',
    'United Kingdom', '936$', '20',
    'Switzerland', '926$', '21',
    'Norway', '918$', '22',
    'Philippines', '896$', '23',
    'Thailand', '884$', '24',
    'New Zealand', '881$', '25',
    'Singapore', '863$', '26',
    'India', '851$', '27',
    'Malaysia', '830$', '28',
    'Australia', '822$', '29',
    'Korea', '817$', '30',
    'UAE', '816$', '31',
    'Taiwan', '808$', '32',
    'Japan', '801$', '33',
    'China', '777$', '34',
    'Hong Kong', '765$', '35',
    'Canada', '741$', '36',
    'USA', '699$', '37',
    
]


window.addEventListener("load", function(){

    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;

    for(var g = -1; g < iphone13128gbdb.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = iphone13128gbdb[g];
    
      var next = g + 1;
      if (next%perrow==0 && next!=iphone13128gbdb.length) {
        row = table.insertRow();

        var title = document.getElementById('prodtitle')
        title.innerText = 'iPhone 13, 128GB prices'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'iPhone 13 prices by country, around the world, 2022'
        var categoryitem = document.getElementById('categoryitem34')
        categoryitem.classList.add("itemselected")
    }

    $(document).ready(function(){
        $(".headerbar img").click(function(){
            window.location.href= 'https://worldwideprices.com/'
        })
    })
  }
})