import { Component } from "react";
import LocationForm from './LocationForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import City from './City'
import Weather from './Weather'
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
      weather: []
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
    let mapData = await axios.get(map);
    let renderMap = mapData.config.url
    this.setState({map: renderMap});

    let weatherServer = `${server}/weather?searchQuery=${this.state.searchQuery}&lat=${this.state.location.lat}&lon=${this.state.location.lon}`
    let weatherData = await axios.get(weatherServer);
    if(weatherData.status !== 200){
      this.setState({
        error: true
      })
    } else{
      let weatherReport = weatherData.data;
      this.setState({weather: weatherReport});
    }

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
    console.log(this.state.location);
    
    return(
      <>
      <LocationForm location={this.state.location} searchQuery={this.state.searchQuery} update={this.handleChange} getLocation={this.getLocation}/>
      <City testError={this.state.error} locationUpdate={this.state.location} map={this.state.map} />
      <Weather weather={this.state.weather} handleWeather={this.handleWeather}/>
      </>
    );
  }
  
  
}

export default Main;