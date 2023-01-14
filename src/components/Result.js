import React, { useState } from "react";
import { IconButton } from '@mui/material';
import "../App.css";
import ClearIcon from '@mui/icons-material/Clear';
import lottie from "lottie-web";
import congo from "../congo.json";
import { Typography } from '@mui/material';

export default function Result(roomName) {
  const [modal, setModal] = useState(true);

  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#congo"),
      animationData: congo,
  renderer: "svg", // "canvas", "html"
  loop: true, // boolean
  autoplay: true, // boolean
    });
  }, []);


  const toggleModal = () => {
    setModal(!modal);
  };

  console.log(roomName)

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
          <Typography variant='h3' className='font-Roboto font-bold'>
                        Congratulation!! You are now a member of 
                    </Typography>
            <div id="congo"  style={{ width: 400, height: 400 }}/>
            
            <div className="close-modal">
              <IconButton onClick={toggleModal} style={{ color: "white" }} aria-label="delete">
                <ClearIcon />
              </IconButton>
            </div>
          </div>
        </div>
      )}

    </>
  );
}



