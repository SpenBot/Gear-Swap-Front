
////////////// DEPENDENCIES AND MODULES /////////////////////////////
/////////////////////////////////////////////////////////////////////

import React, { Component } from 'react';
import axios from "axios";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';







////////////// COMPONENT ////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

class App extends Component {


//////////// CONSTRUCTOR ////////////////////////////////////////////

  constructor(props) {
    super(props)
    this.state = {
      user: {
        username: localStorage.getItem('user'),
        photo_url: localStorage.getItem('photo'),
        password: localStorage.getItem('password'),
        inventory: localStorage.getItem('inventory')
      },
      searchPhrase: null
    }

    this.logOutUser = this.logOutUser.bind(this)

  }






////////////// METHODS ///////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

  logOutUser(e) {
    e.preventDefault();
    this.setState({user: ''})
    localStorage.setItem('user', '')
    localStorage.setItem('photo', '')
    localStorage.setItem('password', '')
    console.log("User logged out.")
  }



  signInUser(e) {
    e.preventDefault()

    axios.get(`http://localhost:4000/api/users/${this.state.searchPhrase}`)
      .then((res) => {
        this.setState({user: res.data})
        localStorage.setItem("user", res.data.username)
        localStorage.setItem("photo", res.data.photo_url)
        localStorage.setItem("password", res.data.password)
        console.log(`User ${this.state.user.username} signed in.`)
      })
    }



  handleSearchInput(e) {
    this.setState({searchPhrase: e.target.value})
  }





////////////// LIFECYCLE ////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

  componentDidMount() {

    axios.get(`http://localhost:4000/api/users/spenser.holstein@gmail.com`)
       .then((res) => {
         this.setState({user: res.data})
         localStorage.setItem("user", res.data.username)
         localStorage.setItem("photo", res.data.photo_url)
         localStorage.setItem("password", res.data.password)
         localStorage.setItem("inventory", res.data.inventory)
         console.log(`User ${this.state.user.username} signed in.`)
       })

     }






////////////// RENDER ///////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

  render() {


////////////// RETURN ///////////////////////////////////////////////

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Gear Swap</h1>
          <p>USER: {this.state.user.username}</p>
          <img src={this.state.user.photo_url} height="100" width="100"/>
          <p>PASSWORD: {this.state.user.username}</p>
          <p>Inventory: {this.state.user.inventory} </p>
        </header>
      </div>
    );


  }



// component end
}


////////////// EXPORT ///////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
export default App;






/////////////////////////////////////////////////////////////////////
