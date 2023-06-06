var appledb = [
    'Sri Lanka', '7.07$', '1',
    'Vietnam', '6.41$', '2',
    'Hong Kong', '5.03$', '3',
    'South Korea', '4.90$', '4',
    'Thailand', '4.62$', '5',
    'China', '4.56$', '6',
    'Ghana', '4.13$', '7',
    'Israel', '4.08$', '8',
    'Guatemala', '3.99$', '9',
    'USA', '3.99$', '10',
    'Nigeria', '3.80$', '11',
    'Domin. Rep.', '3.79$', '12',
    'Morocco', '3.79$', '13',
    'Colombia', '3.66$', '14',
    'Chile', '3.64$', '15',
    'Paraguay', '3.58$', '16',
    'Philippines', '3.56$', '17',
    'Switzerland', '3.56$', '18',
    'Brazil', '3.54$', '19',
    'Bangladesh', '3.48$', '20',
    'Uganda', '3.47$', '21',
    'Sweden', '3.38$', '22',
    'Costa Rica', '3.37$', '23',
    'Australia', '3.29$', '24',
    'UK', '3.23$', '25',
    'Singapore', '3.21$', '26',
    'Argentina', '3.17$', '27',
    'Angola', '3.15$', '28',
    'Ivory Coast', '3.14$', '29',
    'Indonesia', '3.13$', '30',
    'Norway', '3.11$', '31',
    'New Zealand', '3.10$', '32',
    'Italy', '3.06$', '33',
    'Canada', '2.99$', '34',
    'Netherlands', '2.95$', '35',
    'Puerto Rico', '2.93$', '36',
    'Kenya', '2.88$', '37',
    'Bolivia', '2.74$', '38',
    'Finland', '2.73$', '39',
    'Germany', '2.73$', '40',
    'Kuwait', '2.72$', '41',
    'Peru', '2.62$', '42',
    'Belgium', '2.62$', '43',
    'Latvia', '2.62$', '44',
    'Tanzania', '2.56$', '45',
    'Ecuador', '2.50$', '46',
    'Mexico', '2.49$', '47',
    'Saudi Arabia', '2.38$', '48',
    'Malaysia', '2.36$', '49',
    'Poland', '2.25$', '50',
    'Uruguay', '2.18$', '51',
    'Austria', '2.18$', '52',
    'Lithuania', '2.18$', '53',
    'Portugal', '2.18$', '54',
    'Cameroon', '2.00$', '55',
    'Egypt', '2.00$', '56',
    'Spain', '1.96$', '57',
    'UA Emirates', '1.89$', '58',
    'Hungary', '1.88$', '59',
    'India', '1.84$', '60',
    'Denmark', '1.84$', '61',
    'Ireland', '1.74$', '62',
    'Jordan', '1.68$', '63',
    'Czechia', '1.63$', '64',
    'France', '1.63$', '65',
    'Greece', '1.59$', '66',
    'Slovakia', '1.52$', '67',
    'Bulgaria', '1.45$', '68',
    'Russia', '1.41$', '69',
    'Tunisia', '1.35$', '70',
    'Kazakhstan', '1.28$', '71',
    'Pakistan', '1.24$', '72',
    'Serbia', '1.21$', '73',
    'Romania', '1.18$', '74',
    'South Africa', '1.17$', '75',
    'Slovenia', '1.09$', '76',
    'Turkey', '0.92$', '77',
    'Azerbaijan', '0.88$', '78',
    'Ukraine', '0.59$', '79',
    'Zambia', '0.46$', '80',
]


window.addEventListener("load", function(){

    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;

    for(var g = -1; g < appledb.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = appledb[g];
    
      var next = g + 1;
      if (next%perrow==0 && next!=appledb.length) {
        row = table.insertRow();

        var title = document.getElementById('prodtitle')
        title.innerText = 'Apple prices, 1 kg'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Apples prices by country, around the world, 2023'
        var categoryitem = document.getElementById('categoryitem22')
        categoryitem.classList.add("itemselected")
    }

    $(document).ready(function(){
        $(".headerbar img").click(function(){
            window.location.href= 'https://worldwideprices.com/'
        })
    })
  }
})






