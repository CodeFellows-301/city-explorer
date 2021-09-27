import { Component } from 'react'
import Card from 'react-bootstrap/Card'

class WeatherDay extends Component{
  render(){
    return (
      <>
      {this.props.weather.map((weather,index) => {
        return(
          <Card key={index} style={{ width: '35rem' }}>
              <Card.Title>Todays Date is: {weather.time}</Card.Title>
              <Card.Text>
              The weather report for today is: {weather.description}
              </Card.Text>
          </Card>
         )
      })}
      </>
    );
  }
}
export default WeatherDay;