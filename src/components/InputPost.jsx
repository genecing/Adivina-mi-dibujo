import React from 'react';

class InputPost extends React.Component{

  constructor(props){
    super(props);

    this.state = {
    }

  }

  render(){
    return(
      <div id="input_post">
        Ingrese que se está dibujando
        <input/>
        <button>Enviar</button>
      </div>
    );
  }
}

export default InputPost;