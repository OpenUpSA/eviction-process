import { withStyles } from '@material-ui/core';
import { Z_FIXED } from 'zlib';


const styles = theme => ({
  helpline: {
    backgroundColor: '#003A70',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '15px 0',

    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    }
  },

  helplineText: {
    fontFamily: 'Oswald, Arial, sans-serif',
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
    margin: '0 1rem',
    fontSize: '28.5px',
    marginLeft: 0,
    padding: '0 16px',
  },

  helpLineTitle: {
    fontFamily: 'Oswald, Arial, sans-serif',
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
    margin: '0 1rem',
    fontSize: '28.5px',
    textAlign: 'center',

    [theme.breakpoints.up('sm')]: {
      display: 'block',
    }
  },

  links: {
    backgroundColor: '#3A8DDE',
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      padding: '20px',
    }
  },

  helplineTitle: {
    textDecoration: 'none',

    [theme.breakpoints.up('sm')]: {
      flexDirection: 'rows',
    }
  },

  linkUnderline: {
    textDecoration: 'none',
  },

  textWhite: {
    color: 'white',
    textTransform: 'lowercase',
    fontFamily: 'Archivo, Arial, sans-serif',
    fontWeight: 'bold',

    [theme.breakpoints.down('sm')]: {
      padding: 0,
      minHeight: '0.875rem',
    },
  },

  divider: {
    margin: '0 0.5rem',
    color: 'white',
    display: 'none',

    [theme.breakpoints.up('sm')]: {
      display: 'block',
    }
  },

  helplineWrapper: {
    textDecoration: 'none'
  },

  callIcon: {
    transform: 'rotate(-90deg)',
    width: 30,
    height: 30,
  },

  footerWrapper: {
    marginTop: '4rem',
    bottom: 0,
    
    [theme.breakpoints.up('sm')]: {
      marginTop: '7rem',
      bottom: 0,
    }
  },

  helpLineSpan: {
    display: 'flex',
    alignItems: 'center'
  }

})


export default withStyles(styles);
