import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}

// Set state to our initialState
const reducer = (state = initialState, action) => {
    // console.log(state);
    switch(action.type) {
       
        case DELETE_MOVIE:
            console.log("Deleting Movie", state.appTitle)
            return {
                ...state,
                movies: state.movies.filter(item=>(action.payload !== item.id))
            }
        case ADD_MOVIE:
            const newMovie = {movies: action.payload}
            console.log("adding movie", state.movies)
            return{
                ...state,
                movies: [...state.movies, newMovie]
            }
        default:
            return state;
    }
}

export default reducer;