import React, { useState, useEffect } from 'react';
import MaterialTable from '@material-table/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { columns } from './columns';
import { options } from './styles';
import { getPosts } from './functions';

const TableCategories = () => {  
    const [data, setData] = useState([]);

    useEffect(() => {
        getPosts(setData);
    }, []);
    
    return (
        <Container component="main" maxWidth="md">
            <CssBaseline />
            <MaterialTable                                
                columns={columns}     
                data={data}                  
                title="POSTS"                                
                options={options}
            /> 
        </Container>       
    )
}

export default TableCategories;