import { Component } from "react";



class City extends Component {

  
  render() {
    
    return(
       <>
        {this.props.locationUpdate &&
        <>
          <h2>The City Is: {this.props.locationUpdate.display_name}</h2>
          <p> The Latitude is: {this.props.locationUpdate.lat}</p>
          <p> The Latitude is: {this.props.locationUpdate.lon}</p>
        </>
        }
       </>
    )
  }
}







export default City;