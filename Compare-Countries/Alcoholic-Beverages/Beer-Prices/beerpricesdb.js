var beerdb = [
    'Norway', '3.63$' , '1',
    'Australia', '3.30$' , '2',
    'Bahrain',	'3.18$', '3' ,
    'Singapore', '2.93$' , '4',
    'Malaysia',	'2.77$' , '5',
    'Angola', '2.73$' , '6',
    'China', '2.36$' , '7',
    'Russia', '2.32$' , '8',
    'Domin. Rep.',	'2.29$' , '9',
    'Costa Rica',	'2.28$', '10',
    'USA',	'2.20$' , '11',
    'Canada', '2.09$' , '12',
    'Ireland', '2.08$' , '13',
    'Uruguay', '2.05$' , '14',
    'Ecuador', '2.00$' ,  '15',
    'Japan', '1.99$' , '16',
    'Finland', '1.97$' , '17',
    'Indonesia', '1.88$', '18',
    'Israel',	'1.84$', '19',
    'UA Emirates',	'1.84$', '20',
    'Bolivia',	'1.74$', '21',
    'Puerto Rico',	'1.70$', '22',
    'Kenya', '1.67$', '23',
    'Latvia', '1.65$', '24',
    'Chile', '1.62$', '25',
    'Guatemala', '1.60$', '26',
    'Switzerland', '1.56$', '27',
    'Austria', '1.54$' , '28',
    'Sweden', '1.54$' , '29',
    'India', '1.52$' , '30',
    'New Zealand', '1.49$', '31',
    'Zambia', '1.48$'	, '32',
    'Uganda', '1.47$' , '33',
    'Peru',	'1.46$'	, '34',
    'Greece', '1.43$' , '35',
    'Italy', '1.43$' , '36',
    'Spain', '1.43$' , '37',
    'Denmark', '1.40$' , '38',
    'Hong Kong', '1.38$' , '39',
    'UK', '1.37$' , '40',
    'Macao', '1.34$' , '41',
    'Mexico', '1.33$' , '42',
    'Belgium', '1.32$' , '43',
    'Lithuania',	'1.32$'	, '44',
    'Slovakia',	'1.32$'	, '45',
    'Slovenia',	'1.32$'	, '46',
    'Kazakhstan',	'1.31$'	, '47',
    'Bulgaria',	'1.29$'	, '48',
    'Tanzania',	'1.28$'	, '49',
    'Thailand',	'1.24$'	, '50',
    'Egypt', '1.23$' , '51',
    'France', '1.21$' , '52',
    'Argentina', '1.19$' , '53',
    'Sri Lanka', '1.18$' , '54',
    'South Korea',	'1.14$'	, '55',
    'Paraguay',	'1.12$'	, '56',
    'Czechia',	'1.12$'	, '57',
    'Ivory Coast',	'1.11$'	, '58',
    'Brazil',	'1.10$'	, '59',
    'Germany',	'1.10$'	, '60',
    'Philippines', '1.09$'	, '61',
    'Burma',	'1.07$'	, '62',
    'Netherlands',	'0.99$'	, '63',
    'Portugal',	'0.99$'	, '64',
    'Panama', '0.98$', '65',
    'Romania', '0.98$' , '66',
    'Poland', '0.93$' , '67',
    'Serbia', '0.92$' , '68',
    'Cyprus', '0.88$' , '69',
    'South Africa',	'0.87$', '70',
    'Vietnam',	'0.87$'	, '71',
    'Nigeria',	'0.85$'	, '72',
    'Hungary',	'0.85$'	, '73',
    'Colombia',	'0.76$'	, '74',
    'Ukraine',	'0.74$', '75'
]

window.addEventListener("load", function(){

    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;

    for(var g = -1; g < beerdb.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = beerdb[g];
    
      var next = g + 1;
      if (next%perrow==0 && next!=beerdb.length) {
        row = table.insertRow();

        var title = document.getElementById('prodtitle')
        title.innerText = 'Heineken beer prices, 330 ml.'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Beer prices by country, around the world, 2022'
        var categoryitem = document.getElementById('categoryitem')
        categoryitem.classList.add("itemselected")
    }

    $(document).ready(function(){
        $(".headerbar img").click(function(){
            window.location.href= 'https://worldwideprices.com/'
        })
    })
  }
})
