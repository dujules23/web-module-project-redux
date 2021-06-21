import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { deleteMovie } from '../actions/movieActions'
import { addFavorites } from '../actions/favortiesActions'

const Movie = (props) => {
    const { id } = useParams();
    const { push } = useHistory();

    // const movies = [];
    const movie = props.movies.find(movie=>movie.id===Number(id));
    console.log(Number(id))

    const handleDelete = () => {
        props.deleteMovie(Number(id))
        push('/movies')
    }
    
    const handleFavorites = () => { 
        props.addFavorites(movie, props.displayFavorites)
        console.log(props.displayFavorites)
    }
    
    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>
                        
                        <section>
                            <span className="m-2 btn btn-dark" onClick={handleFavorites}>Favorite</span>
                            <span className="delete"><input type="button" className="m-2 btn btn-danger" value="Delete" onClick={handleDelete} /></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

// Mapping functions for react-redux connect:

// mapStateToProps to read state
const mapStateToProps = (state) => {
    console.log(state.favoritesList.displayFavorites)
    return {
        movies: state.movieList.movies,
        displayFavorites: state.favoritesList.displayFavorites
    }
}


// mapDispatchToProps to Update State
const mapDispatchToProps = (dispatch) => {
    return {
        deleteMovie: (id) => dispatch(deleteMovie(id)),
        addFavorites: (movie) => dispatch(addFavorites(movie))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);