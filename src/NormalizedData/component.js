import React from 'react';
import {
  object,
} from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {hot} from 'react-hot-loader';
import {
  Grid,
  Typography,
} from '@material-ui/core';

import List from './components/List/container';
import TagList from './components/TagList/container';

const styles = (theme) => ({
  root: {
    width: '100%',
    padding: '32px',
  },
});

/**
 * Normalized Data
 */
@hot(module)
@withStyles(styles)
class NormalizedData extends React.Component {
  static propTypes = {
    classes: object,
  };

  /**
   * Render List Page
   * @return {Node}
   */
  render() {
    const {
      classes,
    } = this.props;

    return (
      <div className={classes.root}>
        <Typography paragraph={true} variant='title'>Todos</Typography>
        <Grid container={true} spacing={40}>
          <Grid item={true} xs={9}>
            <List />
          </Grid>
          <Grid item={true} xs={3}>
            <TagList />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default NormalizedData;
