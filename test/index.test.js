const app = require("../app");
const chai = require("chai");
const assert = chai.assert;
const request = require("supertest");

describe("GET /api/itineraries", function () {
  // it - test - cases

  it(" [] ", function () {

    const idItineraries = "636d52b11b58293a27c69f1f";

    request(app)
        .get("/api/itineraries/" + idItineraries)
        .expect((response) => {
            assert.isArray(response.body.response,1,"array"," al fiin");
      })
      .end(function(err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
  });



});
describe('post /api/cities', function(done){
  it('must respond with 404 status code', function(done){
      request(app)
      .post('/api/cities')
      .send({})
      .expect((response) => {
        assert.equal(response.status,400);
  })
      .end(function (err,res){
          console.log(err);
          if(err) return done(err);
          return done()
      })
  })

  

})



describe('post /api/cities', function(done){
  it('escriba su nombre mediante letras', function(done){
      request(app)
      .post('/api/cities')
      .send({})
      .expect((response) => {
        assert.equal(response.status,400);
  })
      .end(function (err,res){
          console.log(err);
          if(err) return done(err);
          return done()
      })
  })

  

})


