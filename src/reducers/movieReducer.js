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
            // Created new movie object that contains the previous action.payload and adds a new Id for the new movie, The id is then added to the previous list of movies and populated on the movie list.
            const newMovie = {
                ...action.payload,
                id: state.movies.reduce((acc,movie)=>Math.max(acc,movie.id),0)+1,
            }
            console.log("adding movie", newMovie, state.movies)
            return{
                ...state,
                movies: [...state.movies, newMovie]
            }
        default:
            return state;
    }
}

export default reducer;