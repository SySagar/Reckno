import * as React from 'react';
import '../App.css';
import axios from 'axios';
import { useState , useEffect} from "react";
import { Box } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { Divider } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import About from './About'
import Group from './Group'
import Question from './Question'
// import username from './box'

const Home = () => {



    const openGithub = () => {
        window.open("https://github.com/SySagar", "_blank")
    }

    const openTwitter = () => {
        window.open("https://twitter.com/SySagar2", "_blank")
    }

    const openInstagram = () => {
        window.open("https://www.instagram.com/lecifier", "_blank")
    }

    const logout = () => {
        console.log("logging out")
        axios.get('https://reckno-authentication.onrender.com/logout', {

        })
            .then(function (response) {
                console.log(response);
            })

    }
 
    const [roomname, setRoom] = useState(false)
    const [check, Checking] = useState(false)

    const status = localStorage.getItem("group");
    


      useEffect(() => {
        

       
            const status = localStorage.getItem("group");
    
            if (!status) {
    
                Checking(true)
               
            }
            else
            setRoom(status)
            console.log("status initially - "+status);
            
    
        

      },[status]);

  


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
                            onClick={logout}
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
                    <Group />
                </div>

                <br /><br />

                {check && <div id={'Questions'}>
                    <Question />
                </div>
                }

                {!check &&

                    <Stack direction={'row'}
                    marginY='100px'
                    justifyContent='center'
                    alignContent={'space-evenly'}>

                    <Typography
                        maxWidth={800}
                        fontSize={45}
                        
                        sx={{ fontWeight: 'light', pl: 6, pt: 1 }}>
                        You already have a group!!
                    </Typography>

                            </Stack>



                }

                {!check &&

                  <Button 
                  variant='contained'
                  onClick={() => { 
                
                    window.open("https://reckno-backend.onrender.com/chat.html?username=SySagar&room="+roomname, "_blank")}}
                    >
                    Enter your room
                  </Button>



                }


                <br /><br />

                <div id={'About'}>
                    <About />
                </div>

                <br /><br />


                <div className='bottom footer border p-20 mt-64 bg-footer-color'>

                    <ul class="wrapper">

                        <li onClick={openTwitter} class="icon twitter">
                            <span class="tooltip">Twitter</span>
                            <span><i class="fab fa-twitter"><TwitterIcon></TwitterIcon></i></span>
                        </li>
                        <li onClick={openInstagram} class="icon instagram">
                            <span class="tooltip">Instagram</span>
                            <span><i class="fab fa-instagram"><InstagramIcon></InstagramIcon></i></span>
                        </li>
                        <li onClick={openGithub} class="icon github">
                            <span class="tooltip">Github</span>
                            <span><i class="fab fa-github"><GitHubIcon /></i></span>
                        </li>

                    </ul>

                </div>


            </Box>
        </div>
    );
}

export default Home;