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
        tags: ['0', '2'],
      },
    },
  },
  todoTags: {
    allIds: ['0', '1', '2'],
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
        name: 'urgent',
      },
    },
  },
};

export default function Reducer(state=initialState, action) {
  switch (action.type) {
    case CHANGE_TODO_NAME: {
      const {id, value} = action.payload;
      return {
        ...state,
        todos: {
          ...state.todos,
          byId: {
            ...state.todos.byId,
            [id]: {
              ...state.todos.byId[id],
              text: value,
            },
          },
        },
      };
    }
    default:
      return state;
  }
}
