/* eslint-disable require-jsdoc */
import {connect} from 'react-redux';

import Component from './component';
import {
  sync,
} from '../../actions';

const {
  changeTodoName,
} = sync;

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.normalizedData.list,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (payload) => {
      dispatch(changeTodoName(payload));
    },
  };
};

@connect(mapStateToProps, mapDispatchToProps)
class Container extends Component {

}

export default Container;
