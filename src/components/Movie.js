import { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'


class Movie extends Component {
  render(){
    return(
      <>
      {this.props.movie.map((movie,index) => {
        return(
      <Container>
              <Card key={index} style={{ width: '35rem' }}>
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Img variant="top" src={movie.image_url}/>
                  <Card.Text>
                  {movie.overview}
                  {movie.vote_average}
                  {movie.vote_count}
                  {movie.popularity}
                  {movie.released_on}
                  </Card.Text>
                </Card.Body>
              </Card>
              </Container>
        )
      })};
      </>
    )
  }
}
export default Movie;