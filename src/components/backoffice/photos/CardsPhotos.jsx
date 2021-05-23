import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './styles';

const CardsPhotos = (props) => {
    const classes = useStyles();    
    
    return(
        <Fragment>
            {props.photos.map((photo) => (
                <Grid item key={photo.id} xs={12} sm={6} md={3}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia}
                            image={photo.thumbnailUrl}
                            title="Image title"
                        />
                        <CardContent className={classes.cardContent}>                    
                            <Typography>
                                {photo.title}
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
        </Fragment>
    )
}

export default CardsPhotos;