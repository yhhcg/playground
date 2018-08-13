/* eslint-disable require-jsdoc */
import {
  async,
  sync,
} from './actions';

const {} = async;

const {
  CHANGE_TODO_NAME,
} = sync;

const initialState = {
  list: [{
    text: 'Buy groceries',
    tags: [{
      name: 'personal',
    }],
  }, {
    text: 'Attend meeting',
    tags: [{
      name: 'work',
    }],
  }, {
    text: 'Pay bills',
    tags: [{
      name: 'personal',
    }, {
      name: 'urgent',
    }],
  }],
};

export default function Reducer(state=initialState, action) {
  switch (action.type) {
    case CHANGE_TODO_NAME: {
      const {index, value} = action.payload;
      return {
        ...state,
        list: [
          ...state.list.slice(0, index),
          {
            ...state.list[index],
            text: value,
          },
          ...state.list.slice(index + 1),
        ],
      };
    }
    default:
      return state;
  }
}
