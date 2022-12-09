import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import * as React from 'react';
import '../App.css';
import { Box } from '@mui/material'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import FlashOnIcon from '@mui/icons-material/FlashOn';

const Questions = () => {

    const [counter, setCounter] = useState(0)
    const [showHideDemo2, setShowHideDemo2] = useState(true)
    const [showHideDemo3, setShowHideDemo3] = useState(true)
    const [showHideDemo1, setShowHideDemo1] = useState(true)

    const [card, showCard] = useState(false)
    // setTimeout(() => {

    //                setCounter(counter+1);
    //            }, 3000);
    //            console.log(counter);

    //            useEffect(() => {
    //             switch (counter) {
    //                 case 1:
    //                   setShowHideDemo1(true)
    //                   setShowHideDemo2(false)
    //                   setShowHideDemo3(false)
    //                   break;
    //                 case 2:
    //                     setShowHideDemo2(true)
    //                     setShowHideDemo1(false)
    //                     setShowHideDemo3(false)
    //                   break;
    //                 case 3:
    //                     setShowHideDemo3(true)
    //                     setShowHideDemo2(false)
    //                     setShowHideDemo1(false)
    //                   break;
    //                 default:

    //               }
    //           });



    return (

        <div className='Questions mt-72'>
            <Box

                sx={{
                    backgroundColor: '#f5f2ea'
                }}
                height="100%"
                width="100%"
                direction='column'
                alignItems={'center'}
            >

                <Stack
                    direction="column"
                    justifyContent={'center'}

                    height='100%'
                    alignItems="center">

                    {showHideDemo1 && <Typography variant='h2' className='typing-demo font-Roboto font-bold'>
                        Are you ready to know yourself ?
                    </Typography>}

                    {showHideDemo1 && <Typography variant='h2' className='typing-demo font-Roboto font-bold'>
                        ...to know your spirit animal ?
                    </Typography>}

                    {showHideDemo1 && <Typography variant='h2' className='typing-demo font-Roboto font-bold'>
                        ...to become one of us.
                    </Typography>}

                    {card && <Box

                        className='question-card h-60 hover:scale-105 hover:shadow-2xl duration-300 w-1/2'>

                        <Card elevation={8} className='h-60' style={{ background: 'radial-gradient(#1fe4f5, #3fbafe)' }}>
                            <CardContent>
                                <div className='scale-200 -translate-x-72 translate-y-4' >
                                    <FlashOnIcon />
                                </div>

                                <Typography variant="h5" component="div">
                                    benevolent
                                </Typography>
                                <br />

                                <Typography variant="body2">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions className='flex space-x-64 justify-center'>
                                
                            <Button size="small">
                                    <p class="card__apply">
                                        <a class="card__link" href="#">YEP! THAT IS ME!<i class="fas fa-arrow-right"></i></a>
                                    </p>
                                </Button>

                                <Button size="small">
                                    <p class="card__apply">
                                        <a class="card__link" href="#">I HAVE NO IDEA!<i class="fas fa-arrow-right"></i></a>
                                    </p>
                                </Button>
                                
                                <Button size="small">
                                    <p class="card__apply">
                                        <a class="card__link" href="#">NAH, THAT CAN'T BE ME!<i class="fas fa-arrow-right"></i></a>
                                    </p>
                                </Button>

                            </CardActions>
                        </Card>

                    </Box>


                    }

                </Stack>

                <br />

                <Button
                    variant="contained"
                    endIcon={<ArrowForwardIosIcon />}
                    onClick={() => { showCard(true); setShowHideDemo1(false); setShowHideDemo2(false); setShowHideDemo3(false) }}>
                    Begin
                </Button>

            </Box>
        </div>
    );
}

export default Questions;