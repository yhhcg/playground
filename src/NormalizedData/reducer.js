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
  todos: {
    allIds: ['0', '1', '2'],
    byId: {
      '0': {
        id: '0',
        text: 'Buy groceries',
        tags: ['0'],
      },
      '1': {
        id: '1',
        text: 'Attend meeting',
        tags: ['1'],
      },
      '2': {
        id: '2',
        text: 'Pay bills',
        tags: ['2', '3'],
      },
    },
  },
  todoTags: {
    allIds: ['0', '1', '2', '3'],
    byId: {
      '0': {
        id: '0',
        name: 'personal',
      },
      '1': {
        id: '1',
        name: 'work',
      },
      '2': {
        id: '2',
        name: 'personal',
      },
      '3': {
        id: '3',
        name: 'urgent',
      },
    },
  },
};

export default function Reducer(state=initialState, action) {
  switch (action.type) {
    case CHANGE_TODO_NAME:
      return state;
    default:
      return state;
  }
}
