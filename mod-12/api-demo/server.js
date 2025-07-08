import express from "express";

const app = express();
const PORT = 3000;

//? ==== Middleware ==== //

// global middleware
app.use((req, res, next) => {
    console.log(`Custom logger middleware. URL ${req.url}: Method ${req.method}`);
    console.log('Headers: ',  req.headers);
    
    next();
});

// global middleware
app.use((req, res, next) => {
  req.requestTime = Date.now(); // Add a new property to the request object
  console.log("Middleware 1: Time set: " + req.requestTime);
  next();
});

// This middleware will ONLY run for requests whose path starts with '/admin'
app.use("/admin", (req, res, next) => {
  if (req.query.user === "admin") {
    console.log("Admin access granted.");
    next();
  } else {
    res.status(403).send("Forbidden: You must be an admin.");
  }
});

app.use(express.json());
app.use(express.static("public"));

//? ======== Routes ================//

/**
 * POST
 */
app.post("/users", (req, res) => {
  console.log(req.body);
  res.send(`Creating a new user ${req.body.name}`);
});

/**
 * GET /
 * @description return a hello message
 */
app.get("/", (req, res) => {
  res.send("<h1>Welcome to my API!</h1>");
});

/**
 * GET /users/:userId
 * @description return a user byt the user id
 */
app.get("/users/:userId", (req, res) => {
  const { userId } = req.params;
  console.log(userId);
  res.send(`Sending user data for user id ${userId}`);
});

/**
 * GET /books/:bookId/chapter/:chapterNum
 */
app.get("/books/:bookId/chapter/:chapterNum", (req, res) => {
  const { bookId, chapterNum } = req.params;

  console.log("Book ID:", bookId);
  console.log("Chapter Num:", chapterNum);
  res.send(`Sending data for book ${bookId} chapter ${chapterNum}`);
});

/**
 * GET /users/profile/:username
 */
app.get("/users/profile/:username", (req, res) => {
  console.log(req.params);
  res.send(`Sending data for user: ${req.params.username}`);
});

/**
 * GET /search ?q&sort
 */
app.get("/search", (req, res) => {
  console.log(req.query);
  const searchTerm = req.query.q || "nothing";
  const sort = req.query.sort || "none";

  // query our db for the searchTerm and sort them by sort

  if (req.query.q && req.query.sort) {
    res.send(`Sending data about ${searchTerm} sorted by ${sort}`);
  } else {
    res.send(`all products`);
  }
});

/**
 * GET /admin
 */
app.get('/admin', (req, res) => {
    res.send("sending admin data")
})

/**
 * Error middleware
 */
app.use((req, res, next) => {
  console.log(`the end`);
  res.send("Error resource not found");
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
