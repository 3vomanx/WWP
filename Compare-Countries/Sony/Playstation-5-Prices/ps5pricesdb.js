var playstation5db = [
    'Uruguay', '1475$', '1',
    'Israel', '1368$', '2',
    'Costa Rica', '1297$', '3',
    'Belarus', '1287$', '4',
    'Tanzania', '1279$', '5',
    'Peru', '1270$', '6',
    'Azerbaijan', '1235$', '7',
    'Nigeria', '1194$', '8',
    'Tunisia', '1155$', '9',
    'Morocco', '1148$', '10',
    'Hungary', '1148$', '11',
    'Saudi Arabia', '1066$', '12',
    'Kenya', '1062$', '13',
    'Zambia', '1035$', '14',
    'Chile', '1032$', '15',
    'Guatemala', '1025$', '16',
    'Cameroon', '1000$', '17',
    'Romania', '988$', '18',
    'Ivory Coast', '983$', '19',
    'Brazil', '962$', '20',
    'Uzbekistan', '959$', '21',
    'China', '944$', '22',
    'Paraguay', '936$', '23',
    'Uganda', '933$', '24',
    'Ecuador', '925$', '25',
    'Lithuania', '887$', '26',
    'Russia', '881$', '27',
    'Indonesia', '880$', '28',
    'Latvia', '876$', '29',
    'Argentina', '874$', '30',
    'Poland', '853$', '31',
    'Kazakhstan', '852$', '32',
    'Colombia', '837$', '33',
    'Sri Lanka', '825$', '34',
    'Bahrain', '804$', '35',
    'Mexico', '776$', '36',
    'Jordan', '774$', '37',
    'Domin. Rep.', '707$', '38',
    'Panama', '700$', '39',
    'UA Emirates', '689$', '40',
    'Qatar', '686$', '41',
    'Turkey', '683$', '42',
    'Japan', '681$', '43',
    'South Africa', '660$', '44',
    'Finland', '656$', '45',
    'Ghana', '632$', '46',
    'Czechia', '631$', '47',
    'South Korea', '624$', '48',
    'Serbia', '617$', '49',
    'India', '607$', '50',
    'Oman', '586$', '51',
    'Sweden', '578$', '52',
    'Algeria', '572$', '53',
    'Bulgaria', '560$', '54',
    'UK', '560$', '55',
    'Norway', '558$', '56',
    'Belgium', '548$', '57',
    'Germany', '548$', '58',
    'Greece', '548$', '59',
    'Ireland', '548$', '60',
    'Netherlands', '548$', '61',
    'Portugal', '548$', '62',
    'Slovakia', '548$', '63',
    'Slovenia', '548$', '64',
    'Austria', '547$', '65',
    'Cyprus', '547$', '66',
    'France', '547$', '67',
    'Italy', '547$', '68',
    'Spain', '547$', '69',
    'Kuwait', '544$', '70',
    'New Zealand', '543$', '71',
    'Egypt', '540$', '72',
    'Malaysia', '518$', '73',
    'Hong Kong', '507$', '74',
    'Australia', '503$', '75',
    'Puerto Rico', '500$', '76',
    'USA', '500$', '77',
    'Philippines', '496$', '78',
    'Canada', '468$', '79',
    'Ukraine', '460$', '80',
]


window.addEventListener("load", function(){

    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;

    for(var g = -1; g < playstation5db.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = playstation5db[g];
    
      var next = g + 1;
      if (next%perrow==0 && next!=playstation5db.length) {
        row = table.insertRow();

        var title = document.getElementById('prodtitle')
        title.innerText = 'Playstation 5 Standard Edition'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Playstation 5 prices by country, around the world, 2022'
        var categoryitem = document.getElementById('categoryitem21')
        categoryitem.classList.add("itemselected")
    }

    $(document).ready(function(){
        $(".headerbar img").click(function(){
            window.location.href= 'https://worldwideprices.com/'
        })
    })
  }
})