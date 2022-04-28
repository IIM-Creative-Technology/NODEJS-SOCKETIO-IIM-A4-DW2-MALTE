const express = require("express");
const request = require("supertest");
const app = express();
const router = require("../routes/router");
const user = require("../routes/user");

//jest all user modules
jest.mock("../routes/user.js");

test("test if get req res.code is 200 (succes)", async () => {
  app.use("/", router);
  const res = await request(app).get("/");
  expect(res.statusCode).toBe(200);
});

test("mock implementation", () => {
  const mock = jest.fn().mockImplementation(() => "bar");

  expect(mock("foo")).toBe("bar");
  expect(mock).toHaveBeenCalledWith("foo");
});

test("calls user.list, GET all users", () => {
  const mock = jest.fn().mockImplementation(() => "User");
  app.use("/", router);
  expect(app.list).toBe(undefined);
});

const getFirstAlbumTitle = require("./index");
const axios = require("axios");

jest.mock("app");

it("returns the title of the first album", async () => {
  app.get.mockResolvedValue({
    data: [
      {
        userId: 1,
        id: 1,
        title: "My First Album",
      },
      {
        userId: 1,
        id: 2,
        title: "Album: The Sequel",
      },
    ],
  });

  const title = await getFirstAlbumTitle();
  expect(title).toEqual("My First Album");
});
