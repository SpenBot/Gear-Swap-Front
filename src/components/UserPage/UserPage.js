
////////////// DEPENDENCIES AND MODULES /////////////////////////////
/////////////////////////////////////////////////////////////////////

import React, {Component} from 'react';

import './UserPage.css';




////////////// COMPONENT ////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

class UserPage extends Component {










////////////// RENDER LOGIC /////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

  render() {


    let UserIventory = this.props.user.inventory.map((item) => {
      return (
        <div className="UserItem">
          <p>Item: {item.item}</p>
          <p>Type: {item.type}</p>
          <p>Condition: {item.condition}</p>
          <p>Prive: ${item.price}</p>
        </div>
      )
    })


////////////// RENDER RETURN ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

      return (
        <div className="UserPageDiv">
          <img src={this.props.user.photo_url} height="150" width="150" alt="user profile"/>
          <br/>
          <br/>
          <h2>USER:</h2>
          <p>{this.props.user.username}</p>
          <br/>
          <h4>Rating:</h4>
          <p>{this.props.user.rating}</p>
          <h4>Zipcode:</h4>
          <p>{this.props.user.zipcode}</p>
          <h4>Password:</h4>
          <p>{this.props.user.zipcode}</p>

          {UserIventory}
        </div>
      )

  }

}





////////////// EXPORT MODULE ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

export default UserPage;




/////////////////////////////////////////////////////////////////////
