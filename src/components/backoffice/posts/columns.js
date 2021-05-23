import React from 'react';
import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';

export const columns = [
    {
        title: 'Title',
        field: 'title',
        headerStyle: { textAlign: 'left' },
        cellStyle: { textAlign: 'left' }
    },
    {                
        cellStyle: { width: '3%' },
        render: rowData => 
            <Button colorScheme="yellow">
                <VisibilityIcon />
            </Button>
    }
]