import React from 'react';
import {
  array,
  object,
} from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {
  List,
  ListItem,
} from '@material-ui/core';
import {hot} from 'react-hot-loader';
import {
  Card,
} from '@material-ui/core';

const styles = (theme) => ({});

/**
 * TagList
 */
@hot(module)
@withStyles(styles)
class TagList extends React.Component {
  static propTypes = {
    classes: object.isRequired,
    list: array.isRequired,
  };

  /**
   * @param {Object} props
   */
  constructor(props) {
    super(props);
    this.props = props;
  }

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
