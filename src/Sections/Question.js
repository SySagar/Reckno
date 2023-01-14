import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import * as React from 'react';
import '../App.css';
import { Box } from '@mui/material'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { useState, useEffect } from "react";
import QuestionCard from '../components/QuestionCard'

const Questions = () => {

    const [counter, setCounter] = useState(0)
    const [showHideDemo2, setShowHideDemo2] = useState(false)
    const [showHideDemo3, setShowHideDemo3] = useState(false)
    const [showHideDemo1, setShowHideDemo1] = useState(false)

    const [show,setShow] = useState(false)

    const [card, showCard] = useState(false)
    setTimeout(() => {

                    if(counter==3)
                    setShow(!show);

                   setCounter(counter+1);
               }, 4000);
               console.log(counter);

               useEffect(() => {
                switch (counter) {
                    case 1:
                      setShowHideDemo1(true)
                      setShowHideDemo2(false)
                      setShowHideDemo3(false)
                      break;
                    case 2:
                        setShowHideDemo2(true)
                        setShowHideDemo1(false)
                        setShowHideDemo3(false)
                      break;
                    case 3:
                        setShowHideDemo3(true)
                        setShowHideDemo2(false)
                        setShowHideDemo1(false)
                      break;
                    default:

                  }
              });



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

                    {showHideDemo2 && <Typography variant='h2' className='typing-demo font-Roboto font-bold'>
                        ...to know your spirit animal ?
                    </Typography>}

                    {showHideDemo3 && <Typography variant='h2' className='typing-demo font-Roboto font-bold'>
                        ...to become one of us.
                    </Typography>}

                    {
                    
                    
                    card && <QuestionCard/>
                    
                    }

                </Stack>

                <br />

                {show && <Button
                    variant="contained"
                    endIcon={<ArrowForwardIosIcon />}
                    onClick={() => { showCard(true); setShowHideDemo1(false); setShowHideDemo2(false); setShowHideDemo3(false); setShow(!show);}}>
                    Begin
                </Button>
}
            </Box>
        </div>
    );
}

export default Questions;