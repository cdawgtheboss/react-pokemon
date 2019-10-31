import React from 'react';

//each stat tracker needs to select targeted stat with props 

class StatTracker extends React.Component {
  render(){
    return(
      <div>
        <div className="statDisplay">
            <div className="imgDisplay">
              <h4>Here's That Pokemon!</h4>
            </div>
            <div className="weightDisplay"></div>
            <div className="heightDisplay">

            </div>
        </div>
      </div>
    )
  }
}


export default StatTracker;