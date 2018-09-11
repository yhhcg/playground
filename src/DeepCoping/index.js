import React from 'react';
import {hot} from 'react-hot-loader';

import path from './mockData';

/**
 * DeepCoping Page
 */
@hot(module)
class DeepCoping extends React.Component {
  /**
   * @param  {Object} props
   */
  constructor(props) {
    super(props);

    this.start = new Date().getTime();
    console.log(JSON.parse(JSON.stringify(path)));
    this.executionTimeOfJson = new Date().getTime() - this.start;
  }

  /**
   * Render DeepCoping Page
   * @return {Node}
   */
  render() {
    return (
      <div>
        <h1>Deep Copying in JS</h1>
        <div>JSON.parse and JSON.stringify</div>
        <div>{this.executionTimeOfJson}</div>
      </div>
    );
  }
}

export default DeepCoping;
