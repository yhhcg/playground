import React from 'react';
import {
  array,
} from 'prop-types';
import {
  List,
  ListItem,
} from '@material-ui/core';
import {hot} from 'react-hot-loader';
import {
  Card,
} from '@material-ui/core';

/**
 * TagList
 */
@hot(module)
class TagList extends React.Component {
  static propTypes = {
    list: array.isRequired,
  };

  /**
   * ShouldComponentUpdate
   * @param  {Object} nextProps
   * @param  {Object} nextState
   * @return {Boolean}
   */
  shouldComponentUpdate(nextProps, nextState) {
    console.log('TagList');
    console.log(this.props.list === nextProps.list);
    return true;
  }

  /**
   * @return {Element}
   */
  render() {
    const {
      list,
    } = this.props;

    return (
      <Card>
        {
          list.map((tag) => {
            return (
              <List key={tag}>
                <ListItem>{tag}</ListItem>
              </List>
            );
          })
        }
      </Card>
    );
  }
}

export default TagList;
