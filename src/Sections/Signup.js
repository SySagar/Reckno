import * as React from 'react';
import axios from 'axios';
import { Box, Divider, Stack } from '@mui/material';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';

export default function Signup() {

    const boxSX = {
        "&:hover": {
            border: "1px solid #00FF00",
            color: 'gray',
        },
    };


    const [name, setName] = useState(null)
    function handleChange1(event) {
        setName(event.target.value);
    };

    const [email, setEmail] = useState(null)
    function handleChange2(event) {
        setEmail(event.target.value);
    };

    const NormalAuth = () => {

        axios.post('https://reckno-authentication.onrender.com/signup', {
            username: name,
            email: email
        })
            .then(function (response) {
                console.log(response);


            })
            .catch(function (error) {
                console.log(error);
            });


    }


    const [showPassword, setShowPassword] = useState(false);



    return (

        <Box
            minwidth={1500}
            minHeight={800}
            sx={{
                backgroundColor: '#f5f2ea',

            }}>


            <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                paddingLeft={7}
                paddingTop={3}>
                <Typography
                    className='font-Rajadhani'
                    alignItems={'self-start'}
                    color={'#101010'}
                    sx={{ fontWeight: 1000, fontSize: 30, alignContent: 'start', textDecoration: 'underline' }}>
                    Reckno
                </Typography>
            </Stack>



            <Stack
                direction='row'
                width="100%"
                justifyContent="space-around"
                paddingTop="84px">

                <div>
                    <img
                        className='girl scale-100 pt-28 pl-16'
                        src={'/left.png'}
                    ></img>
                </div>


                <Box
                    className="login box"
                    width={460}
                    height={530}
                    border={1}
                    boxShadow={10}
                    borderRadius={10}
                    flex
                    zIndex={1}
                    flexDirection={'column'}
                    sx={{ backgroundColor: '#ffffff' }}
                >

                    <Typography

                        variant='h3'
                        sx={{
                            mt: 4, mb: 1,
                            fontWeight: 'bold',

                        }}>
                        signup
                    </Typography>

                    <Typography
                        maxWidth={300}
                        fontSize={15}

                        sx={{ fontWeight: 'light', pl: 6, pt: 1 }}>
                        Hey , Enter your details to get sign in to your account
                    </Typography>

                    <TextField
                        color="secondary"
                        required
                        id="Name"
                        onChange={handleChange1}
                        //className='w-44'
                        label="name"
                        sx={{ m: 1, mt: 3, width: 310 }}
                        variant="outlined" />

                    <TextField
                        color="secondary"
                        required
                        id="Email"
                        onChange={handleChange2}
                        //className='w-44'
                        label="email"
                        sx={{ m: 1, width: 310 }}
                        variant="outlined" />

                    <TextField
                        color="secondary"
                        required
                        id="password"
                        //className='w-44'
                        label="password"
                        type={showPassword ? "text" : "password"}
                        sx={{ m: 1, mt: 1, width: 310 }}
                        variant="outlined"
                        InputProps={{
                            endAdornment:
                                <Button onClick={
                                    () => {
                                        setShowPassword(s => !s)

                                    }
                                }>
                                    {showPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                                </Button>
                        }}

                    />

                    <br />
                    <Button
                        variant="contained"
                        onClick={NormalAuth}
                        sx={{ m: 3, backgroundColor: '#fdc886', width: 300, height: 40, boxSX }}
                    >
                        <Typography
                            color={'#101010'}
                            sx={{ fontWeight: 550, fontSize: 11 }}>
                            Sign up
                        </Typography>

                    </Button>



                </Box>

                <div className='right scale-75 pt-12'>
                    <img
                        src={'/right.png'}
                    ></img>
                </div>

            </Stack>

        </Box>

    );
}
