import React, { useState } from "react";
import Stepper from "./Stepper";

const Cards = () => {
  const questions = [
    {
      name: "Question 1",
      checked: false,
      option1: false,
      option2: false,
      option3: false,
    },
    {
      name: "Question 2",
      checked: false,
      option1: false,
      option2: false,
      option3: false,
    },
    {
      name: "Question 3",
      checked: false,
      option1: false,
      option2: false,
      option3: false,
    },
    {
      name: "Question 4",
      checked: false,
      option1: false,
      option2: false,
      option3: false,
    },
  ];

  const [question, setQuestion] = useState(questions);
  const [step, setStepper] = useState(0);
  const [disableQuestion, setDisable] = useState(false);

  const nextQuestion = () => {
    if (step !== 3 && question[step].checked === true) {
      setStepper((prevState) => {
        return prevState + 1;
      });
      setDisable(false);
    }
  };

  const prevQuestion = () => {
    if (step > 0) {
      setStepper((prevState) => {
        return prevState - 1;
      });
      setDisable(true);
    }
  };

  const disabledNextButton = () => {
    return question[step].checked;
  };

  const hiddenPrevButton = () => {
    if (step === 0) {
      return true;
    } else {
      return false;
    }
  };

  const toggleQuestion = (option) => {
    const cloneValues = [...question];
    switch (option) {
      case 1:
        cloneValues[step].checked = true;
        cloneValues[step].option1 = true;
        cloneValues[step].option2 = false;
        cloneValues[step].option3 = false;
        setQuestion(cloneValues);
        break;
      case 2:
        cloneValues[step].checked = true;
        cloneValues[step].option1 = false;
        cloneValues[step].option2 = true;
        cloneValues[step].option3 = false;
        setQuestion(cloneValues);
        break;
      case 3:
        cloneValues[step].checked = true;
        cloneValues[step].option1 = false;
        cloneValues[step].option2 = false;
        cloneValues[step].option3 = true;
        setQuestion(cloneValues);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="wrapper">
        <h3>{question[step].name}</h3>
        <div className="card w-50">
          <div className="card-body">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                onChange={() => toggleQuestion(1)}
                checked={question[step].option1}
                disabled={disableQuestion}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Option 1
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                onChange={() => toggleQuestion(2)}
                checked={question[step].option2}
                disabled={disableQuestion}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Option 2
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault3"
                onChange={() => toggleQuestion(3)}
                checked={question[step].option3}
                disabled={disableQuestion}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault3">
                Option 3
              </label>
            </div>
          </div>
        </div>
        {/* <button onClick={prevQuestion}>Previous</button>
        <button onClick={nextQuestion}>Next</button> */}
        <Stepper
          disableButton={disabledNextButton}
          hiddenButton={hiddenPrevButton}
          prevQuestion={prevQuestion}
          nextQuestion={nextQuestion}
        />
      </div>
    </>
  );
};

export default Cards;
