import { Component } from "react";
import WeatherDay from './WeatherDay'

class Weather extends Component {
   
  render() {
  
    return(
      <>
       <WeatherDay weather={this.props.weather}/>
      </>
    )
  };
};
export default Weather;