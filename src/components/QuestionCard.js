import * as React  from 'react';
import '../App.css';
import axios from 'axios';
import { useEffect} from "react";
import { Box } from '@mui/material'
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { useState, useRef } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import QuizQuestions from '../api/quizQuestions';
import Result from './Result';

const QuestionCard = () => {

    
    const [dragon , setDragon] = useState(0);
    const [Basilisk , setBasilisk] = useState(0);
    const [Werewolf , setWerewolf] = useState(0);
    const [Phoenix , setPhoenix] = useState(0);


    const cardRef = useRef();
    const [cardData, setCardData] = useState(1);
    const [quesNo, setNo] = useState(0);
    const [complete, setComplete] = useState(0);
    const [done, setDone] = useState(true);

    const [roomname, setRoom] = useState(null);



    const next = () => {
        cardRef.current.style.opacity = 0;
        setTimeout(() => {

            setNo(cardData)
            setCardData(cardData + 1);
            cardRef.current.style.opacity = 1;
        }, 1000);

        setComplete(complete+1)

        if(complete===5)
        {setDone(false) 
            /*console.log(group);*/
        }
    };

    useEffect(() => {
        
        var max = dragon;
        var roomName;

        if(Basilisk>=max)
        {max=Basilisk;roomName="Basilisk";}
        
        if(dragon>=max)
        {max=dragon;roomName="Dragon";}
        
        if(Werewolf>=max)
        {max=Werewolf;roomName="Werewolf";}
        
        if(Phoenix>=max)
        {max=Phoenix;roomName="Phoenix"}

            setRoom(roomName)
            console.log(roomname+"hh")
            
localStorage.setItem('group', roomname)

    }
    )

    return (
        <div className='flex justify-center ques-set'>

        {done && 

            
            <Box
                className='question-card hover:scale-105 hover:shadow-2xl duration-300'>

                <Card ref={cardRef} elevation={8} className='ques-cards' style={{
                    background: 'radial-gradient(#1fe4f5, #3fbafe)',
                    padding: "8px",
                    transition: "opacity 1s linear"
                }}>


                    <div className="question-set">

                        {QuizQuestions.slice(quesNo).map((data) => {

                            return (
                                <div >

                                    <CardContent>
                                        <div className='scale-200 -translate-x-48 translate-y-4' >
                                            <FlashOnIcon />
                                        </div>

                                        <Typography variant="h5" component="div">
                                            question {cardData}

                                        </Typography>
                                        <br />

                                        <Typography variant="body2">
                                            {data.question}
                                            <br />

                                        </Typography>
                                        
                                        {/* {console.log(answerKey)} */}


                                    </CardContent>

                                    <CardActions className='flex justify-center mt-10 ques-button ques-button'>

                                        <Button size='large' onClick={() => {

                                           
                                            if(data.answers[0].type==='Dragon')
                                             {   setDragon(dragon+1)
                                                }
                                             else
                                             if(data.answers[0].type==='Basilisk')
                                             {  setBasilisk(Basilisk+1)}
                                             else
                                             if(data.answers[0].type==='Phoenix')
                                             {  setPhoenix(Phoenix+1)}
                                             else
                                             if(data.answers[0].type==='Werewolf')
                                             {  setWerewolf(Werewolf+1)}
                                             
                                            //  console.log("Basilisk-"+Basilisk)
                                            //  console.log("Dragon-"+dragon)
                                            //  console.log("Phoenix-"+Phoenix)
                                            //  console.log("Werewolf-"+Werewolf)
 

                                             next() }} >
                                            <p class="card__apply">
                                                <a class="card__link" href="#Question">YEP! THAT IS ME!</a>
                                            </p>
                                        </Button>


                                        <Button size="small" onClick={() => {
                                       
                                      
                                       if(data.answers[1].type==='Dragon')
                                             {   setDragon(dragon+1)}
                                             else
                                             if(data.answers[1].type==='Basilisk')
                                             {  setBasilisk(Basilisk+1)}
                                             else
                                             if(data.answers[1].type==='Phoenix')
                                             {  setPhoenix(Phoenix+1)}
                                             else
                                             if(data.answers[1].type==='Werewolf')
                                             {  setWerewolf(Werewolf+1)}
                                             

                                            //  console.log("Basilisk-"+Basilisk)
                                            //  console.log("Dragon-"+dragon)
                                            //  console.log("Phoenix-"+Phoenix)
                                            //  console.log("Werewolf-"+Werewolf)
                                             

                                             next() }} >
                                            <p class="card__apply">
                                                <a class="card__link" href="#Question">NAH, THAT CAN'T BE ME!</a>
                                            </p>
                                        </Button>

                                    </CardActions>

                                </div>
                            );
                        }
                        )
                        }


                    </div>

                </Card>

            </Box>

         }


            {
                !done &&  <div className="proceed">
                    
                   
                <Button
                    variant="contained"
                    
                    onClick={() => { 
                      
                        window.open("https://reckno-backend.onrender.com/chat.html?username=SySagar&room="+roomname, "_blank")
                       
                    }}>
                    Go to your chat room!!!
                </Button>


                <Result room={roomname}/>
                </div>
            }

        </div>
    );

}

export default QuestionCard;