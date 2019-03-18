import { withStyles } from '@material-ui/core';


const styles = {
  root: {
    backgroundColor: 'white',
    minHeight: 61,
  },

  content: {
    maxWidth: 960,
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    height: 70,
  },

  button: {
    justifyContent: 'flex-start',
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
};


export default withStyles(styles);
