import { useDrag } from "react-dnd";
// import { ItemTypes } from "./Constants";

/**
 * Your Component
 */
export default function Dragabble({ isDragging, text }) {
  const [{ opacity, background }, dragRef] = useDrag(
    () => ({
      type: "DRAGRACE",
      item: { text },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
        background: "red",
      }),
    }),
    []
  );
  return (
    <div ref={dragRef} style={{ opacity, background }}>
      {text}
    </div>
  );
}
