import { Component } from "react";
import LocationForm from './components/LocationForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import City from './components/City'


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      searchQuery: '',
      location: {},
      map: null,
      error: false
    } 
  }


  handleChange = (userSearchQuery) =>{
    this.setState({
      searchQuery: userSearchQuery
    })
  }
  
  handleSubmit = (location) =>{
    this.setState({
      location: location,
      error: false
    });
  }
  
  handleMapSubmit = (renderMap) =>{
    this.setState({
      map: renderMap
    });
  }

  handleError = () =>{
    this.setState({
      error: true
    });
  }


  render(){
    
    return(
      <>
      <LocationForm location={this.state.location}error={this.handleError} searchQuery={this.state.searchQuery} handleSubmit={this.handleSubmit} handleMapSubmit={this.handleMapSubmit} update={this.handleChange}/>
      <City testError={this.state.error} locationUpdate={this.state.location} map={this.state.map} />
      </>
    );
  }
  
  
}


export default App;