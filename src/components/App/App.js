
////////////// DEPENDENCIES AND MODULES /////////////////////////////
/////////////////////////////////////////////////////////////////////

import React, { Component } from 'react'
import axios from "axios"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './App.css'
import '../SideBar/SideBar.css'

import Layout from '../Layout/Layout.js'
import Footer from '../Footer/Footer.js'

import DashBar from '../DashBar/DashBar.js'
import AdBar from '../AdBar/AdBar.js'

import LandingPage from '../LandingPage/LandingPage.js'
import UserPage from '../UserPage/UserPage.js'
import ProvidersPage from '../ProvidersPage/ProvidersPage.js'
import EquipmentPage from '../EquipmentPage/EquipmentPage.js'







////////////// COMPONENT ////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

class App extends Component {



//////////// CONSTRUCTOR ////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

  constructor(props) {
    super(props)
    this.state = {
      user: {

        username: '',
        zipcode: '',
        photo_url: '',
        password: '',
        inventory: []
      },
      // searchPhrase: null
    }

    this.logOutUser = this.logOutUser.bind(this)
  }






////////////// METHODS ///////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

  logOutUser(e) {
    e.preventDefault();
    this.setState({user: ''})
  }


  signInUser(e) {
    e.preventDefault()
    axios.get(`https://mighty-shelf-35127.herokuapp.com/api/users${this.state.searchPhrase}`)
      .then((res) => {
        this.setState({user: res.data})
      })
    }



  handleSearchInput(e) {
    this.setState({searchPhrase: e.target.value})
  }





////////////// LIFECYCLE ////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

  componentDidMount() {

    axios.get(`https://mighty-shelf-35127.herokuapp.com/api/users/spenser.holstein@gmail.com`)
       .then((res) => {
         this.setState({user: res.data})
         console.log(`User ${this.state.user.username} signed in.`)
         console.log(this.state.user.zipcode)
         console.log(this.state.user.password)
         console.log(this.state.user.inventory)
         console.log(this.state.user)
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


          <Layout user={this.state.user} logOutUser={this.logOutUser}/>


            <Switch>



              <Route path="/account" render={(props) => {
                return (
                  <div className="AppMain">

                    <div className="SideBar">
                      <AdBar />
                    </div>

                    <UserPage user={this.state.user} />

                  </div>
                )
              }}/>



              <Route path="/providers" render={(props) => {
                return (
                  <div className="AppMain">

                    <div className="SideBar">
                      <DashBar user={this.state.user} />
                      <AdBar />
                    </div>

                    <ProvidersPage />

                  </div>
                )
              }}/>



              <Route path="/equipment" render={(props) => {
                return (
                  <div className="AppMain">

                    <div className="SideBar">
                      <DashBar user={this.state.user} />
                      <AdBar />
                    </div>

                    <EquipmentPage />

                  </div>
                )
              }}/>



              <Route path="/" render={(props) => {
                return (
                  <div className="AppMain">

                    <div className="SideBar">
                      <DashBar user={this.state.user}/>
                      <AdBar />
                    </div>

                    <LandingPage />

                  </div>
                )
              }}/>


            </Switch>


          {/* <Footer /> */}

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
