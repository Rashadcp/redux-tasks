
const { createStore, combineReducers } = Redux;


function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}


function todoReducer(state = { todos: [] }, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return { todos: [...state.todos, action.payload] };
    case 'REMOVE_TODO':
      return { todos: state.todos.filter((_, i) => i !== action.payload) };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});


const store = createStore(rootReducer);

store.subscribe(() => console.log('State updated:', store.getState()));


store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'ADD_TODO', payload: 'Learn Redux' });
store.dispatch({ type: 'ADD_TODO', payload: 'Build a project' });
store.dispatch({ type: 'REMOVE_TODO', payload: 0 });
