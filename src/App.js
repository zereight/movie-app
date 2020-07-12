import React from "react";
import axios from "axios";

import Movie from "./Movie";

// import "./App.css";

class App extends React.Component {

  constructor(props){
    super(props);
  }

  state = { // 미래에 슬 변수를 꼭 여기에 저장하지 않아도 된다.
    isLoading : true,
    movies : []
  }

  getMovies = async () => {
      const {data:{data:{movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
      // console.log(movies.data.data.movies)
      this.setState( {movies, isLoading:false} );
  }

  componentDidMount(){
    this.getMovies();
  }

  render(){

    const {isLoading, movies} = this.state;

    return (
    <section className = "container">
      {
        isLoading ? 
          <div className="loader">
            <span className="loader__text">Loading</span>
          </div>
        : 
        <Movie movies={movies}/>
      }
    </section>
    );
  }
}

export default App;
