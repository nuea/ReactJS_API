import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded:false,
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
        this.setState({
          isLoaded:true,
          items: json,
        })
    })
  }

  render() {

    var { isLoaded, items} = this.state;

    if(!isLoaded){
      return <div>Loading...</div>
    }
    else{
      return (
        <div className="App">
          <h1>ReactJS Get Data From API</h1>
          <table>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">City</th>
              <th scope="col">Phone</th>
              <th scope="col">Website</th>
            </tr>
            {items.map(item => (
              <tr>
                <td scope="row">{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.city}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
              </tr>
              ))}
            </table>
        </div>
      );
    }
    
  }
}

export default App;
