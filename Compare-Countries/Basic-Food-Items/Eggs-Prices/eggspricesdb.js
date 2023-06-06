var eggsdb = [
    'Switzerland', '6.82$', '1',
    'USA', '6.26$', '2',
    'Slovakia', '5.51$', '3',
    'Bulgaria', '5.37$', '4',
    'Puerto Rico', '4.99$', '5',
    'Uruguay', '4.90$', '6',
    'Norway', '4.88$', '7',
    'New Zealand', '4.58$', '8',
    'Australia', '4.57$', '9',
    'Slovenia', '4.37$', '10',
    'Sweden', '4.24$', '11',
    'Ireland', '4.22$', '12',
    'South Korea', '4.19$', '13',
    'Finland', '3.93$', '14',
    'Italy', '3.92$', '15',
    'Israel', '3.83$', '16',
    'Belgium', '3.83$', '17',
    'France', '3.83$', '18',
    'Hungary', '3.81$', '19',
    'Austria', '3.80$', '20',
    'Serbia', '3.70$', '21',
    'Costa Rica', '3.55$', '22',
    'Hong Kong', '3.55$', '23',
    'Japan', '3.54$', '24',
    'Czechia', '3.53$', '25',
    'Ghana', '3.46$', '26',
    'Romania', '3.44$', '27',
    'Latvia', '3.42$', '28',
    'Lithuania', '3.28$', '29',
    'Netherlands', '3.15$', '30',
    'Ivory Coast', '3.09$', '31',
    'Denmark', '3.04$', '32',
    'UK', '2.99$', '33',
    'Nigeria', '2.90$', '34',
    'Singapore', '2.88$', '35',
    'Chile', '2.86$', '36',
    'Poland', '2.84$', '37',
    'Morocco', '2.82$', '38',
    'Portugal', '2.79$', '39',
    'Angola', '2.76$', '40',
    'Turkey', '2.75$', '41',
    'Greece', '2.74$', '42',
    'Canada', '2.73$', '43',
    'Tanzania', '2.73$', '44',
    'Germany', '2.70$', '45',
    'Jordan', '2.62$', '46',
    'UA Emirates', '2.57$', '47',
    'Argentina', '2.51$', '48',
    'Mexico', '2.44$', '49',
    'China', '2.44$', '50',
    'Guatemala', '2.37$', '51',
    'Brazil', 'Brazil$', '52',
    'Vietnam', '2.35$', '53',
    'Saudi Arabia', '2.34$', '54',
    'Ukraine', '2.34$', '55',
    'Ecuador', '2.31$', '56',
    'Domin. Rep.', '2.29$', '57',
    'Philippines', '2.28$', '58',
    'Kuwait', '2.20$', '59',
    'Spain', '2.19$', '60',
    'Egypt', '2.16$', '61',
    'Thailand', '2.15$', '62',
    'Zambia', '2.13$', '63',
    'Tunisia', '2.07$', '64',
    'Colombia', '2.05$', '65',
    'Sri Lanka', '2.04$', '66',
    'Paraguay', '2.01$', '67',
    'Peru', '2.01$', '68',
    'South Africa', '1.98$', '69',
    'Bolivia', '1.96$', '70',
    'Uganda', '1.95$', '71',
    'Kazakhstan', '1.86$', '72',
    'Malaysia', '1.86$', '73',
    'Kenya', '1.83$', '74',
    'India', '1.70$', '75',
    'Cameroon', '1.47$', '76',
    'Bangladesh', '1.32$', '77',
    'Azerbaijan', '1.27$', '78',
    'Pakistan', '1.14$', '79',
    'Russia', '1.03$', '80',
    'Indonesia', '0.16$', '81',
]

window.addEventListener("load", function(){

    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;

    for(var g = -1; g < eggsdb.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = eggsdb[g];
    
    var next = g + 1;
    if (next%perrow==0 && next!=eggsdb.length) {
    row = table.insertRow();

    var title = document.getElementById('prodtitle')
    title.innerText = 'Eggs prices, 12 pcs'
    var categoryname = document.getElementById('categorynametitle')
    categoryname.innerText = 'Eggs prices by country, around the world, 2023'
    var categoryitem = document.getElementById('categoryitem9')
    categoryitem.classList.add("itemselected")

    }

    $(document).ready(function(){
        $(".headerbar img").click(function(){
            window.location.href= 'https://worldwideprices.com/'
        })
    })
  }
})
