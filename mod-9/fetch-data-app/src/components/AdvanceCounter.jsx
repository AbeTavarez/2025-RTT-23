import { useState, useEffect } from "react";

function AdvanceCounter() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  useEffect(() => {}, []);

  const handleIncrease = () => {
    setCount(count + 1);
    setHistory([...history, count + 1]);
  };

  const handleDecrease = () => {
    setCount(count - 1);
    setHistory([...history, count - 1]);
  };

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={handleDecrease}>-</button>
      <button onClick={handleIncrease}>+</button>

      <div>
        {history.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default AdvanceCounter;
