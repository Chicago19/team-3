import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LandingPageLayout from './LandingLayout';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import MenuItem from '@material-ui/core/MenuItem';

import IconButton from '@material-ui/core/IconButton';
import { Select } from '@material-ui/core';

const backgroundImage =
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2004&q=80';

const styles = theme => ({
  root2: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
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
  appBar: {
    position: 'relative',
  },
  card: {
   
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registrationCard: {
        open: false,
      },
      values: '',
      setValues: '',
      name: '',
      zipCode:'',
      email:'',
      transport:'',
    }
  }

  
  RegistrationButtonClicked = () => {
    this.setState({
      registrationCard: {
        open: true,
      },
    })
  }

handleChange = (event) => {
  let { values } = this.state;
  console.log('test')
  this.setState({
    values: event,
  })
  };

closeItemCard = () => {
  this.setState({
    registrationCard: {
      open: false,
    }
  })
}

handleNameChange = (event) => {
  this.setState({
    name: event.target.value,
  });
};
handleZipCodeChange = (event) => {
  this.setState({
    zipCode: event.target.value,
  });
};
handleEmailChange = (event) => {
  this.setState({
    email: event.target.value,
  });
};

handleTranspotationChange = (event) => {
  this.setState({
    transport: event.target.value,
  });
};


submitAnswers = () => {
  // this.setState({
  //   name: this.state.name,
  // })
  console.log(this.state.name)
  console.log(this.state.zipCode)
  console.log(this.state.email)
  console.log(this.state.transport)
  

}
  render() {

    const { classes, } = this.props;
    // Properties
    const { registrationCard,values,name,zipCode } = this.state;
    let landingComponent =
      <div>
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
            onClick={() => this.RegistrationButtonClicked()}
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
      </div>

let dialogForRegistration =
<div>
<Dialog fullScreen open={registrationCard.open} onClose={this.closeItemCard} TransitionComponent={Transition}>
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={this.closeItemCard} aria-label="close" >
     
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Welcome
        </Typography>
      </Toolbar>
    </AppBar>
    <DialogTitle id="form-dialog-title">Registration</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>   
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nombre"
            type="string"
            fullWidth
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="zipCode"
            label="Código Postal"
            type="number"
            fullWidth
            value={this.state.zipCode}
            onChange={this.handleZipCodeChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            value={this.state.email}
            onChange={this.handleEmailChange}
            
          />
          <TextField
            autoFocus
            margin="dense"
            id="transpotation"
            label="¿Cuál es su principal medio de transporte?"
            type="string"
            fullWidth
            value={this.state.transport}
            onChange={this.handleTranspotationChange}
          />
         
          {/* <TextField
      id="standard-select-currency"
      select
      label="Select"
      className={classes.textField}
      value={values.currency}
      // onChange={this.handleChange('currency')}
      // SelectProps={{
      //   MenuProps: {
      //     className: classes.menu,
      //   },
      // }}
      // helperText="Please select your currency"
      // margin="normal"
    >
      {currencies.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))} 
    </TextField>   */}
<div className={classes.root2}>
<Grid container spacing={3}>
<Grid item xs={6} sm={3}>
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={6} sm={3}>
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={6} sm={3}>
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>

</div>

   

 
      
          
        </DialogContent>
        <DialogActions>
          <Button onClick={this.closeItemCard} color="primary">
            Cancel
          </Button>
          <Button onClick={this.submitAnswers()} color="primary">
            Subscribe
          </Button>
        </DialogActions>

  </Dialog>
</div>
    return (
      <div>
        <React.Fragment>
        {landingComponent}
        {dialogForRegistration}

        </React.Fragment>
      
      </div>

    );
  }
}
Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);