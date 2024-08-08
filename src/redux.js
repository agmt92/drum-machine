import { createStore, combineReducers } from 'redux';

// Actions
const setVolume = (volume) => ({
  type: 'SET_VOLUME',
  volume
});

const updateDisplay = (display) => ({
  type: 'UPDATE_DISPLAY',
  display
});

// Reducers
const volume = (state = 0.25, action) => {
  switch (action.type) {
    case 'SET_VOLUME':
       if (action.volume == 1) {
        alert('Warning: High Volume!');
        return action.volume;
     } else {
        return action.volume;
     }
    default:
      return state;
  }
};

const display = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_DISPLAY':
      return action.display;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  volume,
  display
});

const store = createStore(rootReducer);

export { store, setVolume, updateDisplay };