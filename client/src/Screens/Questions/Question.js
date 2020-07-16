import React, { Component } from "react";
import Q1 from "../../images/questions/Q1.png";
import Q2 from "../../images/questions/Q2.png";
import Q3 from "../../images/questions/Q3.png";
import Q4 from "../../images/questions/Q4.png";
import Q5 from "../../images/questions/Q5.png";
import Q6 from "../../images/questions/Q6.png";

class Question extends Component {
  static defaultProps = {
    currentQuesObj: {},
    currentTestIndex: 0
  };
  constructor(props) {
    super(props);
    const { currentQuesObj, currentTestIndex } = this.props;
    this.state = {
      question: currentQuesObj.tests[currentTestIndex].quiz_questions[0].quiz,
      opt1: currentQuesObj.tests[currentTestIndex].quiz_questions[0].option1,
      opt2: currentQuesObj.tests[currentTestIndex].quiz_questions[0].option2,
      opt3: currentQuesObj.tests[currentTestIndex].quiz_questions[0].option3,
      opt4: currentQuesObj.tests[currentTestIndex].quiz_questions[0].option4,
      i: 0,
      correct: 0,
      score: 0
    };

    this.next = this.next.bind(this);

  }

  next() {
    const { currentQuesObj, currentTestIndex } = this.props;
    var { i, correct, score } = this.state;

    var quiz_questions = currentQuesObj.tests[currentTestIndex].quiz_questions;

    var radioBtn = document.querySelector("input[name='option']:checked");
    if (radioBtn == null) {
      alert("select value");
    } else {
      if (quiz_questions[i].answer.match(radioBtn.value)) {
        console.log("quiz_questions[i].answer**", quiz_questions[i].answer);
        // console.log(
        //   "answer**",
        //   quiz_questions[i].answer
        // );
        this.setState({ correct: ++correct });
      }

      if (quiz_questions.length - 1 === i) {
        document.getElementById("quizContainer").style.display = "none";
        document.getElementById("resultContainer").style.display = "block";
        // console.log("value equal");
        // console.log(this.state.correct);
        score = correct * (100 / quiz_questions.length).toFixed(2);
        console.log(quiz_questions.length);
        this.setState({ score });
      } else {
        // document.querySelector("input[name='option']:checked").checked = false;
        i++;
        const question = quiz_questions[i].quiz;
        const option1 = quiz_questions[i].option1;
        const option2 = quiz_questions[i].option2;
        const option3 = quiz_questions[i].option3;
        const option4 = quiz_questions[i].option4;
        const answer = quiz_questions[i].answer;
        this.setState({
          question,
          opt1: option1,
          opt2: option2,
          opt3: option3,
          opt4: option4,
          i: i
        });
      }
    }
  }

  componentDidMount() {

  }



  render() {
    const { question, opt1, opt2, opt3, opt4, score, i } = this.state;
    const { currentQuesObj, currentTestIndex } = this.props;
    return (
      <div>
        <div className="col-md-12">
          <div className="col" id="content">
            <div id="quizContainer">
              <div className="modal-header">
                <h5>
                  <i className="fa fa-question-circle" />
                  <span>   <img className="rounded mx-auto d-block"

                    src={i === 0 ? Q1 : (i === 1) ? Q2 : (i === 2) ? Q3 : (i === 3) ? Q4 : (i === 4) ? Q5 : (i === 5) ? Q6 : ''}
                    alt="question"
                  /> </span>
                  <br />
                  <h3><span className="label label-warning">{question}</span></h3>
                </h5>

              </div>
              <div className="modal-body">
                <div className="quiz" id="quiz" data-toggle="buttons">
                  <label className="btn btn-lg btn-info btn-block">
                    <span className="btn-label">
                      <input type="radio" name="option" value="1" />
                      <br />
                      <i className="fa fa-arrow-right" />
                    </span>
                    <span>{opt1}</span>
                  </label>
                  <label className="btn btn-lg btn-info btn-block">
                    <span className="btn-label">
                      <input type="radio" name="option" value="2" />
                      <br />
                      <i className="fa fa-arrow-right" />
                    </span>
                    <span>{opt2}</span>
                  </label>
                  <label className="btn btn-lg btn-info btn-block">
                    <span className="btn-label">
                      <input type="radio" name="option" value="3" />
                      <br />
                      <i className="fa fa-arrow-right" />
                    </span>
                    <span>{opt3}</span>
                  </label>
                  <label className="btn btn-lg btn-info btn-block">
                    <span className="btn-label">
                      <input type="radio" name="option" value="4" />
                      <br />
                      <i className="fa fa-arrow-right" />
                    </span>
                    <span>{opt4}</span>
                  </label>
                  <br />
                  <button
                    className="btn btn-success pull-right btn-primary"
                    onClick={this.next.bind(this)}
                  >
                    Next Question <i className="fa fa-angle-double-right" />
                  </button>

                  <br />
                  <br />
                </div>
              </div>
            </div>
            <div id="resultContainer" style={{ display: "none" }}>
              <div className="modal-header">
                <h2>{currentQuesObj.quizName}</h2>
                <button
                  className="btn btn-secondary pull-right"
                  onClick={() => {
                    this.props.backToDashboard(false);
                  }}
                >
                  Goto Dashboard <i className="fa fa-undo" />
                </button>
              </div>
              <div className="modal-body">
                <h3>{currentQuesObj.tests[currentTestIndex].name}</h3>

                <p>Questions: {currentQuesObj.tests[currentTestIndex].questions}</p>
                {score < 20 ? (
                  <h3>Your Eye Scored {score}% , You need to consult a doctor immediately.</h3>
                ) : (
                    <h3>Your Eye Scored {score}%</h3>
                  )}
                <hr />

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Question;
