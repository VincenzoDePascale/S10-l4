import { ADD } from "../actions/TypeDef";

const initialState = {
  list: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        list: {
          ...state.list,
          content: [...state.list.content, action.payload],
        },
      };

    case "action2":
      return {
        ...state,
        list: {
          ...state.list,
          content: [
            "",
            /*filter per cancellare roba tramite index*/
          ],
        },
      };

    default:
      return state;
  }
};
