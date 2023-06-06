var cookingoildb = [
    'Japan', '7.68$', '1',
    'Hong Kong', '7.12$', '2',
    'Nigeria', '7.06$', '3',
    'Costa Rica', '6.86$', '4',
    'Australia', '6.72$', '5',
    'Switzerland', '6.02$', '6',
    'Zambia', '5.67$', '7',
    'Austria', '5.47$', '8',
    'Canada', '5.19$', '9',
    'Chile', '5.09$', '10',
    'Saudi Arabia', '4.93$', '11',
    'Israel', '4.91$', '12',
    'Sri Lanka', '4.83$', '13',
    'Lithuania', '4.70$', '14',
    'Bangladesh', '4.69$', '15',
    'Germany', '4.66$', '16',
    'Italy', '4.60$', '17',
    'UA Emirates', '4.48$', '18',
    'Ghana', '4.47$', '19',
    'UK', '4.35$', '20',
    'Latvia', '4.29$', '21',
    'Uruguay', '4.28$', '22',
    'Slovakia', '4.26$', '23',
    'Slovenia', '4.15$', '24',
    'Philippines', '4.09$', '25',
    'Ivory Coast', '4.06$', '26',
    'Czechia', '3.97$', '27',
    'Peru', '3.94$', '28',
    'Ecuador', '3.87$', '29',
    'Domin. Rep.', '3.86$', '30',
    'France', '3.83$', '31',
    'Netherlands', '3.83$', '32',
    'Paraguay', '3.82$', '33',
    'Kuwait', '3.82$', '34',
    'Jordan', '3.74$', '35',
    'Brazil', '3.72$', '36',
    'Spain', '3.72$', '37',
    'Denmark', '3.67$', '38',
    'Greece', '3.67$', '39',
    'Thailand', '3.63$', '40',
    'Tanzania', '3.61$', '41',
    'Malaysia', '3.58$', '42',
    'South Korea', '3.49$', '43',
    'Norway', '3.47$', '44',
    'Guatemala', '3.33$', '45',
    'Angola', '3.31$', '46',
    'Kenya', '3.29$', '47',
    'Finland', '3.28$', '48',
    'Singapore', '3.24$', '49',
    'Indonesia', '3.23$', '50',
    'China', '3.21$', '51',
    'Azerbaijan', '3.16$', '52',
    'Mexico', '3.16$', '53',
    'Colombia', '3.10$', '54',
    'Bulgaria', '3.08$', '55',
    'Uganda', '2.94$', '56',
    'Portugal', '2.89$', '57',
    'New Zealand', '2.73$', '58',
    'Belgium', '2.62$', '59',
    'South Africa', '2.61$', '60',
    'USA', '2.57$', '61',
    'Hungary', '2.54$', '62',
    'Pakistan', '2.44$', '63',
    'Romania', '2.42$', '64',
    'Sweden', '2.41$', '65',
    'India', '2.37$', '66',
    'Poland', '2.37$', '67',
    'Cameroon', '2.24$', '68',
    'Egypt', '2.23$', '69',
    'Morocco', '2.15$', '70',
    'Tunisia', '2.15$', '71',
    'Bolivia', '2.09$', '72',
    'Vietnam', '2.07$', '73',
    'Serbia', '2.06$', '74',
    'Turkey', '2.06$', '75',
    'Kazakhstan', '1.92$', '76',
    'Ireland', '1.92$', '77',
    'Ukraine', '1.73$', '78',
    'Argentina', '1.43$', '79',
    'Russia', '1.41$', '80',
];

window.addEventListener("load", function(){

    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;

    for(var g = -1; g < cookingoildb.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = cookingoildb[g];
    
    var next = g + 1;
    if (next%perrow==0 && next!=cookingoildb.length) {
    row = table.insertRow();

    var title = document.getElementById('prodtitle')
    title.innerText = 'Cooking oil prices, 1 liter'
    var categoryname = document.getElementById('categorynametitle')
    categoryname.innerText = 'Cooking oil prices by country, around the world, 2023'
    var categoryitem = document.getElementById('categoryitem10')
    categoryitem.classList.add("itemselected")

    }

    $(document).ready(function(){
        $(".headerbar img").click(function(){
            window.location.href= 'https://worldwideprices.com/'
        })
    })
  }
})
