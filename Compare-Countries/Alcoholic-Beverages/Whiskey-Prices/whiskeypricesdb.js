var whiskeydb = [
    'Bahrain','58.10$','1',
    'Sri Lanka','55.18$','2',
    'Indonesia','48.99$','3',
    'Singapore','41.22$','4',
    'Malaysia','40.47$','5',
    'Russia','36.42$','6',
    'Norway','36.25$','7',
    'India','34.53$','8',
    'Costa Rica','34.35$','9',
    'UA Emirates','33.63$','10',
    'Australia','33.51$','11',
    'Finland','32.77$','12',
    'Ireland','30.60$','13',
    'Hong Kong','27.77$','14',
    'Argentina','27.46$','15',
    'Israel','27.40$','16',
    'UK','27.24$','17',
    'Macao','26.97$','18',
    'Sweden','25.88$','19',
    'Canada','25.72$','20',
    'Puerto Rico','24.99$','21',
    'Ecuador','24.90$','22',
    'Lithuania','22.94$','23',
    'Netherlands','22.94$','24',
    'Panama','22.15$','25',
    'Guatemala','22.05$','26',
    'USA','21.98$','27',
    'Czechia','21.93$','28',
    'Ivory Coast','21.17$','29',
    'Switzerland','21.09$','30',
    'New Zealand','20.76$','31',
    'Portugal','20.76$','32',
    'Greece','20.60$','33',
    'Belgium','20.54$','34',
    'Hungary','19.79$','35',
    'Denmark','19.78$','36',
    'Uruguay','19.74$','37',
    'Latvia','19.67$','38',
    'Germany','19.56$','39',
    'Thailand','18.81$','40',
    'Serbia','18.64$','41',
    'Slovenia','18.57$','42',
    'Uganda','18.43$','43',
    'China','18.03$','44',
    'Kazakhstan','18.00$'	,'45',
    'Bolivia','17.72$','46',
    'France','17.65$','47',
    'Nigeria','17.59$','48',
    'Austria','17.48$','49',
    'Cyprus','17.43$','50',
    'Burma','16.66$','51',
    'Angola','16.65$','52',
    'Mexico','16.59$','53',
    'Domin. Rep.','16.38$'	,'54',
    'Oman','16.37$','55',
    'Chile','16.22$','56',
    'Tanzania','16.18$','57',
    'Luxembourg','15.76$','58',
    'South Africa','15.56$','59',
    'Kenya','15.21$','60',
    'Romania','14.93$','61',
    'Peru','14.79$','62',
    'Poland','14.79$','63',
    'Slovakia','14.74$','64',
    'Colombia','14.73$','65',
    'Ukraine','14.36$','66',
    'Spain','14.21$','67',
    'Italy','13.98$','68',
    'Bulgaria','13.75$','69',
    'Brazil','13.65$','70',
    'Philippines','12.20$','71',
    'Paraguay','11.72$','72',
    'Zambia','11.51$','73',
    'Japan','9.96$','74',
    'Ghana','8.73$','75',
];

window.addEventListener("load", function(){

    var table = document.getElementById("tablebody");
    var row = document.createElement("tr")
    perrow = 3;

    for(var g = -1; g < whiskeydb.length; g++) {
      var cell = row.insertCell();
      cell.innerHTML = whiskeydb[g];
    
      var next = g + 1;
      if (next%perrow==0 && next!=whiskeydb.length) {
        row = table.insertRow();

        var title = document.getElementById('prodtitle')
        title.innerText = 'Johnnie Walker Whiskey prices, 700 ml bottle'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Whiskey prices by country, around the world, 2022'
        var categoryitem = document.getElementById('categoryitem2')
        categoryitem.classList.add("itemselected")
    }

    $(document).ready(function(){
        $(".headerbar img").click(function(){
            window.location.href= 'https://worldwideprices.com/'
        })
    })
  }
})
