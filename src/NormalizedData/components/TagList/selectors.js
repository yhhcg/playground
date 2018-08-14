/* eslint-disable require-jsdoc */
import {createSelector} from 'reselect';

export const tagListSelector = createSelector(
  (state) => state.normalizedData.todoTags,
  (todoTags) => {
    return Object.entries(todoTags.byId).reduce((preResult, [tagId, tag]) => {
      return preResult.concat([tag.name]);
    }, []);
  }
);
