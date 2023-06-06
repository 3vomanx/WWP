var poultrydb = [
    'Hong Kong', '11.73$', '1',
    'Finland', '10.74$', '2',
    'India', '10.72$', '3',
    'USA', '10.60$', '4',
    'Japan', '10.25$', '5',
    'Netherlands', '9.54$', '6',
    'Singapore', '9.52$', '7',
    'Germany', '9.32$', '8',
    'Belgium', '9.32$', '9',
    'Sweden', '9.17$', '10',
    'Switzerland', '9.13$', '11',
    'France', '8.66$', '12',
    'Norway', '8.22$', '13',
    'Nigeria', '7.49$', '14',
    'Uruguay', '7.32$', '15',
    'Ivory Coast', '7.11$', '16',
    'Canada', '7.06$', '17',
    'Vietnam', '7.01$', '18',
    'Bulgaria', '7.00$', '19',
    'Uganda', '6.99$', '20',
    'Israel', '6.77$', '21',
    'Denmark', '6.66$', '22',
    'Italy', '6.47$', '23',
    'Zambia', '6.23$', '24',
    'Slovenia', '6.03$', '25',
    'Lithuania', '6.03$', '26',
    'UA Emirates', '5.94$', '27',
    'China', '5.92$', '28',
    'Cameroon', '5.83$', '29',
    'Austria', '5.70$', '30',
    'Chile', '5.52$', '31',
    'Latvia', '5.48$', '32',
    'Sri Lanka', '5.45$', '33',
    'New Zealand', '5.40$', '34',
    'Saudi Arabia', '5.25$', '35',
    'Spain', '4.93$', '36',
    'Costa Rica', '4.85$', '37',
    'South Korea', '4.78$', '38',
    'Kuwait', '4.57$', '39',
    'Poland', '4.50$', '40',
    'Morocco', '4.41$', '41',
    'Ecuador', '4.40$', '42',
    'Australia', '4.36$', '43',
    'Tanzania', '4.26$', '44',
    'Guatemala', '4.20$', '45',
    'Czechia', '4.20$', '46',
    'Kenya', '4.16$', '47',
    'Angola', '4.12$', '48',
    'Jordan', '4.09$', '49',
    'Ghana', '4.05$', '50',
    'Hungary', '3.96$', '51',
    'Egypt', '3.92$', '52',
    'Puerto Rico', '3.86$', '53',
    'Slovakia', '3.84$', '54',
    'Portugal', '3.84$', '55',
    'Thailand', '3.63$', '56',
    'Domin. Rep.', '3.59$', '57',
    'Kazakhstan', '3.56$', '58',
    'Romania', '3.53$', '59',
    'Philippines', '3.52$', '60',
    'Argentina', '3.44$', '61',
    'Ireland', '3.40$', '62',
    'Brazil', '3.31$', '63',
    'South Africa', '3.30$', '64',
    'Greece', '3.29$', '65',
    'UK', '3.23$', '66',
    'Tunisia', '3.21$', '67',
    'Malaysia', '3.15$', '68',
    'Turkey', '3.09$', '69',
    'Colombia', '3.04$', '70',
    'Serbia', '2.98$', '71',
    'Peru', '2.89$', '72',
    'Azerbaijan', '2.88$', '73',
    'Mexico', '2.88$', '74',
    'Indonesia', '2.88$', '75',
    'Bangladesh', '2.78$', '76',
    'Pakistan', '2.72$', '77',
    'Russia', '2.44$', '78',
    'Ukraine', '2.24$', '79',
    'Bolivia', '2.20$', '80',
    'Paraguay', '1.71$', '81',
];

window.addEventListener("load", function(){

    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;

    for(var g = -1; g < poultrydb.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = poultrydb[g];
    
    var next = g + 1;
    if (next%perrow==0 && next!=poultrydb.length) {
    row = table.insertRow();

    var title = document.getElementById('prodtitle')
    title.innerText = 'Chicken meat prices, 1 kg'
    var categoryname = document.getElementById('categorynametitle')
    categoryname.innerText = 'Poultry prices by country, around the world, 2023'
    var categoryitem = document.getElementById('categoryitem12')
    categoryitem.classList.add("itemselected")

    }

    $(document).ready(function(){
        $(".headerbar img").click(function(){
            window.location.href= 'https://worldwideprices.com/'
        })
    })
  }
})
