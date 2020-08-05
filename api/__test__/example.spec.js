const app = require("../server"); // Link to server file
const supertest = require("supertest");
const request = supertest(app);
const assert = require("assert");

// Jest cheat sheet: https://devhints.io/jest

describe("TEST /api/home", function () {
  it("gets the home endpoint", async (done) => {
    //const response = await request.get("/api/home");
    supertest(app).get("/api/home").expect(200);
    //expect(response.status).toBe(200);
    //expect(response.text).toBeDefined();
    done();
  });
});

describe("TEST /api/contacts", function () {

  it("gets the contacts endpoint", async (done) => {
    supertest(app).get("/api/contacts").expect(200);
    done();
  });

  it("responds with json", async function (done) {
    supertest(app)
      .get("/api/contacts")
      //.expect("Content-Type", /text/)
      .expect(200, done);
  });

  it("post a contact test", function (done) {
    supertest(app)
      .post("/api/contacts/")
      .send({
        Name: "John",
        Email: "john@eample.com",
        Subject: "Question",
        Message: "Do you have child glasses?",
      })
      .expect("Content-Type", "text/html; charset=utf-8")
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});

describe("TEST /api/products", function () {
  it("gets the contacts endpoint", async (done) => {
    supertest(app).get("/api/products").expect(200);
    done();
  });
})
