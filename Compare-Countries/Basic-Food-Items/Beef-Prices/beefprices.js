var beefdb = [
    'Switzerland', '57.37$', '1',
    'Hong Kong', '52.81$', '2',
    'South Korea', '50.40$', '3',
    'Macao', '37.98$', '4',
    'Norway', '37.81$', '5',
    'Israel', '28.51$', '6',
    'Germany', '27.29$', '7',
    'Thailand', '27.01$', '8',
    'Denmark', '24.48$', '9',
    'Netherlands', '22.42$', '10',
    'Japan', '20.65$', '11',
    'Chile', '20.12$', '12',
    'Sweden', '19.31$', '13',
    'France', '18.52$', '14',
    'New Zealand', '17.36$', '15',
    'Morocco', '16.16$', '16',
    'Italy', '15.88$', '17',
    'Portugal', '15.33$', '18',
    'Vietnam', '15.16$', '19',
    'Canada', '14.70$', '20',
    'Greece', '14.69$', '21',
    'China', '14.45$', '22',
    'Hungary', '14.45$', '23',
    'USA', '14.29$', '24',
    'Singapore', '14.24$', '25',
    'Austria', '14.24$', '26',
    'Spain', '14.19$', '27',
    'Belgium', '14.14$', '28',
    'Luxembourg', '14.14$', '29',
    'Turkey', '13.91$', '30',
    'Bulgaria', '13.44$', '31',
    'Australia', '13.43$', '32',
    'Slovakia', '13.40$', '33',
    'Qatar', '13.28$', '34',
    'UK', '13.27$', '35',
    'Indonesia', '13.14$', '36',
    'Slovenia', '13.14$', '37',
    'Czechia', '12.85$', '38',
    'Tunisia', '12.84$', '39',
    'Jordan', '12.39$', '40',
    'Finland', '12.05$', '41',
    'Uruguay', '11.94$', '42',
    'Kuwait', '11.94$', '43',
    'Serbia', '11.68$', '44',
    'Costa Rica', '11.42$', '45',
    'Guatemala', '11.00$', '46',
    'Latvia', '10.94$', '47',
    'Kazakhstan', '10.93$', '48',
    'Cyprus', '10.91$', '49',
    'Ireland', '10.68$', '50',
    'Philippines', '10.67$', '51',
    'Poland', '10.66$', '52',
    'Domin. Rep.', '10.48$', '53',
    'Mexico', '10.47$', '54',
    'Egypt', '10.45$', '55',
    'South Africa', '10.45$', '56',
    'Romania', '10.33$', '57',
    'UA Emirates', '10.32$', '58',
    'Sri Lanka', '10.19$', '59',
    'Puerto Rico', '10.12$', '60',
    'Oman', '9.97$', '61',
    'Lithuania', '9.84$', '62',
    'Bahrain', '9.63$', '63',
    'Saudi Arabia', '9.59$', '64',
    'Azerbaijan', '9.13$', '65',
    'Brazil', '8.85$', '66',
    'Russia', '8.76$', '67',
    'Peru', '8.71$', '68',
    'Colombia', '8.48$', '69',
    'Ghana', '7.59$', '70',
    'Nigeria', '7.34$', '71',
    'Bolivia', '7.23$', '72',
    'Bangladesh', '7.06$', '73',
    'Ecuador', '6.99$', '74',
    'Panama', '6.65$', '75',
    'Tanzania', '6.61$', '76',
    'Argentina', '6.25$', '77',
    'Ukraine', '5.90$', '78',
    'Kenya', '5.88$', '79',
    'Uzbekistan', '5.87$', '80',
    'Cameroon', '5.83$', '81',
    'Malaysia', '5.67$', '82',
    'Burma', '5.36$', '83',
    'Zambia', '5.25$', '84',
    'Uganda', '5.13$', '85',
    'Paraguay', '4.06$', '86',
    'Pakistan', '3.11$', '87',
];

window.addEventListener("load", function(){

    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;

    for(var g = -1; g < beefdb.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = beefdb[g];
    
      var next = g + 1;
      if (next%perrow==0 && next!=beefdb.length) {
        row = table.insertRow();

        var title = document.getElementById('prodtitle')
        title.innerText = 'Beef meat prices, 1 kg'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Beef prices by country, around the world, 2023'
        var categoryitem = document.getElementById('categoryitem11')
        categoryitem.classList.add("itemselected")
    }

    $(document).ready(function(){
        $(".headerbar img").click(function(){
            window.location.href= 'https://worldwideprices.com/'
        })
    })
  }
})
