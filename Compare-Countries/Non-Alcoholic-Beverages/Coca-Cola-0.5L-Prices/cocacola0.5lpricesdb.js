var cocacoladb = [
    'Finland', '2.51$', '1',
    'Denmark', '2.43$', '2',
    'Norway', '2.35$', '3',
    'Israel', '2.19$', '4',
    'Australia', '2.10$', '5',
    'New Zealand', '2.07$', '6',
    'Ireland', '2.07$', '7',
    'UK', '1.98$', '8',
    'Sweden', '1.83$', '9',
    'Italy', '1.57$', '10',
    'Switzerland', '1.49$', '11',
    'Netherlands', '1.48$', '12',
    'Canada', '1.47$', '13',
    'Austria', '1.41$', '14',
    'France', '1.40$', '15',
    'South Korea', '1.39$', '16',
    'Puerto Rico', '1.29$', '17',
    'Uruguay', '1.28$', '18',
    'Belgium', '1.25$', '19',
    'Germany', '1.25$', '20',
    'Luxembourg', '1.25$', '21',
    'Costa Rica', '1.23$', '22',
    'Latvia', '1.19$', '23',
    'Cyprus', '1.16$', '24',
    'Czechia', '1.16$', '25',
    'Chile', '1.15$', '26',
    'Hong Kong', '1.15$', '27',
    'Spain', '1.12$', '28',
    'Macao', '1.11$', '29',
    'Portugal', '1.10$', '30',
    'Singapore', '1.09$', '31',
    'Lithuania', '1.09$', '32',
    'Saudi Arabia', '1.04$', '33',
    'Greece', '1.04$', '34',
    'Japan', '1.01$', '35',
    'Hungary', '1.01$', '36',
    'Kazakhstan', '0.98$', '37',
    'Slovakia', '0.98$', '38',
    'UA Emirates', '0.95$', '39',
    'Poland', '0.92$', '40',
    'Bulgaria', '0.89$', '41',
    'Qatar', '0.88$', '42',
    'South Africa', '0.87$', '43',
    'Slovenia', '0.87$', '44',
    'Guatemala', '0.86$', '45',
    'Romania', '0.86$', '46',
    'Argentina', '0.84$', '47',
    'Oman', '0.82$', '48',
    'Panama', '0.79$', '49',
    'Uganda', '0.77$', '50',
    'USA', '0.76$', '51',
    'Colombia', '0.75$', '52',
    'Paraguay', '0.75$', '53',
    'Bolivia', '0.72$', '54',
    'Zambia', '0.72$', '55',
    'Serbia', '0.72$', '56',
    'Peru', '0.71$', '57',
    'Mexico', '0.67$', '58',
    'Russia', '0.67$', '59',
    'Belarus', '0.63$', '60',
    'Brazil', '0.62$', '61',
    'Domin. Rep.', '0.62$', '62',
    'Morocco', '0.61$', '63',
    'Ecuador', '0.59$', '64',
    'Angola', '0.59$', '65',
    'Ghana', '0.58$', '66',
    'Bahrain', '0.56$', '67',
    'Jordan', '0.55$', '68',
    'Thailand', '0.55$', '69',
    'Malaysia', '0.54$', '70',
    'Azerbaijan', '0.51$', '71',
    'Ukraine', '0.48$', '72',
    'Ivory Coast', '0.47$', '73',
    'Turkey', '0.46$', '74',
    'Kenya', '0.44$', '75',
    'Uzbekistan', '0.44$', '76',
    'Tanzania', '0.43$', '77',
    'Sri Lanka', '0.42$', '78',
    'Tunisia', '0.40$', '79',
    'Indonesia', '0.39$', '80',
    'Philippines', '0.39$', '81',
    'Nigeria', '0.38$', '82',
    'Vietnam', '0.38$', '83',
    'Burma', '0.36$', '84',
    'China', '0.36$', '85',
    'Kuwait', '0.36$', '86',
    'India', '0.32$', '87',
    'Bangladesh', '0.31$', '88',
    'Pakistan', '0.23$', '89',
    'Iran', '0.21$', '90',
    'Egypt', '0.18$', '91',
]


window.addEventListener("load", function(){

    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;

    for(var g = -1; g < cocacoladb.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = cocacoladb[g];
    
      var next = g + 1;
      if (next%perrow==0 && next!=cocacoladb.length) {
        row = table.insertRow();

        var title = document.getElementById('prodtitle')
        title.innerText = 'Coca-Cola prices, 0.5 liter'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Coca-Cola 0.5L prices by country, around the world, 2022'
        var categoryitem = document.getElementById('categoryitem29')
        categoryitem.classList.add("itemselected")
    }

    $(document).ready(function(){
        $(".headerbar img").click(function(){
            window.location.href= 'https://worldwideprices.com/'
        })
    })
  }
})