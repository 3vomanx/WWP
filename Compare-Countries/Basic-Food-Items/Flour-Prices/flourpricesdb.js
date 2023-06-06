var flourdb = [
    'Hong Kong', '3.43$', '1',
    'Nigeria', '2.92$', '2',
    'Saudi Arabia', '2.92$', '3',
    'Switzerland', '2.79$', '4',
    'Peru', '2.41$', '5',
    'Kuwait', '2.27$', '6',
    'Austria', '2.18$', '7',
    'Portugal', '2.17$', '8',
    'Japan', '2.16$', '9',
    'Latvia', '2.14$', '10',
    'Chile', '2.13$', '11',
    'Ireland', '2.13$', '12',
    'Guatemala', '2.08$', '13',
    'Costa Rica', '2.06$', '14',
    'UK', '2.05$', '15',
    'Puerto Rico', '2.00$', '16',
    'Angola', '1.97$', '17',
    'Philippines', '1.96$', '18',
    'Finland', '1.96$', '19',
    'Sweden', '1.93$', '20',
    'Ecuador', '1.89$', '21',
    'Denmark', '1.83$', '22',
    'USA','	1.81$', '23',
    'Israel', '1.78$', '24',
    'Zambia', '1.77$', '25',
    'UA Emirates','	1.77$', '26',
    'Thailand', '1.74$', '27',
    'Lithuania', '1.74$', '28',
    'Slovenia', '1.74$', '29',
    'Colombia', '1.71$', '30',
    'Domin. Rep.', '1.71$', '31',
    'Spain','1.67$', '32',
    'Netherlands','	1.64$', '33',
    'Czechia', '1.63$', '34',
    'Ghana', '1.62$', '35',
    'Germany', '1.59$', '36',
    'Bolivia', '1.52$', '37',
    'Mexico', '1.52$', '38',
    'Cameroon', '1.50$', '39',
    'Singapore', '1.48$', '40',
    'Norway','	1.48$', '41',
    'Slovakia', '1.41$', '42',
    'Sri Lanka', '1.39$', '43',
    'Romania', '1.38$', '44',
    'Vietnam', '1.36$', '45',
    'Morocco', '1.35$', '46',
    'South Korea','	1.32$', '47',
    'Uruguay', '1.31$', '48',
    'Italy', '1.30$', '49',
    'Brazil', '1.22$', '50',
    'Jordan', '1.20$', '51',
    'Ivory Coast','	1.17$', '52',
    'South Africa', '1.15$', '53',
    'France', '1.15$', '54',
    'Uganda', '1.14$', '55',
    'Canada', '1.11$', '56',
    'New Zealand', '1.11$', '57',
    'Indonesia', '1.10$', '58',
    'Greece', '1.09$', '59',
    'Tunisia', '1.05$', '60',
    'Poland', '0.99$', '61',
    'Bulgaria','0.95$','62',
    'Argentina', '0.94$', '63',
    'Paraguay', '0.90$', '64',
    'Malaysia', '0.89$', '65',
    'Azerbaijan', '0.88$', '66',
    'Tanzania', '0.85$', '67',
    'Turkey','	0.85$', '68',
    'Hungary','	0.82$', '69',
    'Kazakhstan', '0.81$', '70',
    'India','	0.79$', '71',
    'Australia', '0.77$', '72',
    'China', '0.75$', '73',
    'Serbia', '0.73$', '74',
    'Kenya', '0.72$', '75',
    'Egypt', '0.65$', '76',
    'Ukraine','	0.56$', '77',
    'Pakistan','0.53$', '78',
    'Russia','	0.49$',' 79',
    'Bangladesh','0.38$','80',
    'Belgium','0.38$','81'
];

window.addEventListener("load", function(){

    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;

    for(var g = -1; g < flourdb.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = flourdb[g];
    
    var next = g + 1;
    if (next%perrow==0 && next!=flourdb.length) {
    row = table.insertRow();

    var title = document.getElementById('prodtitle')
    title.innerText = 'Flour prices, 1 kg'
    var categoryname = document.getElementById('categorynametitle')
    categoryname.innerText = 'Flour prices by country, around the world, 2023'
    var categoryitem = document.getElementById('categoryitem4')
    categoryitem.classList.add("itemselected")

    }

    $(document).ready(function(){
        $(".headerbar img").click(function(){
            window.location.href= 'https://worldwideprices.com/'
        })
    })
  }
})
