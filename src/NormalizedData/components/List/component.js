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
   * @param  {string} todoId
   * @return {Function}
   */
  handleChange = (todoId) => (event) => {
    const {
      onChange,
    } = this.props;

    onChange({
      id: todoId,
      value: event.target.value,
    });
  }

  /**
   * @return {Element}
   */
  render() {
    const {list} = this.props;

    return (
      <Card>
        {
          list.map((item, index) => {
            return (
              <Fragment key={index}>
                <MuiList>
                  <ListSubheader>
                    <TextField
                      onChange={this.handleChange(item.id)}
                      value={item.text}
                    />
                  </ListSubheader>
                  {
                    item.tags.map((tag, tagIndex) => {
                      return (
                        <ListItem key={`${index}-${tagIndex}`}>
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
