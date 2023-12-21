import "./QuizComponent.css";
import { useState } from "react";
import data from "../assets/quizQuestion.json";

function QuizComponent({ setState }) {
  const [count, setCount] = useState(0);

  const previous = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const next = () => {
    if (count < 14) {
      setCount(count + 1);
    }
  };

  const handleOptionClick = (selectedOption) => {
    console.log(`Option ${selectedOption} clicked`);
    const correctOption = data[count].correctOption;
    const isCorrect = selectedOption === correctOption;
  
    if (isCorrect) {
      // Update the user's score or perform other actions
    } else {
      // Handle incorrect answer logic if needed
    }
  
    next();
  };
  
 
  return (
    <div className="container">
      <div className="box">
        <h1>Question</h1>
        <p id="qnum">
          {count + 1} of {15}
        </p>
        <h2 className="question" key={count}>
          {data[count].question}
        </h2>

        <div className="options">
          <button className="option" onClick={() => handleOptionClick('A')}>
            {data[count].optionA}
          </button>
          <button className="option" onClick={() => handleOptionClick('B')}>
            {data[count].optionB}
          </button>
          <button className="option" onClick={() => handleOptionClick('C')}>
            {data[count].optionC}
          </button>
          <button className="option" onClick={() => handleOptionClick('D')}>
            {data[count].optionD}
          </button>
        </div>

        <div className="nextOptions">
          <button className="previous" onClick={previous}>
            Previous
          </button>
          <button className="next" onClick={next}>
            Next
          </button>
          <button
            onClick={() => {
              const con = window.confirm("Are you sure you want to quit ?");
              if (con) {
                setState(3);
              }
            }}
            className="quit"
          >
            Quit
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizComponent;
