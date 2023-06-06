var whitebeandb = [
    'Ghana', '10.12$', '1',
    'Hong Kong', '8.85$', '2',
    'France', '8.00$', '3',
    'Thailand', '7.55$', '4',
    'Denmark', '6.23$', '5',
    'Israel', '5.98$', '6',
    'Germany', '5.37$', '7',
    'Australia', '5.28$', '8',
    'Belgium', '5.24$', '9',
    'Russia', '5.10$', '10',
    'South Africa', '4.73$', '11',
    'Serbia', '4.67$', '12',
    'Greece', '4.65$', '13',
    'Vietnam', '4.63$', '14',
    'Kuwait', '4.53$', '15',
    'USA', '4.37$', '16',
    'China', '4.33$', '17',
    'Hungary', '4.33$', '18',
    'UA Emirates', '4.30$', '19',
    'Tunisia', '4.24$', '20',
    'Switzerland', '4.23$', '21',
    'Bulgaria', '4.20$', '22',
    'Norway', '4.15$', '23',
    'Poland', '4.14$', '24',
    'Singapore', '4.07$', '25',
    'Malaysia', '4.05$', '26',
    'Finland', '3.91$', '27',
    'Nigeria', '3.80$', '28',
    'Italy', '3.76$', '29',
    'Latvia', '3.72$', '30',
    'Slovenia', '3.72$', '31',
    'Saudi Arabia', '3.71$', '32',
    'South Korea', '3.71$', '33',
    'Lithuania', '3.70$', '34',
    'Morocco', '3.61$', '35',
    'Puerto Rico', '3.51$', '36',
    'Netherlands', '3.49$', '37',
    'UK', '3.36$', '38',
    'Brazil', '3.34$', '39',
    'Costa Rica', '3.28$', '40',
    'Ireland', '3.27$', '41',
    'Czechia', '3.26$', '42',
    'Azerbaijan', '3.08$', '43',
    'Peru', '3.07$', '44',
    'Guatemala', '3.01$', '45',
    'Slovakia', '2.83$', '46',
    'Jordan', '2.81$', '47',
    'Angola', '2.77$', '48',
    'Kazakhstan', '2.59$', '49',
    'Ecuador', '2.58$', '50',
    'Mexico', '2.55$', '51',
    'Canada', '2.45$', '52',
    'Ukraine', '2.34$', '53',
    'Domin. Rep.', '2.29$', '54',
    'Philippines', '2.20$', '55',
    'Portugal', '2.17$', '56',
    'Egypt', '2.13$', '57',
    'Spain', '2.07$', '58',
    'Ivory Coast', '2.00$', '59',
    'Romania', '2.00$', '60',
    'India', '1.94$', '61',
    'Kenya', '1.89$', '62',
    'Uganda', '1.80$', '63',
    'Colombia', '1.56$', '64',
    'Cameroon', '1.50$', '65',
    'Pakistan', '1.25$', '66',
    'Turkey', '0.41$', '67',
]


window.addEventListener("load", function(){

    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;

    for(var g = -1; g < whitebeandb.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = whitebeandb[g];
    
      var next = g + 1;
      if (next%perrow==0 && next!=whitebeandb.length) {
        row = table.insertRow();

        var title = document.getElementById('prodtitle')
        title.innerText = 'White beans prices, 1 kg'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Beans prices by country, around the world, 2023'
        var categoryitem = document.getElementById('categoryitem24')
        categoryitem.classList.add("itemselected")
    }

    $(document).ready(function(){
        $(".headerbar img").click(function(){
            window.location.href= 'https://worldwideprices.com/'
        })
    })
  }
})






