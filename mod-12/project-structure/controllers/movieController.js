import { moviesClient } from "../api/moviesClient.js";

/**
 * Search for movie
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const searchMovies = async (req, res) => {
  try {
    const title = req.query.title;
    console.log('Query: ',title);

    if (!title) {
      return res
        .status(400)
        .json({ error: "Title query parameter is required" });
    }

    // send request to omdb: http://www.omdbapi.com/?s=batman&apiKey=
    const moviesResult = await moviesClient.get(`/?s=${title}`);
    
    // const moviesResult = await moviesClient.get(`/?s=${title}&apiKey=${process.env.OMDB_API_KEY`);

    res.json(moviesResult.data);

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export function getMovieDetails(req, res) {
  res.send("ok");
}
