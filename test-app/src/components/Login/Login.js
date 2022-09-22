import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import loginbg from '../../images/Amazon-bg.webp'
// import { useNavigate } from 'react-router-dom';
// import { getTokenPath } from '../../backendInfo';
// import axios from 'axios';
// import Cookies from 'js-cookie';
import { backendRoot } from '../../backendInfo'
import CircularProgress from '@mui/material/CircularProgress';
import MicrosoftIcon from '../../images/icons8-microsoft-50.png';
import GoogleIcon from '@mui/icons-material/Google';


const theme = createTheme();

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href='https://www.linkedin.com/in/danyal-akram-95a188173/'>
                Muhammad Danyal Akram
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Login() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleClick = event => {
        setLoading(true)
        setError(null)
    };

    const handleSubmit = event => {

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
                        backgroundImage: 'url(' + loginbg + ')',
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
                            mt: '10vh',
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Box sx={{ "lineSpacing": 1, height: '20vh' }} >
                            <Typography component="h1" variant="h3" style={{ 'width': '385px', "letterSpacing": 0, "fontWeight": "400", "lineHeight": "1.15" }}>
                                AMAZON CLONE</Typography>
                            <hr style={{ 'margin': 0 }} />
                        </Box>
                        <Box component="form" noValidate onSubmit={handleSubmit}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, height: '7vh' }}
                            >
                                Sign In
                                <span >
                                    {loading && <CircularProgress size={25} sx={{ color: 'white', mt: '1vh', ml: '2vh' }} />}
                                </span>
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link href="/signup" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>

                            <div style={{ marginTop: '3vh', height: '19vh', display: 'flex', flexDirection: 'column', width: '100%', 'alignItems': 'center' }}>
                                <span onClick={handleClick}>

                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mb: 2, height: '40px', width: '260px', backgroundColor: "#db4437", fontSize: "0.77rem", "&:hover": { backgroundColor: "#ae2519" } }}
                                        href={`${backendRoot}/accounts/google/login/?process=login`}
                                    >
                                        <>
                                            <GoogleIcon style={{ width: '25px', marginRight: '8px', marginLeft: '-6px' }} />
                                            {"Sign In with Google"}
                                        </>
                                    </Button>
                                </span>
                                <span onClick={handleClick}>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ height: '40px', width: '260px', fontSize: '0.69rem', backgroundColor: "#00a4ef", "&:hover": { backgroundColor: "#0078ef" } }}
                                        color="error"
                                        href={`${backendRoot}/accounts/microsoft/login/`}
                                    >
                                        <>
                                            <img style={{ width: '25px', marginRight: '9px' }} src={MicrosoftIcon} />
                                            {"Sign In with Microsoft"}
                                        </>
                                    </Button>
                                </span>
                                <span style={{ display: 'block', width: 'fit-content', margin: 'auto', height: '5vh' }}>
                                    {loading && <CircularProgress size={25} />}
                                    {error ? <Typography sx={{ color: 'red', 'fontSize': '0.9rem' }} >{error}</Typography> : null}
                                </span>
                            </div>
                            <Copyright />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}