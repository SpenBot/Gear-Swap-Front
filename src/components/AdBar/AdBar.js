
////////////// DEPENDENCIES AND MODULES /////////////////////////////
/////////////////////////////////////////////////////////////////////

import React, {Component} from 'react';


import './AdBar.css'



////////////// COMPONENT ////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

class AdBar extends Component {


  render() {

      return (
        <div className="AdBar">
          <a href='https://www.bhphotovideo.com' target="_blank" rel="noopener noreferrer">
            <img src="../../../BH-ad-2.jpg" alt="B&H promotion"
            height="330" width="250"/></a>
          <a href='https://www.bhphotovideo.com' target="_blank" rel="noopener noreferrer">
            <img src="../../../BH-ad-1.jpg" alt="B&H promotion"
            height="250" width="250"/></a>
        </div>
      )

  }

}


////////////// EXPORT MODULE ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

export default AdBar;





/////////////////////////////////////////////////////////////////////
