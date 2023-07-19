import { 
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';
import {connectRouter, routerMiddleware} from "connected-react-router";
import thunk from 'redux-thunk';

import { PlacesReducer } from '../places/reducers';
import { CategoriesReducer } from '../categories/reducers';
import { FavourotesReducer } from '../favourites/reducers';
export default function createStore(history) {
    return reduxCreateStore(
        combineReducers({
            router: connectRouter(history),
            places:PlacesReducer,
            categories:CategoriesReducer,
            favourites: FavourotesReducer,
            
       }),
       compose(
        applyMiddleware(
            routerMiddleware(history),
            thunk
        ),
        // DEBUG MODE
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
       )
    )
}