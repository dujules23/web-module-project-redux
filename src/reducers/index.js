import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoritesReducer from './favoritesReducer';

// Using Combine Reducer to have state controlled here
export const rootReducer = combineReducers({
    movieList: movieReducer,
    favoritesList: favoritesReducer,
})