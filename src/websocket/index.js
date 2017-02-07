//Crear conexion con servidor websocket
import Actions from '../actions'


const websocket = {

  connect(){

    setInterval(function(){
      window.console.log('En setinterval');
      Actions.postNew('usuario','cosa')
    }, 100000)

  }

}


module.exports = websocket;

