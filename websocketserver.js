var users = [];
var name = '';
//Aquí se crea el servidor websocket

var express = require('express');
var app = express();

//Puerto por el cual se va a escuchar
var server = app.listen(process.env.PORT || 8082, function () {
  var port = server.address().port;
  console.log('Server running at port %s', port);
});

//En io queda el servidor websocket
var io = require('socket.io')(server);

//Para cuando el servidor websocket haga una conexion
io.on('connection', function(client) {
  console.log('User connected');

  var numUser = users.length;
  var nameUser = 'usuario' + numUser;
  var typeUser = 'guesser';
  if(numUser == 0){
    typeUser = 'artist';
  }
  var user = {name: nameUser, type: typeUser}
  users.push(user)

  client.emit('newPlayer', user);
});
