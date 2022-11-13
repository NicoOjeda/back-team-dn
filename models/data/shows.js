let shows = [
    {
        "hotelId": "636d6fe9fe85fb66a3614786", 
        "name": "New York Philharmonic",
        "description": "7a de Bruckner, Mozart | van Zweden, Bronfman, New York Philharmonic",
        "photo": "https://res.cloudinary.com/nyphil/image/upload/c_scale,w_500/v1439322023/images/shared/david-geffen-hall/the-hall.jpg",
        "price": "100",
        "date": new Date("12/11/2022"),
        "userId":  "636e67a1b52745df79a56367" 
    },
    {
        "hotelId": "636d6fe9fe85fb66a3614786", 
        "name": "The Coronas",
        "description": "The Coronas are an Irish rock band that originated in Dublin.",
        "photo": "https://rockfm-cdnmed.agilecontent.com/resources/jpg/5/0/1584540554205.jpg",
        "price": "75",
        "date": new Date("05/12/2022") ,
        "userId":  "636e7b53f4d7aa583b71eb68" 
    },
    {
        "hotelId": "636d6fe9fe85fb66a3614788", 
        "name": "Rainbow Kitten Surprise",
        "description": "Rainbow Kitten Surprise is an alternative rock indie band, featuring lead vocalist Ela Melo, Darrick Keller (guitar, backup vocals)",
        "photo": "https://www.centralpark.com/downloads/9806/download/Kitten-Surprise.jpg?cb=e3a3673d6345bef6cfc29814f724e35b&w=1200",
        "price": "62",
        "date": new Date("12/09/2022"),
        "userId":  "636e7b53f4d7aa583b71eb68" 
    },
    {
        "hotelId": "636d6fe9fe85fb66a3614788", 
        "name": "Sampa The Great",
        "description": "Sampa the Great, is a Zambian singer, rapper and songwriter.",
        "photo": "https://i.ytimg.com/vi/MddG0quhiFY/maxresdefault.jpg",
        "price": "75",
        "date": new Date("05/11/2022"),
        "userId":  "636e7bb6f4d7aa583b71eb6a" 
    },
    {
        "hotelId": "636d6fe9fe85fb66a361478a", 
        "name": "Il Divo",
        "description": "Il Divo is a musical group comprised of a vocal quartet of male opera singers",
        "photo": "https://lastfm.freetls.fastly.net/i/u/ar0/91728e9801eedfbb24371cd4cef3660b.jpg",
        "price": "62",
        "date": new Date("11/10/2022"),
        "userId":  "636e67a1b52745df79a56367" 
    },
    {
        "hotelId": "636d6fe9fe85fb66a361478a", 
        "name": "MOTOMAMI WORLD TOUR",
        "description": "Motomami World Tour is the third concert tour by Spanish singer Rosalía in support of her third studio album.",
        "photo": "http://enagenda.com.ar/uploads/noticias/5/2022/04/20220418124019_rosalia.jpg",
        "price": "63",
        "date": new Date("01/09/2023"),
        "userId":  "636e7c1af4d7aa583b71eb6c" 
    },
    {
        "hotelId": "636d6fe9fe85fb66a361478b", 
        "name": "YOSHINORI HAYASHI",
        "description": "Electronic music producer and DJ his style goes beyond House, Techno and Disco",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBeS4bGN39-uRXOU0-aUJgGXs496tbfNo2voFVUcI3tkl554Bhxe-RA3wN-TmKx_M-c6I&usqp=CAU",
        "price": "95",
        "date": new Date("02/10/2023"),
        "userId":  "636e7c1af4d7aa583b71eb6c" 
    },
    {
        "hotelId": "636d6fe9fe85fb66a361478b", 
        "name": "Halestorm",
        "description": "Halestorm is an American rock band from Red Lion, Pennsylvania, consisting of lead vocalist and guitarist Lzzy Hale.",
        "photo": "https://www.billboard.com/wp-content/uploads/2022/07/Halestorm-press-2022-cr-jimmy-fontaine-billboard-1548.jpg?w=942&h=623&crop=1",
        "price": "63",
        "date": new Date("01/19/2023"),
        "userId":  "636e7b53f4d7aa583b71eb68" 
    },
    {
        "hotelId": "636d6fe9fe85fb66a361478d", 
        "name": "Sepultura",
        "description": "Sepultura is a Brazilian thrash metal band formed in 1984 in Belo Horizonte.",
        "photo": "https://arc-anglerfish-arc2-prod-elespectador.s3.amazonaws.com/public/QYVXVBCK7NDQ7A2HQJZN2ZZSHE.jpg",
        "price": "40",
        "date": new Date("01/02/2023"),
        "userId":  "636e67a1b52745df79a56367" 
    },
    {
        "hotelId": "636d6fe9fe85fb66a361478d", 
        "name": "Experience With Al Pacino LIVE ",
        "description": "AL PACINO UK TOUR 2023! · An Exclusive Live on-stage interview with the man himself, Al Pacino.",
        "photo": "https://southpasadenan.com/wp-content/uploads/south-pasadena-news-06-14-2022-al-pacino.jpg",
        "price": "72",
        "date": new Date("03/16/2023"),
        "userId":  "636e7bb6f4d7aa583b71eb6a" 
    },
    {
        "hotelId": "636d6fe9fe85fb66a3614790", 
        "name": "Eros Ramazzotti",
        "description": "A majestic live adventure that, will take EROS RAMAZZOTTI to some of the most important cities in the world",
        "photo": "https://www.eldiariodelapampa.com.ar/img/publicaciones/2022/07/07/alta/34809_0xh.jpg",
        "price": "80",
        "date": new Date("02/12/2023"),
        "userId":  "636e7c1af4d7aa583b71eb6c" 
    },
    {
        "hotelId": "636d6fe9fe85fb66a3614790", 
        "name": "Luísa Sonza",
        "description": "Luísa's music is characterized by being pop, but the singer adds some elements to give identity to her sound",
        "photo": "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/HHTVGKXK3JHH5OVNGP7GNMV6AQ.jpg",
        "price": "75",
        "date": new Date("12/10/2022"),
        "userId":  "636e7bb6f4d7aa583b71eb6a" 
    }
]

require('dotenv').config()
require('../../config/database')
const Show = require('../Show')

shows.forEach( element =>{
    Show.create({
        hotelId: element.hotelId, 
        name: element.name,
        description: element.description,
        photo: element.photo,
        price: element.price,
        date: element.date,
        userId:  element.userId 
    })
})