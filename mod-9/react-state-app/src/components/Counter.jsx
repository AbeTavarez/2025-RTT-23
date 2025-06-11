import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    // fetch some data...
    setCounter(counter + 1);
  };

  const decrement = () => {
    // fetch some data...
    setCounter((prevCount) => prevCount - 1);
    // setCounter(prevCount => prevCount - 5);
  };

  return (
    <>
      <h2 className="text-center font-bold text-4xl">Counter {counter}</h2>

      <div className="flex justify-between m-10">
        <button onClick={increment}>increment</button>

        <button onClick={decrement}>decrement</button>

        <button onClick={() => setCounter(counter + 5)}>Add 5</button>

        <button onClick={() => setCounter(0)}>Reset Count</button>
      </div>
    </>
  );
}

export default Counter;
