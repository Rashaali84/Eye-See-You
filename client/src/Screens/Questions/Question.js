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
      i: 0, // index of the question 
      correct: 0, // increase the correct answer
      score: 0  // percentage 
    };

    this.next = this.next.bind(this); // the function which loads the question 

  }

  next() { // bind this to the next button in render
    // fetch the data from props and state 
    const { currentQuesObj, currentTestIndex } = this.props;
    var { i, correct, score } = this.state;

    var quiz_questions = currentQuesObj.tests[currentTestIndex].quiz_questions;

    var radioBtn = document.querySelector("input[name='option']:checked");
    if (radioBtn == null) {
      alert("select value");
    } else {
      if (quiz_questions[i].answer.match(radioBtn.value)) {
        console.log("quiz_questions[i].answer**", quiz_questions[i].answer);

        this.setState({ correct: ++correct });
      }

      if (quiz_questions.length - 1 === i) {
        //hide the results and show quiz question 
        document.getElementById("quizContainer").style.display = "none";
        document.getElementById("resultContainer").style.display = "block";
        score = (correct * (100 / quiz_questions.length)).toFixed(0);
        console.log(quiz_questions.length, correct);
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
      <div class="container-fluid">
        <div class="row">
          <div className="col-lg-12 col-md-6 col-xs-12">
            <div className="col" id="content">
              <div id="quizContainer">
                <div className="modal-header">
                  <h5>
                    <i className="fa fa-question-circle" Style="color:yellow" />
                    <span>   <img className="rounded mx-auto d-block"

                      src={i === 0 ? Q1 : (i === 1) ? Q2 : (i === 2) ? Q3 : (i === 3) ? Q4 : (i === 4) ? Q5 : (i === 5) ? Q6 : ''}
                      alt="question"
                    /> </span>
                    <br />
                    <span className="label label-default"><h3><strong>{question}</strong></h3></span>
                  </h5>

                </div>
                <div className="modal-body">
                  <div className="quiz" id="quiz" data-toggle="buttons" Style="color:yellow" >
                    <label className="btn btn-lg  btn-block" Style="color:yellow">
                      <span className="btn-label">
                        <input type="radio" name="option" value="1" />
                        <br />
                        <i className="fa fa-arrow-right" />
                      </span>
                      <span Style="color:black">{opt1}</span>
                    </label>
                    <label className="btn btn-lg  btn-block" Style="color:yellow" >
                      <span className="btn-label">
                        <input type="radio" name="option" value="2" />
                        <br />
                        <i className="fa fa-arrow-left" />
                      </span>
                      <span Style="color:black">{opt2}</span>
                    </label>
                    <label className="btn btn-lg  btn-block" Style="color:yellow" >
                      <span className="btn-label">
                        <input type="radio" name="option" value="3" />
                        <br />
                        <i className="fa fa-arrow-up" />
                      </span>
                      <span Style="color:black">{opt3}</span>
                    </label>
                    <label className="btn btn-lg  btn-block" Style="color:yellow" >
                      <span className="btn-label" >
                        <input type="radio" name="option" value="4" />
                        <br />
                        <i className="fa fa-arrow-down" />
                      </span>
                      <span Style="color:black">{opt4}</span>
                    </label>
                    <br />
                    <button
                      className="btn btn-light pull-right"
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
                  <button Style="color:black"
                    className="btn btn-secondary pull-right"
                    onClick={() => {
                      this.props.backToDashboard(false);
                    }}
                  >
                    Goto Dashboard <i className="fa fa-undo" Style="color:yellow" />
                  </button>
                </div>
                <div className="modal-body">
                  <h3>{currentQuesObj.tests[currentTestIndex].name}</h3>

                  <p>Questions: {currentQuesObj.tests[currentTestIndex].questions}</p>
                  {score < 50 ? (
                    <h3>Your Eye Scored {score}% , You need to consult a doctor immediately.</h3>
                  ) : (
                      <h3>Your eye sight is perfectly fine ! Your Eye Scored {score}%</h3>
                    )}
                  <hr />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Question;
