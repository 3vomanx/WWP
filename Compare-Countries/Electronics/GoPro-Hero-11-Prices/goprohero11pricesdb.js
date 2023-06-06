var goprohero11db = [
    'Malaysia', '1125$', '1',
    'Argentina', '1081$', '2',
    'Algeria', '884$', '3',
    'Uruguay', '825$', '4',
    'Belarus', '811$', '5',
    'Saudi Arabia', '800$', '6',
    'Serbia', '799$', '7',
    'Tanzania', '789$', '8',
    'Brazil', '787$', '9',
    'Kazakhstan', '778$', '10',
    'Costa Rica', '766$', '11',
    'Hungary', '723$', '12',
    'Uganda', '721$', '13',
    'Azerbaijan', '703$', '14',
    'Sri Lanka', '693$', '15',
    'Czechia', '678$', '16',
    'Bulgaria', '672$', '17',
    'Chile', '667$', '18',
    'Romania', '667$', '19',
    'Japan', '666$', '20',
    'Bahrain', '663$', '21',
    'France', '661$', '22',
    'Italy', '658$', '23',
    'Luxembourg', '658$', '24',
    'Slovenia', '658$', '25',
    'Greece', '647$', '26',
    'Paraguay', '639$', '27',
    'Cyprus', '636$', '28',
    'Ukraine', '636$', '29',
    'Finland', '635$', '30',
    'South Africa', '632$', '31',
    'India', '626$', '32',
    'Philippines', '624$', '33',
    'Poland', '623$', '34',
    'Colombia', '620$', '35',
    'Ecuador', '620$', '36',
    'Jordan', '620$', '37',
    'Lithuania', '613$', '38',
    'Kuwait', '604$', '39',
    'Guatemala', '603$', '40',
    'Mexico', '603$', '41',
    'Austria', '603$', '42',
    'Latvia', '603$', '43',
    'Netherlands', '603$', '44',
    'Ireland', '602$', '45',
    'Turkey', '602$', '46',
    'Indonesia', '587$', '47',
    'Spain', '581$', '48',
    'Portugal', '580$', '49',
    'Slovakia', '570$', '50',
    'UK', '559$', '51',
    'Switzerland', '556$', '52',
    'Oman', '549$', '53',
    'Israel', '548$', '54',
    'Germany', '548$', '55',
    'Domin. Rep.', '547$', '56',
    'Belgium', '547$', '57',
    'UA Emirates', '545$', '58',
    'Sweden', '540$', '59',
    'Australia', '537$', '60',
    'Qatar', '535$', '61',
    'Peru', '529$', '62',
    'New Zealand', '527$', '63',
    'Panama', '520$', '64',
    'Norway', '519$', '65',
    'Hong Kong', '510$', '66',
    'Puerto Rico', '500$', '67',
    'USA', '500$', '68',
    'South Korea', '489$', '69',
    'Kenya', '481$', '70',
    'Egypt', '477$', '71',
    'China', '465$', '72',
    'Canada', '431$', '73',
]
window.addEventListener("load", function(){

    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;

    for(var g = -1; g < goprohero11db.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = goprohero11db[g];
    
    var next = g + 1;
    if (next%perrow==0 && next!=goprohero11db.length) {
    row = table.insertRow();

    var title = document.getElementById('prodtitle')
    title.innerText = 'GoPro Hero 11'
    var categoryname = document.getElementById('categorynametitle')
    categoryname.innerText = 'GoPro 11 prices by country, around the world, 2022'
    var categoryitem = document.getElementById('categoryitem13')
    categoryitem.classList.add("itemselected")

    }

    $(document).ready(function(){
        $(".headerbar img").click(function(){
            window.location.href= 'https://worldwideprices.com/'
        })
    })
  }
})
