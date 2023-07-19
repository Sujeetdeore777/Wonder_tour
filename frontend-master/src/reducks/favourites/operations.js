import API from "../../API";
import {
  addFavouritesAction,
  fetchFavouritesAction,
  deleteFavouritesAction,
} from "./actions";
const api = new API();

const FAVOURITES_KEY = "FAVOURITES_KEY";
export const fetchFromLocalStorage = () => {
  return async (dispatch) => {
    let favouritsJSON = localStorage.getItem(FAVOURITES_KEY);
    let favourites = [];
    if (favouritsJSON) {
      favourites = JSON.parse(favouritsJSON);
    }
    dispatch(fetchFavouritesAction(favourites));
  };
};
export const addFavourite = (place) => {
  return async (dispatch, getState) => {
    let prevFavourites = getState().favourites.list;
    const nextFavorites = [place, ...prevFavourites];
    setToLocalStorage(nextFavorites);
    dispatch(addFavouritesAction(nextFavorites));
  };
};
export const deleteFavourite = (id) => {
  return async (dispatch, getState) => {
    let prevFavourites = getState().favourites.list;
    const nextFavourites = prevFavourites.filter((image) => image.id !== id);
    setToLocalStorage(nextFavourites);
    dispatch(deleteFavouritesAction(nextFavourites));
  };
};
export const setToLocalStorage = (favourites) => {
  localStorage.setItem(FAVOURITES_KEY, JSON.stringify(favourites));
};