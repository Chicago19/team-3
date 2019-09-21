import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LandingPageLayout from './LandingLayout';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const backgroundImage =
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2004&q=80';

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
  //  backgroundColor: theme.palette.secondary.light,
  },
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function Landing(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      
      <LandingPageLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
       PODER
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
     This could be their slogan. 
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href={console.log('Yooo, I was pressed')}
      >
        Register
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Second Slogan
      </Typography>
    </LandingPageLayout> 

    <section className={classes.root}>
    <Container className={classes.container}>
      <img
       // src="https://images.unsplash.com/photo-1450107579224-2d9b2bf1adc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        className={classes.curvyLines}
        alt="curvy lines"
      />
      <Grid container spacing={5}>
        <Grid item xs={12} md={4}>
          <div className={classes.item}>
            <img
              className={classes.image}
          //    src="/static/themes/onepirate/productValues1.svg"
           //   alt="suitcase"
            />
            <Typography variant="h6" className={classes.title}>
              The best luxury hotels
            </Typography>
            <Typography variant="h5">
              {'From the latest trendy boutique hotel to the iconic palace with XXL pool'}
              {', go for a mini-vacation just a few subway stops away from your home.'}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={classes.item}>
            <img
              className={classes.image}
            //  src="/static/themes/onepirate/productValues2.svg"
           //   alt="graph"
            />
            <Typography variant="h6" className={classes.title}>
              New experiences
            </Typography>
            <Typography variant="h5">
              {'Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… '}
              {'your Sundays will not be alike.'}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={classes.item}>
            <img
              className={classes.image}
            //  src="/static/themes/onepirate/productValues3.svg"
           //   alt="clock"
            />
            <Typography variant="h6" className={classes.title}>
              Exclusive rates
            </Typography>
            <Typography variant="h5">
              {'By registering, you will access specially negotiated rates '}
              {'that you will not find anywhere else.'}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  </section>
      
    </React.Fragment>
  );
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);