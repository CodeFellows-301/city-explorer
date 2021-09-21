import { Component } from "react";
import LocationForm from './components/LocationForm'
import City from './components/City'


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      searchQuery: '',
      location: {},
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
      location: location
    });
  }

  render(){
    
    return(
      <>
      <LocationForm searchQuery={this.state.searchQuery} handleSubmit={this.handleSubmit} update={this.handleChange}/>
      <City locationUpdate={this.state.location} />
      </>
    );
  }
  
  
}


export default App;