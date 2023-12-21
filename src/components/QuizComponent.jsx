import "./QuizComponent.css";

function Question({ setState }) {
  return (
    <div className="container">
      <div className="box">
        <h1>Question</h1>
        <p id="qnum" style={{ color: "#fff" }}>
          {1} of {15}
        </p>
        <h2 id="question">What is Kalvium.?</h2>

        <div className="options">
          <button className="option">Options</button>
          <button className="option">Options</button>
          <button className="option">Options</button>
          <button className="option">Options</button>
        </div>
        <div className="nextoptions">
          <button className="previous" id="previous">
            Previous
          </button>
          <button className="Next" id="next">
            Next
          </button>
          <button
            onClick={() => {
              setState(3);
            }}
            className="Quit"
            id="quit"
          >
            Quit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Question;
