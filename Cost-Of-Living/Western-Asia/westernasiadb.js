var westernasiadb = [
    'Beirut, Lebanon', '1,150$', '1',
    'Tel Aviv-Yafo, Israel', '1,104$', '2',
    'Ramat Gan, Israel', '1,065$', '3',
    'Netanya, Israel', '1,051$', '4',
    'Dubai, United Arab Emirates', '1,018$', '5',
    'Haifa, Israel', '987$', '6',
    'Jerusalem, Israel', '965$', '7',
    'Petah Tikva, Israel', '957$', '8',
    'Larnaca, Cyprus', '946$', '9',
    'Limassol, Cyprus', '936$', '10',
    'Al Khobar, Saudi Arabia', '929$', '11',
    'Doha, Qatar', '890$', '12',
    'Abu Dhabi, United Arab Emirates', '884$', '13',
    'Nicosia, Cyprus', '851$', '14',
    'Riyadh, Saudi Arabia', '817$', '15',
    'Jeddah (Jiddah), Saudi Arabia', '805$', '16',
    'Ramallah, Palestine', '777$', '17',
    'Manama, Bahrain', '762$', '18',
    'Muscat, Oman', '751$', '19',
    'Sharjah, United Arab Emirates', '750$', '20',
    'Kuwait City, Kuwait', '744$', '21',
    'Paphos, Cyprus', '743$', '22',
    'Ad Dammam, Saudi Arabia', '722$', '23',
    'Amman, Jordan', '709$', '24',
    'Yerevan, Armenia', '676$', '25',
    'Istanbul, Turkey', '563$', '26',
    'Bursa, Turkey', '555$', '27',
    'Erbil (Irbil), Iraq', '545$', '28',
    'Ajman, United Arab Emirates', '537$', '29',
    'Baghdad, Iraq', '530$', '30',
    'Antalya, Turkey', '484$', '31',
    'Baku, Azerbaijan', '483$', '32',
    'Izmir, Turkey', '469$', '33',
    'Ankara, Turkey', '453$', '34',
    'Eskisehir, Turkey', '451$', '35',
    'Alanya, Turkey', '442$', '36',
    'Damascus, Syria', '413$', '37',
    'Konya, Turkey', '399$', '38',
]

window.addEventListener("load", function(){

    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;

    for(var g = -1; g < westernasiadb.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = westernasiadb[g];
    
      var next = g + 1;
      if (next%perrow==0 && next!=westernasiadb.length) {
        row = table.insertRow();

        var title = document.getElementById('prodtitle')
        title.innerText = 'Cost of living in Western Asia'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Cost of living in Western Asia per person/month 2023 (without rent)'
        var categoryitem = document.getElementById('categoryitem9')
        categoryitem.classList.add("itemselected")
    }

    $(document).ready(function(){
        $(".headerbar img").click(function(){
            window.location.href= 'https://worldwideprices.com/'
        })
    })
  }
})