var iphone14pro256gbdb = [
    'Turkey', '2,280$', '1',
    'Brazil', '2,117$', '2',
    'Hungary', '1,850$', '3',
    'Poland', '1,730$', '4',
    'Czech Republic', '1,714$', '5',
    'India', '1,703$', '6',
    'Denmark', '1,685$', '7',
    'Mexico', '1,646$', '8',
    'Finland', '1,614$', '9',
    'Portugal', '1,614$', '10',
    'Ireland', '1,603$', '11',
    'Italy', '1,603$', '12',
    'Sweden', '1,596$', '13',
    'Belgium', '1,593$', '14',
    'France', '1,592$', '15',
    'Netherlands', '1,592$', '16',
    'Spain', '1,582$', '17',
    'Austria', '1,559$', '18',
    'Germany', '1,559$', '19',
    'Luxembourg', '1,540$', '20',
    'United Kingdom', '1,511$', '21',
    'Switzerland', '1,451$', '22',
    'Norway', '1,434$', '23',
    'Philippines', '1,398$', '24',
    'New Zealand', '1,384$', '25',
    'Singapore', '1,365$', '26',
    'Thailand', '1,356$', '27',
    'Malaysia', '1,300$', '28',
    'USA', '1,299$', '29',
    'China', '1,281$', '30',
    'UAE', '1,280$', '31',
    'Korea', '1,274$', '32',
    'Australia', '1,270$', '33',
    'Taiwan', '1,247$', '34',
    'Japan', '1,225$', '35',
    'Hong Kong', '1,199$', '36',
    'Canada', '1,148$', '37',    
]


window.addEventListener("load", function(){

    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;

    for(var g = -1; g < iphone14pro256gbdb.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = iphone14pro256gbdb[g];
    
      var next = g + 1;
      if (next%perrow==0 && next!=iphone14pro256gbdb.length) {
        row = table.insertRow();

        var title = document.getElementById('prodtitle')
        title.innerText = 'Iphone 14 Pro, 256 GB'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Iphone 14 Pro prices by country, around the world, 2022'
        var categoryitem = document.getElementById('categoryitem35')
        categoryitem.classList.add("itemselected")
    }

    $(document).ready(function(){
        $(".headerbar img").click(function(){
            window.location.href= 'https://worldwideprices.com/'
        })
    })
  }
})