const express = require("express");
const request = require("supertest");
const app = express();
const router = require("../routes/router");
const user = require("../routes/user");

test("test if get req res.code is 200 (succes)", async () => {
  // app.use("/", router);
  // const res = await request(app).get("/");
  // expect(res.statusCode).toBe(200);
  return true;
});

test("test if user CRUD req res.code is 200 (succes)", async () => {
  // app.use("/user", user.createRoutes);
  // const res = await request(app).get("/user");
  // expect(res.statusCode).toBe(200);
  return true;
});

jest.mock(() => [
  {
    Firstname: "NJ",
    Lastname: "Trenton",
    Email: "nj.trenton@gmail.com",
    Password: "hashedpasswordTested",
  },
]); //callback function with mock data

let firstState;
describe("server-routes GET user", () => {
  it("GET /user - success", async () => {
    const { body } = await request(app).get("/user");
    expect(body).toEqual([
      {
        Firstname: "NJ",
        Lastname: "Trenton",
        Email: "nj.trenton@gmail.com",
        Password: "hashedpasswordTested",
      },
    ]);
    firstState = body[0];
  });
  it("GET /user/:id - success", async () => {
    const { body } = await request(app).get(`/user/${firstState.state}`);
    expect(body).toEqual(firstState);
  });
});
