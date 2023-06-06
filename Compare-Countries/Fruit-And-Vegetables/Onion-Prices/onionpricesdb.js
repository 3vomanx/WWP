var oniondb = [
    'Puerto Rico', '5.14$', '1',
    'Japan', '4.74$', '2',
    'Costa Rica', '4.02$', '3',
    'Tunisia', '3.37$', '4',
    'Indonesia', '3.17$', '5',
    'Philippines', '3.02$', '6',
    'Mexico', '2.99$', '7',
    'Ghana', '2.86$', '8',
    'China', '2.83$', '9',
    'Nigeria', '2.82$', '10',
    'Uruguay', '2.80$', '11',
    'Hong Kong', '2.78$', '12',
    'Spain', '2.73$', '13',
    'Kuwait', '2.72$', '14',
    'Thailand', '2.64$', '15',
    'Tanzania', '2.56$', '16',
    'Canada', '2.41$', '17',
    'South Korea', '2.30$', '18',
    'Israel', '2.17$', '19',
    'Switzerland', '2.17$', '20',
    'New Zealand', '2.16$', '21',
    'Australia', '2.15$', '22',
    'Zambia', '2.01$', '23',
    'Ecuador', '2.00$', '24',
    'Angola', '1.96$', '25',
    'Norway', '1.88$', '26',
    'Netherlands', '1.85$', '27',
    'Argentina', '1.84$', '28',
    'Romania', '1.78$', '29',
    'Italy', '1.75$', '30',
    'Finland', '1.74$', '31',
    'Hungary', '1.73$', '32',
    'Chile', '1.70$', '33',
    'Vietnam', '1.70$', '34',
    'Domin. Rep.', '1.69$', '35',
    'Austria', '1.63$', '36',
    'Czechia', '1.63$', '37',
    'Slovakia', '1.63$', '38',
    'UA Emirates', '1.62$', '39',
    'South Africa', '1.60$', '40',
    'Slovenia', '1.52$', '41',
    'Singapore', '1.50$', '42',
    'Ukraine', '1.49$', '43',
    'France', '1.47$', '44',
    'Malaysia', '1.46$', '45',
    'Colombia', '1.45$', '46',
    'Sweden', '1.44$', '47',
    'Poland', '1.42$', '48',
    'Belgium', '1.41$', '49',
    'Latvia', '1.41$', '50',
    'USA', '1.37$', '51',
    'Denmark', '1.32$', '52',
    'Guatemala', '1.30$', '53',
    'Ivory Coast', '1.27$', '54',
    'Germany', '1.26$', '55',
    'UK', '1.24$', '56',
    'Egypt', '1.23$', '57',
    'Morocco', '1.23$', '58',
    'Serbia', '1.21$', '59',
    'Peru', '1.19$', '60',
    'Brazil', '1.18$', '61',
    'Bulgaria', '1.11$', '62',
    'Kenya', '1.10$', '63',
    'Ireland', '1.09$', '64',
    'Lithuania', '1.09$', '65',
    'Saudi Arabia', '1.05$', '66',
    'Greece', '1.03$', '67',
    'Turkey', '1.02$', '68',
    'Paraguay', '1.00$', '69',
    'Portugal', '0.96$', '70',
    'Uganda', '0.94$', '71',
    'Azerbaijan', '0.87$', '72',
    'Bolivia', '0.85$', '73',
    'Pakistan', '0.78$', '74',
    'Sri Lanka', '0.75$', '75',
    'Kazakhstan', '0.74$', '76',
    'Jordan', '0.69$', '77',
    'Russia', '0.64$', '78',
    'India', '0.42$', '79',
    'Bangladesh', '0.37$', '80',
]

window.addEventListener("load", function(){

    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;

    for(var g = -1; g < oniondb.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = oniondb[g];
    
      var next = g + 1;
      if (next%perrow==0 && next!=oniondb.length) {
        row = table.insertRow();

        var title = document.getElementById('prodtitle')
        title.innerText = 'Onion prices, 1 kg'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Onions prices by country, around the world, 2023'
        var categoryitem = document.getElementById('categoryitem26')
        categoryitem.classList.add("itemselected")
    }

    $(document).ready(function(){
        $(".headerbar img").click(function(){
            window.location.href= 'https://worldwideprices.com/'
        })
    })
  }
})