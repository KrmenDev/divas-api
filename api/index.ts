const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;


const divas = {
    'lady gaga': {
        'age': 'March 28, 1986' ,
        'birthName': 'Stefani Joanne Angelina Germanotta',
        'birthLocation': 'New York City, U.S.',
        'studioAlbums' : 8,
        'soundtracks': 4,
        'musicVideos': 30,
        'musicalGenre': 'Pop, Dance, Electro-Pop, Jazz',
        'img': "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Lady_Gaga_at_Joe_Biden%27s_inauguration_%28cropped_5%29.jpg/800px-Lady_Gaga_at_Joe_Biden%27s_inauguration_%28cropped_5%29.jpg"

    },
    'cher':{
       'age': 'May 20, 1946 ',
       'birthName': 'Cheryl Sarkisian',
       'birthLocation': 'California, U.S.',
        'studioAlbums' : 26,
        'soundtracks': 4,
        'musicVideos': 45,
        'musicalGenre': 'Pop, Dance-pop, Electro-Pop'
    },
    'ella fitzgerald':{
        'age': 'April 25, 1917',
        'birthName': 'Ella Jane Fitzgerald',
        'birthLocation': 'Virginia, U.S.',
        'studioAlbums' : 51,
        'soundtracks': 0,
        'musicVideos': 0,
        'musicalGenre': 'Jazz, Swing, Soul, Blues'
    },
    'rihanna':{
        'age': 'February 20, 1988',
        'birthName': 'Robyn Rihanna Fenty',
        'birthLocation': 'Saint Michael, Barbados',
        'studioAlbums' : 8,
        'soundtracks': 1,
        'musicVideos': 62,
        'musicalGenre': 'Pop, R&b, Dance'
    },
    'beyonce':{
        'age': 'September 4, 1981',
        'birthName': 'Beyoncé Giselle Knowles',
        'birthLocation': 'Texas, U.S.',
        'studioAlbums' : 9,
        'soundtracks': 1,
        'musicVideos': 50,
        'musicalGenre': 'Pop, R&b, Hip-hop, Country'
    },
    'madonna':{
        'age': 'August 16, 1958',
        'birthName': 'Madonna Louise Ciccone',
        'birthLocation': 'Michigan, U.S.',
        'studioAlbums' : 14,
        'soundtracks': 3,
        'musicVideos': 0,
        'musicalGenre': 'Pop, Electronic, Dance'
    },
    'lauryn hill':{
        'age': 'May 26, 1975',
        'birthName': 'Lauryn Noelle Hill',
        'birthLocation': 'New Jersey, U.S.',
        'studioAlbums' : 1,
        'soundtracks': 0,
        'musicVideos': 13,
        'musicalGenre': 'Hip-hop, R&B, Soul, Reggae'
    },
    'whitney houston':{
        'age': 'August 9, 1963',
        'birthName': 'Whitney Elizabeth Houston',
        'birthLocation': 'New Jersey, U.S.',
        'studioAlbums' : 7,
        'soundtracks': 3,
        'musicVideos': 55,
        'musicalGenre': 'R&B, Pop, Soul, Dance-pop'
    },
    'alicia keys':{
        'age': 'January 25, 1981',
        'birthName': 'Alicia Augello Cook',
        'birthLocation': 'New York City, U.S.',
        'studioAlbums' : 9,
        'soundtracks': 0,
        'musicVideos': 37,
        'musicalGenre': 'R&B, Pop, Soul, Hip-hop'
    },
    'erykah badu':{
        'age': 'February 26, 1971',
        'birthName': 'Erica Wright',
        'birthLocation': 'Texas,  U.S.',
        'studioAlbums' : 5,
        'soundtracks': 0,
        'musicVideos': 20,
        'musicalGenre': 'R&B, Neo Soul, Hip-hop'
    },
    'britney spears':{
        'age': 'December 2, 1981',
        'birthName': 'Britney Jean Spears',
        'birthLocation': 'Mississippi, U.S.',
        'studioAlbums' : 9,
        'soundtracks': 0,
        'musicVideos': 47,
        'musicalGenre': 'Pop, Dance-pop, Electro-Pop'
    },
    'christina aguilera':{
        'age': 'December 18, 1980',
        'birthName': 'Christina María Aguilera',
        'birthLocation': 'New York City, U.S.',
        'studioAlbums' : 9,
        'soundtracks': 1,
        'musicVideos': 30,
        'musicalGenre': 'Pop, R&B, Soul'
    },
    'celine dion':{
        'age': 'March 30, 1968',
        'birthName': 'Céline Marie Claudette Dion',
        'birthLocation': 'Quebec, Canada',
        'studioAlbums' : 27,
        'soundtracks': 2,
        'musicVideos': 52,
        'musicalGenre': 'Pop, R&B'
    },
    'adele':{
        'age': 'May 5, 1988 ',
        'birthName': 'Adele Laurie Blue Adkins',
        'birthLocation': 'Quebec, Canada',
        'studioAlbums' : 4,
        'soundtracks': 0,
        'musicVideos': 11,
        'musicalGenre': 'Pop, R&B, Soul'
    },
    'aretha franklin':{
        'age': 'May 5, 1988 ',
        'birthName': 'Aretha Louise Franklin',
        'birthLocation': 'Tennessee, U.S.',
        'studioAlbums' : 38,
        'soundtracks': 0,
        'musicVideos': 0,
        'musicalGenre': 'R&B, Soul, Gospel, Jazz'
    },
    'amy winehouse':{
        'age': 'September 14, 1983 ',
        'birthName': 'Amy Jade Winehouse',
        'birthLocation': 'London, England',
        'studioAlbums' : 2,
        'soundtracks': 0,
        'musicVideos': 10,
        'musicalGenre': 'Neo Soul, Jazz, Soul'
    },
    'diana ross':{
        'age': 'March 26, 1944 ',
        'birthName': 'Diane Ernestine Earle Ross',
        'birthLocation': 'Michigan, U.S.',
        'studioAlbums' : 26,
        'soundtracks': 5,
        'musicVideos': 0,
        'musicalGenre': 'R&B, Disco, Soul'
    },
    'kylie minogue':{
        'age': 'May 28, 1968',
        'birthName': 'Kylie Ann Minogue',
        'birthLocation': 'Michigan, U.S.',
        'studioAlbums' : 17,
        'soundtracks': 0,
        'musicVideos': 97,
        'musicalGenre': 'Pop, Dance-Pop, Disco'
    },
    'shakira':{
        'age': 'May 28, 1968',
        'birthName': 'Shakira Isabel Mebarak Ripoll',
        'birthLocation': 'Barranquilla, Colombia',
        'studioAlbums' : 12,
        'soundtracks': 0,
        'musicVideos': 64,
        'musicalGenre': 'Pop, Dance-Pop, Reggaeton'
    },
    'pink':{
        'age': 'September 8, 1979',
        'birthName': 'Alecia Beth Moore',
        'birthLocation': 'Pennsylvania, U.S.',
        'studioAlbums' : 9,
        'soundtracks': 0,
        'musicVideos': 52,
        'musicalGenre': 'Pop, Pop Rock, R&B'
    },
    'p!nk':{
        'age': 'September 8, 1979',
        'birthName': 'Alecia Beth Moore',
        'birthLocation': 'Pennsylvania, U.S.',
        'studioAlbums' : 9,
        'soundtracks': 0,
        'musicVideos': 52,
        'musicalGenre': 'Pop, Pop Rock, R&B'
    },
    'dolly parton':{
        'age': 'January 19, 1946',
        'birthName': 'Dolly Rebecca Parton',
        'birthLocation': 'Tennessee, U.S.',
        'studioAlbums' : 49,
        'soundtracks': 0,
        'musicVideos': 68,
        'musicalGenre': 'Country, Bluegrass, Pop Rock'
    },
    'shania twain':{
        'age': 'August 28, 1965',
        'birthName': 'Eilleen Regina Edwards',
        'birthLocation': 'Ontario, Canada',
        'studioAlbums' : 6,
        'soundtracks': 0,
        'musicVideos': 38,
        'musicalGenre': 'Country, Pop'
    },
    'nicki minaj':{
        'age': 'December 8, 1982',
        'birthName': 'Onika Tanya Maraj',
        'birthLocation': 'Port of Spain, Trinidad and Tobago',
        'studioAlbums' : 5,
        'soundtracks': 0,
        'musicVideos': 55,
        'musicalGenre': 'Pop, Dance'
    },
    'katy perry':{
        'age': 'October 25, 1984',
        'birthName': 'Katheryn Elizabeth Hudson',
        'birthLocation': 'California, U.S.',
        'studioAlbums' : 7,
        'soundtracks': 0,
        'musicVideos': 23,
        'musicalGenre': 'Hip-hop, R&B, Pop'
    },
    'taylor swift':{
        'age': 'December 13, 1989',
        'birthName': 'Taylor Alison Swift',
        'birthLocation': 'California, U.S.',
        'studioAlbums' : 11,
        'soundtracks': 0,
        'musicVideos': 61,
        'musicalGenre': 'Pop, Country, Folk'
    },
    'nina simone':{
        'age': 'February 21, 1933',
        'birthName': 'Eunice Kathleen Waymon',
        'birthLocation': 'California, U.S.',
        'studioAlbums' : 19,
        'soundtracks': 0,
        'musicVideos': 0,
        'musicalGenre': 'Jazz, Soul, R&B, Gospel'
    },
    'mariah carey':{
        'age': 'March 27, 1969',
        'birthName': 'Mariah Carey',
        'birthLocation': 'New York City, U.S.',
        'studioAlbums' : 15,
        'soundtracks': 2,
        'musicVideos': 90,
        'musicalGenre': 'R&B, Pop, Soul'
    },
    'barbra streisand':{
        'age': 'April 24, 1942',
        'birthName': 'Barbara Joan Streisand',
        'birthLocation': 'New York City, U.S.',
        'studioAlbums' : 37,
        'soundtracks': 15,
        'musicalGenre': 'Broadway, Traditional Pop, Jazz'
    },
    'janet jackson':{
        'age': 'May 16, 1966',
        'birthName': 'Janet Damita Jo Jackson',
        'birthLocation': 'New York City, U.S.',
        'studioAlbums' : 11,
        'soundtracks': 0,
        'musicVideos': 52,
        'musicalGenre': 'Pop, R&B, Hip-hop, Funk'
    },
    'tina turner':{
        'age': 'November 26, 1939',
        'birthName': 'Anna Mae Bullock',
        'birthLocation': 'Tennessee, U.S.',
        'studioAlbums' : 9,
        'soundtracks': 1,
        'musicVideos': 47,
        'musicalGenre': 'Pop, R&B, Soul'
    },
    'dua lipa':{
        'age': 'August 22, 1995',
        'birthName': 'Dua Lipa',
        'birthLocation': 'London, England',
        'studioAlbums' : 3,
        'soundtracks': 0,
        'musicVideos': 39,
        'musicalGenre': 'Pop, Disco, House'
    },
    'miley cirus':{
        'age': 'November 23, 1992',
        'birthName': 'Destiny Hope Cyrus',
        'birthLocation': 'Tennessee, U.S.',
        'studioAlbums' : 8,
        'soundtracks': 0,
        'musicVideos': 39,
        'musicalGenre': 'Pop, Rock, Country'
    },
    'lorde':{
        'age': 'November 7, 1996',
        'birthName': "Ella Marija Lani Yelich-O'Connor",
        'birthLocation': 'Auckland, New Zealand',
        'studioAlbums' : 3,
        'soundtracks': 1,
        'musicVideos': 14,
        'musicalGenre': 'Electro-Pop, Pop, Alt-Pop'
    },
    'sia':{
        'age': 'December 18, 1975',
        'birthName': "Sia Kate Isobelle Furler",
        'birthLocation': 'Adelaide, Australia',
        'studioAlbums' : 10,
        'soundtracks': 0,
        'musicVideos': 45,
        'musicalGenre': 'Pop, Alt-Pop'
    },
    'janelle monae':{
        'age': 'December 1, 1985',
        'birthName': "Janelle Monáe Robinson",
        'birthLocation': 'Kansas, U.S.',
        'studioAlbums' : 4,
        'soundtracks': 0,
        'musicVideos': 18,
        'musicalGenre': 'R&B, Pop, Hip-Pop, Funk'
    },
    'avryl lavigne':{
        'age': 'September 27, 1984',
        'birthName': "Avril Ramona Lavigne",
        'birthLocation': 'Ontario, Canada',
        'studioAlbums' : 7,
        'soundtracks': 0,
        'musicVideos': 40,
        'musicalGenre': 'Pop-Punk, Pop-Rock, Pop'
    },
    'dido':{
        'age': 'December 25, 1971',
        'birthName': "Florian Cloud de Bounevialle Armstrong",
        'birthLocation': 'London, England',
        'studioAlbums' : 6,
        'soundtracks': 0,
        'musicVideos': 24,
        'musicalGenre': 'Electro-Pop, Downtempo, Folktronica'
    },
    'billie eilish':{
        'age': 'December 18, 2001',
        'birthName': "Billie Eilish Pirate Baird O'Connell",
        'birthLocation': 'California, U.S.',
        'studioAlbums' : 3,
        'soundtracks': 0,
        'musicVideos': 32,
        'musicalGenre': 'Electro-Pop, Pop'
    },
    'sabrina carpenter':{
        'age': 'May 11, 1999 ',
        'birthName': "Sabrina Annlynn Carpenter",
        'birthLocation': 'Pennsylvania, U.S.',
        'studioAlbums' : 6,
        'soundtracks': 0,
        'musicVideos': 34,
        'musicalGenre': 'Pop, R&B'
    },
    'florence welch':{
        'age': 'August 28, 1986',
        'birthName': "Florence Leontine Mary Welch",
        'birthLocation': 'Pennsylvania, U.S.',
        'studioAlbums' : 5,
        'soundtracks': 0,
        'musicVideos': 33,
        'musicalGenre': 'Indie-Pop, Art-Pop'
    },
    'laufey':{
        'age': 'April 23, 1999',
        'birthName': "Laufey Lín Bīng Jónsdóttir",
        'birthLocation': 'Reykjavík, Iceland',
        'studioAlbums' : 3,
        'soundtracks': 0,
        'musicVideos': 14,
        'musicalGenre': 'Jazz-Pop, Art-Pop'
    },
    'bjork':{
        'age': 'November 21, 1965',
        'birthName': "Björk Guðmundsdóttir",
        'birthLocation': 'Reykjavík, Iceland',
        'studioAlbums' : 10,
        'soundtracks': 2,
        'musicVideos': 67,
        'musicalGenre': 'Art-Pop, Electronic, Experimental'
    },
    'gwen stefani':{
        'age': 'October 3, 1969 ',
        'birthName': "Gwen Renée Stefani",
        'birthLocation': 'California, U.S.',
        'studioAlbums' : 5,
        'soundtracks': 0,
        'musicVideos': 28,
        'musicalGenre': 'Pop, Ska-Punk, Pop-Rock'
    },
    'kimbra':{
        'age': 'March 27, 1990',
        'birthName': "Kimbra Lee Johnson",
        'birthLocation': 'Hamilton, New Zealand',
        'studioAlbums' : 5,
        'soundtracks': 0,
        'musicVideos': 8,
        'musicalGenre': 'Pop, Progressive Pop, R&B'
    },
    'aurora':{
        'age': 'June 15, 1996',
        'birthName': "Aurora Aksnes",
        'birthLocation': 'Stavanger, Norway',
        'studioAlbums' : 5,
        'soundtracks': 0,
        'musicVideos': 23,
        'musicalGenre': 'Art-Pop, Synth-Pop, Electro-Pop'
    },
    'amy lee':{
        'age': 'December 13, 1981',
        'birthName': "Amy Lynn Lee",
        'birthLocation': 'California, U.S.',
        'studioAlbums' : 5,
        'soundtracks': 0,
        'musicVideos': 18,
        'musicalGenre': 'Alt-Rock, Alt-Metal, Nu-Metal'
    },
    'patti smith':{
        'age': 'December 30, 1946',
        'birthName': "Patricia Lee Smith",
        'birthLocation': 'Illinois, U.S.',
        'studioAlbums' : 11,
        'soundtracks': 3,
        'musicVideos': 7,
        'musicalGenre': 'Punk-Rock, Art-Punk, Art-Rock'
    },
    'shirley manson':{
        'age': 'August 26, 1966 ',
        'birthName': "Shirley Ann Manson",
        'birthLocation': 'Edinburgh, Scotland',
        'studioAlbums' : 7,
        'soundtracks': 0,
        'musicVideos': 38,
        'musicalGenre': 'Rock, Alt-Rock, Rock'
    },
    'kate bush':{
        'age': '30 July 1958',
        'birthName': "Catherine Bush",
        'birthLocation': 'Kent, England',
        'studioAlbums' : 10,
        'soundtracks': 0,
        'musicVideos': 39,
        'musicalGenre': 'Art-Pop, Art-Rock'
    },
    'paloma faith':{
        'age': 'July 21, 1981',
        'birthName': "Paloma Faith Blomfield",
        'birthLocation': 'Kent, England',
        'studioAlbums' : 6,
        'soundtracks': 0,
        'musicVideos': 36,
        'musicalGenre': 'Pop, Soul, R&B, Disco'
    },
    'joss stone':{
        'age': 'April 11, 1987',
        'birthName': "Joscelyn Eve Stoker",
        'birthLocation': 'Kent, England',
        'studioAlbums' : 9,
        'soundtracks': 0,
        'musicVideos': 30,
        'musicalGenre': 'R&B, Soul, Reggae'
    },
    'hayley williams':{
        'age': 'December 27, 1988',
        'birthName': "Hayley Nichole Williams",
        'birthLocation': 'Mississippi, U.S.',
        'studioAlbums' : 8,
        'soundtracks': 0,
        'musicVideos': 30,
        'musicalGenre': 'Pop-Punk, Pop-Rock, Alt-Rock'
    },
    'missy elliot':{
        'age': 'July 1, 197',
        'birthName': "Melissa Arnette Elliott",
        'birthLocation': 'Virginia, U.S.',
        'studioAlbums' : 6,
        'soundtracks': 0,
        'musicVideos': 22,
        'musicalGenre': 'Hip-Hop, R&B, Rap'
    },
    'karen o':{
        'age': 'November 22, 1978',
        'birthName': "Karen Lee Orzolek",
        'birthLocation': 'Seoul, South Korea',
        'studioAlbums' : 6,
        'soundtracks': 0,
        'musicVideos': 15,
        'musicalGenre': 'Indie-Rock, Alt-Rock, Art-Rock'
    },
    'charli xcx':{
        'age': 'August 2, 1992',
        'birthName': "Charlotte Emma Aitchison",
        'birthLocation': 'Cambridge, England',
        'studioAlbums' : 6,
        'soundtracks': 1,
        'musicVideos': 30,
        'musicalGenre': 'Dance-Pop, Electro-pop, Pop'
    },
    'kelly clarkson':{
        'age': 'April 24, 1982',
        'birthName': "Kelly Brianne Clarkson",
        'birthLocation': 'Texas, U.S.',
        'studioAlbums' : 10,
        'soundtracks': 0,
        'musicVideos': 45,
        'musicalGenre': 'Pop, Pop-Rock, R&B'
    },
    'stevie nicks':{
        'age': 'May 26, 1948',
        'birthName': "Stephanie Lynn Nicks",
        'birthLocation': 'Arizona, U.S.',
        'studioAlbums' : 8,
        'soundtracks': 0,
        'musicVideos': 26,
        'musicalGenre': 'Pop, Rock, Folk'
    },
    'alanis morissette':{
        'age': 'June 1, 1974',
        'birthName': "Alanis Nadine Morissette",
        'birthLocation': 'Ontario, Canada',
        'studioAlbums' : 10,
        'soundtracks': 0,
        'musicVideos': 41,
        'musicalGenre': 'Alt-Rock, Rock, Indie-Pop'
    },
     "sinead oconnor":{
        'age': 'December 8, 1966',
        'birthName': "Sinéad Marie Bernadette O'Connor",
        'birthLocation': 'Dublin, Ireland',
        'studioAlbums' : 10,
        'soundtracks': 0,
        'musicVideos': 32,
        'musicalGenre': 'Alt-Rock, Rock, Indie-Pop'
    },
     "natalia lafourcade":{
        'age': 'February 26, 1984',
        'birthName': "María Natalia Lafourcade Silva",
        'birthLocation': 'Mexico City, Mexico',
        'studioAlbums' : 11,
        'soundtracks': 0,
        'musicVideos': 41,
        'musicalGenre': 'Pop-Rock, Latin-Rock, Folk'
    },
    'unknown':{
        'age': 'unknown',
        'birthName': 'unknown',
        'birthLocation': 'unknown',
        'studioAlbums' : 'unknown',
        'soundtracks': 'unknown',
        'musicalGenre': 'unknown'
    }
}

app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) =>{
   const divasName = request.params.name.toLowerCase()
   if(divas[divasName]){
        response.json(divas[divasName])
        
   }else{
        response.json(divas['unknown'])
   }
})

