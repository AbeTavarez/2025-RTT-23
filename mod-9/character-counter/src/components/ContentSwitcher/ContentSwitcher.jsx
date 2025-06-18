import { useState } from "react";

function ContentSwitcher() {
  const [contentType, setContentType] = useState("text");

  return (
    <div>
      <div>
        <button onClick={() => setContentType("text")}>Text</button>
        <button onClick={() => setContentType("image")}>Image</button>
        <button onClick={() => setContentType("video")}>Video</button>
      </div>
      <div>
        {contentType === "text" && <p>This is some text content.</p>}
        {contentType === "image" && (
          <img
            src="https://placehold.co/600x400?text=Hello+World"
            alt="Placeholder"
          />
        )}
        {contentType === "video" && (
          <video src="https://via.placeholder.com/640x360" controls />
        )}
      </div>
    </div>
  );
}

export default ContentSwitcher;
