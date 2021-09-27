import { Component } from "react";
import LocationForm from './LocationForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import City from './City'
import Weather from './Weather'
import Movie from './Movie'
import axios from "axios";

let server = 'http://localhost:3001'

class Main extends Component {
  constructor(props){
    super(props)
    this.state={
      searchQuery: '',
      location: {},
      map: null,
      error: false,
      weather: [],
      movie: []
    } 
  }

getLocation = async (event) => {
  event.preventDefault();
  try {
    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json` 
    let response = await axios.get(url);
    let location = response.data[0] 
    this.setState({location: location, error: false});
      
    let map = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=13&size=900x900` 
    this.setState({map: map});

    let weatherBitIoCall = `${process.env.REACT_APP_WEATHER_API_KEY}/weather?lat=${this.state.location.lat}&lon=${this.state.location.lon}`
    let weatherBitData = await axios.get(weatherBitIoCall);
    if(weatherBitData.status !== 200){
      this.setState({
        error: true
      })
    } else{
      let weatherReport = weatherBitData.data.data;
      this.setState({weather: weatherReport});
    }

    let movie = `${process.env.REACT_APP_MOVIE_API_KEY}/movie?searchQuery=${this.state.searchQuery}` 
    let movieData = await axios.get(movie);
    this.setState({movie: movieData.data.data});

    
  }catch {
      this.setState({
        error: true
      });
    };
};

  handleChange = (userSearchQuery) =>{
    this.setState({
      searchQuery: userSearchQuery
    })
  };


  render(){
    return(
      <>
      <LocationForm location={this.state.location} searchQuery={this.state.searchQuery} update={this.handleChange} getLocation={this.getLocation}/>
      <City testError={this.state.error} locationUpdate={this.state.location} map={this.state.map} />
      <Weather weather={this.state.weather} handleWeather={this.handleWeather}/>
      <Movie movie={this.state.movie}/>
      </>
    );
  } 
};

export default Main;