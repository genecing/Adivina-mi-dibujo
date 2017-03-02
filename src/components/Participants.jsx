import React from 'react';
import Store from '../stores'

class Participants extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      players: []
    }

  }

  render(){
    return(
      <div id="participants_list">

      </div>
    )
  }
}


export default Participants;