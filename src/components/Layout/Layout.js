
////////////// DEPENDENCIES AND MODULES /////////////////////////////
/////////////////////////////////////////////////////////////////////

import React, {Component} from 'react';

import './Layout-Banner.css';
import './Layout-NavBar.css';




////////////// COMPONENT ////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

class Layout extends Component {








////////////// RENDER LOGIC /////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

  render() {


    let logButton = null;

    if (this.props.user.username != '') {
      logButton =
      <div className="HeaderRight">
        <a href="#">sign-up</a>
        {/* <a href="#">log-out</a> */}

        <p className="SignButton" onClick={(e) => this.props.logOutUser(e)}>log-out</p>


      </div>

    } else if (this.props.user.username == '') {
      logButton =
      <div className="HeaderRight">
        <a href="#">sign-up</a>
        <a href="#">log-in</a>
      </div>
    }




////////////// RENDER RETURN ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

      return (


        <div className="LayoutDiv">


            <div className="Banner">

              <div className="HeaderLeft">
                <h1>GearSwap</h1>
                <hr></hr>
                <h2>rent production equipment from your local community</h2>
              </div>

              {logButton}

            </div>


            <div className="NavBar">

                <a href='/'>home</a>
                <div className="vl"></div>
                <a href='/providers'>search providers</a>
                <div className="vl"></div>
                <a href='/equipment'>search equipment</a>
                <div className="vl"></div>
                <a href='/account'>my account</a>

          </div>


        </div>

      )

  }
}


////////////// EXPORT MODULE ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

export default Layout;



/////////////////////////////////////////////////////////////////////
