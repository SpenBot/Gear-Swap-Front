
////////////// DEPENDENCIES AND MODULES /////////////////////////////
/////////////////////////////////////////////////////////////////////

import React, {Component} from 'react';

import './DashBar.css'




////////////// COMPONENT ////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

class DashBar extends Component {



////////////// RENDER LOGIC /////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

  render() {

    // let inventoryList = this.props.user.inventory.map((thing) => {
    //   return (
    //   <ul>
    //     <li>ITEM: {thing.item}</li>
    //     <li>TYPE: {thing.type}</li>
    //     <li>CONDITION: {thing.condition}</li>
    //     <li>PRICE: ${thing.price}.00</li>
    //   </ul>
    //   )
    // })


////////////// RENDER RETURN ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

      return (
        <div className="DashBarDiv">

          <h3>Account Overview:</h3>

          <div className="DashUser">
            <img src={this.props.user.photo_url} height="60" width="60" alt="user profile"/>
            <p>{this.props.user.username}</p>
          </div>

          <div className="DashRating">
            <h4>my rating</h4>
            <div className="Stars">
              <div className="Star">{"\u2605"}</div>
              <div className="Star">{"\u2605"}</div>
              <div className="Star">{"\u2605"}</div>
              <div className="Star">{"\u2606"}</div>
              <div className="Star">{"\u2606"}</div>
            </div>
          </div>

          <div className="DashInventory">
            <h4>my inventory</h4>
            <h5>4</h5>
          </div>

          <div className="DashHistory">
            <p>items requested: 0</p>
            <p> items in que: 2</p>
          </div>



          {/* <p>PASSWORD: {this.props.user.password}</p> */}
          {/* {inventoryList} */}


          <a href="#">full details</a>
        </div>
      )

  }

}


////////////// EXPORT MODULE ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

export default DashBar;





/////////////////////////////////////////////////////////////////////
