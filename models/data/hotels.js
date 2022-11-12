let hotels = [
    {
        "name": "Hilton Garden Inn",
        "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/68/0e/5a/exterior.jpg?w=1100&h=-1&s=1",
        "capacity":  18000,
        "citiId": "636d52b11b58293a27c69f1d",
        "userId":  "636d24d7ea4ed429429463a8", 
    },
    {
        "name": "Hotel Artemide",
        "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/9d/77/93/entrance-hotel-artemide.jpg?w=1200&h=-1&s=1",
        "capacity":  10000,
        "citiId": "636d52b11b58293a27c69f1e",
        "userId":  "636d24d7ea4ed429429463a8", 
    },
    {
        "name": "Grand Hyatt Berlin",
        "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/22/da/21/grand-hyatt-berlin.jpg?w=1200&h=-1&s=1",
        "capacity":  4500,
        "citiId": "636d52b11b58293a27c69f1f",
        "userId":  "636d24d7ea4ed429429463a8", 
    },
    {
        "name": "Andronis Luxury Suites",
        "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/f3/3c/84/pool-outdoor.jpg?w=1100&h=-1&s=1",
        "capacity":  6000,
        "citiId": "636d52b11b58293a27c69f20",
        "userId":  "636d24d7ea4ed429429463a9", 
    },
    {
        "name": "Holland Casino Amsterdam Centrum",
        "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/fa/2f/21/holland-casino-amsterdam.jpg?w=1200&h=-1&s=1",  
        "capacity":  12000,
        "citiId": "636d52b11b58293a27c69f21",
        "userId":  "636d24d7ea4ed429429463a9",  
    },
    {
        "name": "Park Hotel Tokyo",
        "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/41/30/04/corner-king-room-tokyo.jpg?w=1200&h=-1&s=1",
        "capacity":  1500,
        "citiId": "636d52b11b58293a27c69f22",
        "userId":  "636d24d7ea4ed429429463a9",  
    },
    {
        "name": "Dear Hotel Madrid",
        "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/54/95/36/dear-hotel.jpg?w=1200&h=-1&s=1",
        "capacity":  18000,
        "citiId": "636d52b11b58293a27c69f23",
        "userId":  "636d24d7ea4ed429429463a6", 
    },
    {
        "name": "Hippodrome Casino",
        "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/88/11/2e/hippodrome-casino.jpg?w=1200&h=-1&s=1",
        "capacity":  9000,
        "citiId": "636d52b11b58293a27c69f24",
        "userId":  "636d24d7ea4ed429429463a6", 
    },
    {
        "name": "Ibis Bangkok Riverside",
        "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/c3/9b/98/exterior-view.jpg?w=1100&h=-1&s=1",
        "capacity":  4500,
        "citiId": "636d52b11b58293a27c69f25",
        "userId":  "636d24d7ea4ed429429463a6", 
    },
    {
        "name": "Kempinski Seychelles Resort",
        "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/5b/03/5c/kempinski-seychelles.jpg?w=1200&h=-1&s=1", 
        "capacity":  6300,
        "citiId": "636d52b11b58293a27c69f26",
        "userId":  "636d24d7ea4ed429429463a7", 
    },
    {
        "name": "Jupiter Lisboa Hotel",
        "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/03/d8/ca/jupiter-lisboa-hotel.jpg?w=1200&h=-1&s=1",
        "capacity":  3900,
        "citiId": "636d52b11b58293a27c69f27",
        "userId":  "636d24d7ea4ed429429463a7",  
    },
    {
        "name": "Citybox Oslo",
        "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/a0/28/06/lobby.jpg?w=1200&h=-1&s=1",
        "capacity":  3800,
        "citiId": "636d52b11b58293a27c69f28",
        "userId":  "636d24d7ea4ed429429463a7",  
    }

]

require('dotenv').config()
require('../../config/database')
const Hotel = require('../Hotel')

hotels.forEach(element=>{
    Hotel.create({
        name: element.name,
        photo: element.photo,
        capacity:  element.capacity,
        citiId: element.citiId,
        userId:  element.userId,
    })
})


