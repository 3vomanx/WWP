var ipadpro11128gbdb = [
    'Brazil', '1928$', '1',
    'Colombia', '1551$', '2',
    'Hungary', '1359$', '3',
    'Serbia', '1336$', '4',
    'Greece', '1259$', '5',
    'Slovenia', '1254$', '6',
    'Poland', '1233$', '7',
    'Czechia', '1215$', '8',
    'Latvia', '1205$', '9',
    'Bulgaria', '1200$', '10',
    'Cyprus', '1194$', '11',
    'Portugal', '1183$', '12',
    'Lithuania', '1183$', '13',
    'Ireland', '1183$', '14',
    'Finland', '1183$', '15',
    'India', '1177$', '16',
    'Netherlands', '1172$', '17',
    'Italy', '1172$', '18',
    'France', '1172$', '19',
    'Belgium', '1172$', '20',
    'Mexico', '1164$', '21',
    'Zambia', '1163$', '22',
    'Sweden', '1158$', '23',
    'Romania', '1156$', '24',
    'Spain', '1150$', '25',
    'Slovakia', '1150$', '26',
    'Germany', '1150$', '27',
    'Austria', '1150$', '28',
    'Luxembourg', '1139$', '29',
    'UK', '1118$', '30',
    'Norway', '1067$', '31',
    'Turkey', '1057$', '32',
    'Switzerland', '1035$', '33',
    'New Zealand', '1023$', '34',
    'Bahrain', '1017$', '35',
    'Israel', '1014$', '36',
    'South Africa', '1007$', '37',
    'Philippines', '996$', '38',
    'China', '987$', '39',
    'Saudi Arabia', '986$', '40',
    'Qatar', '961$', '41',
    'Oman', '954$', '42',
    'Australia', '939$', '43',
    'Japan', '926$', '44',
    'Kuwait', '900$', '45',
    'UA Emirates', '898$', '46',
    'Malaysia', '878$', '47',
    'South Korea', '874$', '48',
    'Hong Kong', '828$', '49',
    'Canada', '817$', '50',
    'USA', '799$', '51',
    'Puerto Rico', '799$', '52',
]

  
  
  window.addEventListener("load", function(){
  
    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;
  
    for(var g = -1; g < ipadpro11128gbdb.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = ipadpro11128gbdb[g];
    
      var next = g + 1;
      if (next%perrow==0 && next!=ipadpro11128gbdb.length) {
        row = table.insertRow();
  
        var title = document.getElementById('prodtitle')
        title.innerText = 'Ipad Pro 11, 128GB'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Ipad prices by country, around the world, 2022'
        var categoryitem = document.getElementById('categoryitem17')
        categoryitem.classList.add("itemselected")
    }
  
    $(document).ready(function(){
        $(".headerbar img").click(function(){
            window.location.href= 'https://worldwideprices.com/'
        })
    })
  }
  })