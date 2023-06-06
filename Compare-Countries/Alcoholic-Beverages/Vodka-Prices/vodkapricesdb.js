var vodkadb = [
    'Singapore', '39.76$', '1',
    'Bahrain', '39.66$', '2',
    'Malaysia', '38.11$', '3',
    'Sri Lanka', '36.78$', '4',
    'Norway', '30.56$', '5',
    'Australia', '28.26$', '6',
    'UA Emirates', '26.96$', '7',
    'Finland', '26.31$', '8',
    'Ireland', '25.23$', '9',
    'Sweden', '22.68$',	'10',
    'Hong Kong', '21.91$', '11',
    'Macao', '21.28$', '12',
    'Switzerland', '21.15$', '13',
    'Canada	', '21.06$', '14',
    'Burma', '19.99$', '15',
    'UK	','19.89$', '16',
    'New Zealand', '19.56$', '17',
    'Indonesia', '19.15$', '18',
    'Denmark',	'19.15$', '19',
    'Puerto Rico', '18.99$', '20',
    'Colombia',	'18.21$', '21',
    'South Korea', '18.06$', '22',
    'India	','17.99$',	'23',
    'Slovenia',	'17.87$', '24',
    'Thailand',	'17.47$', '25',
    'France', '17.11$',	'26',
    'Israel	', '17.08$', '27',
    'Czechia', '16.82$', '28',
    'Netherlands,', '16.44$', '29',
    'Greece,', '16.40$', '30',
    'Belgium,', '16.01$', '31',
    'Slovakia', '15.90$', '32',
    'Germany', '15.68$', '33',
    'Poland	', '15.68$', '34',
    'Italy', '15.64$', '35',
    'Austria', '15.35$', '36',
    'Serbia', '15.25$', '37',
    'Costa Rica','14.69$', '38',
    'Hungary','14.60$',	'39',
    'Guatemala', '14.36$', '40',
    'Tanzania', '14.32$', '41',
    'Cyprus,', '14.21$', '42',
    'Uganda,', '13.68$', '43',
    'Mexico,', '13.24$', '44',
    'Japan,', '12.98$', '45',
    'Uruguay,',	'12.80$', '46',
    'Nigeria,', '12.79$', '47',
    'Ukraine,','12.76$', '48',
    'Portugal',	'12.71$', '49',
    'Kazakhstan	','12.40$', '50',
    'Oman',	'11.82$', '51',
    'Spain', '11.40$', '52',
    'Chile', '11.31$', '53',
    'Kenya', '10.74$', '54',
    'Romania', '10.43$', '55',
    'Egypt', '10.42$', '56',
    'Panama', '9.81$', '57',
    'Bulgaria', '9.62$', '58',
    'Luxembourg	','9.60$', '59',
    'South Africa',	'9.36$', '60',
    'USA', '8.98$', '61',
    'Philippines',	'8.78$', '62',
    'Ghana', '8.73$', '63',
    'Russia', '8.52$', '64',
    'Argentina', '7.62$', '65',
    'China', '7.56$', '66',
    'Peru',	'7.21$', '67',
    'Brazil', '6.58$', '68',
    'Lithuania', '6.57$', '69',
    'Angola', '5.91$', '70',
    'Latvia', '5.58$', '71',
    'Paraguay', '4.43$', '72'
]

window.addEventListener("load", function(){

    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;

    for(var g = -1; g < vodkadb.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = vodkadb[g];
    
      var next = g + 1;
      if (next%perrow==0 && next!=vodkadb.length) {
        row = table.insertRow();

        var title = document.getElementById('prodtitle')
        title.innerText = '	Vodka Smirnoff prices, 700 ml'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Vodka prices by country, around the world, 2022'
        var categoryitem = document.getElementById('categoryitem3')
        categoryitem.classList.add("itemselected")
    }

    $(document).ready(function(){
        $(".headerbar img").click(function(){
            window.location.href= 'https://worldwideprices.com/'
        })
    })
  }
})
