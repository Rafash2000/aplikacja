import Form from './Form';
import './App.css';
import Result from './Result';
import { Component } from 'react';

class App extends Component {

  state = {
    value:'',
    data:'',
    miasto:'',
    wschod:'',
    zachod:'',
    temp:'',
    wiatr:'',
    cisnienie:'',
    err:false,
  }
  
  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  city = e => {
    e.preventDefault()
    const API = 'https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=3f47f75dd423f2cd71c8e03cab60db75';
    fetch (API)
     .then(response => {if(response.ok){
        return response
     }
    })
    .then(response => response.json)
    .then(data => {
      console.log()
      const time = new Date().toLocaleString()
      .this.setState({
        
        data:time,
        miasto:this.state.value,
        wschod:data.sys.sunrise,
        zachod:data.sys.sunset,
        temp:data.main.temp,
        wiatr:data.wind,
        cisnienie:data.main.pressure,
        
        err:false
      })
    })
    /*
    .catch(err => {
      console.log()
      
      .this.setState({
        err:true
      })
      
      }
      */
    }
    

  

  render(){
    return (
      <div className="App">
        <Form value={this.state.value}
        change = {this.handleInputChange}
        submit = {this.city}
        />
        <Result weather={this.state}/>
      </div>
    );
  }
  
}

export default App;
