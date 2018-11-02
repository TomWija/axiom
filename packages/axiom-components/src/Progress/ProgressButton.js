import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Button from '../Button/Button';
import Cloak from '../Cloak/Cloak';
import ProgressInfinite from './ProgressInfinite';
import './ProgressButton.css';

const progressSizeMap = {
  small: '1rem',
  medium: '1.25rem',
  large: '1.5rem',
};

export default class ProgressButton extends Component {
  static propTypes = {
    /** Content to be inserted into the Button */
    children: PropTypes.node.isRequired,
    /** Flag if an action is in progress, shows the progress indicator */
    isInProgress: PropTypes.bool,
    /** Size of the Button. See Button[size]. */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** Style of the Button, that affects it's coloring and sizing */
    style: PropTypes.oneOf(['primary', 'secondary']),
  };

  render() {
    const {
      children,
      isInProgress,
      size = Button.defaultProps.size,
      style = Button.defaultProps.style,
      ...rest
    } = this.props;

    const classes = classnames('ax-progress-button', {
      'ax-progress-button--in-progress': isInProgress,
    });

    return (
      <Button { ...rest }
          active={ isInProgress }
          size={ size }
          style={ style }>
        <div className={ classes }>
          <Cloak
              className="ax-progress-button__content"
              invisible={ isInProgress }>
            { children }
          </Cloak>

          <Cloak
              className="ax-progress-button__indicator"
              invisible={ !isInProgress }>
            <ProgressInfinite
                color="white"
                sizeRem={ progressSizeMap[size] } />
          </Cloak>
        </div>
      </Button>
    );
  }
}
