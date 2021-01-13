import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import mackie from '../../images/mackie.png';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    // display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'auto',
  },
  cardMedia: {
    paddingTop: '28%', // 16:9
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'auto',
    height: '100%'
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'auto',
    alignItems: 'stretch',
  }
}));

export default function BrandLogosCard() {
  const classes = useStyles();
  const generateCards = () => {
    const cards = [1, 2, 3, 4, 5, 6]
    const logos = {
      1: 'https://www.pinclipart.com/picdir/middle/113-1132654_messages-delivered-burton-snowboards-logo-clipart.png',
      2: 'https://www.pinclipart.com/picdir/middle/113-1132654_messages-delivered-burton-snowboards-logo-clipart.png',
      3: 'https://w7.pngwing.com/pngs/8/690/png-transparent-mackie-public-address-systems-audio-mixers-loudspeaker-anthony-mackie-text-trademark-logo.png',
      4: 'https://w7.pngwing.com/pngs/8/690/png-transparent-mackie-public-address-systems-audio-mixers-loudspeaker-anthony-mackie-text-trademark-logo.png',
      5: 'https://w7.pngwing.com/pngs/8/690/png-transparent-mackie-public-address-systems-audio-mixers-loudspeaker-anthony-mackie-text-trademark-logo.png',
      6: 'https://thumbnail.imgbin.com/7/12/21/imgbin-disc-jockey-pioneer-dj-dj-mixer-musician-audio-musical-instruments-Ff0SnHXW3UwqvFy1bRBCfk5Zs_t.jpg',
      7: 'https://thumbnail.imgbin.com/7/12/21/imgbin-disc-jockey-pioneer-dj-dj-mixer-musician-audio-musical-instruments-Ff0SnHXW3UwqvFy1bRBCfk5Zs_t.jpg'
    }

    return(
      cards.map((card) => {
        console.log(Object.values(logos)[card])
        return(
          <Grid item style={{height:'120px', minWidth: '16.6%'}} key={6} xs={12} sm={6} md={1}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={Object.values(logos)[card]}
                title="Image title"
              />
            </Card>
          </Grid>
        )
      })
    )
  }

    return (
          <Container className={classes.cardGrid} maxWidth="100%">
              {/* End hero unit */}
              <Grid container spacing={0} className={classes.grid}>
                {generateCards()}
              </Grid>
          </Container>
    )
}