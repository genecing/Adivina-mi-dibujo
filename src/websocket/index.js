//Crear conexion con servidor websocket
import Actions from '../actions'


const websocket = {

  connect(){
    var socket = require('socket.io-client')('http://localhost:8082');
    
    socket.on('connect', function(){
      window.console.log("conectado");
      
    });
  }

}


module.exports = websocket;

