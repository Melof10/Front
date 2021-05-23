import React, { useState, useEffect, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import { useStyles } from './styles';
import { getPhotos } from './functions';
import CardsPhotos from './CardsPhotos';

const Cards = () => {
  const classes = useStyles();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos(setPhotos);    
  }, []);

  return (
    <Fragment>
        <CssBaseline />      
        <Container component="main">
            <Grid container justify="space-between">
                <Grid item>
                    <Typography gutterBottom variant="h3" component="h2">
                        Photos
                    </Typography>            
                </Grid>
                <Grid item className={classes.buttons}>
                    <Button variant="contained" color="primary" className={classes.buttonBefore}>
                        <NavigateBefore />
                        Previus
                    </Button>
                    <Button variant="contained" color="primary">                        
                        Next
                        <NavigateNext />
                    </Button>
                </Grid>
            </Grid>            
            <Grid container spacing={5} className={classes.cardGrid}>
                <CardsPhotos photos={photos} />
            </Grid>            
        </Container>    
    </Fragment>
  );
}

export default Cards;