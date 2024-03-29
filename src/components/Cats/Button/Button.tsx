import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';
import { createMuiTheme, makeStyles, withStyles } from '@material-ui/core/styles';
import React from 'react';

const AlephButton = (props: any) => {
  const AlephButton = withStyles({
    root: {
        margin :"10px",
      borderRadius: '8px',
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '6px 12px',
      height: '56px',
      width: '256px',
      lineHeight: 1.5,
      borderColor: '#007bff',
      fontFamily: [
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(','),
      '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc'
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf'
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)'
      }
    }
  })(Button);

  const ColorButton = withStyles(theme => ({
    root: {
      color: theme.palette.getContrastText(purple[500]),
      backgroundColor: purple[500],
      '&:hover': {
        backgroundColor: purple[700]
      }
    }
  }))(Button);

  const useStyles = makeStyles(theme => ({
    primary: {
      color: '#FFFFFF',

      backgroundColor: '#00694B'
    },

    primaryWhiteBackground: {
      backgroundColor: '#FFFFFF',
      color: '#00694B'
    },
    PrimaryDisabled: {
      backgroundColor: '#D5DADD',
      color: '#FFFFFF',
      pointerEvents: 'none'
    },
    PrimaryDisabledNoBackgroud: {
      backgroundColor: 'none',
      color: '#000000',
      pointerEvents: 'none',
      border: ' 2px solid #D5DADD'
    },
    PrimaryAutoFill : {
        color: '#000000',

        backgroundColor: '#FFFFFF'
    }
  }));

  const theme = createMuiTheme({
    palette: {
      primary: green
    }
  });
  const classes = useStyles();
  let classType = '';

  switch (props.type) {
    case 'primary': {
      classType = classes.primary;
      break;
    }
    case 'primaryWhiteBackground': {
      classType = classes.primaryWhiteBackground;
      break;
    }
    case 'PrimaryDisabled': {
      classType = classes.PrimaryDisabled;
      break;
    }
    case 'PrimaryDisabledNoBackgroud': {
      classType = classes.PrimaryDisabledNoBackgroud;
      break;
    }
    case 'PrimaryAutoFill': {
        classType = classes.PrimaryAutoFill;
        break;
      }
  }

  

  return (
    <>
      <AlephButton variant="contained" className={classType}>
        {props.title}
      </AlephButton>
    </>
  );
};

export default AlephButton;






