import * as React from 'react';
import '../App.css';
import { Box } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
const Group = () => {
    return ( 
        <div className="Group">
            <Typography
                    className='font-Rajadhani w-[96] pb-40'
                    sx={{ fontSize: 88 , justifyContent:'center'}}>
                OUR GROUPS
                </Typography>
                        

                <Stack
                    
                    width={'100%'}
                    direction={'row'}>


                    <Box>
                        <div class='container'>
                            <div class='card'>
                                <div class='image'>
                                    <img href="#" src='/basilisk.jpg' />
                                </div>
                                <div class='content'>
                                    <h3>Basilisk</h3>
                                    <p className='font-serif '>Strong willed , Leaders , Intellecutals , strategic</p>
                                </div>
                            </div>
                        </div>
                    </Box>

                    <Box>
                        <div class='container'>
                            <div class='card'>
                                <div class='image'>
                                    <img href="#" src='/werewolf.jpg' />
                                </div>
                                <div class='content'>
                                    <h3>Werewolf</h3>
                                    <p className='font-serif '>Introverts, patience, stoic attitude , keeps small but loyal circle</p>
                                </div>
                            </div>
                        </div>
                    </Box>

                    <Box>
                        <div class='container'>
                            <div class='card'>
                                <div class='image'>
                                    <img href="#" src='/phoenix.jpg' />
                                </div>
                                <div class='content'>
                                    <h3>Phoenix</h3>
                                    <p className='font-serif pt-2'>Caring , protector, passionate, active listeners</p>
                                </div>
                            </div>
                        </div>
                    </Box>

                    <Box>
                        <div class='container'>
                            <div class='card'>
                                <div class='image'>
                                    <img className='h-80' href="#" src='/dragon.jpg' />
                                </div>
                                <div class='content'>
                                    <h3>Dragon</h3>
                                    <p className='font-serif pt-5'>Focused, gregarious personality, commanding, Intelligent</p>
                                </div>
                            </div>
                        </div>
                    </Box>

                </Stack>
        </div>
     );
}
 
export default Group;