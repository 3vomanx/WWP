var saltdb = [
    'Uruguay', '2.98$' , '1',
    'Ghana', '2.67$' ,	'2',
    'Austria', '1.95$' , '3',
    'Switzerland', '1.89$','4',
    'USA', '1.71$' ,'5',
    'Zambia','	1.64$' , '6',
    'Germany','	1.64$' , '7',
    'Puerto Rico', '1.61$' , '8',
    'Hong Kong', '1.60$' , '9',
    'South Korea', '1.54$',  '10',
    'Morocco','	1.46$', '11',
    'UK','	1.46$', '12',
    'China', '1.45$', '13',
    'Hungary', '1.44$', '14',
    'Slovakia', '1.41$', '15',
    'Czechia', '1.40$', '16',
    'New Zealand', '1.36$', '17',
    'Belgium', '1.27$', '18',
    'Saudi Arabi', '1.26$', '19',
    'Sweden', '1.25$', '20',
    'France', '1.18$', '21',
    'Poland', '1.18$', '22',
    'Norway', '1.17$', '23',
    'Australia', '1.14$', '24',
    'Argentina', '1.09$', '25',
    'Romania', '1.00$', '26',
    'Finland', '0.98$', '27',
    'Mexico', '0.97$', '28',
    'Canada', '0.94$', '29',
    'Ireland', '0.84$', '30',
    'Bulgaria', '0.83$', '31',
    'South Africa', '0.82$', '32',
    'Greece', '0.81$', '33',
    'Ivory Coast','	0.79$', '34',
    'Vietnam','	0.79$', '35',
    'Serbia','	0.79$', '36',
    'Ukraine','	0.78$', '37',
    'Costa Rica', '0.75$', '38',
    'Turkey', '0.75$', '39',
    'Cameroon', '0.71$', '40',
    'Japan', '0.71$', '41',
    'UA Emirates', '0.71$', '42',
    'Netherlands', '0.71$', '43',
    'Spain', '0.71$', '44',
    'Domin. Rep.', '0.70$', '45',
    'Denmark', '0.70$', '46',
    'Slovenia', '0.70$', '47',
    'Israel', '0.69$', '48',
    'Paraguay', '0.68$', '49',
    'Indonesia', '0.68$', '50',
    'Uganda', '0.64$', '51',
    'Nigeria', '0.63$', '52',
    'Singapore', '0.63$', '53',
    'Kuwait', '0.62$', '54',
    'Italy', '0.60$', '55',
    'Peru', '0.58$', '56',
    'Angola', '0.54$', '57',
    'Latvia', '0.54$', '58',
    'Brazil', '0.49$', '59',
    'Ecuador', '0.49$', '60',
    'Lithuania', '0.49$', '61',
    'Portugal', '0.49$', '62',
    'Colombia', '0.47$', '63',
    'Philippines', '0.46$', '64',
    'Chile', '0.44$', '65',
    'Sri Lanka', '0.44$', '66',
    'Thailand', '0.44$', '67',
    'Tanzania', '0.43$', '68',
    'Malaysia', '0.42$', '69',
    'Azerbaijan', '0.38$', '70',
    'Bangladesh', '0.36$', '71',
    'Guatemala', '0.35$', '72',
    'India', '0.34$', '73',
    'Jordan', '0.32$', '74',
    'Bolivia', '0.28$', '75',
    'Kenya', '0.26$', '76',
    'Tunisia', '0.24$', '77',
    'Pakistan', '0.16$', '78',
    'Kazakhstan', '0.15$', '79',
    'Russia', '0.15$', '80',
    'Egypt', '0.10$','81'
];

window.addEventListener("load", function(){

    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;

    for(var g = -1; g < saltdb.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = saltdb[g];
    
    var next = g + 1;
    if (next%perrow==0 && next!=saltdb.length) {
    row = table.insertRow();

    var title = document.getElementById('prodtitle')
    title.innerText = 'Salt prices, 1 kg'
    var categoryname = document.getElementById('categorynametitle')
    categoryname.innerText = 'Salt prices by country, around the world, 2023'
    var categoryitem = document.getElementById('categoryitem7')
    categoryitem.classList.add("itemselected")

    }

    $(document).ready(function(){
        $(".headerbar img").click(function(){
            window.location.href= 'https://worldwideprices.com/'
        })
    })
  }
})
