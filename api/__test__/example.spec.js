const app = require("../server"); // Link to server file
const supertest = require("supertest");
const request = supertest(app);
const assert = require("assert");
const User = require('../models/User');

// Jest cheat sheet: https://devhints.io/jestnpmn

describe("TEST /api/home", function () {
  it("gets the home endpoint", async (done) => {
    //const response = await request.get("/api/home");
    supertest(app).get("/api/home").expect(200).expect('Content-Type', /json/);
    //expect(response.status).toBe(200);
    //expect(response.text).toBeDefined();
    done();
  });

  it("gets the content length", async (done) => {
    supertest(app).get("/api/home").expect('Content-Length', '8');
    done();
  });
});

describe("TEST /api/contacts", function () {

  it("gets the contacts endpoint", async (done) => {
    supertest(app).get("/api/contacts").expect(200);
    done();
  });

  it("responds with json", async (done) => {
    supertest(app).get("/api/contacts").expect('Content-Type', /json/);
    done();
  });

  it("post a contact test", function (done) {
    supertest(app)
      .post("/api/contacts/")
      .send({
        Name: "John",
        Email: "john@example.com",
        Subject: "Question",
        Message: "Do you have child glasses?"
      })
      .expect("Content-Type", /text/)
      .expect(200);
    done();
  });
});

describe("TEST /api/products", function () {
  it("gets the products endpoint", async (done) => {
    supertest(app).get("/api/products").expect(200);
    done();
  });

  it("responds with json", async (done) => {
    supertest(app).get("/api/products").expect('Content-Type', /json/);
    done();
  });
})

describe("TEST /api/services", function () {
  it("gets the services endpoint", async (done) => {
    supertest(app).get("/api/services").expect(200);
    done();
  });

  it("responds with json", async (done) => {
    supertest(app).get("/api/services").expect('Content-Type', /json/);
    done();
  });
})

describe("TEST /api/login", function () {
  it("doesn't get the login endpoint", async (done) => {
    supertest(app).get("/api/login").expect(404);
    done();
  });

  it("does get login endpoint", async (done) => {
    supertest(app).get("/api/login").send({
      email: 'rashaali84@gmail.com',
      pass: 123
    }).expect(200);
    done();
  });
})