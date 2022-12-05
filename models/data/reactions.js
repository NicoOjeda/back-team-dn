const Itinerary = require("../Itinerary");


let reactions = [
  {
    name: "like!",
    icon: "https://cdn-icons-png.flaticon.com/512/1048/1048799.png",
    iconBack: "https://img.icons8.com/ios/512/facebook-like.png",
    userId: ["638661f460562cb63a240290"],
  },
  {
    name: "dislike!",
    icon: "https://cdn-icons-png.flaticon.com/512/880/880613.png",
    iconBack: "https://cdn-icons-png.flaticon.com/512/880/880561.png",
    userId: ["638661f460562cb63a240290"],
  },
  {
    name: "Love",
    icon: "https://cdn-icons-png.flaticon.com/512/6005/6005668.png",
    iconBack: "https://cdn-icons-png.flaticon.com/512/2961/2961957.png",
    userId: ["638661f460562cb63a240290"],
  },
  {
    name: "surprise",
    icon: "https://cdn-icons-png.flaticon.com/512/4768/4768475.png",
    iconBack: "https://cdn-icons-png.flaticon.com/512/4768/4768474.png",
    userId: ["638661f460562cb63a240290"],
  },
];

require("dotenv").config();
require("../../config/database");
const Reaction = require("../Reactions");


async function createReactions (){
  try {
    let query = {}
    let itineraries = await Itinerary.find(query)
    itineraries.forEach((event) => 
    reactions.forEach((element) => 
    Reaction.create({
          itineraryId: event._id,
          name: element.name,
          icon: element.icon,
          iconBack: element.iconBack,
          userId: element.userId
    })
    
    
    )
    )
  } catch (error) {
    console.log(error)
  }
  }
  createReactions()