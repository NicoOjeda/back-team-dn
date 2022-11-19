const app = require("../app");
const chai = require("chai");
const assert = chai.assert;
const request = require("supertest");

describe("GET /api/itineraries", function () {
  // it - test - cases

  it("array traido", function () {

    const idItineraries = "636d52b11b58293a27c69f1f";

    request(app)
        .get("/api/itineraries" + idItineraries)
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

  // it('Deberia traerme una sola comida', function(done) {

  //   const idComida = '636d5775c67698ccc47127d9';
    
  //   request(app)
  //       .get("/api/itineraries" + idItineraries)
  //       .expect(response => {
  //           assert.lengthOf(response.body.response, 1)
  //       })
  //       .end(function(err, res) {
  //           if(err){
  //               return done(err);
  //           }

  //           done();
  //       })


      // })


});
