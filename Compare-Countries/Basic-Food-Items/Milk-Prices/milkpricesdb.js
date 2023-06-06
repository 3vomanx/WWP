var milkdb = [
    'Nigeria','4.96$', '1',	
    'Macao', '3.45$', '2',
    'Ivory Coast', '3.24$', '3',
    'Hong Kong', '3.12$', '4',
    'Canada', '2.59$', '5',
    'Ghana', '2.53$', '6',
    'Burma', '2.52$', '7',
    'Germany', '2.39$', '8',
    'Luxembourg', '2.33$', '9',
    'New Zealand', '2.29$', '10',
    'Cameroon', '2.25$', '11',
    'Singapore', '2.23$', '12',
    'Sweden', '2.22$', '13',
    'Italy', '2.18$', '14',
    'Hungary', '2.17$', '15',
    'Tanzania', '2.13$', '16',
    'Costa Rica', '2.12$', '17',
    'Puerto Rico', '2.09$', '18',
    'South Korea', '2.09$', '19',
    'Denmark', '2.05$', '20',
    'Japan', '2.03$','	21',
    'Greece', '2.03$','	22',
    'Norway', '2.01$','	23',
    'Guatemala', '2.00$', '24',
    'UK', '1.99$','	25',
    'USA', '1.98$','	26',
    'Uganda', '1.98$','	27',
    'Australia', '1.98$','	28',
    'Zambia', '1.97$','	29',
    'Austria', '1.96$','	30',
    'Netherlands', '1.96$', '31',
    'Brazil', '1.87$', '32',
    'UA Emirates', '1.81$', '33',
    'Philippines', '1.78$', '34',
    'Romania', '1.78$', '35',
    'Kazakhstan', '1.73$', '36',
    'Saudi Arabia', '1.73$', '37',
    'Switzerland', '1.73$', '38',
    'Qatar', '1.72$','	39',
    'Panama', '1.70$','	40',
    'Cyprus', '1.70$','	41',
    'Malaysia', '1.68$', '42',
    'Bulgaria', '1.68$', '43',
    'Bahrain', '1.66$', '44',
    'Czechia', '1.63$', '45',
    'Latvia', '1.63$', '46',
    'Lithuania', '1.63$', '47',
    'Thailand', '1.60$', '48',
    'Belgium', '1.59$', '49',
    'Angola', '1.58$','	50',
    'Vietnam', '1.58$', '51',
    'Israel', '1.56$','	52',
    'Sri Lanka', '1.56$', '53',
    'Mexico', '1.55$','	54',
    'Kuwait', '1.55$','	55',
    'Indonesia', '1.51$', '56',
    'Oman', '1.51$', '57',
    'Turkey', '1.51$', '58',
    'Serbia', '1.49$', '59',
    'Peru', '1.48$', '60',
    'Bolivia', '1.45$', '61',
    'China', '1.44$', '62',
    'Russia', '1.44$', '63',
    'Uruguay', '1.41$', '64',
    'Chile', '1.37$', '65',
    'Ireland', '1.36$', '66',
    'Azerbaijan	','1.35$', '67',
    'Domin. Rep.', '1.32$', '68',
    'Finland', '1.30$', '69',
    'France', '1.26$', '70',
    'Spain', '1.22$', '71',
    'Colombia', '1.20$', '72',
    'Jordan', '1.20$', '73',
    'Ecuador', '1.19$', '74',
    'Kenya', '1.17$', '75',
    'Ukraine', '1.13$', '76',
    'Paraguay', '1.12$', '77',
    'Slovenia', '1.09$', '78',
    'South Africa', '1.04$', '79',
    'Morocco', '1.03$', '80',
    'Portugal', '1.03$', '81',
    'Argentina', '0.99$', '82',
    'Slovakia', '0.99$', '83',
    'Uzbekistan', '0.96$', '84',
    'Egypt', '0.94$', '85',
    'Pakistan', '0.87$', '86',
    'India', '0.83$', '87',
    'Iran', '0.83$' , '88',
    'Poland', '0.83$' , '89',
    'Belarus', '0.82$' , '90',
    'Bangladesh', '0.71$', '91',
    'Tunisia', '0.43$', '92',
];

window.addEventListener("load", function(){

    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;

    for(var g = -1; g < milkdb.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = milkdb[g];
    
    var next = g + 1;
    if (next%perrow==0 && next!=milkdb.length) {
    row = table.insertRow();

    var title = document.getElementById('prodtitle')
    title.innerText = '	Two percent milk prices, 1 liter '
    var categoryname = document.getElementById('categorynametitle')
    categoryname.innerText = 'Milk prices by country, around the world, 2023'
    var categoryitem = document.getElementById('categoryitem8')
    categoryitem.classList.add("itemselected")

    }

    $(document).ready(function(){
        $(".headerbar img").click(function(){
            window.location.href= 'https://worldwideprices.com/'
        })
    })
  }
})
