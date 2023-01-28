import * as React from 'react';
import '../App.css';
import { Box } from '@mui/material'

import { Typography } from '@mui/material';
const About = () => {
    return ( 
        <div className="About">
            <Box className='bg-[#ffffff] shadow-3xl about-box'>

            <Typography className='font-Rajadhani font-bold text-6xl pt-24'>
                About
            </Typography>

            <Typography className='font-Roboto font-light about-text'>
                This is a react based application made using MERN stack. It uses external libraries like Passport js for authentication, Material UI and Tailwind CSS for fronted designing and Socket IO for chat service.
            </Typography>
            
            </Box>
        </div>
     );
}
 
export default About;