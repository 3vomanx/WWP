var applewatch841mmdb = [
    'Brazil', '1043$', '1',
    'Nigeria', '892$', '2',
    'Colombia', '781$', '3',
    'Argentina', '744$', '4',
    'Azerbaijan', '646$', '5',
    'Costa Rica', '641$', '6',
    'Kazakhstan', '612$', '7',
    'Ecuador', '609$', '8',
    'Hungary', '607$', '9',
    'Bolivia', '601$', '10',
    'Zambia', '586$', '11',
    'Czechia', '584$', '12',
    'Greece', '569$', '13',
    'Poland', '569$', '14',
    'India', '558$', '15',
    'Finland', '558$', '16',
    'Italy', '558$', '17',
    'Portugal', '558$', '18',
    'Slovakia', '558$', '19',
    'Slovenia', '558$', '20',
    'Mexico', '554$', '21',
    'South Africa', '550$', '22',
    'Latvia', '548$', '23',
    'Austria', '547$', '24',
    'Belgium', '547$', '25',
    'Cyprus', '547$', '26',
    'France', '547$', '27',
    'Germany', '547$', '28',
    'Ireland', '547$', '29',
    'Netherlands', '547$', '30',
    'Spain', '547$', '31',
    'Jordan', '543$', '32',
    'Ukraine', '539$', '33',
    'Guatemala', '538$', '34',
    'Luxembourg', '536$', '35',
    'Israel', '534$', '36',
    'Bulgaria', '532$', '37',
    'Lithuania', '532$', '38',
    'Sweden', '531$', '39',
    'Romania', '529$', '40',
    'Paraguay', '528$', '41',
    'UK', '521$', '42',
    'Qatar', '508$', '43',
    'Bahrain', '498$', '44',
    'Saudi Arabia', '493$', '45',
    'Russia', '490$', '46',
    'Turkey', '479$', '47',
    'Switzerland', '478$', '48',
    'Norway', '472$', '49',
    'Philippines', '462$', '50',
    'Oman', '461$', '51',
    'Kuwait', '456$', '52',
    'New Zealand', '452$', '53',
    'Kenya', '444$', '54',
    'Japan', '444$', '55',
    'China', '435$', '56',
    'UA Emirates', '435$', '57',
    'Puerto Rico', '429$', '58',
    'Malaysia', '427$', '59',
    'Australia', '422$', '60',
    'South Korea', '419$', '61',
    'Hong Kong', '408$', '62',
    'USA', '399$', '63',
    'Canada', '393$', '64',
]

window.addEventListener("load", function(){

    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;

    for(var g = -1; g < applewatch841mmdb.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = applewatch841mmdb[g];
    
      var next = g + 1;
      if (next%perrow==0 && next!=applewatch841mmdb.length) {
        row = table.insertRow();

        var title = document.getElementById('prodtitle')
        title.innerText = 'Apple Watch 8, 41mm'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Apple Watch 8 prices by country, around the world, 2022'
        var categoryitem = document.getElementById('categoryitem18')
        categoryitem.classList.add("itemselected")
    }

    $(document).ready(function(){
        $(".headerbar img").click(function(){
            window.location.href= 'https://worldwideprices.com/'
        })
    })
  }
})






