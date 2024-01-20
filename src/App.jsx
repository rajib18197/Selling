import { useState } from "react";
import AppLayout from "./ui/AppLayout";
import Counter from "./ui/Counter";
import Messenger from "./ui/Messenger";
import Todo from "./ui/Todo";

export default function App() {
  const [isPlayerA, setIsPlayerA] = useState(false);

  // return <AppLayout />;
  return (
    <div className="flex flex-col gap-2">
      {/* Component gets removed, state is reset means component render for the very first time and all of its child also render for the first time even if child components is memoized */}

      {/* {isPlayerA ? (
        <Counter title={"Player A"} key={"player A"} />
      ) : (
        <Counter title={"Player B"} key={"player B"} />
      )} */}

      {/* Component is re-render and dont get completely remove, state is kept */}
      {/* {isPlayerA ? (
        <Counter title={"Player A"} />
      ) : (
        <Counter title={"Player B"} />
      )}

      <button
        className="p-1 bg-pink-600 w-max"
        onClick={() => setIsPlayerA((cur) => !cur)}
      >
        Change Player
      </button> */}
      {/* <Messenger /> */}
      <Todo />
    </div>
  );
}

// In a nutshell, I figured out a simple but mind-blowing truth: "Your reality is defined by what you believe."

// As soon as this hit me, I began taking myself seriously. I started thinking positively about myself.

// For instance, I started believing that I could conquer the world; I just needed to break things down according to my abilities.

// Problem 15: Middle of the Linked List

// Problem Description:
// Given the head of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node.

// Problem Link: https://lnkd.in/gEdp2QXx
// My Solution: https://lnkd.in/gVAgq6q3

// Category: LinkedList
// Difficulty: Easy

// #problemsolving2024
