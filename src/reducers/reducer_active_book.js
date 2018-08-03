// State argument is not application state, only the state that this reducer is responsible for.
// Setting state to null initially is ES6 syntax which sets state to null if it comes in undefined.
export default function(state=null,action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
    return action.payload;
  }
  return state;
}
