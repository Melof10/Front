import React, { useState } from 'react';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import { useStyles } from './styles';
import { LOGIN_INCORRECT } from '../../../constants';

const AlertLogin = () => {
    const classes = useStyles();  
    const [open, setOpen] = useState(true);

    return (
        <div className={classes.root}>
            <Collapse in={open}>
                <Alert
                    severity="error"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                >
                    {LOGIN_INCORRECT}
                </Alert>
            </Collapse>
        </div>
    );
}

export default AlertLogin;