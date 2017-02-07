import Dispatcher from '../dispatcher';
import Constants from '../constants';
import Store from './store';

Dispatcher.register( function(action) {

  window.console.log('dispatching ' + action.actionType);

  switch(action.actionType) {
    case Constants.actions.POST_NEW:
      Store.postNew({
        name: action.payload.name,
        text: action.payload.text
      });
      break;

    case Constants.actions.PLAYER_NEW:
      console.log("hay un jugador nuevo");
      break;
  }
});

module.exports = Store;