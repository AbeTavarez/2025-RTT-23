import express from "express";
import axios from "axios";
import { productsApiClient } from "./api/productsApiClient.js";

const app = express();
const PORT = 3000;

// ====== Middleware =========//
app.use(express.json());

/**
 * GET /
 */
app.get("/", (req, res) => {
  res.send("Welcome to my Proxy Server");
});

/**
 * GET /api/products
 */
app.get("/api/products", async (req, res) => {
  try {
    const apiResponse = await productsApiClient.get("/products");
    const products = apiResponse.data;
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

/**
 * POST /api/posts
 */
app.post("/api/posts", async (req, res) => {
  try {
    const newPostData = req.body;

    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      newPostData,
    );

    res.status(201).json(response.data);
  } catch (error) {
    console.error("Error creating post:", error.message);
    res.status(500).json({ message: "Failed to create post." });
  }
});

/**
 * GET /api/users
 */
app.get("/api/users", async (req, res) => {
  try {
    const apiResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );

    const users = apiResponse.data;

    const transformedUsers = users.map((user) => ({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
    }));

    res.json(transformedUsers);
  } catch (error) {
    console.error("Error fetching or transforming users:", error);
    // Send a generic server error response
    res
      .status(500)
      .json({ message: "Failed to fetch data from the external API." });
  }
});


/**
 * GET /api/posts/:id
 */
app.get("/api/posts/:id", async (req, res) => {
  const { id } = req.params;
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

  try {
    const apiResponse = await fetch(url);

    if (apiResponse.status === 404) {
      return res.status(404).json({ message: `Post with id ${id} not found.` });
    }

    if (!apiResponse.ok) {
      throw new Error(`External API returned status ${apiResponse.status}`);
    }

    const post = await apiResponse.json();
    res.json(post);
  } catch (error) {
    console.error("API request failed:", error.message);
    res
      .status(502)
      .json({ message: "Failed to fetch data from the external API." });
  }
});

app.listen(PORT, () => console.log(`Proxy server running on port: ${PORT}`));
