import { TOGGLE_FAVORITES, ADD_FAVORITES } from '../actions/favortiesActions'

const initialState = {
    favorites: [],
    displayFavorites: true
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITES:
            console.log(state.displayFavorites)
            return{
                ...state,
                displayFavorites: !state.displayFavorites
            }
        case ADD_FAVORITES:
            return{
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        default:
            return state;
    }
}

export default favoritesReducer;