var ricedb = [
    'Serbia', '4.76$','1',
    'Japan', '4.38$', '2',
    'USA','	3.77$', '3',
    'Nigeria','	3.56$', '4',
    'Uruguay','	3.29$', '5',
    'Israel','	3.26$', '6',
    'Hungary','	3.18$', '7',
    'Lithuania','	3.06$', '8',
    'Russia','	3.05$', '9',
    'Switzerland','	3.01$', '10',
    'Slovakia', '2.90$', '11',
    'Malaysia', '2.89$', '12',
    'Sweden', '2.89$', '13',
    'South Korea', '2.68$', '14',
    'Kazakhstan', '2.60$', '15',
    'Netherlands', '2.58$', '16',
    'UA Emirates', '2.57$', '17',
    'Bulgaria', '2.57$', '18',
    'Zambia', '2.47$', '19',
    'New Zealand','	2.47$', '20',
    'Latvia','	2.42$', '21',
    'Canada','	2.41$', '22',
    'Finland','	2.36$', '23',
    'Cameroon', '2.17$', '24',
    'Germany', '2.17$', '25',
    'Saudi Arabia', '2.15$', '26',
    'Chile', '2.13$', '27',
    'Guatemala', '2.02$', '28',
    'Ghana', '2.00$', '29',
    'France', '1.95$', '30',
    'Ukraine', '1.94$', '31',
    'Morocco', '1.91$', '32',
    'Czechia', '1.87$', '33',
    'UK', '1.87$', '34',
    'Hong Kong', '1.86$', '35',
    'Sri Lanka', '1.85$', '36',
    'Italy', '1.85$', '37',
    'Norway', '1.83$', '38',
    'Greece', '1.81$', '39',
    'Uganda', '1.79$', '40',
    'Romania', '1.78$', '41',
    'Kenya', '1.75$', '42',
    'Jordan', '1.75$', '43',
    'Belgium', '1.64$', '44',
    'Turkey', '1.64$', '45',
    'Austria', '1.63$', '46',
    'Domin. Rep.','	1.61$', '47',
    'Australia', '1.61$', '48',
    'Slovenia', '1.58$', '49',
    'Costa Rica', '1.57$', '50',
    'Tunisia', '1.54$', '51',
    'Bolivia', '1.52$', '52',
    'Mexico', '1.52$', '53',
    'Poland', '1.51$', '54',
    'Denmark', '1.46$', '55',
    'Spain', '1.42$', '56',
    'Pakistan', '1.41$', '57',
    'Portugal', '1.41$', '58',
    'Puerto Rico','	1.39$', '59',
    'Ecuador','	1.30$', '60',
    'Ireland','	1.30$', '61',
    'Kuwait','	1.29$', '62',
    'Tanzania', '1.28$', '63',
    'Ivory Coast','	1.27$', '64',
    'Peru', '1.24$', '65',
    'China', '1.21$', '66',
    'Philippines', '1.21$', '67',
    'Indonesia', '1.20$', '68',
    'Brazil', '1.16$', '69',
    'Angola', '1.15$', '70',
    'Azerbaijan', '1.12$', '71',
    'South Africa', '1.02$','72',
    'Vietnam', '1.00$', '73',
    'Singapore', '0.97$', '74',
    'Argentina', '0.89$', '75',
    'Colombia', '0.88$', '76',
    'Egypt', '0.84$', '77',
    'India', '0.79$', '78',
    'Bangladesh', '0.71$', '79',
    'Thailand', '0.70$', '80',
    'Paraguay', '0.65$', '81',
];

window.addEventListener("load", function(){

    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;

    for(var g = -1; g < ricedb.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = ricedb[g];
    
    var next = g + 1;
    if (next%perrow==0 && next!=ricedb.length) {
    row = table.insertRow();

    var title = document.getElementById('prodtitle')
    title.innerText = 'Rice prices, 1 kg'
    var categoryname = document.getElementById('categorynametitle')
    categoryname.innerText = 'Rice prices by country, around the world, 2023'
    var categoryitem = document.getElementById('categoryitem5')
    categoryitem.classList.add("itemselected")

    }

    $(document).ready(function(){
        $(".headerbar img").click(function(){
            window.location.href= 'https://worldwideprices.com/'
        })
    })
  }
})
