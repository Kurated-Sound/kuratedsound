import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
      cards.map((card, i) => {
        return(
          <Grid item style={{height:'120px', minWidth: '16.6%'}} key={i} xs={12} sm={6} md={1}>
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
          <Container className={classes.cardGrid} style={{maxWidth:"100%"}}>
              {/* End hero unit */}
              <Grid container spacing={0} className={classes.grid}>
                {generateCards()}
              </Grid>
          </Container>
    )
}