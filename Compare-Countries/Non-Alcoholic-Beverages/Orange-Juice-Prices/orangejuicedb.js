var orangejuicedb = [
    'China', '5.23$', '1',
    'Bangladesh', '4.52$', '2',
    'Philippines', '3.70$', '3',
    'Macao', '3.65$', '4',
    'Zambia', '3.39$', '5',
    'Denmark', '3.37$', '6',
    'Uruguay', '3.21$', '7',
    'Vietnam', '3.19$', '8',
    'Chile', '3.16$', '9',
    'Ivory Coast', '3.16$', '10',
    'Canada', '3.06$', '11',
    'Sri Lanka', '3.05$', '12',
    'Hong Kong', '2.99$', '13',
    'UA Emirates', '2.86$', '14',
    'Puerto Rico', '2.59$', '15',
    'Switzerland', '2.51$', '16',
    'Cyprus', '2.47$', '17',
    'Norway', '2.45$', '18',
    'Israel', '2.44$', '19',
    'Lithuania', '2.40$', '20',
    'Slovenia', '2.40$', '21',
    'Burma', '2.31$', '22',
    'Netherlands', '2.27$', '23',
    'USA', '2.25$', '24',
    'Cameroon', '2.25$', '25',
    'Germany', '2.18$', '26',
    'Oman', '2.10$', '27',
    'South Korea', '2.09$', '28',
    'Thailand', '2.09$', '29',
    'Luxembourg', '2.09$', '30',
    'Indonesia', '2.08$', '31',
    'Serbia', '2.08$', '32',
    'Austria', '2.07$', '33',
    'Brazil', '2.06$', '34',
    'Czechia', '2.05$', '35',
    'Hungary', '2.05$', '36',
    'Spain', '2.02$', '37',
    'Bulgaria', '2.01$', '38',
    'Qatar', '1.99$', '39',
    'Latvia', '1.96$', '40',
    'Singapore', '1.95$', '41',
    'Costa Rica', '1.93$', '42',
    'Sweden', '1.93$', '43',
    'Japan', '1.89$', '44',
    'Saudi Arabia', '1.89$', '45',
    'Bahrain', '1.86$', '46',
    'Finland', '1.86$', '47',
    'New Zealand', '1.85$', '48',
    'Greece', '1.85$', '49',
    'Portugal', '1.85$', '50',
    'Ukraine', '1.82$', '51',
    'Australia', '1.81$', '52',
    'Italy', '1.81$', '53',
    'Morocco', '1.79$', '54',
    'Kenya', '1.78$', '55',
    'Poland', '1.78$', '56',
    'Uganda', '1.70$', '57',
    'Jordan', '1.69$', '58',
    'Kazakhstan', '1.67$', '59',
    'Mexico', '1.66$', '60',
    'France', '1.65$', '61',
    'Ireland', '1.63$', '62',
    'Bolivia', '1.59$', '63',
    'Kuwait', '1.57$', '64',
    'Argentina', '1.55$', '65',
    'Belgium', '1.55$', '66',
    'Tanzania', '1.49$', '67',
    'Panama', '1.46$', '68',
    'Domin. Rep.', '1.43$', '69',
    'Colombia', '1.42$', '70',
    'Uzbekistan', '1.40$', '71',
    'Nigeria', '1.38$', '72',
    'Malaysia', '1.38$', '73',
    'Guatemala', '1.37$', '74',
    'Turkey', '1.34$', '75',
    'India', '1.32$', '76',
    'Romania', '1.29$', '77',
    'Angola', '1.28$', '78',
    'Paraguay', '1.21$', '79',
    'South Africa', '1.21$', '80',
    'Russia', '1.21$', '81',
    'Ecuador', '1.19$', '82',
    'Slovakia', '1.16$', '83',
    'Tunisia', '1.04$', '84',
    'Peru', '1.03$', '85',
    'UK', '0.93$', '86',
    'Belarus', '0.87$', '87',
    'Ghana', '0.78$', '88',
    'Pakistan', '0.69$', '89',
    'Egypt', '0.42$', '90',
]

window.addEventListener("load", function(){

    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;

    for(var g = -1; g < orangejuicedb.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = orangejuicedb[g];
    
      var next = g + 1;
      if (next%perrow==0 && next!=orangejuicedb.length) {
        row = table.insertRow();

        var title = document.getElementById('prodtitle')
        title.innerText = 'Orange Juice prices 1L'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Orange juice prices by country, around the world, 2022'
        var categoryitem = document.getElementById('categoryitem31')
        categoryitem.classList.add("itemselected")
    }

    $(document).ready(function(){
        $(".headerbar img").click(function(){
            window.location.href= 'https://worldwideprices.com/'
        })
    })
  }
})
