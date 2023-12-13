import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SCIMICS from './assets/SCIMICS.svg'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { FormControlLabel, Checkbox } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const theme = createTheme({
    typography: {
        fontFamily: [
            'Inter',

        ].join(','),
    }
});

const gradientStyle = {
    height: '46px',
    width: '335px',
    border: '1px solid #5C67C7', borderRadius: '6px',
    // background: 'linear-gradient(90deg, #5c67c759 -23.76%, #5c67c759 101.73%)',
    background: "linear-gradient(268deg, rgba(92, 103, 199, 0.35) -23.6%, rgb(34 34 36 / 35%) 101.73%)",
    color: "#5C67C7"
}


const RegistrationForm = () => {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [termsAndConditions, setTermsAndConditions] = React.useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate the form data
        if (firstName === "" || lastName === "" || email === "" || password === "" || confirmPassword === "") {
            alert("Please fill in all required fields.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        if (!termsAndConditions) {
            alert("Please agree to the terms and conditions.");
            return;
        }

        // Submit the form data to your backend server
        // ...
    };

    return (
        <ThemeProvider theme={theme}>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Box component="img"
                    sx={{
                        width: '130.004px',
                        height: '20px',
                        color: '#F7F8F8',
                        mt: 4, md: 6
                    }} src={SCIMICS} />

                <Container maxWidth="sm"
                    sx={{
                        mt: 4, mb: 10,
                        width: '438px',
                        height: '600px',
                        borderRadius: '10px',
                        border: '1px solid rgba(44, 45, 60, 0.50)',
                        background: "linear-gradient(151deg, rgba(44, 45, 60, 0.47) 3.72%, rgba(15, 16, 18, 0.66) 96.89%) "
                    }}>
                    <Box component="main" sx={{ ml: 3, mr: 3 }} >
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                            <Typography variant='h4' sx={{ mt: 2, fontWeight: '600' }}>User Registration</Typography>
                        </Box>
                        < Box component="form" onSubmit={handleSubmit}>
                            <Typography sx={{ display: 'flex', color: '#858699', mt: 2 }} variant='caption'>First Name*</Typography>
                            <TextField
                                id="first-name"
                                label="Enter First Name"
                                variant="outlined"
                                size='small'
                                fullWidth
                                value={firstName}
                                sx={{ borderRadius: '6px', border: '0.5px solid #2C2D3C', background: '#212428', mt: 1 }}
                                onChange={(event) => setFirstName(event.target.value)}
                            />
                            <Typography sx={{ display: 'flex', color: '#858699', mt: 1 }} variant='caption'>Last Name*</Typography>
                            <TextField
                                id="last-name"
                                label="Enter Last Name"
                                variant="outlined"
                                size='small'
                                fullWidth
                                value={lastName}
                                sx={{ borderRadius: '6px', border: '0.5px solid #2C2D3C', background: '#212428', mt: 1 }}
                                onChange={(event) => setLastName(event.target.value)}
                            />
                            <Typography sx={{ display: 'flex', color: '#858699', mt: 1 }} variant='caption'>Email* (OTP Will Send To Email)</Typography>
                            <TextField
                                id="email"
                                label="Enter Email"
                                variant="outlined"
                                size='small'
                                fullWidth
                                value={email}
                                sx={{ borderRadius: '6px', border: '0.5px solid #2C2D3C', background: '#212428', mt: 1 }}
                                onChange={(event) => setEmail(event.target.value)}

                            />
                            <Typography sx={{ display: 'flex', color: '#858699', mt: 1 }} variant='caption'>Password*</Typography>
                            <TextField
                                id="password"
                                label="Enter Password"
                                variant="outlined"
                                size='small'
                                type="password"
                                fullWidth
                                value={password}
                                sx={{ borderRadius: '6px', border: '0.5px solid #2C2D3C', background: '#212428', mt: 1 }}
                                onChange={(event) => setPassword(event.target.value)}

                            />
                            <Typography sx={{ display: 'flex', color: '#858699', mt: 1 }} variant='caption'>Confirm Password*</Typography>
                            <TextField
                                id="confirm-password"
                                label="Confirm password"
                                variant="outlined"
                                size='small'
                                type="password"
                                fullWidth
                                value={confirmPassword}
                                sx={{
                                    borderRadius: '6px',
                                    border: '0.5px solid #2C2D3C',
                                    background: '#212428',
                                    mt: 1,
                                }}
                                onChange={(event) => setConfirmPassword(event.target.value)}
                            />
                            <FormControlLabel sx={{ display: 'flex', mb: 1, mt: 1 }}
                                control={
                                    <Checkbox
                                        checked={termsAndConditions}
                                        sx={{ color: '#5C67C7' }}
                                        defaultChecked={true}
                                        onChange={(event) => setTermsAndConditions(event.target.checked)}
                                    />
                                }
                                label="I agree to terms & conditions"
                            />
                            <Grid>
                                <Grid item sx={{ display: 'flex' }}>
                                    <Button type="submit" variant="outlined" fullWidth style={gradientStyle} >
                                        Register
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider >
        </ThemeProvider>
    );
};

export default RegistrationForm;
