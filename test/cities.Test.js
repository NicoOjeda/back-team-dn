const request = require("supertest");
const app = require("../app");
const assert = chai.assert;
let cityId = ""

describe("DELETE /cities", function () {
  it("City delete Successfully", function (done) {
    request(app)
      .delete(`/cities/${cityId}`)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });
});


