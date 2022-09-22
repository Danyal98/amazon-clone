import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import axiosInstance from '../../axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import CustomSnackbar from '../Snackbar/Snackbar';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import CircularProgress from '@mui/material/CircularProgress';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://www.linkedin.com/in/danyal-akram-95a188173/">
                Muhammad Danyal Akram
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function SignUp() {

    const navigate = useNavigate();
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    // const verifyLogin = () => {

    //     localStorage.getItem('access_token') ? navigate('/') : navigate('/signup')
    // }

    // useEffect(() => {
    //     verifyLogin()
    // }, [])

    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    const validEmail = new RegExp("^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$");

    const handleSubmit = (e) => {
        e.preventDefault();
        const first_name = e.target[0].value;
        const last_name = e.target[2].value;
        const username = e.target[4].value;
        const email = e.target[6].value;
        const password = e.target[8].value;

        const data = { first_name, last_name, username, email, password }

        console.log('data: ', data)

        if (!data.email) {
            setMessage("Email cannot be Empty")
        }
        else if (!data.username) {
            setMessage("Username cannot be Empty")
        }
        else if (!data.password) {
            setMessage("Password cannot be Empty")
        }
        else if (!data.first_name) {
            setMessage("First name cannot be Empty")
        }
        else if (!data.last_name) {
            setMessage("Last cannot be Empty")
        }
        else if (!validEmail.test(data.email)) {
            setMessage("Invalid email")
        }
        else if (!strongRegex.test(data.password)) {
            setMessage('Invalid Password')
        }
        else {
            setLoading(true);
            axiosInstance
                .post(`user/register/`, {
                    email: data.email,
                    user_name: data.username,
                    password: data.password,
                    first_name: data.first_name,
                    last_name: data.last_name,
                })
                .then((res) => {
                    console.log(res);
                    if (res.status === 201) {
                        setLoading(false)
                        setMessage("User Added")
                        console.log(res.data)
                    }
                })
                .catch((err) => {
                    setLoading(false)
                    setMessage("Email or Username already exists")
                    console.log("Error Occured")
                });
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1005&q=80)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ mt: -5, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        name="firstname"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastname"
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="username"
                                        label="Username"
                                        name="username"
                                        autoComplete="username"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Typography
                                    component="h1"
                                    fontWeight="xl"
                                    sx={{
                                        fontSize: 12,
                                        paddingLeft: "20px",
                                        paddingTop: "20px",
                                        color: 'red',
                                        display: {
                                            xs: "none",
                                            sm: "none",
                                            sx: "inherit",
                                            md: "inherit",
                                            lg: "inherit",
                                        },
                                    }}
                                >
                                    Password should have atleast 8 characters and must contain numeric, special characters, small and capital alphabets.
                                </Typography>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, height: '7vh' }}
                            >
                                Sign Up
                                <span >
                                    {loading && <CircularProgress size={20} sx={{ color: 'white', mt: '1vh', ml: '2vh' }} />}
                                </span>
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="/login" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 2 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <CustomSnackbar
                message={message}
                setMessage={setMessage} />
        </ThemeProvider>
    );
}