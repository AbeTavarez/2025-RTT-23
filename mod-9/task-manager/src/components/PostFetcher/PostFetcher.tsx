import { useState, useEffect } from "react";

function PostFetcher() {
  // 1.Use useState to manage:
  // post (to store the fetched post data, initially null or undefined).
  const [post, setPost] = useState<null | undefined>(null);
  // loading (boolean, initially true).
  const [loading, setLoading] = useState(true);
  // error (to store any error message, initially null).
  const [error, setError] = useState<string | null>(null);

  // 2.Use useEffect to fetch the data when the component mounts.
  useEffect(() => {
    // Set loading to false after the fetch completes (successfully or with an error).

    // If successful, store the fetched post in the post state.
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => {
        setPost(json);
        setLoading(false);
      })
      .catch((err) => {
        // If there’s an error, store the error message in the error state.
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (<div>
    {/* 3. Render the UI: */}
    {/* If loading is true, display “Loading post…”. */}
    {/* If error is present, display the error message. */}
    {/* If post data is available, display its title and body. */}
  </div>);
}

export default PostFetcher;
