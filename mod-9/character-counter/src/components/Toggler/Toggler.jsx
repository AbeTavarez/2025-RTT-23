import { useState } from "react";

function Toggler() {
  const [isOn, setIsOne] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOne(!isOn)}>Toggle Status</button>

      <p>Status: {isOn ? "ON" : "OFF"}</p>

      {isOn && (
        <div style={{ backgroundColor: "green" }}>
          This content is only visible when the status is ON
        </div>
      )}
    </div>
  );
}

export default Toggler;
