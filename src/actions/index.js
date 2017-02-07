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
}

module.exports = Actions;