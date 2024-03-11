import {
  ADD_TASK,
  DELETE_TASK,
  DONE_TASK,
  UPDATE_TASK,
} from "../Constants/actionsType";

const initialState = {
  tasks: [
    {
      id: Math.random(),
      description: "test",
      done: false,
    },
  ],
};

export let TaskReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: Math.random(), done: false, description: payload },
        ],
      };
    case DONE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          task.id == payload ? { ...task, done: !task.done } : task
        ),
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          task.id == payload
            ? { ...task, description: payload.description }
            : task
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task, index) => task.id !== payload),
      };
    default:
      return state;
  }
};
