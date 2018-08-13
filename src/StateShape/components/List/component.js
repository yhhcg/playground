import React, {Fragment} from 'react';
import {
  array,
  object,
} from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {
  Card,
  Divider,
  List as MuiList,
  ListItem,
  ListItemText,
  ListSubheader,
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
  };

  /**
   * @param {Object} props
   */
  constructor(props) {
    super(props);
    this.props = props;
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
                  <ListSubheader>{item.text}</ListSubheader>
                  {
                    item.tags.map((tag, tagIndex) => {
                      return (
                        <ListItem key={`${index}-${tagIndex}`}>
                          <ListItemText>{tag.name}</ListItemText>
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
