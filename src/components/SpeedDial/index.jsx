import React from 'react';
import PropTypes from 'prop-types';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import ShareIcon from '@material-ui/icons/Share';

import Icon from '@mdi/react'
import { mdiFacebook, mdiTwitter, mdiWhatsapp } from '@mdi/js'

import addStyles from './styles';

const actions = [
  {
    icon: <Icon path={mdiFacebook} size={1} color='#003a70'/>,
    name: 'Facebook',
    href: ' https://www.facebook.com/ReclaimCT/'
  },
  {
    icon: <Icon path={mdiTwitter} size={1} color='#003a70'/>,
    name: 'Twitter',
    href: ' https://twitter.com/ReclaimCT'
  },
  {
    icon: <Icon path={mdiWhatsapp} size={1} color='#003a70'/>,
    name: 'Whatsapp',
    href: 'whatsapp://send?text=https://protestguide.org.za'
  },
];

class SpeedDials extends React.Component {
  state = {
    open: false,
    hidden: false,
  };

  handleClick = (URL) => {
    window.open(URL);
    this.setState(state => ({
      open: !state.open,
    }));
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;
    const { hidden, open } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <SpeedDial
            ariaLabel="Share this page"
            className={classes.speedDial}
            hidden={hidden}
            icon={<ShareIcon className={classes.rotateIcon}/>}
            onBlur={this.handleClose}
            onClose={this.handleClose}
            onFocus={this.handleOpen}
            onMouseEnter={this.handleOpen}
            onMouseLeave={this.handleClose}
            open={open}
            direction='down'
          >
            {actions.map(action => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  onClick={() => this.handleClick(action.href)}
                />
            ))}
          </SpeedDial>
        </div>
      </div>
    );
  }
}

SpeedDials.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default addStyles(SpeedDials);

