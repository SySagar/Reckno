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
import {useNavigate} from 'react-router-dom';

export default function BaseBox() {

  const boxSX = {
    "&:hover": {
      border: "1px solid #00FF00",
      color: 'gray',
    },
  };


  const NormalAuth = ()=>
  {
    
    axios.get('https://reckno-authentication.onrender.com/dataset/', {
      
    })
    .then(function (response) {

      if(response===404)
      {
        //no user
      }
      else
      console.log(response);
    })
  

  }

  const GoogleAuth = ()=>
  {
    window.open("https://reckno-authentication.onrender.com/auth/google/", "_blank")
  //   axios.get('https://reckno-authentication.onrender.com/auth/google/', {
      
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
    }

  
  const GithubAuth = ()=>
  {
    window.open("https://reckno-authentication.onrender.com/auth/github/", "_blank")
  }

  const navigate = useNavigate();

  const navigateHome = () => {
    // 👇️ navigate to /home
    navigate('/home/#home');
  };

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
            sx={{ fontWeight: 1000, fontSize: 30, alignContent: 'start' , textDecoration:'underline'}}>
            The Chat Sauce
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
      sx={{backgroundColor: '#ffffff'}}
      >

      <Typography
     
     variant='h4'
     sx={{
       mt: 4, mb: 1,
       fontWeight: 'bold',
          
      }}>
        Welcome
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
        //className='w-44'
        label="name"
        sx={{ m: 1, mt: 3, width: 310 }}
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
        InputProps={{endAdornment: 
          <Button  onClick={
            () =>{ setShowPassword(s => !s)
              
            }
          }>
            {showPassword?<RemoveRedEyeIcon /> : <VisibilityOffIcon/> }
          </Button>
        }}
        
        />

      <br />
      <Button
        variant="contained"
        onClick={navigateHome}
        sx={{ m: 3 , backgroundColor: '#fdc886' , width: 300 , height: 40 ,  boxSX}}
        >
        <Typography
         color={'#101010'}
         sx={{ fontWeight: 550 , fontSize: 11 }}>
        Sign in
        </Typography>
        
      </Button>


      <Divider
        sx={{
          
          borderColor: 'black',
          '&::before': {
            borderColor: '#000'
          },
          '&::after': {
            borderColor: '#000'
          }
        }}
        >Or sign in with</Divider>

     <Stack
      direction='row'
      justifyContent='center'
      gap='8px'>
     <Button
     onClick={GoogleAuth}
     variant="outlined" 
     startIcon={<GoogleIcon style={{ color: "black" }}/>}
     sx={{ borderColor:'#e6e6e6' , borderRadius:2 , height:40, width: 105 , fontSize:10 , fontWeight: 900}}>
        Google
      </Button>

      <Button
      onClick={GithubAuth}
       variant="outlined" 
       startIcon={<GitHubIcon style={{ color: "black" }}/>}
       sx={{borderColor:'#e6e6e6' , borderRadius:2 , height:40, width: 105,  fontSize:10 , fontWeight: 900}}>
        Github
      </Button>

      <Button
       variant="outlined" 
       startIcon={<FacebookIcon style={{ color: "black" }}/>}
       sx={{borderColor:'#e6e6e6' , borderRadius:2 , height:40, width: 105 , fontSize:10 , fontWeight: 900}}>
        Facebook
      </Button>
     </Stack>

     <Typography
         color={'#101010'}
         sx={{ fontWeight: 50 , fontSize: 10 , mt: 2}}>
        Don't have and account? <span style={{fontWeight: 'bold'}}>Signup</span>

        </Typography>

    </Box>

    <div  className='right scale-75 pt-12'>
    <img 
    src={'/right.png'}
    ></img>
    </div>

    </Stack>
  
    </Box>

  );
}
