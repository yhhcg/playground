import React, {Fragment} from 'react';
import {
  array,
  func,
} from 'prop-types';
import {
  Card,
  Chip,
  Divider,
  List as MuiList,
  ListItem,
  ListSubheader,
  TextField,
} from '@material-ui/core';
import {hot} from 'react-hot-loader';

/**
 * List
 */
@hot(module)
class List extends React.Component {
  static propTypes = {
    list: array.isRequired,
    onChange: func.isRequired,
  };

  /**
   * ShouldComponentUpdate
   * @param  {Object} nextProps
   * @param  {Object} nextState
   * @return {Boolean}
   */
  shouldComponentUpdate(nextProps, nextState) {
    console.log('List');
    console.log(this.props.list === nextProps.list);
    return true;
  }

  /**
   * HandleChange
   * @param  {number} index
   * @return {Function}
   */
  handleChange = (index) => (event) => {
    const {
      onChange,
    } = this.props;

    onChange({
      index,
      value: event.target.value,
    });
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
          list.map((item, index) => {
            return (
              <Fragment key={item.id}>
                <MuiList>
                  <ListSubheader>
                    <TextField
                      onChange={this.handleChange(index)}
                      value={item.text}
                    />
                  </ListSubheader>
                  {
                    item.tags.map((tag) => {
                      return (
                        <ListItem key={tag.id}>
                          <Chip
                            label={tag.name}
                          />
                        </ListItem>
                      );
                    })
                  }
                </MuiList>
                <Divider />
              </Fragment>
            );
          })
        }
      </Card>
    );
  }
}

export default List;
