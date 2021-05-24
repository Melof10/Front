import React, { useState, useEffect, Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useStyles } from './styles';
import { getPhoto } from './functions';
import { useParams } from 'react-router-dom';

const ViewPhoto = () => {
    const classes = useStyles();    
    const [data, setData] = useState({});    
    const { id } = useParams();
    
    useEffect(() => {
        getPhoto(setData, id);
    }, [id])
    
    return(
        <Fragment>       
            <Container component="main" className={classes.paper}>
                <CssBaseline />                
                <Grid item>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia}
                            image={data.thumbnailUrl}
                            title="Image title"
                        />
                        <CardContent className={classes.cardContent}>                    
                            <Typography>
                                {data.title}
                            </Typography>
                        </CardContent>                        
                    </Card>
                </Grid>        
            </Container>
        </Fragment>
    )
}

export default ViewPhoto;