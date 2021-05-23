import React from 'react';
import MaterialTable from '@material-table/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { columns } from './columns';
import { data } from './data';
import { options } from './styles';

const TableCategories = () => {        
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