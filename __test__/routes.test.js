const express = require("express");
const request = require("supertest");
const app = express();
const router = require("../routes/router");
const user = require("../routes/user");

test("test if get req res.code is 200 (succes)", async () => {
  app.use("/", router);
  const res = await request(app).get("/");
  expect(res.statusCode).toBe(200);
  return true;
});

test("mock implementation", () => {
  const mock = jest.fn().mockImplementation(() => "bar");

  expect(mock("foo")).toBe("bar");
  expect(mock).toHaveBeenCalledWith("foo");
});
