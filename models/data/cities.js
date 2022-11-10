
  
 let citys =[
    {
        
        "photo": "https://images6.alphacoders.com/469/469423.jpg",
       "name": "New York",
       "continent": "America",
       "population": 19236756869,
       "userId":"636d24d7ea4ed429429463a8"


    },{
      
        "photo": "https://historia.nationalgeographic.com.es/medio/2019/12/11/coliseo-roma_2924b6ae_1280x720.jpg",
       "name": "Rome",
       "continent": "Europa",
       "population": 156723869,
       "userId":"636d24d7ea4ed429429463a9" 
    },{
       
        "photo": "https://images5.alphacoders.com/708/708191.jpg",
       "name": "Berlín",
       "continent": "Europa",
       "population": 166923869,
       "userId":"636d24d7ea4ed429429463a6" 
    },{
        
        "photo": "https://a.cdn-hotels.com/gdcs/production18/d1838/041ae6b1-0a88-4c22-a648-53a22dd4a006.jpg?impolicy=fcrop&w=800&h=533&q=medium",
       "name": "Santorini",
       "continent": "Europa",
       "population": 1976723869,
       "userId":"636d24d7ea4ed429429463a7" 
    },{
       
        "photo": "https://a.cdn-hotels.com/gdcs/production112/d1899/d77bcff2-a859-4785-bdb1-3b15a0887607.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",
       "name": "Amsterdam",
       "continent": "Europa",
       "population": 1454923869,
       "userId":"636d24d7ea4ed429429463a6"
    },{
  
        "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/16/a6/88/con-la-primavera-in-giappone.jpg?w=700&h=-1&s=1",
       "name": "Tokyo",
       "continent": "Asia",
       "population": 176767923869,
       "userId":"636d24d7ea4ed429429463a7" 
    },{
       
        "photo": "https://images3.alphacoders.com/673/thumb-1920-673159.jpg",
       "name": "Madrid",
       "continent": "Europa",
       "population": 6441923869,
       "userId":"636d24d7ea4ed429429463a8" 
    },{
       
        "photo": "https://images8.alphacoders.com/666/666428.jpg",
       "name": "London",
       "continent": "Europa",
       "population": 417923869,
       "userId":"636d24d7ea4ed429429463a9" 
    },{
        
        "photo": "http://www.playasasia.com/IMG/arton19.jpg",
       "name": "Bangkok",
       "continent": "Asia",
       "population": 156923869,
       "userId":"636d24d7ea4ed429429463a6" 
    },{
        "photo": "https://wallpaperaccess.com/full/677202.jpg",
       "name": "Seychelles",
       "continent": "Africa",
       "population": 4923869,
       "userId":"636d24d7ea4ed429429463a7"
    },{
        "photo": "https://wallpaperaccess.com/full/1423575.jpg",
       "name": "Lisboa",
       "continent": "Europa",
       "population": 31923869,
       "userId":"636d24d7ea4ed429429463a8"
    },{
  
        "name": "Oslo",
        "continent": "Europa",
        "photo": "https://wallpaperaccess.com/full/3824901.jpg",
       "population": 21923869,
       "userId":"636d24d7ea4ed429429463a9"
    },
]


require('dotenv').config()
require('../../config/database')
const City = require('../City')

citys.forEach( element =>
    City.create({

        name: element.name,
        continent: element.continent,
        photo: element.photo,
        population: element.population,
        userId: element.userId,
        
    })
)

