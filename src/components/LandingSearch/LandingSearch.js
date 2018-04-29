
////////////// DEPENDENCIES AND MODULES /////////////////////////////
/////////////////////////////////////////////////////////////////////

import React, {Component} from 'react';
import axios from "axios";

import './LandingSearch.css'




////////////// COMPONENT ////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

class LandingSearch extends Component {


//////////// CONSTRUCTOR ////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

  constructor(props) {
    super(props)

    this.state = {
      landingSearchResult: null,
      landingSearchPhrase: null
    }

    this.handleSearchInput = this.handleSearchInput.bind(this)
    this.searchProviders = this.searchProviders.bind(this)
  }




  ////////////// METHODS ///////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////


  handleSearchInput(e) {
    this.setState({landingSearchPhrase: e.target.value})
  }

  searchProviders(e) {
    e.preventDefault()

    axios.get(`http://localhost:4000/api/userszipcode/${this.state.landingSearchPhrase}`)
      .then((res) => {
        this.setState({landingSearchResult: res.data})
        console.log(this.state.user)
      })
    }




////////////// RENDER LOGIC /////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

  render() {

    let foundProviders = []

    if (this.state.landingSearchResult) {
      foundProviders = this.state.landingSearchResult.map((provider) => {

        let providerIventory = provider.inventory.map((item) => {
          return (
            <div className="ProviderIventoryDiv">
              <p>Item: {item.item}</p>
              <p>Type: {item.type}</p>
              <p>Condition: {item.condition}</p>
              <p>Prive: ${item.price}</p>
            </div>
          )
        })

        return (
          <div className="FoundProviderDiv">
            <h3>User: {provider.username}</h3>
            <h3>Zipcode: {provider.zipcode}</h3>
            <h3>Rating: {provider.rating}</h3>
            {providerIventory}
          </div>
        )
      })
    }

////////////// RENDER RETURN ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

      return (
        <div className="LandingAll">

          <div className="LandingSearchDiv">

              <h4>Find providers in your community!</h4>
              <form onSubmit={(e) => this.searchProviders(e)}>
                <input type="text" onChange={(e) => this.handleSearchInput(e)}
                  className="LandingSearchText" placeholder="enter city or zipcode"/>
                <input type="submit" value="search" className="LandingSearchSubmit"/>
              </form>

          </div>

            {foundProviders}

        </div>
      )

  }

}


////////////// EXPORT MODULE ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

export default LandingSearch;





/////////////////////////////////////////////////////////////////////
