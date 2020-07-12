import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"

class Movie extends React.Component {

    constructor(props){
        super(props);
    }
    // this.props.movies.map( (m)=>{return (<h1 key={m.id}>{m.title}</h1>);} )
    render() {
        console.log(this.props.movies)
        return (
            <div className="movies">
                {this.props.movies.map(
                    (m) => {
                        return (
                            <div className="movie" key={m.id}>
                                <img src={m.medium_cover_image} alt={m.title} title={m.title}/>
                                <div className="movie__data">
                                    <h3 className="movie__title">{m.title}</h3>
                                    <h5 className="movie__year">{m.year}</h5>
                                    <p className="movie__summary">{m.summary}</p>
                                </div>
                            </div>
                        );
                    }
                )}
            </div>
        );
    }

};

Movie.prototype = {
    movies : PropTypes.object.isRequired
}

export default Movie;