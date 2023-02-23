import { ADD, REMOVE } from "../actions/TypeDef";

const initialState = {
  content: [],
};

const FavouritesRed = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        content: [...state.content, action.payload],
      };

    case REMOVE:
      return {
        ...state,
        //!constrolla questo filter
        content: state.content.filter((e) => e !== action.payload),
      };

    default:
      return state;
  }
};

export default FavouritesRed;
