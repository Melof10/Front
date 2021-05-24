import React, { useEffect, useState, Fragment } from 'react';
import { getPost } from './functions';
import { useParams } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useStyles } from './styles';

const ViewPost = () => {    
    const classes = useStyles();  
    const [data, setData] = useState({});    
    const { id } = useParams();       

    useEffect(() => {
        getPost(setData, id);
    }, [id])
    
    return(
        <Fragment>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>                   
                    <Typography className={classes.title}>
                        {data.title}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {data.body}
                    </Typography>                
                </div>      
            </Container>
        </Fragment>
    )
}

export default ViewPost;