import request from "supertest";

import app from "../src/app";

describe("/api/posts routes tests", () => {
  // GET all posts
  describe("GET /api/posts", () => {
    it("gets all posts", async () => {
      const res = await request(app).get("/api/posts").expect(200);
      expect(Array.isArray(res.body)).toBe(true);
    });
  });
});
