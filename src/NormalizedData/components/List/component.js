import React, {Fragment} from 'react';
import {
  array,
  func,
  object,
} from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
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

const styles = (theme) => ({
  root: {
    width: '100%',
  },
});

/**
 * List
 */
@hot(module)
@withStyles(styles)
class List extends React.Component {
  static propTypes = {
    classes: object.isRequired,
    list: array.isRequired,
    onChange: func.isRequired,
  };

  /**
   * @param {Object} props
   */
  constructor(props) {
    super(props);
    this.props = props;
  }

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
      classes,
      list,
    } = this.props;

    return (
      <Card>
        {
          list.map((item, index) => {
            return (
              <Fragment key={index}>
                <MuiList>
                  <ListSubheader>
                    <TextField
                      onChange={this.handleChange(index)}
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
