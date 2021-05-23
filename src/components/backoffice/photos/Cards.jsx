import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import { useStyles } from './styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Cards = () => {
  const classes = useStyles();

  return (
    <Fragment>
        <CssBaseline />      
        <Container maxWidth="md">
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
                {cards.map((card) => (
                    <Grid item key={card} xs={12} sm={6} md={3}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>                    
                                <Typography>
                                    This is a media card. You can use this section to describe the content.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Show
                                </Button>                    
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>            
        </Container>    
    </Fragment>
  );
}

export default Cards;