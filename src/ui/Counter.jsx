import { memo, useEffect, useState } from "react";

export default function Counter({ title }) {
  console.log(6666);
  const [count, setCount] = useState(0);

  useEffect(function () {
    console.log(111);
  }, []);

  return (
    <div className="flex gap-6">
      <h2>
        {title} - {count}
      </h2>
      <button
        className="p-1 bg-pink-800 w-max"
        onClick={() => setCount((c) => c + 1)}
      >
        Increment
      </button>

      <Other />
    </div>
  );
}

// const Other = memo(function Other() {
//   console.log(9999);
//   useEffect(function () {
//     console.log(222);
//   }, []);

//   return (
//     <div>
//       <h1>Experiment</h1>
//     </div>
//   );
// });
function Other() {
  console.log(9999);
  useEffect(function () {
    console.log(222);
  }, []);

  return (
    <div>
      <h1>Experiment</h1>
    </div>
  );
}
