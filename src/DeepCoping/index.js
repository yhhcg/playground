import React from 'react';
import {
  object,
} from 'prop-types';
import {hot} from 'react-hot-loader';
import {withStyles} from '@material-ui/core/styles';
import cloneDeep from 'lodash/cloneDeep';

import path from './mockData';

const styles = (theme) => ({
  root: {
    width: '100%',
    padding: '32px',
  },
});

/**
 * DeepCoping Page
 */
@hot(module)
@withStyles(styles)
class DeepCoping extends React.Component {
  static propTypes = {
    classes: object,
  };

  /**
   * @param  {Object} props
   */
  constructor(props) {
    super(props);

    // JSON
    this.jsonStartTime = new Date().getTime();
    console.log(JSON.parse(JSON.stringify(path)));
    this.executionTimeOfJson = new Date().getTime() - this.jsonStartTime;

    // DeepCopy function
    this.copyFuncStartTime = new Date().getTime();
    console.log(this.deepCopy(path));
    this.executionTimeOfCopyFunc = new Date().getTime() - this.copyFuncStartTime;

    // Lodash cloneDeep
    this.lodashStartTime = new Date().getTime();
    console.log(cloneDeep(path));
    this.executionTimeOfLodash = new Date().getTime() - this.lodashStartTime;
  }

  /**
   * Copy data
   * @param  {Array|Object} data
   * @return {Array|Object}
   */
  deepCopy(data) {
    let output = data instanceof Array ? [] : {};
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        const value = data[key];
        output[key] = typeof value === 'object' && value !== null
          ? this.deepCopy(value)
          : value;
      }
    }
    return output;
  }

  /**
   * Render DeepCoping Page
   * @return {Node}
   */
  render() {
    const {
      classes,
    } = this.props;

    return (
      <div className={classes.root}>
        <h1>Deep Copying in JS</h1>

        <div>JSON.parse and JSON.stringify</div>
        <div>{this.executionTimeOfJson}ms</div>

        <div>Copy function</div>
        <div>{this.executionTimeOfCopyFunc}ms</div>

        <div>lodash</div>
        <div>{this.executionTimeOfLodash}ms</div>
      </div>
    );
  }
}

export default DeepCoping;
