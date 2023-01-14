import { Box, Divider, Stack } from '@mui/material';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import * as React from 'react';

const Profile = () => {
    return ( 
        <div className="Profile">
            <h2>Profile</h2>
            <Box>

                <div className="profile-image">
                    <img src="" alt="this is an image" />
                </div>



            </Box>
        </div>
     );
}
 
export default Profile;