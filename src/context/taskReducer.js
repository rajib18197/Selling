export const data = [
  { id: 1, text: "Learn React JS", done: true },
  { id: 2, text: "Learn Next JS", done: false },
  { id: 3, text: "Learn Node JS", done: false },
];

const getNextId = function (data) {
  const maxId = data.reduce(
    (acc, cur) => (acc > cur.id ? acc : cur.id),
    data[0].id
  );
  //   console.log(maxId);

  return maxId + 1;
};

export function taskReducer(state, action) {
  switch (action.type) {
    case "addTask":
      return [
        ...state,
        { id: getNextId(state), text: action.payload, done: false },
      ];

    case "editTask":
      return state.map((task) =>
        task.id === action.payload.id ? { ...action.payload } : { ...task }
      );

    case "deleteTask":
      return state.filter((task) => task.id !== action.payload);

    default:
      throw new Error("Unknown Action");
  }
}
