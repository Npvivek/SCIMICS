import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Link } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import SCIMICS from './assets/SCIMICS.svg'

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


const gradientStyle = {
    height: '46px',
    width: '335px',
    border: '1px solid #5C67C7', borderRadius: '6px',
    // background: 'linear-gradient(90deg, #5c67c759 -23.76%, #5c67c759 101.73%)',
    background: "linear-gradient(268deg, rgba(92, 103, 199, 0.35) -23.6%, rgb(34 34 36 / 35%) 101.73%)",
    color: "#5C67C7"
}

const OTPVerificationPage = () => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);

    const handleChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
    };

    const handleVerify = () => {
        const enteredOtp = otp.join('');
        // Implement your OTP verification logic here
        console.log('Entered OTP:', enteredOtp);
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Box component="img"
                sx={{
                    width: '130.004px',
                    height: '20px',
                    color: '#F7F8F8',
                    mt: 4, md: 6
                }} src={SCIMICS} />
            <Container component="main"
                maxWidth="xs"
                sx={{
                    width: '400px',
                    height: '360px',
                    mt: 8,
                    borderRadius: '10px',
                    border: '1px solid rgba(44, 45, 60, 0.50)',
                    background: "linear-gradient(151deg, rgba(44, 45, 60, 0.47) 3.72%, rgba(15, 16, 18, 0.66) 96.89%) "
                }}>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    ml: 1, mr: 3, mt: 1
                }} >

                    <Typography variant="h4" sx={{ mt: 3, mb: 3, fontWeight: '600' }}>
                        OTP Verification
                    </Typography>
                    <Typography variant="caption" sx={{ mt: 1, color: '#858699' }}>
                        OTP sent to your Email address
                    </Typography>
                    <form>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                            {otp.map((digit, index) => (
                                <TextField
                                    key={index}
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    type="text"
                                    value={digit}
                                    size='small'
                                    placeholder='0'
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    inputProps={{ maxLength: 1.5 }}
                                    sx={{
                                        width: 'calc(100% / 8)',
                                        textAlign: 'center',
                                        borderRadius: '6px',
                                        border: '0.5px solid #2C2D3C',
                                        background: '#212428'
                                    }}
                                />
                            ))}
                        </div>
                        <Box>
                            <Typography variant="caption" sx={{ mt: 1, color: '#858699' }}>
                                Didn't Recieve Code
                            </Typography>
                        </Box>
                        <Link href='#' variant="caption" underline='always' sx={{ mt: 1, color: '#5C67C7' }}>
                            Resend Code
                        </Link>
                        <Button
                            variant="contained"
                            color="primary"
                            style={gradientStyle}
                            fullWidth
                            onClick={handleVerify}
                            sx={{ mt: 3 }}
                        >
                            Confirm
                        </Button>
                    </form>
                </Box>
            </Container>
        </ThemeProvider >
    );
};

export default OTPVerificationPage;
