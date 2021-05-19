import {
  CircularProgress,
  Button,
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useEffect, useState ,useRef} from "react";
import Avatar from '@material-ui/core/Avatar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Tooltip from '@material-ui/core/Tooltip';
import Question from "../../components/Question/Question";

import "./Quiz.css";


const Quiz = ({ name, questions, score, setScore, setQuestions }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);
  const [timer, setTimer] = useState(20);
  const id =useRef(null);
  const clear=()=>{
  window.clearInterval(id.current)
}
  useEffect(()=>{
     id.current=window.setInterval(()=>{
      setTimer((time)=>time-1)
    },1000)
    return ()=>clear();
  },[])

  useEffect(()=>{
    if(timer===0){
      clear()
    }

  },[timer])


  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [currQues, questions]);

  console.log(questions);

  

  const handleShuffle = (options) => {
    
    return options.sort(() => Math.random() - 0.5);
  };

  
  return (
    <div  className="quiz">
      {/* <div className="navbar">
        <h2>Quizzy</h2>
      <span className="subtitle">Welcome, {name}</span>
      <Button
            variant="contained"
            color="secondary"
            size="large"
            
            href="/"
            
          >
            Quit
          </Button>
      </div> */}
  <div className="navbar">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" >
            Quizzy
          </Typography>
         {
           name?(
            <Typography className="subtitle" variant="h6"  >
            Welcome , {name}
            <Avatar style={{float:"left",marginRight:"10px"}}>{name[0]}</Avatar>
          </Typography>
           ):
           ''
         }
          <Button variant="contained" color="secondary" size="large" href="/">
          <Tooltip title="Exit">
            <ExitToAppIcon/>
            </Tooltip>
          </Button>{" "}
        </Toolbar>
      </AppBar>
      </div>

      {questions ? (
        <>
          <div className="quizInfo">
            <span>
              <h6 className="category_ques">{questions[currQues].category}</h6>
              <h6 className="level_ques"> LEVEL : {questions[currQues].difficulty}</h6>
            </span>
            <span className="score_ques">
             
              Score : {score} /10
            </span>
          </div>
          <div className="timer">
          <div className="timer-wrapper">
        
      </div>
      Time left : {timer}

          </div>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};

export default Quiz;




 