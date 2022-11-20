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


