import React from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';




const FavoriteMovieList = (props) => {
    // const { displayFavorites } = props
    console.log(props)
    
    return (   
        <div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            props.favorites.map(movie=>{
                return <div key={movie.id}>
                    {console.log(movie)}
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span className="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>
    );
}

// Mapping functions for react-redux connect
const mapStateToProps = (state) => {
    console.log(state.favoritesList)
    return {
        favorites: state.favoritesList.favorites,
        movies: state.movieList.movies
    }
}


export default connect(mapStateToProps)(FavoriteMovieList);