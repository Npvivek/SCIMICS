import * as React from 'react';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SCIMICS from './assets/SCIMICS.svg'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';




// TODO remove, this demo shouldn't need to reset the theme.

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const gradientStyle = {
    height: '46px',
    border: '1px solid #5C67C7', borderRadius: '6px',
    // background: 'linear-gradient(90deg, #5c67c759 -23.76%, #5c67c759 101.73%)',
    background: "linear-gradient(268deg, rgba(92, 103, 199, 0.35) -23.6%, rgb(34 34 36 / 35%) 101.73%)",
    color: "#5C67C7"
}

export default function SignIn() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Box component="img"
                sx={{
                    width: '130.004px',
                    height: '25px',
                    color: '#F7F8F8',
                    mt: 4, md: 6
                }} src={SCIMICS} />
            {/* <GitHubIcon sx={{ backgroundImage: `url(${SCIMICS})`, color: '#FFF0' }} />
                <Typography>SCIMICS</Typography> */}

            <Container component="main"
                fixed
                // maxWidth="xs"
                sx={{
                    width: '438px',
                    height: '584px',
                    mt: 2, borderRadius: '10px',
                    border: '1px solid rgba(44, 45, 60, 0.50)', background: "linear-gradient(151deg, rgba(44, 45, 60, 0.47) 3.72%, rgba(15, 16, 18, 0.66) 96.89%) "
                }} >

                <Box
                    sx={{
                        marginTop: 4,
                        pl: 3, pr: 3,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                        <Typography component="h1" variant="h6" sx={{ ml: '0', color: '#858699' }}>
                            Welcome 👋
                        </Typography>
                        <Typography component="h1" variant="h4" sx={{ fontWeight: 'bold' }} >
                            Login Account
                        </Typography>
                    </Box>
                    <Grid container spacing={2} sx={{ mt: 2 }} >
                        <Grid item xs={6}>
                            <Button variant='outlined' style={gradientStyle} fullWidth startIcon={<GoogleIcon />}>
                                Google
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant='outlined'
                                style={gradientStyle}
                                fullWidth
                                startIcon={<GitHubIcon sx={{ color: '#838383' }} />}>
                                Github
                            </Button>
                        </Grid>
                    </Grid>
                    <Typography sx={{ mt: 2, color: '#4F52FF' }}>Or</Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} >
                        <Typography sx={{ display: 'flex', color: '#858699' }}>Email address*</Typography>
                        <TextField
                            margin="normal"

                            fullWidth
                            id="email"
                            label="Enter email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            variant='outlined'
                            size='small'
                            sx={{ borderRadius: '6px', border: '0.5px solid #2C2D3C', bgcolor: '#212428' }}
                        />
                        <Typography sx={{ display: 'flex', mt: 1, color: '#858699' }}>Password*</Typography>
                        <TextField
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Enter Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            variant='outlined'
                            size='small'
                            sx={{ borderRadius: '6px', border: '0.5px solid #2C2D3C', bgcolor: '#212428' }}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            style={gradientStyle}
                            variant="outlined"
                            sx={{ mt: 3, mb: 2, }}
                        >
                            <Typography>Login</Typography>
                        </Button>
                        <Grid container sx={{ pb: 6 }}>
                            <Grid item xs={7} >
                                <Typography variant="body2" sx={{ ml: 2, color: '#838383' }}>
                                    You don't have an account?
                                </Typography>
                            </Grid>

                            <Grid item xs={5} sx={{ display: 'flex' }} >
                                <Link href="#" variant="body2" sx={{ color: '#CED765' }}>
                                    {"Register account"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider >
    );
}