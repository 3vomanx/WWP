var sugardb = [
    'Hong Kong','3.43$', '1',
    'Ghana', '2.64$', '2',
    'Kazakhstan', '2.52$', '3',
    'Ireland', '2.41$', '4',
    'Puerto Rico', '2.40$', '5',
    'Norway', '2.22$', '6',
    'Austria', '2.19$', '7',
    'Finland', '2.19$', '8',
    'New Zealand', '2.11$', '9',
    'Philippines', '1.93$', '10',
    'Denmark', '1.91$', '11',
    'China', '1.89$', '12',
    'Slovakia', '1.86$', '13',
    'Japan', '1.84$', '14',
    'Zambia', '1.77$', '15',
    'Bulgaria', '1.68$', '16',
    'Ivory Coast', '1.67$', '17',
    'Poland', '1.66$', '18',
    'Russia', '1.66$', '19',
    'France', '1.64$', '20',
    'Lithuania', '1.64$', '21',
    'Slovenia', '1.64$', '22',
    'Chile', '1.62$', '23',
    'UA Emirates','	1.61$', '24',
    'USA', '1.60$', '25',
    'Singapore', '1.57$', '26',
    'Czechia', '1.54$', '27',
    'Sweden', '1.54$', '28',
    'Italy', '1.53$', '29',
    'Portugal', '1.53$', '30',
    'Spain', '1.53$', '31',
    'Cameroon', '1.50$', '32',
    'Switzerland', '1.45$', '33',
    'Mexico','1.44$', '34',
    'South Africa','1.43$', '35',
    'Greece', '1.42$', '36',
    'Uruguay', '1.41$', '37',
    'Peru', '1.40$', '38',
    'Vietnam', '1.40$', '39',
    'South Korea', '1.39$', '40',
    'Costa Rica', '1.38$', '41',
    'Azerbaijan', '1.35$', '42',
    'Uganda', '1.34$', '43',
    'Israel', '1.34$', '44',
    'Romania', '1.33$', '45',
    'Domin. Rep.','	1.32$', '46',
    'Germany', '1.32$', '47',
    'Latvia', '1.32$', '48',
    'Netherlands','	1.32$', '49',
    'Kuwait', '1.30$', '50',
    'Tanzania', '1.28$', '51',
    'Australia', '1.28$', '52',
    'Tunisia','	1.25$', '53',
    'UK','	1.24$', '54',
    'Argentina', '1.20$', '55',
    'Paraguay', '1.11$', '56',
    'Kenya', '1.11$', '57',
    'Ecuador', '1.10$', '58',
    'Serbia', '1.07$', '59',
    'Bangladesh', '1.05$', '60',
    'Canada', '1.04$', '61',
    'Colombia', '1.02$', '62',
    'Guatemala', '1.01$', '63',
    'Saudi Arabia', '1.01$', '64',
    'Angola', '0.99$', '65',
    'Malaysia', '0.95$', '66',
    'Bolivia', '0.94$', '67',
    'Brazil', '0.92$', '68',
    'Nigeria', '0.91$', '69',
    'Ukraine', '0.91$', '70',
    'Indonesia', '0.90$', '71',
    'Belgium', '0.88$', '72',
    'Jordan', '0.85$','73',
    'Sri Lanka', '0.85$','74',
    'Morocco', '0.78$', '75',
    'Hungary', '0.75$', '76',
    'Egypt', '0.74$', '77',
    'Thailand', '0.64$', '78',
    'India', '0.55$', '79',
    'Pakistan', '0.33$', '80',
    'Turkey', '0.26$', '81'
];

window.addEventListener("load", function(){

    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;

    for(var g = -1; g < sugardb.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = sugardb[g];
    
    var next = g + 1;
    if (next%perrow==0 && next!=sugardb.length) {
    row = table.insertRow();

    var title = document.getElementById('prodtitle')
    title.innerText = 'Sugar prices, 1 kg'
    var categoryname = document.getElementById('categorynametitle')
    categoryname.innerText = 'Sugar prices by country, around the world, 2023'
    var categoryitem = document.getElementById('categoryitem6')
    categoryitem.classList.add("itemselected")

    }

    $(document).ready(function(){
        $(".headerbar img").click(function(){
            window.location.href= 'https://worldwideprices.com/'
        })
    })
  }
})
