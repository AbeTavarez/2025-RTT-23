import express from "express";
import {
  getMovieDetails,
  searchMovies,
} from "../controllers/movieController.js";
const router = express.Router();

// middleware (if need it)
router.use(express.json());

//: /api/movies/search
router.get("/search", searchMovies);

//: /api/movies/:id
router.get("/:id", getMovieDetails);

export default router;


