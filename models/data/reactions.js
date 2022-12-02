


let reactions =[


    { 
        itineraryId: " 637047722cb04c0f88635c2b",
        name: "I don't like!",
        icon: "https://img.icons8.com/ios/512/facebook-like.png",
        iconBack:
          "https://cdn-icons-png.flaticon.com/512/1048/1048799.png",
        userId: ["636e67a1b52745df79a56367"],

    },
    {
        itineraryId: "636d52b11b58293a27c69f1f",
        name: "I do not like!",
        icon: "https://cdn-icons-png.flaticon.com/512/880/880613.png",
        iconBack:
          "https://cdn-icons-png.flaticon.com/512/880/880561.png",
        userId: ["636e67a1b52745df79a56367"],

    },
    {
        itineraryId: "637047722cb04c0f88635c2f",
        name: "I do not like",
        icon: "https://cdn-icons-png.flaticon.com/512/6005/6005668.png",
        iconBack:
          "https://cdn-icons-png.flaticon.com/512/2961/2961957.png",
        userId: ["636e67a1b52745df79a56367"],

    },
    {
        itineraryId: "637047722cb04c0f88635c33",
        name: "I do not like ",
        icon: "https://cdn-icons-png.flaticon.com/512/4768/4768475.png",
        iconBack:
          "https://cdn-icons-png.flaticon.com/512/4768/4768474.png",
        userId: ["636e67a1b52745df79a56367"],

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



