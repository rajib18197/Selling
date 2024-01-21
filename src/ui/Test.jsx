import { useState } from "react";
function Counter1({ showCounter = true }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = "counter";
  if (hover) {
    className += " hover";
  }

  return (
    <>
      {showCounter ? (
        <div
          className={className}
          onPointerEnter={() => setHover(true)}
          onPointerLeave={() => setHover(false)}
        >
          <h1>{score}</h1>
          <button onClick={() => setScore(score + 1)}>Add one</button>
        </div>
      ) : (
        <p>Take A Break</p>
      )}
      {}
    </>
  );
}

// App.jsx
// import { useState } from 'react';
// import Counter1 from './components/Counter1';
// import "./Style.css";
export default function Test() {
  const [showB, setShowB] = useState(true);
  return (
    <div>
      <Counter1 showCounter={showB} />
      <label>
        <input
          type="checkbox"
          checked={showB}
          onChange={(e) => {
            setShowB(e.target.checked);
          }}
        />
        {showB ? "Hide" : "Show"}
      </label>
    </div>
  );
}
