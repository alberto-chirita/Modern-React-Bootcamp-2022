import React, { useState } from "react";

function CounterHooks() {
  const [count, setCount] = useState(0);
  // 1. The piece of state (count)
  // 2. The function to update that piece of state (setCount)

  return (
    <div className="CounterClass">
      <h1>The Count Is: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
    </div>
  );
}

export default CounterHooks;
