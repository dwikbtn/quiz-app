import React from "react";
import ReactTooltip from "react-tooltip";

const Stepper = ({
  prevQuestion,
  nextQuestion,
  hiddenButton,
  disableButton,
}) => {
  return (
    <>
      <div className="btn-collection mt-3 ">
        <button
          type="button"
          className={`btn btn-primary me-3 ${hiddenButton() ? "d-none" : ""}`}
          onClick={() => {
            prevQuestion();
          }}
        >
          prev
        </button>
        <div data-tip={disableButton() ? "" : "Jawaban harus diisi"}>
          <button
            type="button"
            className="btn btn-primary"
            disabled={!disableButton()}
            onClick={() => {
              nextQuestion();
            }}
          >
            next
          </button>
        </div>
      </div>
      <ReactTooltip />
    </>
  );
};

export default Stepper;
