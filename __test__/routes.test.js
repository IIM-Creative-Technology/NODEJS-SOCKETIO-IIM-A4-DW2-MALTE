const express = require("express");
const request = require("supertest");
const app = express();
const Database = require("../config/db");
const config = require("../config/config");
const User = require("../models/user");
const router = require("../routes/router");
const user = require("../routes/user");
const userData = require("./db.test.json");

it("test if get req /user res.code is 200 (succes)", async () => {
  app.use("/user", router);
  const res = await request(app).get("/user");
  expect(res.statusCode).toEqual(200);
});

describe("User API", () => {
  test("test if get req res.code is 200 (succes)", async () => {
    app.use("/", router);
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
  });
});

it("test if get req /user res.code is 200 (succes)", async () => {
  app.use("/api-docs", router);
  const res = await request(app).get("/api-docs");
  expect(res.statusCode).toEqual(301);
});

test("mock implementation", () => {
  const mock = jest.fn().mockImplementation(() => "test");

  expect(mock("essai")).toBe("test");
  expect(mock).toHaveBeenCalledWith("essai");
});
