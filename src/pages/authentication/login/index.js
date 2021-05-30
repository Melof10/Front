import React, { Fragment } from 'react';
import Login from './Login';
import { Redirect } from 'react-router-dom';
import { getAccessTokenApi } from '../../../utils/auth';

const index = () => {
    if (getAccessTokenApi()) {
        return <Redirect to="/home" />
    }

    return(
        <Fragment>
            <Login />
        </Fragment>            
    )
}

export default index;