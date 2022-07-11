import React, { Component } from 'react'
import ReactDOM from 'react-dom/client';
import './App.css'

export class App extends Component {

  options = ['Maria Anders', 'Maria Larsson' , 'Maria Pontes' , 'Maria Bertrand']

  state = {
    ser_arr : []
  }
  
  handleChange = () => {
    const data  = document.getElementById('inp').value.toUpperCase()
    if(data!==''){
      let newArr = []
      this.options.map(ele => {
      if(ele.toUpperCase().includes(data))  newArr = [...newArr , ele]
    })
      this.setState({
        ser_arr : newArr
      })
    }
    else{
      this.setState({
        ser_arr : []
      })
    }
    
  };
  render() {
    return (
      <center>
        <input id='inp' type="text" onChange={this.handleChange}></input>
        <div id="res">
          {
            this.state.ser_arr.map(ele =>
              <h3>{ele}</h3>
            )
          }
        </div>
      </center>
    )
  }
}

export default App