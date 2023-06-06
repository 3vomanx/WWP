var potatoesdb = [
    'Japan', '5.57$', '1',
    'Hong Kong', '4.77$', '2',
    'South Korea', '4.66$', '3',
    'Costa Rica', '3.63$', '4',
    'Ghana', '3.37$', '5',
    'Norway', '3.30$', '6',
    'Zambia', '3.16$', '7',
    'Vietnam', '3.06$', '8',
    'Philippines', '2.88$', '9',
    'Nigeria', '2.61$', '10',
    'Sweden', '2.60$', '11',
    'Australia', '2.52$', '12',
    'New Zealand', '2.48$', '13',
    'Canada', '2.41$', '14',
    'USA', '2.38$', '15',
    'Uruguay', '2.29$', '16',
    'Italy', '2.18$', '17',
    'Guatemala', '2.04$', '18',
    'China', '2.02$', '19',
    'Mexico', '1.99$', '20',
    'Austria', '1.96$', '21',
    'Thailand', '1.89$', '22',
    'Israel', '1.89$', '23',
    'Netherlands', '1.85$', '24',
    'Chile', '1.79$', '25',
    'Argentina', '1.70$', '26',
    'Indonesia', '1.67$', '27',
    'Domin. Rep.', '1.53$', '28',
    'Slovenia', '1.52$', '29',
    'Portugal', '1.48$', '30',
    'Denmark', '1.47$', '31',
    'Bolivia', '1.46$', '32',
    'France', '1.45$', '33',
    'Hungary', '1.44$', '34',
    'Finland', '1.41$', '35',
    'Belgium', '1.41$', '36',
    'Peru', '1.40$', '37',
    'Ireland', '1.36$', '38',
    'Colombia', '1.34$', '39',
    'Spain', '1.32$', '40',
    'Puerto Rico', '1.32$', '41',
    'Greece', '1.30$', '42',
    'Slovakia', '1.26$', '43',
    'Paraguay', '1.21$', '44',
    'Uganda', '1.20$', '45',
    'Brazil', '1.18$', '46',
    'Ecuador', '1.14$', '47',
    'Serbia', '1.12$', '48',
    'Bulgaria', '1.11$', '49',
    'South Africa', '1.10$', '50',
    'Morocco', '1.10$', '51',
    'Sri Lanka', '1.07$', '52',
    'Germany', '1.05$', '53',
    'Singapore', '1.05$', '54',
    'Kenya', '1.03$', '55',
    'Kuwait', '1.01$', '56',
    'Ivory Coast', '1.01$', '57',
    'Tunisia', '0.96$', '58',
    'Saudi Arabia', '0.93$', '59',
    'Malaysia', '0.90$', '60',
    'Switzerland', '0.89$', '61',
    'Romania', '0.89$', '62',
    'Azerbaijan', '0.81$', '63',
    'UK', '0.80$', '64',
    'UA Emirates', '0.80$', '65',
    'Angola', '0.78$', '66',
    'Czechia', '0.75$', '67',
    'Russia', '0.73$', '68',
    'Poland', '0.69$', '69',
    'Jordan', '0.66$', '70',
    'Lithuania', '0.65$', '71',
    'Latvia', '0.65$', '72',
    'India', '0.64$', '73',
    'Tanzania', '0.64$', '74',
    'Kazakhstan', '0.61$', '75',
    'Egypt', '0.51$', '76',
    'Ukraine', '0.38$', '77',
    'Bangladesh', '0.28$', '78',
    'Pakistan', '0.27$', '79',
    'Turkey', '0.10$', '80',
]

window.addEventListener("load", function(){

    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;

    for(var g = -1; g < potatoesdb.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = potatoesdb[g];
    
      var next = g + 1;
      if (next%perrow==0 && next!=potatoesdb.length) {
        row = table.insertRow();

        var title = document.getElementById('prodtitle')
        title.innerText = 'Potato prices, 1 kg'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Potatoes prices by country, around the world, 2023'
        var categoryitem = document.getElementById('categoryitem27')
        categoryitem.classList.add("itemselected")
    }

    $(document).ready(function(){
        $(".headerbar img").click(function(){
            window.location.href= 'https://worldwideprices.com/'
        })
    })
  }
})