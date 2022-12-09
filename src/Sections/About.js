import * as React from 'react';
import '../App.css';
import { Box } from '@mui/material'

import { Typography } from '@mui/material';
const About = () => {
    return ( 
        <div className="About mt-96 ">
            <Box className='bg-[#ffffff] mx-36 shadow-3xl'>

            <Typography className='font-Rajadhani font-bold text-6xl pt-24'>
                About
            </Typography>

            <Typography className='font-Roboto font-light text-2xl w-1/2 ml-80 pt-28 pb-28'>
                This is a react based application made using MERN stack. It uses external libraies like Passport js for authentication, Material UI and Tailwind CSS for fronted designing and Socket IO for chat service.
            </Typography>
            
            </Box>
        </div>
     );
}
 
export default About;