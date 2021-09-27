import { Component } from "react";
import Movie from './Movie'

class Movies extends Component {
  render() {
    return(
      <>
        <Movie movie={this.props.movie}/>
      </>
    )
  };
};
export default Movies;