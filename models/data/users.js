let users =[
    {
        "name":  "Nicolas",
        "lastName": "Ojeda",
        "photo": "https://modaellos.com//wp-content/uploads/2017/11/cortes-tipo-rostro-ovalado-istock.jpg",
        "age": 37,
        "email": "nico_ojeda86@hotmail.com",
        "password": "elefante88",
        "code": "22ff22",
        "verified": true,
        "logged": true,
    },
    {
        "name": "David",
        "lastName": "Chaban",
        "photo": "https://i.pinimg.com/236x/3f/7e/57/3f7e57fd2ba5f05154bb226369666a34--aaron-kwok-hot-asian-men.jpg",
        "age": 23,
        "email": "davidchaban@gmail.com",
        "password": "tortuga66",
        "code": "23ff23",
        "verified": true,
        "logged": true,
    },
    {
        "name": "Luis",
        "lastName": "Rodriguez",
        "photo": "https://i.pinimg.com/736x/14/f2/0e/14f20ec449b70bbd47641fc948cad163.jpg",
        "age": 38,
        "email": "luisrodriguez@gmail.com",
        "password": "pulguita22",
        "code": "33ff33",
        "verified": true,
        "logged": true,
    },
    {
        "name": "Eduardo",
        "lastName": "Varela",
        "photo": "https://i.pinimg.com/550x/ab/80/49/ab804996e354c09fc764748e94b5955a.jpg",
        "age": 26,
        "email": "eduvarela@gmail.com",
        "password": "pantera44",
        "code": "66jj66",
        "verified": true,
        "logged": true,
    },
]

require('dotenv').config()
require('../../config/database')
const User = require('../User')

users.forEach( element =>
    User.create({
        name: element.name,
        lastName: element.lastName,
        photo: element.photo,
        age: element.age,
        email: element.email,
        password : element.password,
        code: element.code,
        verified: element.verified,
        logged: element.logged,
    })
)