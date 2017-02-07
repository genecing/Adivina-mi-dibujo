import Dispatcher from '../dispatcher';
import Constants from '../constants';

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

  playerNew(name) {
    Dispatcher.dispatch({
      actionType: Constants.actions.PLAYER_NEW,
      payload: {
        name: name
      }
    });
  }

}

module.exports = Actions;