/* eslint-disable require-jsdoc */
import {createSelector} from 'reselect';

export const todoListSelector = createSelector(
  (state) => state.normalizedData.todos,
  (state) => state.normalizedData.todoTags,
  (todos, todoTags) => {
    return todos.allIds.map((id) => {
      return {
        ...todos.byId[id],
        tags: todos.byId[id].tags.map((tagId) => {
          return todoTags.byId[tagId];
        }),
      };
    });
  }
);
