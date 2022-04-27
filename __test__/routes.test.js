const express = require("express");
const request = require("supertest");
const app = express();
const router = require("../routes/router");
const user = require("../routes/user");

test("test if get req res.code is 200 (succes)", async () => {
  app.use("/", router);
  const res = await request(app).get("/");
  expect(res.statusCode).toBe(200);
});

test("test if user CRUD req res.code is 200 (succes)", async () => {
  app.use("/user", user.createRoutes);
  const res = await request(app).get("/user");
  expect(res.statusCode).toBe(200);
});