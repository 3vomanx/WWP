var coffeedb = [
    'Kenya', '23.96$', '1',
    'Sri Lanka', '23.05$', '2',
    'Angola', '22.50$', '3',
    'Burma', '19.52$', '4',
    'Nigeria', '18.89$', '5',
    'Indonesia', '18.62$', '6',
    'Paraguay', '18.10$', '7',
    'USA', '17.99$', '8',
    'Hong Kong', '17.99$', '9',
    'Macao', '17.53$', '10',
    'Panama', '17.52$', '11',
    'Bahrain', '17.13$', '12',
    'Costa Rica', '15.65$', '13',
    'Uganda', '15.28$', '14',
    'Argentina', '15.18$', '15',
    'South Korea', '15.17$', '16',
    'Vietnam', '14.73$', '17',
    'Morocco', '14.67$', '18',
    'Switzerland', '14.43$', '19',
    'Tunisia', '14.41$', '20',
    'Denmark', '14.39$', '21',
    'Peru', '14.27$', '22',
    'Slovakia', '14.24$', '23',
    'Austria', '14.02$', '24',
    'Serbia', '13.82$', '25',
    'Qatar', '13.32$', '26',
    'Ecuador', '13.20$', '27',
    'Germany', '13.14$', '28',
    'Latvia', '12.79$', '29',
    'Saudi Arabia', '12.78$', '30',
    'Oman', '12.66$', '31',
    'Spain', '12.47$', '32',
    'Thailand', '12.46$', '33',
    'Ghana', '12.44$', '34',
    'Lithuania', '12.33$', '35',
    'Hungary', '12.02$', '36',
    'Singapore', '11.84$', '37',
    'India', '11.54$', '38',
    'Colombia', '11.52$', '39',
    'Kuwait', '11.38$', '40',
    'Greece', '11.38$', '41',
    'Philippines', '11.27$', '42',
    'New Zealand', '11.16$', '43',
    'Canada', '11.10$', '44',
    'Slovenia', '10.95$', '45',
    'Italy', '10.94$', '46',
    'Norway', '10.87$', '47',
    'Bulgaria', '10.64$', '48',
    'Azerbaijan', '10.55$', '49',
    'Chile', '10.43$', '50',
    'Russia', '10.31$', '51',
    'Czechia', '10.28$', '52',
    'Finland', '10.14$', '53',
    'UA Emirates', '10.01$', '54',
    'China', '9.58$', '55',
    'Australia', '9.40$', '56',
    'Malaysia', '9.24$', '57',
    'Jordan', '8.87$', '58',
    'Brazil', '8.81$', '59',
    'Romania', '8.78$', '60',
    'Bangladesh', '8.66$', '61',
    'Netherlands', '8.60$', '62',
    'Pakistan', '8.52$', '63',
    'Sweden', '8.40$', '64',
    'Poland', '8.34$', '65',
    'UK', '8.09$', '66',
    'Turkey', '8.03$', '67',
    'Egypt', '7.98$', '68',
    'South Africa', '7.70$', '69',
    'Cyprus', '7.37$', '70',
    'Portugal', '7.33$', '71',
    'Ireland', '7.12$', '72',
    'Belgium', '7.00$', '73',
    'Luxembourg', '7.00$', '74',
    'Belarus', '6.97$', '75',
    'Ukraine', '6.82$', '76',
    'France', '6.74$', '77',
    'Uzbekistan', '6.61$', '78',
]


window.addEventListener("load", function(){

    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;

    for(var g = -1; g < coffeedb.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = coffeedb[g];
    
      var next = g + 1;
      if (next%perrow==0 && next!=coffeedb.length) {
        row = table.insertRow();

        var title = document.getElementById('prodtitle')
        title.innerText = 'Nescafe Gold prices, 200 g'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Coffee prices by country, around the world, 2022'
        var categoryitem = document.getElementById('categoryitem30')
        categoryitem.classList.add("itemselected")
    }

    $(document).ready(function(){
        $(".headerbar img").click(function(){
            window.location.href= 'https://worldwideprices.com/'
        })
    })
  }
})