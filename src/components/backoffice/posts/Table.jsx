import React, { useState, useEffect } from 'react';
import MaterialTable from '@material-table/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { columns } from './columns';
import { options } from './styles';
import { getPosts } from './functions';
import { useHistory } from 'react-router-dom';

const TableCategories = () => {  
    const [data, setData] = useState([]);
    const history = useHistory(); 

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
                actions={[
                    {
                        icon: 'visibility',
                        tooltip: 'View Post',
                        onClick: (event, rowData) => {  
                            history.push('/post/' + rowData.id)
                        }
                    }
                ]}
            /> 
        </Container>       
    )
}

export default TableCategories;