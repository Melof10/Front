import React, { Fragment } from 'react';
import Posts from './posts';
import Photos from './photos';

const Main = () => {
    return(
        <Fragment>
            <Posts />
            <Photos />
        </Fragment>        
    )
}

export default Main;