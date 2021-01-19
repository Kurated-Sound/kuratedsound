// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Container from '@material-ui/core/Container';
// import Typography from '../Typography';

// const styles = (theme) => ({
//   root: {
//     display: 'flex',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.secondary.light,
//   },
//   container: {
//     marginTop: theme.spacing(15),
//     marginBottom: theme.spacing(30),
//     display: 'flex',
//     position: 'relative',
//   },
//   item: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: theme.spacing(0, 5),
//   },
//   image: {
//     height: 55,
//   },
//   title: {
//     marginTop: theme.spacing(5),
//     marginBottom: theme.spacing(5),
//   },
//   curvyLines: {
//     pointerEvents: 'none',
//     position: 'absolute',
//     top: -180,
//   },
// });

<<<<<<< Updated upstream
 <Container className='center-block my-5'>
   <Row>
     <Col>
       <Card className='card-fix'>
         <Card.Body>
           <i className="fab fa-twitch fa-fw"></i>
           <Card.Title>Service 1</Card.Title>
           <Card.Text>
             We create unique experiences that cater to your wants and needs by turning your occasion to an overall phenomenon based on the criteria.
           </Card.Text>
         </Card.Body>
       </Card>
     </Col>
     <Col>
       <Card className='card-fix'>
         <Card.Body>
           <i className="fab fa-twitch fa-fw"></i>
           <Card.Title>Service 2</Card.Title>
           <Card.Text>
             Listen to the music through our high-grade equipment, let the DJ boost your vibes, and dance to your heart's content.
           </Card.Text>
         </Card.Body>
       </Card>
     </Col>
     <Col>
       <Card className='card-fix'>
         <Card.Body>
           <i className="fab fa-twitch fa-fw"></i>
           <Card.Title>Service 3</Card.Title>
           <Card.Text>
             We are not your ordinary bluetooth speaker or sound bar playing through your phone.
           </Card.Text>
         </Card.Body>
       </Card>
     </Col>
   </Row>
 </Container>
);
=======
// function ProductValues(props) {
//   const { classes } = props;
>>>>>>> Stashed changes

//   return (
//     <section className={classes.root}>
//       <Container className={classes.container}>
//         <img
//           src="/static/themes/onepirate/productCurvyLines.png"
//           className={classes.curvyLines}
//           alt="curvy lines"
//         />
//         <Grid container spacing={5}>
//           <Grid item xs={12} md={4}>
//             <div className={classes.item}>
//               <img
//                 className={classes.image}
//                 src="/static/themes/onepirate/productValues1.svg"
//                 alt="suitcase"
//               />
//               <Typography variant="h6" className={classes.title}>
//                 The best in the sound business
//               </Typography>
//               <Typography variant="h5">
//                 {'From dropping the latest tracks to using advanced sound equipment, '}
//                 {'turn your occassion or event to an overall phenomenon!'}
//               </Typography>
//             </div>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <div className={classes.item}>
//               <img
//                 className={classes.image}
//                 src="/static/themes/onepirate/productValues2.svg"
//                 alt="graph"
//               />
//               <Typography variant="h6" className={classes.title}>
//                 New experiences
//               </Typography>
//               <Typography variant="h5">
//                 {'Feel the music, let the DJ boost your vibes '}
//                 {'... party and dance until your heart is content.'}
//               </Typography>
//             </div>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <div className={classes.item}>
//               <img
//                 className={classes.image}
//                 src="/static/themes/onepirate/productValues3.svg"
//                 alt="clock"
//               />
//               <Typography variant="h6" className={classes.title}>
//                 Exclusive rates
//               </Typography>
//               <Typography variant="h5">
//                 {'By registering, you will access specially negotiated rates '}
//                 {'that you will not find anywhere else.'}
//               </Typography>
//             </div>
//           </Grid>
//         </Grid>
//       </Container>
//     </section>
//   );
// }

// ProductValues.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(ProductValues);