var iphone14promax512gbdb = [
  'Turkey', '2,755$', '1',
  'Brazil', '2,722$', '2',
  'Hungary', '2,379$', '3',
  'Poland', '2,211$', '4',
  'Czech Republic', '2,178$', '5',
  'Denmark', '2,125$', '6',
  'Mexico', '2,100$', '7',
  'India', '2,068$', '8',
  'Finland', '2,062$', '9',
  'Portugal', '2,062$', '10',
  'Ireland', '2,05q$', '11',
  'Italy', '2,05q$', '12',
  'Belgium', '2,040$', '13',
  'France', '2,040$', '14',
  'Netherlands', '2,040$', '15',
  'Sweden', '2,031$', '16',
  'Spain', '2,029$', '17',
  'Austria', '2,007$', '18',
  'Germany', '2,007$', '19',
  'Luxembourg', '1,973$', '20',
  'United Kingdom', '1,911$', '21',
  'Switzerland', '1,853$', '22',
  'Norway', '1,828$', '23',
  'New Zealand', '1,762$', '24',
  'Philippines', '1,738$', '25',
  'Singapore', '1,726$', '26',
  'Thailand', '1,711$', '27',
  'China', '1,683$', '28',
  'Korea', '1,649$', '29',
  'Malaysia', '1,637$', '30',
  'UAE', '1,620$', '31',
  'Australia', '1,619$', '32',
  'Taiwan', '1,604$', '33',
  'Japan', '1,560$', '34',
  'Hong Kong', '1,518$', '35',
  'Canada', '1,460$', '36',
  'USA', '1,399$', '37',
]


window.addEventListener("load", function(){

    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;

    for(var g = -1; g < iphone14promax512gbdb.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = iphone14promax512gbdb[g];
    
      var next = g + 1;
      if (next%perrow==0 && next!=iphone14promax512gbdb.length) {
        row = table.insertRow();

        var title = document.getElementById('prodtitle')
        title.innerText = 'iPhone 14 Pro Max, 512GB prices'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'iPhone 14 Pro Max prices by country, around the world, 2023'
        var categoryitem = document.getElementById('categoryitem33')
        categoryitem.classList.add("itemselected")
    }

    $(document).ready(function(){
        $(".headerbar img").click(function(){
            window.location.href= 'https://worldwideprices.com/'
        })
    })
  }
})