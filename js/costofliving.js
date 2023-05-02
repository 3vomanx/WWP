$(window).scroll(function(){
    $('.headerbar').toggleClass('scrolled', $(this).scrollTop() > 60)
});

var id = localStorage.getItem("ClickedId");

var africadb = [
    'Douala, Cameroon', '860$', '1',
    'Dakar, Senegal', '720$', '2',
    'Addis Ababa, Ethiopia', '700$', '3',
    'Abidjan, Ivory Coast', '677$', '4',
    'Johannesburg, South Africa', '608$', '5',
    'Lagos, Nigeria', '604$', '6',
    'Harare, Zimbabwe', '600$', '7',
    'Port Louis, Mauritius', '569$', '8',
    'Pretoria, South Africa	', '537$', '9',
    'Kampala, Uganda', '533$', '10',
    'Windhoek, Namibia', '531$', '11',
    'Durban, South Africa', '526$', '12',
    'Gaborone, Botswana', '520$', '13',
    'Cape Town, South Africa', '518$', '14',
    'Accra, Ghana', '505$', '15',
    'Dar es Salaam, Tanzania', '488$', '16',
    'Marrakech, Morocco', '486$', '17',
    'Nairobi, Kenya', '480$', '18',
    'Casablanca, Morocco', '475$', '19',
    'Algiers, Algeria', '467$', '20',
    'Rabat, Morocco', '464$', '21',
    'Oran, Algeria', '451$', '22',
    'Agadir, Morocco', '447$', '23',
    'Tangier, Morocco', '445$', '24',
    'Tripoli, Libya', '443$', '25',
    'Kigali, Rwanda', '440$', '26',
    'Tunis, Tunisia', '434$', '27',
    'Sousse, Tunisia', '390$', '28',
    'Cairo, Egypt', '344$', '29',
    'Giza, Egypt', '302$', '30',
    'Alexandria, Egypt', '290$', '31',
]
var caribbeandb = [
    'Nassau, Bahamas', '1,405$', '1',
    'San Juan, Puerto Rico', '1,050$', '2',
    'Port of Spain, Trinidad And Tobago', '839$', '3',
    'Kingston, Jamaica', '824$', '4',
    'Santo Domingo, Dominican Republic', '750$', '5',
    'Havana, Cuba', '660$', '6',
]
var centralamericadb = [
    'San Jose, Costa Rica', '797$', '1',
    'Panama City, Panama', '750$', '2',
    'Monterrey, Mexico', '664$', '3',
    'Tijuana, Mexico', '661$', '4',
    'Guatemala City, Guatemala', '635$', '5',
    'Mexico City, Mexico', '634$', '6',
    'Cancun, Mexico', '622$', '7',
    'Merida, Mexico', '620$', '8',
    'San Salvador, El Salvador', '614$', '9',
    'Puerto Vallarta, Mexico', '595$', '10',
    'Guadalajara, Mexico', '590$', '11',
    'Queretaro (Santiago de Querétaro), Mexico', '578$', '12',
    'Playa del Carmen, Mexico', '576$', '13',
    'Puebla, Mexico', '552$', '14',
]
var northernamerica = [
    'Hamilton, Bermuda', '1,924$', '1',
    'Honolulu, HI, United States', '1,458$', '2',
    'San Francisco, CA, United States', '1,443$', '3',
    'New York, NY, United States', '1,442$', '4',
    'Oakland, CA, United States', '1,408$', '5',
    'Seattle, WA, United States', '1,386$', '6',
    'San Jose, CA, United States', '1,290$', '7',
    'Portland, OR, United States', '1,280$', '8',
    'Boston, MA, United States', '1,276$', '9',
    'San Diego, CA, United States', '1,273$', '10',
    'Sacramento, CA, United States', '1,267$', '11',
    'Anchorage, AK, United States', '1,256$', '12',
    'Miami, FL, United States', '1,242$', '13',
    'Washington, DC, United States', '1,238$', '14',
    'Raleigh, NC, United States', '1,199$', '15',
    'Denver, CO, United States', '1,192$', '16',
    'Charlotte, NC, United States', '1,173$', '17',
    'Los Angeles, CA, United States', '1,172$', '18',
    'Nashville, TN, United States', '1,159$', '19',
    'Philadelphia, PA, United States', '1,155$', '20',
    'Pittsburgh, PA, United States', '1,152$', '21',
    'Chicago, IL, United States', '1,150$', '12',
    'Fort Worth, TX, United States', '1,150$', '23',
    'Dallas, TX, United States', '1,141$', '24',
    'Minneapolis, MN, United States', '1,140$', '25',
    'New Orleans, LA, United States', '1,139$', '26',
    'Tucson, AZ, United States', '1,133$', '27',
    'Buffalo, NY, United States', '1,129$', '28',
    'Tampa, FL, United States', '1,121$', '29',
    'Cleveland, OH, United States', '1,115$', '30',
    'Atlanta, GA, United States', '1,109$', '31',
    'Oklahoma City, OK, United States', '1,101$', '32',
    'Austin, TX, United States', '1,100$', '33',
    'Detroit, MI, United States', '1,090$', '34',
    'Phoenix, AZ, United States', '1,076$', '35',
    'Calgary, Canada', '1,073$', '36',
    'Indianapolis, IN, United States', '1,071$', '37',
    'Victoria, Canada', '1,070$', '38',
    'Fort Lauderdale, FL, United States', '1,064$', '39',
    'Madison, WI, United States', '1,064$', '40',
    'Milwaukee, WI, United States', '1,064$', '41',
    'Columbus, OH, United States', '1,064$', '42',
    'Orlando, FL, United States', '1,055$', '43',
    'Baltimore, MD, United States', '1,053$', '44',
    'Reno, NV, United States', '1,052$', '44',
    'Las Vegas, NV, United States', '1,051$', '46',
    'Eugene, OR, United States', '1,051$', '47',
    'Boise, ID, United States', '1,050$', '48',
    'Toronto, Canada', '1,048$', '49',
    'Ottawa, Canada', '1,038$', '50',
    'Albuquerque, NM, United States', '1,038$', '51',
    'Spokane, WA, United States', '1,028$', '52',
    'Kansas City, MO, United States', '1,024$', '53',
    'Edmonton, Canada', '1,015$', '54',
    'Saint Louis, MO, United States', '1,012$', '55',
    'Saint Petersburg, FL, United States', '1,009$', '56',
    'Jacksonville, FL, United States', '1,007$', '57',
    'St. Johns', 'Newfoundland and Labrador, Canada', '1,005$', '58',
    'Vancouver, Canada', '1000$', '59',
    'Markham, Canada', '998$', '60',
    'San Antonio, TX, United States', '997$', '61',
    'Houston, TX, United States', '992$', '62',
    'Nanaimo, BC, Canada', '990$', '63',
    'Louisville, KY, United States', '983$', '64',
    'Hamilton, Canada', '981$', '65',
    'Halifax, Canada', '977$', '66',
    'Quebec City, Canada', '973$', '67',
    'Memphis, TN, United States', '958$', '68',
    'Kingston, Canada', '953$', '69',
    'Salt Lake City, UT, United States', '952$', '70',
    'St.Catharines, Canada', '951$', '71',
    'Saskatoon, Canada', '941$', '72',
    'Knoxville, TN, United States', '939$', '73',
    'Surrey, Canada', '937$', '74',
    'Red Deer, Canada', '937$', '75',
    'London, Canada', '936$', '76',
    'Guelph, Canada', '932$', '77',
    'Brampton, Canada', '930$', '78',
    'Cincinnati, OH, United States', '929$', '79',
    'Winnipeg, Canada', '928$', '80',
    'Kamloops, Canada', '920$', '81',
    'Fredericton, Canada', '919$', '82',
    'Kitchener, Canada', '918$', '83',
    'Kelowna, Canada', '905$', '84',
    'Mississauga, Canada', '902$', '85',
    'Montreal, Canada', '891$', '86',
    'Windsor, Canada', '889$', '87',
    'Regina, Canada', '877$', '88',
]
var southamericadb = [
    'Montevideo, Uruguay', '836$', '1',
    'Santiago, Chile', '769$', '2',
    'Georgetown, Guyana', '693$', '3',
    'Sao Paulo, Brazil', '630$', '4',
    'Rio de Janeiro, Brazil', '620$', '5',
    'Caracas, Venezuela', '603$', '6',
    'Brasilia, Brazil', '579$', '7',
    'Guayaquil, Ecuador', '570$', '8',
    'Florianopolis, Brazil', '570$', '9',
    'Campinas, Brazil', '568$', '10',
    'Porto Alegre, Brazil', '559$', '11',
    'Curitiba, Brazil', '532$', '12',
    'Goiania, Brazil', '529$', '13',
    'Salvador, Brazil', '529$', '14',
    'Lima, Peru', '515$', '15',
    'Belo Horizonte, Brazil', '513$', '16',
    'Quito, Ecuador', '509$', '17',
    'Cuenca, Ecuador', '509$', '18',
    'Recife, Brazil', '507$', '19',
    'Sao Jose dos Campos, Brazil', '506$', '20',
    'La Paz, Bolivia', '504$', '21',
    'Fortaleza, Brazil', '497$', '22',
    'Santa Cruz, Bolivia', '489$', '23',
    'Asuncion, Paraguay', '463$', '24',
    'Cartagena, Colombia', '456$', '25',
    'Buenos Aires, Argentina', '440$', '26',
    'Medellin, Colombia', '430$', '27',
    'Bogota, Colombia', '428$', '28',
    'Cali, Colombia', '418$', '29',
    'Barranquilla, Colombia', '391$', '30',
    'Bucaramanga, Colombia', '329$', '31',
]
var centralasiadb = [
    'Almaty, Kazakhstan', '516$', '1',
    'Astana (Nur-Sultan), Kazakhstan', '503$', '2',
    'Tashkent, Uzbekistan', '462$', '3',
]
var easternasiadb = [
    'Seoul, South Korea', '1,110$', '1',
    'Hong Kong, Hong Kong (China)', '1,092$', '2',
    'Tokyo, Japan', '1,056$', '3',
    'Nagoya, Japan', '982$', '4',
    'Macao, Macao (China)', '969$', '5',
    'Osaka, Japan', '904$', '6',
    'Suzhou, China', '888$', '7',
    'Taipei, Taiwan (China)', '819$', '8',
    'Taichung, Taiwan (China)', '731$', '9',
    'New Taipei City, Taiwan (China)', '709$', '10',
    'Kaohsiung, Taiwan (China)', '704$', '11',
    'Shanghai, China', '700$', '12',
    'Beijing, China', '671$', '13',
    'Shenzhen, China', '638$', '14',
    'Hangzhou, China', '584$', '15',
    'Guangzhou, China', '561$', '16',
    'Chengdu, China', '569$', '17',
    'Wuhan, China', '538$', '18',
    'Nanjing, China', '512$', '19',
    'Ulaanbaatar, Mongolia	', '510$', '20',
    'Qingdao, Shandong, China', '466$', '21',
]
var southeasernasiadb = [
    'Singapore, Singapore', '1,138$', '1',
    'Phnom Penh, Cambodia', '656$', '2',
    'Bangkok, Thailand', '640$', '3',
    'Quezon City, Philippines', '621$', '4',
    'Manila, Philippines', '580$', '5',
    'Davao, Philippines', '567$', '6',
    'Pattaya, Thailand', '558$', '7',
    'Bali, Indonesia', '551$', '8',
    'Cebu, Philippines', '550$', '9',
    'Kuala Lumpur, Malaysia', '539$', '10',
    'Jakarta, Indonesia', '528$', '11',
    'Yangon, Myanmar', '522$', '12',
    'Ho Chi Minh City, Vietnam', '512$', '13',
    'Chiang Mai, Thailand', '508$', '14',
    'Hanoi, Vietnam', '500$', '15',
    'Johor Bahru, Malaysia', '498$', '16',
    'Petaling Jaya, Malaysia', '490$', '17',
    'Penang, Malaysia', '483$', '18',
    'Baguio, Philippines', '442$', '19',
    'Surabaya, Indonesia', '441$', '20',
]
var southernasiadb = [
    'Shiraz, Iran', '830$', '1',
    'Male, Maldives', '800$', '2',
    'Colombo, Sri Lanka', '439$', '3',
    'Gurgaon, India', '412$', '4',
    'Dhaka, Bangladesh', '400$', '5',
    'Chittagong, Bangladesh', '392$', '6',
    'Noida, India', '392$', '7',
    'Tehran, Iran', '390$', '8',
    'Mashhad, Iran', '384$', '9',
    'Mumbai, India', '382$', '10',
    'Delhi, India', '376$', '11',
    'Kathmandu, Nepal', '372$', '12',
    'Bangalore, India', '368$', '13',
    'Hyderabad, India', '362$', '14',
    'Chandigarh, India', '360$', '15',
    'Navi Mumbai, India', '353$', '16',
    'Pune, India', '352$', '17',
    'Visakhapatnam, India', '347$', '18',
    'Isfahan (Esfahan), Iran', '342$', '19',
    'Ahmedabad, India', '338$', '20',
    'Chennai, India', '338$', '21',
    'Patna, India', '335$', '22',
    'Surat, India', '330$', '23',
    'Vadodara, India', '330$', '24',
    'Lucknow (Lakhnau), India', '330$', '25',
    'Guwahati, India', '328$', '26',
    'Lahore, Pakistan', '326$', '27',
    'Kolkata, India', '325$', '28',
    'Bhubaneswar, India', '325$', '29',
    'Jaipur, India', '324$', '30',
    'Nagpur, India', '322$', '31',
    'Indore, India', '318$', '32',
    'Kochi, India', '314$', '33',
    'Coimbatore, India', '313$', '34',
    'Islamabad, Pakistan', '307$', '35',
    'Bhopal, India', '301$', '36',
    'Thiruvananthapuram, India', '297$', '37',
    'Karachi, Pakistan', '291$', '38',
]
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
var easterneuropedb = [
    'Prague, Czech Republic', '921$', '1',
    'Bratislava, Slovakia', '798$', '2',
    'Brno, Czech Republic', '792$', '3',
    'Ostrava, Czech Republic', '781$', '4',
    'Plzen, Czech Republic', '767$', '5',
    'Warsaw, Poland', '742$', '6',
    'Olomouc, Czech Republic', '733$', '7',
    'Kosice, Slovakia', '733$', '8',
    'Budapest, Hungary', '730$', '9',
    'Gdynia, Poland', '691$', '10',
    'Katowice, Poland', '683$', '11',
    'Sofia, Bulgaria', '681$', '12',
    'Wroclaw, Poland', '678$', '13',
    'Krakow (Cracow), Poland', '677$', '14',
    'Bucharest, Romania', '674$', '15',
    'Gdansk, Poland', '653$', '16',
    'Cluj-Napoca, Romania', '652$', '17',
    'Tbilisi, Georgia', '648$', '18',
    'Pecs, Hungary', '636$', '19',
    'Szeged, Hungary', '636$', '20',
    'Constanta, Romania', '632$', '21',
    'Poznan, Poland', '629$', '22',
    'Rzeszow, Poland', '624$', '23',
    'Lodz, Poland', '623$', '24',
    'Szczecin, Poland', '622$', '25',
    'Bialystok, Poland', '618$', '26',
    'Moscow, Russia', '604$', '27',
    'Olsztyn, Poland', '596$', '28',
    'Varna, Bulgaria', '595$', '29',
    'Oradea, Romania', '592$', '30',
    'Debrecen, Hungary', '585$', '31',
    'Brasov, Romania', '582$', '32',
    'Lublin, Poland', '578$', '33',
    'Chisinau, Moldova', '576$', '34',
    'Timisoara, Romania', '570$', '35',
    'Saint Petersburg, Russia', '566$', '36',
    'Craiova, Romania', '561$', '37',
    'Iasi, Romania', '558$', '38',
    'Plovdiv, Bulgaria', '554$', '39',
    'Minsk, Belarus', '554$', '40',
    'Burgas, Bulgaria', '551$', '41',
    'Sibiu, Romania', '551$', '42',
    'Kaliningrad, Russia', '534$', '43',
    'Novosibirsk, Russia', '525$', '44',
    'Nizhny Novgorod, Russia', '525$', '45',
    'Kiev (Kyiv), Ukraine', '496$', '46',
    'Kazan, Russia', '486$', '47',
    'Krasnodar, Russia', '482$', '48',
    'Kharkiv, Ukraine', '465$', '49',
    'Odessa (Odesa), Ukraine', '459$', '50',
    'Dnipro, Ukraine', '452$', '51',
    'Lviv, Ukraine', '438$', '52', 
]
var northerneuropedb = [
    'London, United Kingdom', '1,244$', '1',
    'Reykjavik, Iceland', '1,240$', '2',
    'Odense, Denmark', '1,226$', '3',
    'Saint Helier, Jersey', '1,217$', '4',
    'Trondheim, Norway', '1,207$', '5',
    'Bergen, Norway', '1,197$', '6',
    'Copenhagen, Denmark', '1,188$', '7',
    'Stavanger, Norway', '1,154$', '8',
    'Oslo, Norway', '1,152$', '9',
    'Espoo, Finland', '1,126$', '10',
    'Arhus, Denmark', '1,123$', '11',
    'Dublin, Ireland', '1,120$', '12',
    'Tromso, Norway', '1,083$', '13',
    'Aalborg, Denmark', '1,060$', '14',
    'Stockholm, Sweden', '1,023$', '15',
    'Cambridge, United Kingdom', '1,022$', '16',
    'Guildford, United Kingdom', '1,021$', '17',
    'Turku, Finland', '1,007$', '18',
    'Brighton, United Kingdom', '995$', '19',
    'Cork, Ireland', '984$', '20',
    'Helsinki, Finland', '969$', '21',
    'Leeds, United Kingdom', '965$', '22',
    'Manchester, United Kingdom', '957$', '23',
    'Bristol, United Kingdom', '957$', '24',
    'Sheffield, United Kingdom', '949$', '25',
    'Oxford, United Kingdom', '948$', '26',
    'Nottingham, United Kingdom', '947$', '27',
    'Glasgow, United Kingdom', '943$', '28',
    'Liverpool, United Kingdom', '935$', '29',
    'Reading, United Kingdom', '934$', '30',
    'Limerick, Ireland', '931$', '31',
    'Galway, Ireland', '925$', '32',
    'Oulu, Finland', '923$', '33',
    'Uppsala, Sweden', '921$', '34',
    'Newcastle upon Tyne, United Kingdom', '921$', '35',
    'Milton Keynes, United Kingdom', '921$', '36',
    'Southampton, United Kingdom', '921$', '37',
    'Plymouth, United Kingdom', '920$', '38',
    'Edinburgh, United Kingdom', '912$', '39',
    'Tallinn, Estonia', '909$', '40',
    'Gothenburg, Sweden', '904$', '41',
    'Bournemouth, United Kingdom', '897$', '42',
    'Dundee, United Kingdom', '893$', '43',
    'Exeter, United Kingdom', '887$', '44',
    'Tampere, Finland', '885$', '45',
    'Norwich, United Kingdom', '884$', '46',
    'Malmo, Sweden', '881$', '47',
    'Lund, Sweden', '880$', '48',
    'Derby, United Kingdom', '880$', '49',
    'Cardiff, United Kingdom', '877$', '50',
    'Tartu, Estonia', '877$', '51',
    'Belfast, United Kingdom', '872$', '52',
    'Aberdeen, United Kingdom', '869$', '53',
    'Riga, Latvia', '869$', '54',
    'Birmingham, United Kingdom', '858$', '55',
    'Coventry, United Kingdom', '857$', '56',
    'Swansea, United Kingdom', '851$', '57',
    'Leicester, United Kingdom', '826$', '58',
    'Portsmouth, United Kingdom', '825$', '59',
    'Douglas, Isle Of Man', '807$', '60',
    'Vilnius, Lithuania', '798$', '61',
    'Kingston upon Hull, United Kingdom', '768$', '62',
    'Kaunas, Lithuania', '742$', '63',
    'Klaipeda, Lithuania', '717$', '64',
]
var southerneuropedb = [
    'Milan, Italy', '1,063$', '1',
    'Valletta, Malta', '1,034$', '2',
    'Parma, Italy', '995$', '3',
    'Bologna, Italy', '992$', '4',
    'Florence, Italy', '987$', '5',
    'Rome, Italy', '966$', '6',
    'Trento, Italy', '957$', '7',
    'Brescia, Italy', '954$', '8',
    'Trieste, Italy', '950$', '9',
    'Bergamo, Italy', '949$', '10',
    'Genoa, Italy', '938$', '11',
    'Padova, Italy', '924$', '12',
    'Treviso, Italy', '900$', '13',
    'Cagliari, Italy', '894$', '14',
    'Turin, Italy', '893$', '15',
    'Ljubljana, Slovenia', '889$', '16',
    'Sliema, Malta', '887$', '17',
    'Athens, Greece', '884$', '18',
    'Bari, Italy', '880$', '19',
    'Verona, Italy', '879$', '20',
    'Rimini, Italy', '863$', '21',
    'Thessaloniki, Greece', '858$', '22',
    'Palma de Mallorca, Spain', '848$', '23',
    'Barcelona, Spain', '842$', '24',
    'Bilbao, Spain', '837$', '25',
    'Heraklion, Greece', '802$', '26',
    'Zagreb, Croatia', '801$', '27',
    'Naples, Italy', '797$', '28',
    'Zadar, Croatia', '792$', '29',
    'Larissa, Greece', '791$', '30',
    'Corfu, Greece', '783$', '31',
    'Palermo, Italy', '778$', '32',
    'Dubrovnik, Croatia', '778$', '33',
    'Madrid, Spain', '763$', '34',
    'Catania, Italy', '762$', '35',
    'Maribor, Slovenia', '750$', '36',
    'Oviedo, Spain', '742$', '37',
    'Pamplona, Spain', '733$', '38',
    'Malaga, Spain', '733$', '39',
    'Lisbon, Portugal', '732$', '40',
    'Seville (Sevilla), Spain', '725$', '41',
    'Valencia, Spain', '724$', '42',
    'Alicante, Spain', '720$', '43',
    'Cascais, Portugal', '716$', '44',
    'Granada, Spain', '712$', '45',
    'Porto, Portugal', '699$', '46',
    'Rijeka, Croatia', '687$', '47',
    'Split, Croatia', '681$', '48',
    'Leiria, Portugal', '680$', '49',
    'Las Palmas de Gran Canaria, Spain', '667$', '50',
    'Vigo, Spain', '666$', '51',
    'Belgrade, Serbia', '660$', '52',
    'Santa Cruz de Tenerife, Spain', '653$', '53',
    'Budva, Montenegro', '650$', '54',
    'Zaragoza (Saragossa), Spain', '637$', '55',
    'Funchal, Portugal', '636$', '56',
    'Osijek, Croatia', '632$', '57',
    'Aveiro, Portugal', '616$', '58',
    'Braga, Portugal', '609$', '59',
    'Sarajevo, Bosnia And Herzegovina', '607$', '60',
    'Tirana, Albania', '603$', '61',
    'Coimbra, Portugal', '602$', '62',
    'Podgorica, Montenegro', '597$', '63',
    'Novi Sad, Serbia', '581$', '64',
    'Tuzla, Bosnia And Herzegovina', '581$', '65',
    'Banja Luka, Bosnia And Herzegovina', '577$', '66',
    'Skopje, North Macedonia', '566$', '67',
    'Nis, Serbia', '507$', '68',
    'Bitola, North Macedonia', '504$', '69',
    'Pristina, Kosovo (Disputed Territory)', '463$', '70',
]
var westerneuropedb = [
    'Zurich, Switzerland', '1,848$', '1',
    'Basel, Switzerland', '1,781$', '2',
    'Lausanne, Switzerland', '1,728$', '3',
    'Zug, Switzerland', '1,665$', '4',
    'Bern, Switzerland', '1,658$', '5',
    'Geneva, Switzerland', '1,537$', '6',
    'Villach, Austria', '1,183$', '7',
    'Munich, Germany', '1,132$', '8',
    'Paris, France', '1,126$', '9',
    'Salzburg, Austria', '1,124$', '10',
    'Nijmegen, Netherlands', '1,115$', '11',
    'Darmstadt, Germany', '1,114$', '12',
    'Utrecht, Netherlands', '1,103$', '13',
    'Frankfurt, Germany', '1,092$', '14',
    'Berlin, Germany', '1,078$', '15',
    'Lyon, France', '1,069$', '16',
    'Hamburg, Germany', '1,068$', '17',
    'Breda, Netherlands', '1,063$', '18',
    'Maastricht, Netherlands', '1,056$', '19',
    'Groningen, Netherlands', '1,052$', '20',
    'Innsbruck, Austria', '1,047$', '21',
    'Graz, Austria', '1,045$', '22',
    'Nice, France', '1,044$', '23',
    'Luxembourg, Luxembourg', '1,040$', '24',
    'Bonn, Germany', '1,040$', '25',
    'Heidelberg, Germany', '1,033$', '26',
    'Dusseldorf, Germany', '1,032$', '27',
    'Amsterdam, Netherlands', '1,031$', '28',
    'Dortmund, Germany', '1,027$', '29',
    'Cologne, Germany', '1,022$', '30',
    'Eindhoven, Netherlands', '1,016$', '31',
    'Antwerp, Belgium', '1,011$', '32',
    'Brussels, Belgium', '1,005$', '33',
    'Karlsruhe, Germany', '1,000$', '34',
    'Freiburg im Breisgau, Germany', '992$', '35',
    'Essen, Germany', '990$', '36',
    'Linz, Austria', '988$', '37',
    'Hanover, Germany', '985$', '38',
    'Mannheim, Germany', '981$', '39',
    'Bordeaux, France', '972$', '40',
    'Toulouse, France', '970$', '41',
    'Stuttgart, Germany', '968$', '42',
    'Delft, Netherlands', '962$', '43',
    'Rotterdam, Netherlands', '960$', '44',
    'Marseille, France', '954$', '45',
    'Nuremberg, Germany', '952$', '46',
    'Leuven, Belgium', '950$', '47',
    'Bremen, Germany', '948$', '48',
    'Grenoble, France', '946$', '49',
    'Gent, Belgium', '946$', '50',
    'Enschede, Netherlands', '939$', '51',
    'Nantes, France', '938$', '52',
    'Montpellier, France', '931$', '53',
    'Vienna, Austria', '931$', '54',
    'Aachen, Germany', '928$', '55',
    'Leipzig, Germany', '927$', '56',
    'The Hague (Den Haag), Netherlands', '907$', '57',
    'Lille, France', '903$', '58',
    'Dresden, Germany', '895$', '59',
]
var oceaniadb = [
    'Adelaide, Australia', '1,274$', '1',
    'Canberra, Australia', '1,249$', '2',
    'Brisbane, Australia', '1,152$', '3',
    'Sydney, Australia', '1,144$', '4',
    'Perth, Australia', '1,101$', '5',
    'Melbourne, Australia', '1,089$', '6',
    'Auckland, New Zealand	', '1,064$', '7',
    'Wellington, New Zealand', '1,022$', '8',
    'Hobart, Australia', '946$', '9',
    'Christchurch, New Zealand', '883$', '10',
    'Hamilton, New Zealand	', '865$', '11',
    'Suva, Fiji', '496$', '12',
]

var coldb = [africadb,caribbeandb,centralamericadb,northernamerica,southamericadb,centralasiadb,easternasiadb,southeasernasiadb,
    southernasiadb,westernasiadb,easterneuropedb,northerneuropedb,southerneuropedb,westerneuropedb,oceaniadb]
    
    for (let i = -1; i < coldb.length; i++) {
    var coldb = [africadb,caribbeandb,centralamericadb,northernamerica,southamericadb,centralasiadb,easternasiadb,southeasernasiadb,
        southernasiadb,westernasiadb,easterneuropedb,northerneuropedb,southerneuropedb,westerneuropedb,oceaniadb]
    
    var coldb = coldb[id];   
    }
    
    window.addEventListener("load", function(){
    
        var table = document.getElementById("tablebody");
        var row = document.createElement("tr")
        perrow = 3;
    
        for(var g = -1; g < coldb.length; g++) {
          var cell = row.insertCell();
          cell.innerHTML = coldb[g];
        
          var next = g + 1;
          if (next%perrow==0 && next!=coldb.length) {
            row = table.insertRow();
        }
    }

    if(id == 0){
        var title = document.getElementById('prodtitle')
        title.innerText = 'Cost of living in Africa'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Cost of living in Africa per person/month 2023'
    }else if(id == 1){
        var title = document.getElementById('prodtitle')
        title.innerText = 'Cost of living in Caribbean'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Cost of living in Caribbean per person/month 2023'
    }else if(id == 2){
        var title = document.getElementById('prodtitle')
        title.innerText = 'Cost of living in Central America'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Cost of living in Central America per person/month 2023'
    }else if(id == 3){
        var title = document.getElementById('prodtitle')
        title.innerText = 'Cost of living in Northern America'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Cost of living in Northern America per person/month 2023'
    }else if(id == 4){
        var title = document.getElementById('prodtitle')
        title.innerText = 'Cost of living in South America'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Cost of living in South America per person/month 2023'
    }else if(id == 5){
        var title = document.getElementById('prodtitle')
        title.innerText = 'Cost of living in Central Asia'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Cost of living in Central Asia per person/month 2023'
    }else if(id == 6){
        var title = document.getElementById('prodtitle')
        title.innerText = 'Cost of living in Eastern Asia'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Cost of living in Eastern Asia per person/month 2023'
    }else if(id == 7){
        var title = document.getElementById('prodtitle')
        title.innerText = 'Cost of living in South-Eastern Asia'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Cost of living in South-Eastern Asia per person/month 2023'
    }else if(id == 8){
        var title = document.getElementById('prodtitle')
        title.innerText = 'Cost of living in Southern Asia'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Cost of living in Southern Asia per person/month 2023'
    }else if(id == 9){
        var title = document.getElementById('prodtitle')
        title.innerText = 'Cost of living in Western Asia'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Cost of living in Western Asia per person/month 2023'
    }else if(id == 10){
        var title = document.getElementById('prodtitle')
        title.innerText = 'Cost of living in Eastern Europe'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Cost of living in Eastern Europe per person/month 2023'
    }else if(id == 11){
        var title = document.getElementById('prodtitle')
        title.innerText = 'Cost of living in Northern Europe'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Cost of living in Northern Europe per person/month 2023'
    }else if(id == 12){
        var title = document.getElementById('prodtitle')
        title.innerText = 'Cost of living in Southern Europe'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Cost of living in Southern Europe per person/month 2023'
    }else if(id == 13){
        var title = document.getElementById('prodtitle')
        title.innerText = 'Cost of living in Western Europe'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Cost of living in Western Europe per person/month 2023'
    }else if(id == 14){
        var title = document.getElementById('prodtitle')
        title.innerText = 'Cost of living in Oceania'
        var categoryname = document.getElementById('categorynametitle')
        categoryname.innerText = 'Cost of living in Oceania per person/month 2023'
    }
});