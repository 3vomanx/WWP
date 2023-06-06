var macbookpro14512gbdb = [
    'Uruguay', '4265$', '1',
    'Morocco', '3395$', '2',
    'Zambia', '3344$', '3',
    'Costa Rica', '3249$', '4',
    'Russia', '3244$', '5',
    'Cameroon', '3124$', '6',
    'Bolivia', '3074$', '7',
    'Brazil', '3016$', '8',
    'Serbia', '2988$', '9',
    'Tanzania', '2963$', '10',
    'Mexico', '2937$', '11',
    'Azerbaijan', '2859$', '12',
    'Ecuador', '2818$', '13',
    'Czechia', '2758$', '14',
    'Greece', '2739$', '15',
    'Chile', '2706$', '16',
    'Bahrain', '2654$', '17',
    'Tunisia', '2632$', '18',
    'Cyprus', '2629$', '19',
    'Kazakhstan', '2622$', '20',
    'Qatar', '2609$', '21',
    'Slovenia', '2607$', '22',
    'Guatemala', '2600$', '23',
    'Finland', '2575$', '24',
    'Italy', '2575$', '25',
    'Portugal', '2575$', '26',
    'Slovakia', '2520$', '27',
    'Lithuania', '2487$', '28',
    'Bulgaria', '2465$', '29',
    'France', '2465$', '30',
    'Ireland', '2465$', '31',
    'Netherlands', '2465$', '32',
    'Spain', '2465$', '33',
    'Austria', '2441$', '34',
    'Belgium', '2410$', '35',
    'Germany', '2410$', '36',
    'Latvia', '2400$', '37',
    'Saudi Arabia', '2399$', '38',
    'Luxembourg', '2399$', '39',
    'Peru', '2382$', '40',
    'Panama', '2354$', '41',
    'Argentina', '2325$', '42',
    'Poland', '2323$', '43',
    'Sweden', '2316$', '44',
    'UA Emirates', '2314$', '45',
    'Hungary', '2256$', '46',
    'Oman', '2233$', '47',
    'Colombia', '2230$', '48',
    'Romania', '2223$', '49',
    'Norway', '2221$', '50',
    'Ukraine', '2214$', '51',
    'Israel', '2193$', '52',
    'Kenya', '2189$', '53',
    'India', '2186$', '54',
    'China', '2178$', '55',
    'Switzerland', '2159$', '56',
    'UK', '2157$', '57',
    'South Africa', '2135$', '58',
    'Indonesia', '2121$', '59',
    'Kuwait', '2120$', '60',
    'Philippines', '2080$', '61',
    'New Zealand', '2077$', '62',
    'Hong Kong', '2051$', '63',
    'Australia', '2014$', '64',
    'Puerto Rico', '1999$', '65',
    'USA', '1999$', '66',
    'Malaysia', '1981$', '67',
    'Canada', '1857$', '68',
    'South Korea', '1840$', '69',
    'Japan', '1780$', '70',
    'Turkey', '1557$', '71',
    'Egypt', '1468$', '72',
    'Ghana', '1350$', '73',
]


window.addEventListener("load", function(){

    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;

    for(var g = -1; g < macbookpro14512gbdb.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = macbookpro14512gbdb[g];
    
      var next = g + 1;
      if (next%perrow==0 && next!=macbookpro14512gbdb.length) {
        row = table.insertRow();

        var title = document.getElementById('prodtitle')
        title.innerText = 'Macbook Pro 14, 512 GB'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Macbook prices by country, around the world, 2022'
        var categoryitem = document.getElementById('categoryitem19')
        categoryitem.classList.add("itemselected")
    }

    $(document).ready(function(){
        $(".headerbar img").click(function(){
            window.location.href= 'https://worldwideprices.com/'
        })
    })
  }
})






