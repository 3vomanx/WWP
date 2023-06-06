var bottledwaterdb = [
    'Australia', '2.01$', '1',
    'Philippines', '1.95$', '2',
    'Macao', '1.79$', '3',
    'Singapore', '1.75$', '4',
    'Uruguay', '1.64$', '5',
    'Norway', '1.60$', '6',
    'Puerto Rico', '1.59$', '7',
    'Finland', '1.30$', '8',
    'Luxembourg', '1.19$', '9',
    'Hong Kong', '1.17$', '10',
    'Panama', '1.12$', '11',
    'Ireland', '1.10$', '12',
    'Colombia', '1.08$', '13',
    'Switzerland', '1.06$', '14',
    'UK', '1.03$', '15',
    'Portugal', '1.01$', '16',
    'South Africa', '0.99$', '17',
    'Costa Rica', '0.97$', '18',
    'Sweden', '0.96$', '19',
    'Canada', '0.95$', '20',
    'Chile', '0.94$', '21',
    'Guatemala', '0.93$', '22',
    'Belgium', '0.88$', '23',
    'Lithuania', '0.87$', '24',
    'China', '0.84$', '25',
    'Austria', '0.82$', '26',
    'Argentina', '0.81$', '27',
    'USA', '0.81$', '28',
    'Bolivia', '0.80$', '29',
    'Romania', '0.78$', '30',
    'Malaysia', '0.76$', '31',
    'Spain', '0.76$', '32',
    'Turkey', '0.75$', '33',
    'Ecuador', '0.74$', '34',
    'Domin. Rep.', '0.73$', '35',
    'Israel', '0.73$', '36',
    'Mexico', '0.69$', '37',
    'Kazakhstan', '0.69$', '38',
    'Pakistan', '0.69$', '39',
    'Uganda', '0.67$', '40',
    'Peru', '0.66$', '41',
    'Ivory Coast', '0.66$', '42',
    'Slovenia', '0.66$', '43',
    'Germany', '0.65$', '44',
    'Latvia', '0.64$', '45',
    'UA Emirates', '0.61$', '46',
    'New Zealand', '0.61$', '47',
    'Russia', '0.61$', '48',
    'Slovakia', '0.61$', '49',
    'Brazil', '0.59$', '50',
    'Zambia', '0.58$', '51',
    'Serbia', '0.57$', '52',
    'Czechia', '0.56$', '53',
    'Bulgaria', '0.55$', '54',
    'Kuwait', '0.54$', '55',
    'Netherlands', '0.54$', '56',
    'Italy', '0.53$', '57',
    'Bahrain', '0.52$', '58',
    'Denmark', '0.52$', '59',
    'Thailand', '0.50$', '60',
    'Azerbaijan', '0.49$', '61',
    'Morocco', '0.49$', '62',
    'Belarus', '0.49$', '63',
    'Kenya', '0.48$', '64',
    'Sri Lanka', '0.47$', '65',
    'Nigeria', '0.46$', '66',
    'Tanzania', '0.43$', '67',
    'Japan', '0.43$', '68',
    'Vietnam', '0.43$', '69',
    'Hungary', '0.43$', '70',
    'Oman', '0.39$', '71',
    'Cyprus', '0.39$', '72',
    'Ukraine', '0.39$', '73',
    'Jordan', '0.38$', '74',
    'Angola', '0.36$', '75',
    'Cameroon', '0.36$', '76',
    'Burma', '0.36$', '77',
    'India', '0.36$', '78',
    'South Korea', '0.36$', '79',
    'France', '0.36$', '80',
    'Qatar', '0.34$', '81',
    'Saudi Arabia', '0.34$', '82',
    'Paraguay', '0.33$', '83',
    'Ghana', '0.32$', '84',
    'Indonesia', '0.31$', '85',
    'Greece', '0.28$', '86',
    'Poland', '0.28$', '87',
    'Uzbekistan', '0.27$', '88',
    'Bangladesh', '0.24$', '89',
    'Iran', '0.22$', '90',
    'Tunisia', '0.21$', '91',
    'Egypt', '0.14$', '92',
]


window.addEventListener("load", function(){

    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;

    for(var g = -1; g < bottledwaterdb.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = bottledwaterdb[g];
    
      var next = g + 1;
      if (next%perrow==0 && next!=bottledwaterdb.length) {
        row = table.insertRow();

        var title = document.getElementById('prodtitle')
        title.innerText = 'Bottled Water prices 1.5L'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Bottled water prices by country, around the world, 2022'
        var categoryitem = document.getElementById('categoryitem28')
        categoryitem.classList.add("itemselected")
    }

    $(document).ready(function(){
        $(".headerbar img").click(function(){
            window.location.href= 'https://worldwideprices.com/'
        })
    })
  }
})