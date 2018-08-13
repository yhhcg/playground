/* eslint-disable require-jsdoc */
import {createSelector} from 'reselect';

export const tagListSelector = createSelector(
  (state) => state.normalizedData.todoTags,
  (todoTags) => {
    const tags = Object.entries(todoTags.byId).reduce((preResult, [tagId, tag]) => {
      return preResult.concat([tag.name]);
    }, []);

    return [...new Set(tags)];
  }
);
