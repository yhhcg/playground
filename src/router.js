/* eslint-disable require-jsdoc */
import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import {object} from 'prop-types';
import lodable from 'react-loadable';

// Dynamically load reducer
import injectAsyncReducer from './injectAsyncReducer';

/**
 * Router with lazy loaded pages
 */
class Router extends React.Component {
  static contextTypes = {
    store: object,
  };

  constructor(props, context) {
    super(props);

    this.DeepCopingPage = lodable({
      loader: () => {
        return import('./DeepCoping');
      },
      loading: () => {
        return <div>Loading...</div>;
      },
    });

    this.NormalizedDataPage = lodable({
      loader: () => {
        injectAsyncReducer( // Aynchronously load reducer
          context.store,
          'normalizedData', // Reducer name
          require('./NormalizedData/reducer').default // Reducer function
        );

        return import('./NormalizedData/container');
      },
      loading: () => {
        return <div>Loading...</div>;
      },
    });

    this.StateShapePage = lodable({
      loader: () => {
        injectAsyncReducer( // Aynchronously load reducer
          context.store,
          'stateShape', // Reducer name
          require('./StateShape/reducer').default // Reducer function
        );

        return import('./StateShape/container');
      },
      loading: () => {
        return <div>Loading...</div>;
      },
    });
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={this.StateShapePage} />
        <Route exact path="/normalizedData" component={this.NormalizedDataPage}/>
        <Route exact path="/deepCoping" component={this.DeepCopingPage}/>
      </Switch>
    );
  }
}

export default Router;
