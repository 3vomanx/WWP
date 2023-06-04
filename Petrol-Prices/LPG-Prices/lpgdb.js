var lpgdb = [
    'Switzerland', '1.86$', '1',
    'Sweden', '1.32$', '2',
    'Germany', '1.18$', '3',
    'France', '1.09$', '4',
    'Greece', '1.07$', '5',
    'Spain', '1.05$', '6',
    'Hungary', '1.04$', '7',
    'Croatia', '1.04$', '8',
    'Fiji', '1.04$', '9',
    'Israel', '1.03$', '10',
    'Slovenia', '0.98$', '11',
    'Serbia', '0.97$', '12',
    'UK', '0.95$', '13',
    'Canada', '0.94$', '14',
    'Lebanon', '0.92$', '15',
    'Portugal', '0.91$', '16',
    'Netherlands', '0.90$', '17',
    'Latvia', '0.87$', '18',
    'Romania', '0.86$', '19',
    'Moldova', '0.86$', '20',
    'N. Macedonia', '0.86$', '21',
    'Italy', '0.85$', '22',
    'India', '0.83$', '23',
    'Slovakia', '0.81$', '24',
    'Bosnia & Herz.', '0.79$', '25',
    'Luxembourg', '0.78$', '26',
    'Chile', '0.77$', '27',
    'Estonia', '0.77$', '28',
    'Czech Republic', '0.77$', '29',
    'San Marino', '0.77$', '30',
    'Belgium', '0.75$', '31',
    'Albania', '0.73$', '32',
    'Poland', '0.73$', '33',
    'Georgia', '0.72$', '34',
    'Dom. Republic', '0.71$', '35',
    'South Korea', '0.69$', '36',
    'Mongolia', '0.68$', '37',
    'Philippines', '0.64$', '38',
    'Bulgaria', '0.62$', '39',
    'Lithuania', '0.61$', '40',
    'Paraguay', '0.60$', '41',
    'Ukraine', '0.59$', '42',
    'Cambodia', '0.57$', '43',
    'Turkey', '0.54$', '44',
    'Belarus', '0.50$', '45',
    'Australia', '0.49$', '46',
    'Peru', '0.49$', '47',
    'Taiwan', '0.48$', '48',
    'Honduras', '0.47$', '49',
    'Azerbaijan', '0.38$', '50',
    'Kyrgyzstan', '0.34$', '51',
    'Saudi Arabia', '0.24$', '52',
    'Russia', '0.23$', '53',
    'Angola', '0.20$', '54',
    'Algeria', '0.07$', '55',
]


window.addEventListener("load", function(){

    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;

    for(var g = -1; g < lpgdb.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = lpgdb[g];
    
      var next = g + 1;
      if (next%perrow==0 && next!=lpgdb.length) {
        row = table.insertRow();

        var title = document.getElementById('prodtitle')
        title.innerText = 'LPG Prices /Liter'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'LPG prices by country, around the world, 2023'
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
