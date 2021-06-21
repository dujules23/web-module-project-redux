import { TOGGLE_FAVORITES, ADD_FAVORITES, REMOVE_FAVORITES } from '../actions/favortiesActions'

const initialState = {
    favorites: [],
    displayFavorites: true
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITES:
            // console.log(state.displayFavorites)
            return{
                ...state,
                displayFavorites: !state.displayFavorites
            }
        case ADD_FAVORITES:
            return{
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case REMOVE_FAVORITES:
            // return state and the favorites list but filtered based of the action.payload does not equal the selected item.id
            console.log( "removed favorite", state.favorites)
            return {
                ...state,
                favorites: state.favorites.filter(item => (action.payload !== item.id))
            }
        default:
            return state;
    }
}

export default favoritesReducer;