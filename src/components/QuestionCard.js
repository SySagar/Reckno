import * as React from 'react';
import '../App.css';
import { Box } from '@mui/material'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { useState, useEffect, useRef } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import QuizQuestions from '../api/quizQuestions';
import CardTransition from './CardTransition';

const QuestionCard = () => {

    const answerKey = new Map();
    var a=0;
    var b=0;
    var c=0;
    var d=0;

    const cardRef = useRef();
    const [cardData, setCardData] = useState(1);
    
    const next = () => {
      cardRef.current.style.opacity = 0;
      setTimeout(() => {
        setCardData(cardData + 1);
        cardRef.current.style.opacity = 1;
      }, 1000);
    };

    return (
        <div className='flex justify-center'>
            
            <Box

           

                className='question-card h-60  w-{180} pl-10 hover:scale-105 hover:shadow-2xl duration-300'>

                <Card  ref={cardRef} elevation={8} className='h-60' style={{ background: 'radial-gradient(#1fe4f5, #3fbafe)', 
          padding: "8px",
          transition: "opacity 1s linear" }}>


                    <div className="question-set">

                        {QuizQuestions.map((data) => {

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
                                            {/* {QuizQuestions.get(data.answers[0].type)} */}
                                            
                                            <br />

                                        </Typography>


                                    </CardContent>

                                    <CardActions className='flex space-x-52 justify-center mt-10'>

                                        <Button size="small" onClick={()=>{answerKey.set(data.answers[0].type,a++); next()}} >
                                            <p class="card__apply">
                                                <a class="card__link" href="#Question">YEP! THAT IS ME!</a>
                                            </p>
                                        </Button>


                                        <Button size="small"  onClick={()=>{answerKey.set(data.answers[1].type,b++); next()}} >
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
        </div>
    );

}

export default QuestionCard;