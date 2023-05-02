$(window).scroll(function(){
    $('.headerbar').toggleClass('scrolled', $(this).scrollTop() > 60)
});

var id = localStorage.getItem("ClickedId");

var naturalgasdb = [
    'Netherlands', '0.49$', '1',
    'Sweden', '0.44$', '2',
    'Denmark', '0.39$', '3',
    'Germany', '0.33$', '4',
    'Czech Republic', '0.30$', '5',
    'Austria', '0.28$', '6',
    'Spain', '0.26$', '7',
    'Italy', '0.26$', '8',
    'Belgium', '0.24$', '9',
    'Greece', '0.23$', '10',
    'Bulgaria', '0.22$', '11',
    'Brazil', '0.22$', '12',
    'Portugal', '0.20$', '13',
    'Singapore', '0.19$', '14',
    'France', '0.19$', '15',
    'Ireland', '0.16$', '16',
    'Switzerland', '0.16$', '17',
    'Hong Kong', '0.14$', '18',
    'Chile', '0.13$', '19',
    'Japan', '0.12$', '20',
    'Poland', '0.11$', '21',
    'Barbados', '0.09$', '22',
    'Hungary', '0.09$', '23',
    'UK', '0.09$', '24',
    'Australia', '0.09$', '25',
    'Mexico', '0.08$', '26',
    'New Zealand', '0.06$', '27',
    'USA', '0.06$', '28',
    'Slovakia', '0.06$', '29',
    'South Korea', '0.05$', '30',
    'Colombia', '0.05$', '31',
    'Canada', '0.05$', '32',
    'Serbia', '0.03$', '33',
    'Tunisia', '0.03$', '34',
    'Taiwan', '0.03$', '35',
    'Malaysia', '0.03$', '36',
    'Turkey', '0.02$', '37',
    'Ukraine', '0.02$', '38',
    'Bangladesh', '0.02$', '39',
    'Azerbaijan', '0.01$', '40',
    'Bahrain', '0.01$', '41',
    'Belarus', '0.01$', '42',
    'Russia', '0.007$', '43',
    'Argentina', '0.005$', '44',
    'Algeria', '0.003$', '45',
    'Iran', '0.001$', '46',
]
var dieseldb = [
    'Hong Kong', '2.67$', '1',
    'C. Afr. Rep.', '2.43$', '2',
    'Iceland', '2.36$', '3',
    'Monaco', '2.24$', '4',
    'Switzerland', '2.18$', '5',
    'Sweden', '2.12$', '6',
    'Finland', '2.06$', '7',
    'UK', '2.00$', '8',
    'France', '1.97$', '9',
    'Italy', '1.93$', '10',
    'Liechtenstein', '1.92$', '11',
    'Syria', '1.92$', '12',
    'Denmark', '1.87$', '13',
    'Malawi', '1.87$', '14',
    'Norway', '1.87$', '15',
    'Belgium', '1.86$', '16',
    'Germany', '1.84$', '17',
    'Barbados', '1.84$', '18',
    'Israel', '1.83$', '19',
    'Greece', '1.81$', '20',
    'Serbia', '1.81$', '21',
    'Wallis and Futuna', '1.81$', '22',
    'Nigeria', '1.80$', '23',
    'Albania', '1.80$', '24',
    'Singapore', '1.79$', '25',
    'San Marino', '1.78$', '26',
    'Ireland', '1.74$', '27',
    'Netherlands', '1.74$', '28',
    'Austria', '1.73$', '29',
    'Hungary', '1.72$', '30',
    'Estonia', '1.72$', '31',
    'Mayotte', '1.69$', '32',
    'Latvia', '1.67$', '33',
    'Burundi', '1.66$', '34',
    'Croatia', '1.65$', '35',
    'Spain', '1.65$', '36',
    'Portugal', '1.63$', '37',
    'Slovakia', '1.63$', '38',
    'Czech Republic', '1.62$', '39',
    'Belize', '1.62$', '40',
    'Cyprus', '1.61$', '41',
    'Lithuania', '1.59$', '42',
    'Luxembourg', '1.59$', '43',
    'Slovenia', '1.58$', '44',
    'Poland', '1.58$', '45',
    'Romania', '1.57$', '46',
    'Montenegro', '1.56$', '47',
    'Cayman Islands', '1.55$', '48',
    'Zimbabwe', '1.55$', '49',
    'Seychelles', '1.53$', '50',
    'Andorra', '1.51$', '51',
    'Bahamas', '1.49$', '52',
    'Zambia', '1.49$', '53',
    'Bosnia & Herz.', '1.48$', '54',
    'Bulgaria', '1.47$', '55',
    'Jamaica', '1.46$', '56',
    'Uruguay', '1.46$', '57',
    'Mongolia', '1.46$', '58',
    'Mali', '1.45$', '59',
    'DR Congo', '1.39$', '60',
    'Guinea', '1.39$', '61',
    'Mozambique', '1.38$', '62',
    'Georgia', '1.38$', '63',
    'Uganda', '1.37$', '64',
    'Rwanda', '1.37$', '65',
    'Chile', '1.36$', '66',
    'Saint Lucia', '1.34$', '67',
    'Malta', '1.32$', '68',
    'N. Macedonia', '1.32$', '69',
    'Lebanon', '1.31$', '70',
    'Mexico', '1.31$', '71',
    'Togo', '1.30$', '72',
    'Cape Verde', '1.29$', '73',
    'Aruba', '1.29$', '74',
    'Senegal', '1.27$', '75',
    'Grenada', '1.26$', '76',
    'Nepal', '1.26$', '77',
    'Ukraine', '1.26$', '78',
    'South Africa', '1.25$', '79',
    'Dominica', '1.25$', '80',
    'Paraguay', '1.25$', '81',
    'Ethiopia', '1.25$', '82',
    'Peru', '1.24$', '83',
    'New Zealand', '1.24$', '84',
    'Botswana', '1.23$', '85',
    'Canada', '1.23$', '86',
    'Swaziland', '1.22$', '87',
    'Kenya', '1.22$', '88',
    'Tanzania', '1.21$', '89',
    'Mauritius', '1.21$', '90',
    'Cameroon', '1.21$', '91',
    'Australia', '1.19$', '92',
    'Morocco', '1.19$', '93',
    'Guyana', '1.18$', '94',
    'Nicaragua', '1.18$', '95',
    'Costa Rica', '1.18$', '96',
    'Brazil', '1.18$', '97',
    'Benin', '1.17$', '98',
    'Moldova', '1.17$', '99',
    'Lesotho', '1.15$', '100',
    'Ghana', '1.14$', '101',
    'India', '1.14$', '102',
    'Liberia', '1.14$', '103',
    'Haiti', '1.14$', '104',
    'Fiji', '1.13$', '105',
    'Burkina Faso', '1.13$', '106',
    'Namibia', '1.13$', '107',
    'Madagascar', '1.12$', '108',
    'Jordan', '1.11$', '109',
    'Argentina', '1.11$', '110',
    'Laos', '1.11$', '111',
    'Japan', '1.10$', '112',
    'Ivory Coast', '1.10$', '113',
    'China', '1.09$', '114',
    'Sierra Leone', '1.09$', '115',
    'USA', '1.09$', '116',
    'Turkey', '1.09$', '117',
    'South Korea', '1.07$', '118',
    'Dom. Republic', '1.07$', '119',
    'Maldives', '1.06$', '120',
    'El Salvador', '1.06$', '121',
    'Philippines', '1.05$', '122',
    'Cuba', '1.05$', '123',
    'Afghanistan', '1.05$', '124',
    'Indonesia', '1.04$', '125',
    'Curacao', '1.04$', '126',
    'Sudan', '1.04$', '127',
    'Uzbekistan', '1.04$', '128',
    'Pakistan', '1.03$', '129',
    'Bangladesh', '1.03$', '130',
    'Burma', '1.02$', '131',
    'Cambodia', '1.01$', '132',
    'Guatemala', '1.00$', '133',
    'Sri Lanka', '1.00$', '134',
    'Gabon', '0.98$', '135',
    'Suriname', '0.97$', '136',
    'Honduras', '0.97$', '137',
    'Thailand', '0.96$', '138',
    'Belarus', '0.95$', '139',
    'Puerto Rico', '0.94$', '140',
    'Panama', '0.93$', '141',
    'Taiwan', '0.90$', '142',
    'Vietnam', '0.87$', '143',
    'Bhutan', '0.86$', '144',
    'Kyrgyzstan', '0.85$', '145',
    'UAE', '0.83$', '146',
    'Russia', '0.72$', '147',
    'Tunisia', '0.70$', '148',
    'Oman', '0.67$', '149',
    'Trinidad & Tobago', '0.65$', '150',
    'Qatar', '0.56$', '151',
    'Colombia', '0.54$', '152',
    'Bolivia', '0.54$', '153',
    'Kazakhstan', '0.53$', '154',
    'Malaysia', '0.49$', '155',
    'Bahrain', '0.48$', '156',
    'Azerbaijan', '0.47$', '157',
    'Ecuador', '0.46$', '158',
    'Turkmenistan', '0.39$', '159',
    'Kuwait', '0.38$', '160',
    'Angola', '0.27$', '161',
    'Egypt', '0.24$', '162',
    'Algeria', '0.21$', '163',
    'Saudi Arabia', '0.20$', '164',
    'Libya', '0.03$', '165',
    'Venezuela', '0.02$', '166',
    'Iran', '0.01$', '167',
]
var gasoline95db = [
    'Hong Kong', '2.96$', '1',
    'Syria', '2.35$', '2',
    'Iceland', '2.34$', '3',
    'Monaco', '2.27$', '4',
    'Norway', '2.20$', '5',
    'Denmark', '2.19$', '6',
    'C. Afr. Rep.', '2.18$', '7',
    'Greece', '2.13$', '8',
    'Finland', '2.12$', '9',
    'France', '2.12$', '10',
    'Italy', '2.06$', '11',
    'Netherlands', '2.05$', '12',
    'Barbados', '2.04$', '13',
    'Liechtenstein', '2.02$', '14',
    'Switzerland', '2.02$', '15',
    'Singapore', '2.00$', '16',
    'Germany', '1.99$', '17',
    'Mayotte', '1.99$', '18',
    'Sweden', '1.96$', '19',
    'San Marino', '1.96$', '20',
    'Israel', '1.92$', '21',
    'Belgium', '1.92$', '22',
    'Portugal', '1.87$', '23',
    'Belize', '1.85$', '24',
    'Estonia', '1.85$', '25',
    'Uruguay', '1.85$', '26',
    'Wallis and Futuna', '1.84$', '27',
    'Albania', '1.82$', '28',
    'UK', '1.81$', '29',
    'Latvia', '1.80$', '30',
    'Hungary', '1.80$', '31',
    'Spain', '1.79$', '32',
    'Austria', '1.77$', '33',
    'Luxembourg', '1.76$', '34',
    'Slovakia', '1.76$', '35',
    'Ireland', '1.76$', '36',
    'Czech Republic', '1.75$', '37',
    'Montenegro', '1.75$', '38',
    'Lithuania', '1.73$', '39',
    'Malawi', '1.70$', '40',
    'Jordan', '1.66$', '41',
    'Croatia', '1.66$', '42',
    'Senegal', '1.66$', '43',
    'Serbia', '1.65$', '44',
    'Mauritius', '1.65$', '45',
    'Andorra', '1.64$', '46',
    'New Zealand', '1.64$', '47',
    'Chile', '1.61$', '48',
    'Poland', '1.60$', '49',
    'Burundi', '1.57$', '50',
    'Zambia', '1.56$', '51',
    'Cyprus', '1.55$', '52',
    'Laos', '1.54$', '53',
    'Zimbabwe', '1.52$', '54',
    'Lebanon', '1.52$', '55',
    'Romania', '1.52$', '56',
    'Cayman Islands', '1.51$', '57',
    'Slovenia', '1.50$', '58',
    'Bosnia & Herz.', '1.49$', '59',
    'N. Macedonia', '1.47$', '60',
    'Malta', '1.46$', '61',
    'Seychelles', '1.46$', '62',
    'Aruba', '1.46$', '63',
    'Mali', '1.45$', '64',
    'Bulgaria', '1.43$', '65',
    'Burkina Faso', '1.43$', '66',
    'Dom. Republic', '1.42$', '67',
    'Morocco', '1.41$', '68',
    'Cape Verde', '1.41$', '69',
    'Mongolia', '1.41$', '70',
    'Moldova', '1.41$', '71',
    'Costa Rica', '1.40$', '72',
    'DR Congo', '1.40$', '73',
    'Guinea', '1.39$', '74',
    'Rwanda', '1.37$', '75',
    'Ivory Coast', '1.37$', '76',
    'Bahamas', '1.36$', '77',
    'Mozambique', '1.36$', '78',
    'Jamaica', '1.36$', '79',
    'Canada', '1.35$', '80',
    'Kenya', '1.34$', '81',
    'Saint Lucia', '1.34$', '82',
    'Nicaragua', '1.34$', '83',
    'Madagascar', '1.34$', '84',
    'Uganda', '1.34$', '85',
    'Mexico', '1.34$', '86',
    'Nepal', '1.34$', '87',
    'Thailand', '1.31$', '88',
    'India', '1.27$', '89',
    'Curacao', '1.27$', '90',
    'Peru', '1.27$', '91',
    'Grenada', '1.27$', '92',
    'Ukraine', '1.27$', '93',
    'Cuba', '1.26$', '94',
    'Japan', '1.25$', '95',
    'Fiji', '1.24$', '96',
    'South Africa', '1.23$', '97',
    'China', '1.23$', '98',
    'Bangladesh', '1.22$', '99',
    'Cameroon', '1.22$', '100',
    'Guatemala', '1.22$', '101',
    'Dominica', '1.21$', '102',
    'Cambodia', '1.21$', '103',
    'Tanzania', '1.18$', '104',
    'El Salvador', '1.18$', '105',
    'Togo', '1.17$', '106',
    'Philippines', '1.17$', '107',
    'Turkey', '1.16$', '108',
    'Paraguay', '1.16$', '109',
    'Australia', '1.15$', '110',
    'Sri Lanka', '1.15$', '111',
    'Honduras', '1.15$', '112',
    'Trinidad & Tobago', '1.14$', '113',
    'South Korea', '1.14$', '114',
    'Ethiopia', '1.14$', '115',
    'Lesotho', '1.11$', '116',
    'Brazil', '1.11$', '117',
    'Botswana', '1.11$', '118',
    'Burma', '1.10$', '119',
    'Sierra Leone', '1.09$', '120',
    'Benin', '1.09$', '121',
    'Ghana', '1.09$', '122',
    'Namibia', '1.08$', '123',
    'Panama', '1.07$', '124',
    'Swaziland', '1.07$', '125',
    'Puerto Rico', '1.06$', '126',
    'Vietnam', '1.06$', '127',
    'Liberia', '1.05$', '128',
    'Georgia', '1.04$', '129',
    'USA', '1.04$', '130',
    'Maldives', '1.04$', '131',
    'Taiwan', '1.02$', '132',
    'Guyana', '1.02$', '133',
    'Gabon', '1.01$', '134',
    'Suriname', '1.00$', '135',
    'Pakistan', '0.99$', '136',
    'Haiti', '0.97$', '137',
    'Argentina', '0.97$', '138',
    'Belarus', '0.95$', '139',
    'Indonesia', '0.95$', '140',
    'Uzbekistan', '0.93$', '141',
    'Sudan', '0.90$', '142',
    'Afghanistan', '0.86$', '143',
    'Bhutan', '0.85$', '144',
    'Tunisi', '0.81$', '145',
    'UAE', '0.79$', '146',
    'Kyrgyzstan', '0.69$', '147',
    'Colombia', '0.67$', '148',
    'Ecuador', '0.63$', '149',
    'Russia', '0.62$', '150',
    'Saudi Arabia', '0.62$', '151',
    'Oman', '0.62$', '152',
    'Azerbaijan', '0.59$', '153',
    'Qatar', '0.58$', '154',
    'Nigeria', '0.57$', '155',
    'Bolivia', '0.54$', '156',
    'Bahrain', '0.53$', '157',
    'Iraq', '0.51$', '158',
    'Kazakhstan', '0.47$', '159',
    'Malaysia', '0.46$', '160',
    'Turkmenistan', '0.43$', '161',
    'Egypt', '0.37$', '162',
    'Kuwait', '0.34$', '163',
    'Algeria', '0.34$', '164',
    'Angola', '0.31$', '165',
    'Iran', '0.05$', '166',
    'Libya', '0.03$', '167',
    'Venezuela', '0.02$', '168',
]
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

var petrolsdb = [naturalgasdb,dieseldb,gasoline95db,lpgdb]
    
    for (let i = -1; i < petrolsdb.length; i++) {
    var petrolsdb = [naturalgasdb,dieseldb,gasoline95db,lpgdb]
    
    var petrolsdb = petrolsdb[id];   
    }
    
    window.addEventListener("load", function(){
    
        var table = document.getElementById("tablebody");
        var row = document.createElement("tr")
        perrow = 3;
    
        for(var g = -1; g < petrolsdb.length; g++) {
          var cell = row.insertCell();
          cell.innerHTML = petrolsdb[g];
        
          var next = g + 1;
          if (next%perrow==0 && next!=petrolsdb.length) {
            row = table.insertRow();
        }
    }

    if(id == 0){
        var title = document.getElementById('prodtitle')
        title.innerText = 'Natural Gas Prices'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Natural Gas prices by country, around the world, 2023'
        var categoryitem = document.getElementById('categoryitem')
        categoryitem.classList.add("itemselected")
    }else if(id == 1){
        var title = document.getElementById('prodtitle')
        title.innerText = 'Diesel Prices'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Diesel prices by country, around the world, 2023'
        var categoryitem = document.getElementById('categoryitem1')
        categoryitem.classList.add("itemselected")
    }else if(id == 2){
        var title = document.getElementById('prodtitle')
        title.innerText = 'Gasoline Prices'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Gasoline prices by country, around the world, 2023'
        var categoryitem = document.getElementById('categoryitem2')
        categoryitem.classList.add("itemselected")
    }else if(id == 3){
        var title = document.getElementById('prodtitle')
        title.innerText = 'LPG Prices'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'LPG prices by country, around the world, 2023'
        var categoryitem = document.getElementById('categoryitem3')
        categoryitem.classList.add("itemselected")
    }


});

