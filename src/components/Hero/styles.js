import { withStyles } from '@material-ui/core';
// import { red } from '@material-ui/core/colors';


const styles = theme => ({
  root: {
    backgroundColor: '#003A70',
    padding: '0 0 80px',
    position: 'relative',

    [theme.breakpoints.up('sm')]: {
      padding: '0 0 130px',
    }
  },

  textArea: {
    textTransform: 'uppercase',
    textAlign: 'center',
    marginTop: 40,

    [theme.breakpoints.up('sm')]: {
      marginTop: 110,
      marginBottom: 30,
    }
  },

  smallText: {
    fontFamily: 'Oswald, Arial, sans-serif',
    fontWeight: 'bold',
    color: '#3A8DDE',
    letterSpacing: '0.05rem',
    fontSize: '24px',
    lineHeight: 0.8,
    display: 'inline-block',
  },

  largeText: {
    fontFamily: 'Oswald, Arial, sans-serif',
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: '0.05rem',
    fontSize: '3rem',
    lineHeight: 0.95,
    margin: '0 auto',

    [theme.breakpoints.up('sm')]: {
      maxWidth: '400px',
      fontSize: '4.2rem',
      letterSpacing: '0.025rem',
    },
  },

  largeText404: {
    fontFamily: 'Oswald, Arial, sans-serif',
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: '0.05rem',
    fontSize: '3rem',
    lineHeight: 0.95,
    margin: '0 auto',

    [theme.breakpoints.up('sm')]: {
      maxWidth: '100%',
      fontSize: '4.2rem',
      letterSpacing: '0.025rem',
    },
  },

  cardWrapper: {
    maxWidth: '620px',
    margin: '0 auto',
  },

  card: {
    margin: '0 1.4rem',
    position: 'relative',
    bottom: '35px',
    padding: '20px',
    minHeight: '55.01%',

    [theme.breakpoints.up('sm')]: {
      margin: '0 2rem',
      padding: '30px 60px',
      bottom: '80px',
    }
  },

  quote: {
    fontSize: '28px',
    textAlign: 'center',
    minWidth: '98%',
    fontFamily: 'Oswald, Arial, sans-serif',
    margin: '0 auto',

    [theme.breakpoints.up('sm')]: {
      fontSize: '1.5rem',
      lineHeight: '2rem',
    }
  },

  attribution: {
    marginTop: '1.5rem',
    display: 'block',
    fontSize: '1rem',
    color: '#3A8DDE',
    textAlign: 'center',
    fontFamily: 'Oswald, Arial, sans-serif',
  },

  imageHolder: {
    position: 'absolute',
    bottom : '-3px',
    left: 0,
    right: 0,
    margin: '0 auto',
    maxWidth: 1000,
    paddingLeft: 56,
  },

  image: {
    display: 'none',

    [theme.breakpoints.up('md')]: {
      display: 'block',
      maxHeight: 375,
      maxWidth: 200,
    }
  },

  button: {
    width: '100%',
    height: 46,
    display: 'flex',
    justifyContent: 'center',
  },

  buttonText: {
    fontWeight: 700,
    padding: '4px 13px',
    fontSize: '1.1rem',
    fontFamily: 'Oswald, Arial, sans-serif',
    boxShadow: 'none',
  },

  buttonLink: {
    textDecoration: 'none',
  },

  paragraphText: {
    maxWidth: '480px',
    marginTop: '30px',
    textTransform: 'none',
    fontFamily: 'Roboto, Arial, sans-serif',
    color: 'white',
    letterSpacing: '0.5px',
    fontSize: '18px',
    lineHeight: '28px',
    display: 'inline-block',
  }
});


export default withStyles(styles);
