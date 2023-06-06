var bananadb = [
    'South Korea', '4.19$', '1',
    'Sweden', '3.18$', '2',
    'Uruguay', '3.06$', '3',
    'Switzerland', '2.90$', '4',
    'Puerto Rico', '2.84$', '5',
    'Ireland', '2.73$', '6',
    'Israel', '2.71$', '7',
    'Singapore', '2.62$', '8',
    'Italy', '2.62$', '9',
    'Austria', '2.51$', '10',
    'Indonesia', '2.50$', '11',
    'Morocco', '2.45$', '12',
    'Denmark', '2.45$', '13',
    'Australia', '2.42$', '14',
    'China', '2.41$', '15',
    'Greece', '2.40$', '16',
    'New Zealand', '2.36$', '17',
    'Norway', '2.35$', '18',
    'Hungary', '2.29$', '19',
    'Jordan', '2.24$', '20',
    'France', '2.18$', '21',
    'Germany', '2.18$', '22',
    'Hong Kong', '2.15$', '23',
    'Kazakhstan', '2.13$', '24',
    'Netherlands', '2.07$', '25',
    'Serbia', '2.06$', '26',
    'Bulgaria', '2.01$', '27',
    'Romania', '2.00$', '28',
    'South Africa', '1.97$', '29',
    'Latvia', '1.96$', '30',
    'Lithuania', '1.96$', '31',
    'Azerbaijan', '1.94$', '32',
    'Ukraine', '1.89$', '33',
    'Czechia', '1.87$', '34',
    'Kuwait', '1.86$', '35',
    'Saudi Arabia', '1.86$', '36',
    'Slovakia', '1.85$', '37',
    'Japan', '1.79$', '38',
    'Colombia', '1.78$', '39',
    'Slovenia', '1.74$', '40',
    'Finland', '1.70$', '41',
    'UA Emirates', '1.63$', '42',
    'Tunisia', '1.61$', '43',
    'Canada', '1.59$', '44',
    'Spain', '1.59$', '45',
    'Philippines', '1.58$', '46',
    'Brazil', '1.57$', '47',
    'Chile', '1.57$', '48',
    'Belgium', '1.52$', '49',
    'Malaysia', '1.49$', '50',
    'Portugal', '1.41$', '51',
    'Argentina', '1.38$', '52',
    'Mexico', '1.38$', '53',
    'Zambia', '1.34$', '54',
    'Turkey', '1.23$', '55',
    'Russia', '1.20$', '56',
    'Thailand', '1.13$', '57',
    'UK', '1.12$', '58',
    'Vietnam', '1.11$', '59',
    'Costa Rica', '1.09$', '60',
    'USA', '1.08$', '61',
    'Poland', '1.06$', '62',
    'Ecuador', '1.00$', '63',
    'Peru', '1.00$', '64',
    'Sri Lanka', '1.00$', '65',
    'Guatemala', '0.99$', '66',
    'Tanzania', '0.85$', '67',
    'Ghana', '0.84$', '68',
    'Paraguay', '0.83$', '69',
    'Cameroon', '0.83$', '70',
    'Kenya', '0.81$', '71',
    'Domin. Rep.', '0.77$', '72',
    'India', '0.77$', '73',
    'Pakistan', '0.64$', '74',
    'Ivory Coast', '0.62$', '75',
    'Angola', '0.58$', '76',
    'Bolivia', '0.49$', '77',
    'Bangladesh', '0.38$', '78',
]


window.addEventListener("load", function(){

    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;

    for(var g = -1; g < bananadb.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = bananadb[g];
    
      var next = g + 1;
      if (next%perrow==0 && next!=bananadb.length) {
        row = table.insertRow();

        var title = document.getElementById('prodtitle')
        title.innerText = 'Banana prices, 1 kg'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Bananas prices by country, around the world, 2023'
        var categoryitem = document.getElementById('categoryitem23')
        categoryitem.classList.add("itemselected")
    }

    $(document).ready(function(){
        $(".headerbar img").click(function(){
            window.location.href= 'https://worldwideprices.com/'
        })
    })
  }
})






