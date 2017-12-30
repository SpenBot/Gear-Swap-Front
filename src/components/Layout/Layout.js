import React, {Component} from 'react';

import './Layout-Banner.css';
import './Layout-NavBar.css';


class Layout extends Component {

  render() {

      return (


        <div className="LayoutDiv">


            <div className="Banner">

              <div className="HeaderLeft">
                <h1>Gear Swap</h1>
                <hr></hr>
                <h2>rent production equipment from your local community</h2>
              </div>

              <div className="HeaderRight">
                <a href="#">sign-up</a>
                <a href="#">log-in</a>
              </div>

            </div>


            <div className="NavBar">

                <a href='/'>home</a>
                <vl></vl>
                <a href='users'>search providers</a>
                <vl></vl>
                <a href='users'>search equipment</a>
                <vl></vl>
                <a href='users'>my account</a>

          </div>


        </div>

      )

  }
}

export default Layout;
