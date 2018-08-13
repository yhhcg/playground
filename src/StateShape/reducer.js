/* eslint-disable require-jsdoc */
import {
  async,
} from './actions';

const {} = async;

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
    default:
      return state;
  }
}
