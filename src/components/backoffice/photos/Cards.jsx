import React, { useState, useEffect, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { NavigateBefore, NavigateNext, FirstPage, LastPage } from '@material-ui/icons';
import { useStyles } from './styles';
import { getPhotos, previusPage, nextPage, firstPage, lastPage } from './functions';
import CardsPhotos from './CardsPhotos';
import { FIRST_PAGE, LAST_PAGE } from '../../../constants';

const Cards = () => {
    const classes = useStyles();
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);      

    useEffect(() => {
        getPhotos(setPhotos, page);        
    }, [page]);

    return (
        <Fragment>
            <CssBaseline />      
            <Container component="main">
                <Grid container justify="space-between">
                    <Grid item className={classes.pages}>
                        <Typography variant="h6" component="h2">
                            page {page} of {LAST_PAGE}
                        </Typography>            
                    </Grid>                
                    <Grid item justify="space-between">                    
                        <Button
                            disabled={page === FIRST_PAGE}
                            component="button"
                            variant="contained" 
                            color="primary"
                            className={classes.button}
                            onClick={() => firstPage(setPhotos, setPage, FIRST_PAGE)}
                        >
                            <FirstPage />
                        </Button>
                        <Button
                            disabled={page === FIRST_PAGE}
                            component="button"
                            variant="contained" 
                            color="primary"
                            className={classes.button}
                            onClick={() => previusPage(setPhotos, setPage, page)}
                        >
                            <NavigateBefore />                            
                        </Button>
                        <Button
                            disabled={page === LAST_PAGE}
                            component="button"
                            variant="contained" 
                            color="primary"
                            className={classes.button}
                            onClick={() => nextPage(setPhotos, setPage, page)}
                        >                            
                            <NavigateNext />
                        </Button>
                        <Button
                            disabled={page === LAST_PAGE}
                            component="button"
                            variant="contained" 
                            color="primary"
                            className={classes.button}
                            onClick={() => lastPage(setPhotos, setPage, LAST_PAGE)}
                        >
                            <LastPage />
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