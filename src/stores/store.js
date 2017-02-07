import {EventEmitter} from 'events';
import _ from 'lodash';

const CHANGE_EVENT = 'change';

//Todos los posts (mensajes de usuarios que intentan adivinar)
var _posts = [{name:'usuario', text:'hola'}];


const store = _.merge({}, EventEmitter.prototype, {

  postNew(post){
    _posts.push(post);
    this.emitChange();
  },

  getPosts(){
    return _posts;
  },

  //método que viene de EventEmitter.prototype
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  //método que viene de EventEmitter.prototype. Para saber que función ejecutar cuando escucha un evento
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  //método que viene de EventEmitter.prototype. Para dejar de "escuchar eventos"
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

module.exports = store;