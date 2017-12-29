
////////////// DEPENDENCIES AND MODULES /////////////////////////////
/////////////////////////////////////////////////////////////////////

import React, { Component } from 'react'
import axios from "axios"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './App.css'
import '../SideBar/SideBar.css'

import Layout from '../Layout/Layout.js'
import DashBar from '../DashBar/DashBar.js'
import AdBar from '../AdBar/AdBar.js'
import LandingPage from '../LandingPage/LandingPage.js'






////////////// COMPONENT ////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

class App extends Component {


//////////// CONSTRUCTOR ////////////////////////////////////////////

  constructor(props) {
    super(props)
    this.state = {
      user: {
        // username: localStorage.getItem('user'),
        // photo_url: localStorage.getItem('photo'),
        // password: localStorage.getItem('password'),
        username: "",
        photo_url: "",
        password: "",
        inventory: []
      },
      // searchPhrase: null
    }

    // this.logOutUser = this.logOutUser.bind(this)

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
         // localStorage.setItem("user", res.data.username)
         // localStorage.setItem("photo", res.data.photo_url)
         // localStorage.setItem("password", res.data.password)
         // localStorage.setItem("inventory", res.data.inventory)
         console.log(`User ${this.state.user.username} signed in.`)
       })

     }






////////////// RENDER LOGIC /////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

  render() {

////////////// RENDER RETURN ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

    return (

      <Router>
        <div className="App">

          <Layout />

          <div className="SideBar">
            <DashBar user={this.state.user}/>
            <AdBar />
          </div>


          <Switch>

            <Route path="/" render={(props) => {
              return (
                <div>
                  <LandingPage />
                </div>
              )
            }}/>


          </Switch>


        </div>
      </Router>

    )


  }



// component end
}


////////////// EXPORT MODULE ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
export default App;






/////////////////////////////////////////////////////////////////////
