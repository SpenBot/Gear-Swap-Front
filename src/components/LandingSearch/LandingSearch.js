
////////////// DEPENDENCIES AND MODULES /////////////////////////////
/////////////////////////////////////////////////////////////////////

import React, {Component} from 'react';
import axios from "axios";

import './LandingSearch.css'




////////////// COMPONENT ////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

class LandingSearch extends Component {

  constructor(props) {
    super(props)

    this.state = {
      user: null,
      landingSearchPhrase: null
    }

    this.handleSearchInput = this.handleSearchInput.bind(this)
    this.searchProviders = this.searchProviders.bind(this)
  }

  handleSearchInput(e) {
    this.setState({landingSearchPhrase: e.target.value})
  }

  searchProviders(e) {
    e.preventDefault()

    axios.get(`http://localhost:4000/api/userszipcode/${this.state.landingSearchPhrase}`)
      .then((res) => {
        this.setState({user: res.data})
        // localStorage.setItem("user", res.data.username)
        // localStorage.setItem("photo", res.data.photo_url)
        // localStorage.setItem("password", res.data.password)
        console.log(this.state.user)
      })
    }




////////////// RENDER LOGIC /////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

  render() {

////////////// RENDER RETURN ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

      return (
        <div className="LandingSearchDiv">

            <h4>Find providers in your community!</h4>
            <form onSubmit={(e) => this.searchProviders(e)}>
              <input type="text" onChange={(e) => this.handleSearchInput(e)}
                className="LandingSearchText" placeholder="enter city or zipcode"/>
              <input type="submit" value="search" className="LandingSearchSubmit"/>
            </form>



            {/* <UserSidebar {...props} user={this.state.user} logOutUser={this.logOutUser}/> */}

                              {/* /////////// sign in button ////////////// */}

                              {/* <div className="signin">
                                <h3>Sign In</h3>
                                <form onSubmit={(e) => this.signInUser(e)}>
                                  <textarea onChange={(e) => this.handleSearchInput(e)}></textarea>
                                  <input type="submit" value="Sign In"/>
                                </form> */}





                                {/* /////////// sign out button ////////////// */}

                                {/* <h3>{this.state.user && this.state.user.username}</h3>

                                <form onSubmit={(e) => this.logOutUser(e)}>
                                  <input type="submit" value="Sign Out"/>
                                </form> */}












        </div>
      )

  }

}


////////////// EXPORT MODULE ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

export default LandingSearch;





/////////////////////////////////////////////////////////////////////
