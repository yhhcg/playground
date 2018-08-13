/* eslint-disable require-jsdoc */
import {Async, Sync} from 'redux-action-boilerplate';

export const async = new Async({
  prefix: 'list',
  actions: [],
});

export const sync = new Sync({
  prefix: 'list',
  actions: [
    'changeTodoName',
  ],
});
