import { ADD, REMOVE } from "./TypeDef";

export const AddToFavourites = (e) => ({ type: ADD, payload: e });
export const RemoveToFavourites = (e) => ({ type: REMOVE, payload: e });
