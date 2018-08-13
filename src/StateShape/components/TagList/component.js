import React from 'react';
import {object} from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {hot} from 'react-hot-loader';
import {
  Card,
} from '@material-ui/core';

const styles = (theme) => ({
  root: {
    width: '100%',
  },
});

/**
 * TagList
 */
@hot(module)
@withStyles(styles)
class TagList extends React.Component {
  static propTypes = {
    classes: object.isRequired,
  };

  /**
   * @param {Object} props
   */
  constructor(props) {
    super(props);
    this.props = props;
  }

  /**
   * @return {Element}
   */
  render() {
    const {
      classes,
    } = this.props;

    return (
      <Card className={classes.root}>123</Card>
    );
  }
}

export default TagList;
