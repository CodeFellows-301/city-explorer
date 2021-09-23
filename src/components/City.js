import { Component } from "react";
import Card from 'react-bootstrap/Card'



class City extends Component {
  
  render() {
    
    return(
       <>
       {this.props.locationUpdate.display_name &&
        <Card style={{ width: '35rem' }}>
          <Card.Img variant="top" src={this.props.map} />
          <Card.Body>
            <Card.Title>{this.props.locationUpdate.display_name}</Card.Title>
            <Card.Text>
            The Latitude is: {this.props.locationUpdate.lat}
            The Latitude is: {this.props.locationUpdate.lon}
            </Card.Text>
          </Card.Body>
        </Card>
        }
        {this.props.testError &&
         <Card style={{ width: '18rem' }}>
         <Card.Body>
           <Card.Title> error: Unable to geocode</Card.Title>
           <Card.Text>
           Please Enter A Valid City
           </Card.Text>
         </Card.Body>
       </Card>
        }
      </>
    )
  }
}

export default City;