import Dispatcher from '../dispatcher';
import Constants from '../constants';

//Las acciones son las operaciones que se realizan en la aplicación y transforman los datos y la vista.
const Actions  = {

  postNew(name, text) {
    Dispatcher.dispatch({
      actionType: Constants.actions.POST_NEW,
      payload: {
        name: name,
        text: text
      }
    });
  },

  playerNew(player){
    Dispatcher.dispatch({
      actionType: Constants.actions.PLAYER_NEW,
      payload:{
        name: player.name
        type: player.type
      }
    });
  }
}

module.exports = Actions;