import { LogIn } from '../actions/types';
import data from './data';
const inistialState = {
  data : '',
  login: ''
}


export default (state = inistialState, action) => {
  switch(action.type) {
    case LogIn:
    console.log('log', action.payload);
    return  {...state , data, login: action.payload  }
    default:
    return state;
  }
}
