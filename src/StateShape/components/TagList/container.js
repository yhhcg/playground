/* eslint-disable require-jsdoc */
import {connect} from 'react-redux';

import Component from './component';
import {
  async,
} from '../../actions';

const {} = async;

const mapStateToProps = (state, ownProps) => {
  const list = state.stateShape.list
    .map((item) => {
      return item.tags;
    })
    .reduce((preResult, item) => {
      return [
        ...preResult,
        ...item,
      ];
    }, [])
    .map((item) => item.name);

  return {
    list: Array.from(new Set(list)),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

@connect(mapStateToProps, mapDispatchToProps)
class Container extends Component {

}

export default Container;
