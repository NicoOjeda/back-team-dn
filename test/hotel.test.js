const app = require('../app')
const chai = require('chai');
const assert = chai.assert;
const request = require('supertest');

describe('GET /api/hotels?', function(done){
    it('must respond with 404 status code', function(done){
        request(app)
        .get('/api/hotels?name=aaaa')
        .expect(404)
        .end(function (err,res){
            console.log(err);
            if(err) return done(err);
            return done()
        })
    })

    

})

describe('POST /api/hotels', function(done){
    it('must send a number in capacity field',function(done){
        request(app)
            .post('/api/hotels/')
            .send({
                "name": "Hotel tu hermanastra2",
                "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/93/ac/12/hotel-edison.jpg?w=1100&h=-1&s=1",
                "capacity":  448,
                "citiId": "636d52b11b58293a27c69f1d",
                "userId":  "636d24d7ea4ed429429463a8"
            })
            .expect(response => {
                assert.isNumber(response.body.capacity, 'is number')
            })
            .end(function(err,res){
                if(err){
                    return done(err);
                }
               return done()
        })
    })

    it('must respond with 201 status code', function(done){
        request(app)
        .post('/api/hotels/')
        .send({
            "name": "Hotel tu hermanastra2",
            "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/93/ac/12/hotel-edison.jpg?w=1100&h=-1&s=1",
            "capacity":  448,
            "citiId": "636d52b11b58293a27c69f1d",
            "userId":  "636d24d7ea4ed429429463a8"
        })
        .expect(201)
        .end(function(err,res){
            if(err){
                return done(err);
            }
            return done()
        })
    })
})

describe('delete /api/shows/:id', function(done){
    it('must delete a show respond with 200 status code', function(done){
        request(app)
        .delete('/api/shows/63849372f25739a3fcf6673f')
        .expect(200)
        .end(function (err,res){
            console.log(err);
            if(err) return done(err);
            return done()
        })
    })

    

})

