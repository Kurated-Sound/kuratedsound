// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { signIn } from '../../actions/session_actions'
// import { useHistory } from 'react-router-dom';
// // import { AUTH } from '../../constants/actionTypes';

// import useStyles from './styling/login_style';

// import { 
//   Avatar, Button, CssBaseline, FormControlLabel, Checkbox, 
//   Link, Paper, Box, Grid, LockOutlinedIcon, Typography
// } from './styling/material_ui_index';
// //

// export const SessionForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const history = useHistory(); 
//   const dispatch = useDispatch();

//   // similar to mSTP errors: state.errors.session passing in State as a prop
//   // const sessionErrors = useSelector( (state) => state.errors.session )

//   // similar to mDTP , with this you can import actions and use dispatch freely?
  
//   //styling 
//   const classes = useStyles();


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     let formData = {
//       email: email,
//       password: password
//     };

//     dispatch(signIn(formData, history))
//   };

//   const handleChange = (field) => {
//     return (e) => {
//       const value = e.currentTarget.value;

//       if (field === 'email') setEmail(value)
//       if (field === 'password') setPassword(value)
//     }
//   }

//   return (
//     <Grid container component="main" className={classes.root}>
//       <CssBaseline />
//       <Grid item xs={false} sm={4} md={7} className={classes.image} />
//       <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//         <div className={classes.paper}>
//           <Avatar className={classes.avatar}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>

//           <form className={classes.form} noValidate onSubmit={handleSubmit}>
//             <input
//               required
//               value={email}
//               placeholder="Email Address"
//               onChange={handleChange('email')}
//               variant="outlined"
//               margin="normal"
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <input
//               required
//               value={password}
//               placeholder="Password"
//               onChange={handleChange('password')}
//               variant="outlined"
//               margin="normal"
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               className={classes.submit}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="/signup" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//             <Box mt={5}>
//               {/* <Copyright /> */}
//             </Box>
//           </form>
//         </div>
//       </Grid>
//     </Grid>
//   );
// }

// export default SessionForm




///////

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
// import { GoogleLogin } from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { signIn, signUp } from '../../actions/session_actions';
// import { AUTH } from '../../constants/actionTypes';
import Input from './input'

import useStyles from './styles'
const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const SignUp = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signUp(form, history));
    } else {
      dispatch(signIn(form, history));
    }
  };

  // const googleSuccess = async (res) => {
  //   const result = res?.profileObj;
  //   const token = res?.tokenId;

  //   try {
  //     dispatch({ type: AUTH, data: { result, token } });

  //     history.push('/');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const googleError = () => alert('Google Sign In was unsuccessful. Try again later');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            { isSignup && (
            <>
              <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
              <Input name="lastName" label="Last Name" handleChange={handleChange} half />
            </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            { isSignup ? 'Sign Up' : 'Sign In' }
          </Button>
          {/* <GoogleLogin
            clientId="564033717568-e5p23rhvcs4i6kffgsbci1d64r8hp6fn.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          /> */}
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUp;
