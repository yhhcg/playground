/* eslint-disable require-jsdoc */
import {connect} from 'react-redux';

import Component from './component';
import {
  async,
} from '../../actions';
import {tagListSelector} from './selectors';

const {} = async;

const mapStateToProps = (state, ownProps) => {
  return {
    list: tagListSelector(state),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

@connect(mapStateToProps, mapDispatchToProps)
class Container extends Component {

}

export default Container;
