import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class LocationForm extends Component{
 
  

  formEvent = (event) =>{
    event.preventDefault();
    this.props.update(event.target.value)
    
  }

  getLocation = async (event) => {
    event.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.props.searchQuery}&format=json` 
    let response = await axios.get(url);
    let location = response.data[0]

    this.props.handleSubmit(location);
  };
  
  render(){
    return(
      <>
      <Form>
        <Form.Group>
          <Form.Label>City Explorer</Form.Label>
          <Form.Control onChange={this.formEvent} type='text' placeholder="Enter Location" />
          <Form.Text>
            Where are you looking for?
          </Form.Text>
        </Form.Group>
        <Button onClick={this.getLocation} variant="primary" type="submit">
          Explore!
        </Button>{' '}
      </Form>
      </>
    )
  }

};

export default LocationForm; 