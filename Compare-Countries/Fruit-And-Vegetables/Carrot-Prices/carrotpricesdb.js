var carrotdb = [
    'Japan', '6.01$', '1',
    'South Korea', '3.82$', '2',
    'Norway', '3.77$', '3',
    'Vietnam', '3.57$', '4',
    'Germany', '2.90$', '5',
    'Puerto Rico', '2.75$', '6',
    'Zambia', '2.65$', '7',
    'Greece', '2.39$', '8',
    'Uruguay', '2.29$', '9',
    'Ghana', '2.18$', '10',
    'Israel', '2.17$', '11',
    'USA', '2.16$', '12',
    'New Zealand', '2.16$', '13',
    'Saudi Arabia', '2.12$', '14',
    'Philippines', '2.06$', '15',
    'Angola', '1.97$', '16',
    'Sweden', '1.93$', '17',
    'Nigeria', '1.82$', '18',
    'Italy', '1.74$', '19',
    'Spain', '1.73$', '20',
    'Kuwait', '1.70$', '21',
    'Thailand', '1.66$', '22',
    'Australia', '1.61$', '23',
    'Finland', '1.59$', '24',
    'Brazil', '1.57$', '25',
    'Malaysia', '1.55$', '26',
    'Peru', '1.53$', '27',
    'Austria', '1.52$', '28',
    'Portugal', '1.52$', '29',
    'Slovakia', '1.52$', '30',
    'France', '1.47$', '31',
    'Chile', '1.45$', '32',
    'Singapore', '1.42$', '33',
    'Hungary', '1.41$', '34',
    'Czechia', '1.40$', '35',
    'Hong Kong', '1.39$', '36',
    'Switzerland', '1.39$', '37',
    'Canada', '1.35$', '38',
    'Netherlands', '1.30$', '39',
    'Uganda', '1.28$', '40',
    'Costa Rica', '1.26$', '41',
    'Bulgaria', '1.11$', '42',
    'Romania', '1.11$', '43',
    'Ireland', '1.09$', '44',
    'Latvia', '1.09$', '45',
    'Slovenia', '1.09$', '46',
    'Ukraine', '1.08$', '47',
    'UA Emirates', '1.06$', '48',
    'Domin. Rep.', '1.05$', '49',
    'Denmark', '1.03$', '50',
    'Turkey', '1.03$', '51',
    'China', '1.02$', '52',
    'Colombia', '1.00$', '53',
    'Cameroon', '1.00$', '54',
    'Indonesia', '1.00$', '55',
    'Russia', '1.00$', '56',
    'Sri Lanka', '0.99$', '57',
    'Guatemala', '0.97$', '58',
    'Jordan', '0.97$', '59',
    'Ecuador', '0.95$', '60',
    'Poland', '0.94$', '61',
    'Kenya', '0.88$', '62',
    'Morocco', '0.88$', '63',
    'Belgium', '0.87$', '64',
    'Tanzania', '0.85$', '65',
    'Mexico', '0.83$', '66',
    'South Africa', '0.82$', '67',
    'Azerbaijan', '0.76$', '68',
    'Lithuania', '0.76$', '69',
    'Serbia', '0.75$', '70',
    'Bolivia', '0.71$', '71',
    'UK', '0.62$', '72',
    'India', '0.59$', '73',
    'Kazakhstan', '0.59$', '74',
    'Paraguay', '0.55$', '75',
    'Bangladesh', '0.47$', '76',
    'Tunisia', '0.44$', '77',
    'Pakistan', '0.32$', '78',
    'Argentina', '0.31$', '79',
    'Egypt', '0.26$', '80',
]


window.addEventListener("load", function(){

    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;

    for(var g = -1; g < carrotdb.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = carrotdb[g];
    
      var next = g + 1;
      if (next%perrow==0 && next!=carrotdb.length) {
        row = table.insertRow();

        var title = document.getElementById('prodtitle')
        title.innerText = 'Carrots prices, 1 kg'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Carrots prices by country, around the world, 2023'
        var categoryitem = document.getElementById('categoryitem25')
        categoryitem.classList.add("itemselected")
    }

    $(document).ready(function(){
        $(".headerbar img").click(function(){
            window.location.href= 'https://worldwideprices.com/'
        })
    })
  }
})






