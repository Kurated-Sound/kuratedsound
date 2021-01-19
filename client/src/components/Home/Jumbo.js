import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://images.pexels.com/photos/111117/pexels-photo-111117.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '700px',
  },
  overlay: {
    // position: 'absolute',
    // whiteSpace: 'pre-line',
    // color: '#ffffff',
    // display: 'block',
    // margin-block-start: 7.4em;
    // margin-block-end: 0.85em;
    // margin-inline-start: 0.3em;
    // margin-inline-end: 0em;
    // font-weight: bold;
    // backgroundColor: 'rgba(0,0,0,.3)',
    display: 'block',
    positon: 'absolute',
    color: '#ffffff',
    whiteSpace: 'pre-line',
    marginBlockStart: '7.4em',
    marginBlockEnd: '0.85em',
    marginInlineStart: '0.3em',
    marginInlineEnd: '0em',
    fontWeight: 'bold',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(https://images.pexels.com/photos/111117/pexels-photo-111117.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)` }}>
      {/* Increase the priority of the hero background image */}
      <img style={{ display: 'none' }} alt ='h' src='url(https://images.pexels.com/photos/111117/pexels-photo-111117.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)'/>
      <div className='header-1' />
      <Grid container>
        <Grid item md={6}>
          <div className='header-1'>
            <Typography className='header-1' component="h1" variant="h3" color="inherit" gutterBottom>
              title
            </Typography>
            {/* <Typography variant="h5" color="inherit" paragraph>
              description
            </Typography> */}
            {/* <Link variant="subtitle1" href="#">
              linkText
            </Link> */}
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};