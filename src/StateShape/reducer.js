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
    id: '0',
    text: 'Buy groceries',
    tags: [{
      id: '0',
      name: 'personal',
    }],
  }, {
    id: '1',
    text: 'Attend meeting',
    tags: [{
      id: '1',
      name: 'work',
    }],
  }, {
    id: '2',
    text: 'Pay bills',
    tags: [{
      id: '2',
      name: 'personal',
    }, {
      id: '3',
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
