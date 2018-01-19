import { createStore } from 'redux';

const initialState = {
  userName: null,
  messages: [],
  date: ""
};



function reducer(state = initialState, action) {
  switch(action.type) {
    case 'UPDATE_USERNAME':
    return {
  };
    case 'SEND_NEW_MESSAGE':
      return {
        this.websocket.send(
          JSON.stringify({
        userName: this.state.userName,
        message: message,
      })
    );
  };

    default:
      return state;
  }
}

export const store = createStore(reducer);
