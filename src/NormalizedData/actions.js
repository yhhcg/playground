/* eslint-disable require-jsdoc */
import {Async, Sync} from 'redux-action-boilerplate';

export const async = new Async({
  prefix: 'normalizedData',
  actions: [],
});

export const sync = new Sync({
  prefix: 'normalizedData',
  actions: [
    'changeTodoName',
  ],
});
