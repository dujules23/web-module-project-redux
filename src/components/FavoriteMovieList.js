import React from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { removeFavorites } from '../actions/favortiesActions'




const FavoriteMovieList = (props) => {
    // const { displayFavorites } = props
    // console.log(props)

    const removeFavorites = (id) => {
        props.removeFavorites(Number(props.movies.id))
    }
    
    return (   
        <div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            props.favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span className="material-icons" onClick={removeFavorites}>remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>
    );
}

// Mapping functions for react-redux connect
const mapStateToProps = (state) => {
    // console.log(state.favoritesList)
    return {
        favorites: state.favoritesList.favorites,
        movies: state.movieList.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        removeFavorites: (id) => dispatch(removeFavorites(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteMovieList);