var redbulldb = [
    'Vietnam', '3.74$', '1',
    'Angola', '3.43$', '2',
    'Philippines', '3.38$', '3',
    'Bahrain', '2.92$', '4',
    'Saudi Arabia', '2.85$', '5',
    'Uruguay', '2.80$', '6',
    'Costa Rica', '2.77$', '7',
    'UA Emirates', '2.71$', '8',
    'Qatar', '2.54$', '9',
    'Mexico', '2.49$', '10',
    'Puerto Rico', '2.49$', '11',
    'Oman', '2.46$', '12',
    'Sri Lanka', '2.33$', '13',
    'Morocco', '2.30$', '14',
    'Panama', '2.26$', '15',
    'Ecuador', '2.25$', '16',
    'Guatemala', '2.24$', '17',
    'Canada', '2.23$', '18',
    'Bolivia', '2.10$', '19',
    'Peru', '2.09$', '20',
    'Australia', '2.09$', '21',
    'Norway', '2.09$', '22',
    'Azerbaijan', '2.08$', '23',
    'Ivory Coast', '2.03$', '24',
    'Hong Kong', '2.03$', '25',
    'Finland', '2.03$', '26',
    'Uganda', '1.98$', '27',
    'Macao', '1.97$', '28',
    'Jordan', '1.95$', '29',
    'Ghana', '1.91$', '30',
    'Thailand', '1.90$', '31',
    'Israel', '1.89$', '32',
    'Denmark', '1.83$', '33',
    'Domin. Rep.', '1.81$', '34',
    'USA', '1.81$', '35',
    'Hungary', '1.80$', '36',
    'Chile', '1.78$', '37',
    'Ireland', '1.76$', '38',
    'Singapore', '1.75$', '39',
    'Brazil', '1.72$', '40',
    'Czechia', '1.68$', '41',
    'Uzbekistan', '1.66$', '42',
    'Switzerland', '1.66$', '43',
    'Indonesia', '1.64$', '44',
    'Sweden', '1.64$', '45',
    'Japan', '1.63$', '46',
    'Austria', '1.63$', '47',
    'Slovenia', '1.63$', '48',
    'Kuwait', '1.62$', '49',
    'Latvia', '1.62$', '50',
    'Kenya', '1.59$', '51',
    'Netherlands', '1.59$', '52',
    'China', '1.57$', '53',
    'Slovakia', '1.57$', '54',
    'Paraguay', '1.54$', '55',
    'Italy', '1.52$', '56',
    'Lithuania', '1.52$', '57',
    'Bulgaria', '1.51$', '58',
    'Nigeria', '1.49$', '59',
    'Tanzania', '1.49$', '60',
    'New Zealand', '1.48$', '61',
    'Kazakhstan', '1.47$', '62',
    'India', '1.40$', '63',
    'Serbia', '1.40$', '64',
    'UK', '1.40$', '65',
    'Malaysia', '1.39$', '66',
    'Argentina', '1.38$', '67',
    'Cyprus', '1.37$', '68',
    'Germany', '1.33$', '69',
    'Poland', '1.30$', '70',
    'Pakistan', '1.29$', '71',
    'Greece', '1.29$', '72',
    'Colombia', '	1.28$', '73',
    'Belarus', '1.26$', '74',
    'France', '1.18$', '75',
    'Russia', '1.16$', '76',
    'Spain', '1.15$', '77',
    'Romania', '1.11$', '78',
    'Belgium', '1.10$', '79',
    'Luxembourg', '1.09$', '80',
    'Portugal', '1.09$', '81',
    'Tunisia', '1.06$', '82',
    'Ukraine', '1.00$', '83',
    'South Africa', '0.94$', '84',
    'Turkey', '0.77$', '85',
    'Egypt', '0.71$', '86',
    'Burma', '0.62$', '87',
]


window.addEventListener("load", function(){

    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;

    for(var g = -1; g < redbulldb.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = redbulldb[g];
    
      var next = g + 1;
      if (next%perrow==0 && next!=redbulldb.length) {
        row = table.insertRow();

        var title = document.getElementById('prodtitle')
        title.innerText = 'Red Bull prices /0.25L'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Red Bull prices by country, around the world, 2022'
        var categoryitem = document.getElementById('categoryitem32')
        categoryitem.classList.add("itemselected")
    }

    $(document).ready(function(){
        $(".headerbar img").click(function(){
            window.location.href= 'https://worldwideprices.com/'
        })
    })
  }
})