require('normalize.css/normalize.css');
require('styles/App.less');

import Canvas from './Canvas';
import React from 'react';
import InputPost from './InputPost'
import Websocket from '../websocket'
import Participants from './Participants'

class AppComponent extends React.Component {

  componentDidMount(){
    Websocket.connect();
  }

  render() {
    return (
      <div className="index">
        <Participants/>
        <Canvas/>
        <InputPost/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
