import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useHistory } from "react-router";
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

import "./Result.css";

const Result = ({ name, score }) => {
  const history = useHistory();

  useEffect(() => {
    if (!name) {
      history.push("/");
    }
  }, [name, history]);

  return (
    <div className="result">
      <span className="title">Final Score : {score}/10</span>
     
      {
        score>6?
        ( <div>
          <SentimentSatisfiedAltIcon className="icon"/>  
          <h5>Hurray !! You are a genius</h5>
          </div>)
          :

          (<div>
            <SentimentVeryDissatisfiedIcon className="icon_res"/>

            <h5>OOpsy !! Better Luck Next Time</h5>

            </div>)
      }

      
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Result;
