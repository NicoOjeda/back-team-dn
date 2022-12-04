let reactions =[
    { 
        itineraryId: "637047722cb04c0f88635c31",
        name: "like!",
        icon: "https://img.icons8.com/ios/512/facebook-like.png",
        iconBack:

          "https://cdn-icons-png.flaticon.com/512/1048/1048799.png",
        userId: ["638661f460562cb63a240290"],

    },
    {
        itineraryId: "637047722cb04c0f88635c31",
        name: "dislike!",
        icon: "https://cdn-icons-png.flaticon.com/512/880/880613.png",
        iconBack:
          "https://cdn-icons-png.flaticon.com/512/880/880561.png",
        userId: ["638661f460562cb63a240290"],

    },
    {
        itineraryId: "637047722cb04c0f88635c31",
        name: "Love",
        icon: "https://cdn-icons-png.flaticon.com/512/6005/6005668.png",
        iconBack:
          "https://cdn-icons-png.flaticon.com/512/2961/2961957.png",
        userId: ["638661f460562cb63a240290"],

    },
    {
        itineraryId: "637047722cb04c0f88635c31",
        name: "surprise",
        icon: "https://cdn-icons-png.flaticon.com/512/4768/4768475.png",
        iconBack:
          "https://cdn-icons-png.flaticon.com/512/4768/4768474.png",
        userId: ["638661f460562cb63a240290"],
    }
]


require('dotenv').config()
require('../../config/database')
const Reaction = require("../Reactions")

reactions.forEach( element =>
        Reaction.create({
           itineraryId: element.itineraryId,
           name: element.name,
           icon:element.icon,
           iconBack: element.iconBack,
           userId:element.userId 
        })
    )



