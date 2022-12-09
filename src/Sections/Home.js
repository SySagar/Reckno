import * as React from 'react';
import '../App.css';
import { Box } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { Divider } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import AdbTwoToneIcon from '@mui/icons-material/AdbTwoTone';
import {Link} from 'react-router-dom';
import About from './About'
import Group from './Group'
import Question from './Question'

const Home = () => {
    return (
        <div className='home'>
            <Box
                sx={{
                    backgroundColor: '#f5f2ea'
                }}
                height="100%"
                direction='column'
            >

                <div id={"home"}>

                <Stack
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                    width='100%'

                >

                    <Box className='pt-2'>

                        <nav class="navMenu absolute left-1/2 pt-48">
                            <a href="/home/#home">Home</a>
                            <a href="/home/#Group">Groups</a>
                            <a href="/home/#Questions">Questions</a>
                            <a href="/home/#About">About</a>
                            <div class="dot"></div>

                        </nav>
                    </Box>

                    <Button className='m-8'
                        variant="contained"
                        startIcon={<LogoutIcon />}
                    >
                        Log Out
                    </Button>

                </Stack>



                <Stack
                    direction={'row'}
                    width="100%"
                    justifyContent="flex-end"
                    alignItems="flex-start">

                    <div>

                        <Typography
                            className='font-Roboto mr-60 mt-36'

                            color={'#101010'}
                            sx={{ fontWeight: 1000, fontSize: 85, maxWidth: 400 }}
                        >
                            Join the herd !
                        </Typography>

                        <br /><br />

                        <Divider
                            sx={{

                                paddingRight: 45,
                                borderColor: 'black',
                                '&::before': {

                                    borderColor: '#000'
                                },
                                '&::after': {
                                    borderColor: '#f5f2ea'
                                }
                            }}
                        >
                            <Typography
                                className='font-Roboto '
                                color={'#ff3333'}
                                variant='h5'>
                                what we do
                            </Typography>
                        </Divider>
                        <br />
                        <Typography
                            className='font-Roboto w-96'
                            sx={{ fontSize: 18 }}>
                            Get ready to be asked few questions which will determine what kind of person you are and then make you join your gang.
                        </Typography>

                    </div>

                    <div>
                        <img
                            className='community  p-44'
                            src={'/community.png'}
                        ></img>
                    </div>

                </Stack>

                    </div>

                <div id={'Group'}>
                <Group/>
                </div>

                <br /><br />

                <div id={'Questions'}>
                <Question/>
                </div>

                <br /><br />

                <div id={'About'}>
                <About/>
                </div>

                <br /><br />

              
                    <div className='bottom footer border p-20 mt-64 bg-footer-color'>

                    <ul class="wrapper">
                       
                        <li class="icon twitter">
                            <span class="tooltip">Twitter</span>
                            <span><i class="fab fa-twitter"><TwitterIcon></TwitterIcon></i></span>
                        </li>
                        <li class="icon instagram">
                            <span class="tooltip">Instagram</span>
                            <span><i class="fab fa-instagram"><InstagramIcon></InstagramIcon></i></span>
                        </li>
                        <li class="icon github">
                            <span class="tooltip">Github</span>
                            <span><i class="fab fa-github"><GitHubIcon/></i></span>
                        </li>
                      
                    </ul>

                    </div>
                

            </Box>
        </div>
    );
}

export default Home;