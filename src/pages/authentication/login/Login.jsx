import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Formik, Form } from 'formik';
import { useStyles } from './styles';
import { LoginSchema } from './settings';
import axios from 'axios';
import { API_URL, LOGIN } from '../../../constants';

const Login = () => {
  const classes = useStyles();  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Formik
          initialValues={{          
            email: '',
            password: '',
          }}
          validationSchema={LoginSchema}
          onSubmit={values => {                 
            console.log(values);
            axios.post(API_URL + LOGIN, values)
            .then(response => {
              console.log(response.data)
              alert('logueado');
            })
            .catch(error => {
              console.log(error);
            })
          }}
        >
          {props => (
            <Form className={classes.form}>
              <TextField
                onChange={props.handleChange}
                onBlur={props.handleBlur} 
                value={props.values.name}
                error={props.touched.email && Boolean(props.errors.email)}            
                helperText={props.touched.email && props.errors.email}
                variant="outlined"
                margin="normal"                
                fullWidth                
                label="Email Address"
                name="email"
                autoComplete="email"                    
              />              
              <TextField
                onChange={props.handleChange}
                onBlur={props.handleBlur} 
                value={props.values.name}
                error={props.touched.password && Boolean(props.errors.password)}            
                helperText={props.touched.password && props.errors.password}
                variant="outlined"
                margin="normal"                
                fullWidth
                name="password"
                label="Password"
                type="password"                
                autoComplete="current-password"
              />                        
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>          
            </Form>
          )}
        </Formik>
      </div>      
    </Container>
  );
}

export default Login;