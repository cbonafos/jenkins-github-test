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

  describe("GET /api/posts/:id", () => {
    it("gets one post - happy path", async () => {
      const res = await request(app).get("/api/posts/1").expect(200);
      expect(res.body.id).toEqual(1);
    });
    it("gets one post - 404 error", async () => {
      const res = await request(app).get("/api/posts/999").expect(404);
      expect(res.body.error).toEqual("Post not found");
    });
  });

  describe("POST /api/posts", () => {
    it("creates a post - happy path", async () => {
      const res = await request(app)
        .post("/api/posts")
        .send({
          title: "Sample post",
          content: "This is a sample post",
        })
        .expect(201);

      expect(res.body.id).toEqual(3);
    });
    it("creates a post - missing fields", async () => {
      const res = await request(app)
        .post("/api/posts")
        .send({
          title: "Sample post",
        })
        .expect(400);
      expect(res.body.error).toEqual("Missing required field(s)");
    });
  });

  describe("PUT /api/posts/:id", () => {
    it("update a post", async () => {
      const res = await request(app)
        .put("/api/posts/1")
        .send({
          title: "Updated post",
          content: "This is an updated post",
        })
        .expect(201)
    })
  })

  test('Should delete a post', async () => {
    await request(app)
          .delete('/api/posts/1')
          .send()
          .expect(200)
  });

});
