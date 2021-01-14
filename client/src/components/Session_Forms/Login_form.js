import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useStyles from './styling/login_style';

import { 
  Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, 
  Link, Paper, Box, Grid, LockOutlinedIcon, Typography
} from './styling/material_ui_index';


export default function SignInSide() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  
  //boiler plate
  const dispatch = useDispatch();

  const classes = useStyles();

  const handleSubmit = async (e) => {
    let userData = {
      email: this.state.email,
      password: this.state.password
    };
    
    res = await dispatch(loginUser(userData))
    // this.props.login(userData);
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <form className={classes.form} noValidate onSubmit={handleSubmit()}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              {/* <Copyright /> */}
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}