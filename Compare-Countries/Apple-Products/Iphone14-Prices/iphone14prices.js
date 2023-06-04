var iphone14128gbdb = [
    'Nigeria', '1669$', '1',
    'Turkey', '1598$', '2',
    'Brazil', '1495$', '3',
    'Algeria', '1422$', '4',
    'Peru', '1398$', '5',
    'Azerbaijan', '1376$', '6',
    'Serbia', '1304$', '7',
    'Hungary', '1301$', '8',
    'Bolivia', '1298$', '9',
    'Ukraine', '1259$', '10',
    'Czechia', '1239$', '11',
    'Poland', '1233$', '12',
    'Uganda', '1229$', '13',
    'Morocco', '1226$', '14',
    'Kazakhstan', '1224$', '15',
    'Tanzania', '1215$', '16',
    'Zambia', '1215$', '17',
    'Ecuador', '1199$', '18',
    'Chile', '1195$', '19',
    'Slovenia', '1179$', '20',
    'Greece', '1172$', '21',
    'Mexico', '1164$', '22',
    'Sweden', '1158$', '23',
    'Ghana', '1156$', '24',
    'Guatemala', '1154$', '25',
    'Sri Lanka', '1149$', '26',
    'Kenya', '1146$', '27',
    'Finland', '1139$', '28',
    'Lithuania', '1139$', '29',
    'Portugal', '1139$', '30',
    'Paraguay', '1137$', '31',
    'South Africa', '1133$', '32',
    'Cyprus', '1128$', '33',
    'Ireland', '1128$', '34',
    'Italy', '1128$', '35',
    'Jordan', '1127$', '36',
    'Bulgaria', '1120$', '37',
    'Belgium', '1117$', '38',
    'France', '1117$', '39',
    'Netherlands', '1117$', '40',
    'Latvia', '1111$', '41',
    'Spain', '1106$', '42',
    'Austria', '1095$', '43',
    'Germany', '1095$', '44',
    'Luxembourg', '1095$', '45',
    'Slovakia', '1095$', '46',
    'Romania', '1089$', '47',
    'Colombia', '1069$', '48',
    'Israel', '1060$', '49',
    'Uzbekistan', '1060$', '50',
    'Indonesia', '1059$', '51',
    'UK', '1056$', '52',
    'Qatar', '1044$', '53',
    'Russia', '1040$', '54',
    'Bahrain', '1039$', '55',
    'Norway', '1039$', '56',
    'Switzerland', '1035$', '57',
    'Philippines', '1013$', '58',
    'Saudi Arabia', '1013$', '59',
    'New Zealand', '992$', '60',
    'Oman', '977$', '61',
    'India', '971$', '62',
    'Egypt', '965$', '63',
    'Kuwait', '955$', '64',
    'Malaysia', '945$', '65',
    'Australia', '939$', '66',
    'UA Emirates', '926$', '67',
    'Japan', '889$', '68',
    'Hong Kong', '879$', '69',
    'South Korea', '875$', '70',
    'China', '871$', '71',
    'Macao', '853$', '72',
    'Canada', '817$', '73',
    'USA', '799$', '74',
]


window.addEventListener("load", function(){

    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;

    for(var g = -1; g < iphone14128gbdb.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = iphone14128gbdb[g];
    
      var next = g + 1;
      if (next%perrow==0 && next!=iphone14128gbdb.length) {
        row = table.insertRow();

        var title = document.getElementById('prodtitle')
        title.innerText = 'iPhone 14, 128GB prices'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'iPhone 14 prices by country, around the world, 2022'
        var categoryitem = document.getElementById('categoryitem16')
        categoryitem.classList.add("itemselected")
    }

    $(document).ready(function(){
        $(".headerbar img").click(function(){
            window.location.href= 'https://worldwideprices.com/'
        })
    })
  }
})