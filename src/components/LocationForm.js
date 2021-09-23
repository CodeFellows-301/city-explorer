import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class LocationForm extends Component{
 
  formEvent = (event) =>{
    event.preventDefault();
    this.props.update(event.target.value)
  }

  render() {
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
        <Button onClick={this.props.getLocation} variant="primary" type="submit">
          Explore!
        </Button>{' '}
      </Form>
      </>
    )
  }
};

export default LocationForm; 