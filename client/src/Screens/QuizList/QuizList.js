import React, { Component } from "react";
import Question from "../Questions/Question"
import coverPic1 from "../../images/questions/quiz.jpg";
import coverPic2 from "../../images/questions/test.png";

class QuizList extends Component {
  constructor() {
    super();
    this.state = {
      quiz_list: [
        { quizName: "Eye-Sight Test", tests: 2 }
      ],
      quiz_info: [ // we have only one quiz called eye-sight test
        {
          quizName: "Eye-Sight Test",
          tests: [
            {
              name: "Left Eye-Sight Test",
              questions: 6,

              quiz_questions: [
                {
                  quiz: "Indicate the direction?",
                  option1: "Right direction is opened ",
                  option2: "Left direction is opened ",
                  option3: "Top direction is opened ",
                  option4: "Down direction is opened ",
                  answer: "2"
                },
                {
                  quiz: "Indicate the direction?",
                  option1: "Right direction is opened ",
                  option2: "Left direction is opened ",
                  option3: "Top direction is opened ",
                  option4: "Down direction is opened ",
                  answer: "4"
                },
                {
                  quiz: "Indicate the direction?",
                  option1: "Right direction is opened ",
                  option2: "Left direction is opened ",
                  option3: "Top direction is opened ",
                  option4: "Down direction is opened ",
                  answer: "1"
                },
                {
                  quiz: "Indicate the direction?",
                  option1: "Right direction is opened ",
                  option2: "Left direction is opened ",
                  option3: "Top direction is opened ",
                  option4: "Down direction is opened ",
                  answer: "4"
                },
                {
                  quiz: "Indicate the direction?",
                  option1: "Right direction is opened ",
                  option2: "Left direction is opened ",
                  option3: "Top direction is opened ",
                  option4: "Down direction is opened ",
                  answer: "3"
                },
                {
                  quiz: "Indicate the direction?",
                  option1: "Right direction is opened ",
                  option2: "Left direction is opened ",
                  option3: "Top direction is opened ",
                  option4: "Down direction is opened ",
                  answer: "4"
                }


              ]
            },
            {
              name: "Right Eye-Sight Test",
              questions: 8,

              quiz_questions: [
                {
                  quiz: "Indicate the direction?",
                  option1: "Right direction is opened",
                  option2: "Left direction is opened",
                  option3: "Top direction is opened",
                  option4: "Down direction is opened",
                  answer: "2"
                },
                {
                  quiz: "Indicate the direction?",
                  option1: "Right direction is opened",
                  option2: "Left direction is opened",
                  option3: "Top direction is opened",
                  option4: "Down direction is opened",
                  answer: "4"
                },
                {
                  quiz: "Indicate the direction?",
                  option1: "Right direction is opened",
                  option2: "Left direction is opened",
                  option3: "Top direction is opened",
                  option4: "Down direction is opened",
                  answer: "1"
                },
                {
                  quiz: "Indicate the direction?",
                  option1: "Right direction is opened",
                  option2: "Left direction is opened",
                  option3: "Top direction is opened",
                  option4: "Down direction is opened",
                  answer: "4"
                },
                {
                  quiz: "Indicate the direction?",
                  option1: "Right direction is opened",
                  option2: "Left direction is opened",
                  option3: "Top direction is opened",
                  option4: "Down direction is opened",
                  answer: "3"
                },
                {
                  quiz: "Indicate the direction?",
                  option1: "Right direction is opened",
                  option2: "Left direction is opened",
                  option3: "Top direction is opened",
                  option4: "Down direction is opened",
                  answer: "4"
                }


              ]
            }
          ]
        }
      ],
      saveSelectedQuizObj: null, // the eye-sigh main quiz
      renderSelectedTestObj: false, // the left eye test or right eye test
      renderMCQs: false, // the questions itself inside the test 
      currentTestIndex: null // the id of the test
    };
    this.back = this.back.bind(this); // go back one step 
    this.backToDashboard = this.backToDashboard.bind(this); //go back to the main screen
  }

  // saving selected quiz to state
  updateQuizInfoState(index) {
    const { quiz_info } = this.state;
    this.setState({
      saveSelectedQuizObj: quiz_info[index], //the quiz is already selected 
      renderSelectedTestObj: true
    });
  }

  // back button function
  back() {
    this.setState({ renderSelectedTestObj: false }); // back to quiz list page
  }

  backToDashboard(param) {
    this.setState({ renderMCQs: param });
  }

  renderQuizInfo() { // render all tests for that quiz
    const { saveSelectedQuizObj } = this.state;
    return (
      <div>
        <h3>Choose {saveSelectedQuizObj.quizName} </h3>

        <div className="row">
          {saveSelectedQuizObj.tests.map((test, i) => {
            return (
              <div
                className="col-md-6"
                key={`${saveSelectedQuizObj.quizName}_${test.name}`}
              >
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src={coverPic2}
                    alt="Card  cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{test.name}</h5>
                    <p className="card-text">
                      Total Questions: {test.questions}
                    </p>

                    <button
                      className="btn btn-success"
                      onClick={() => {
                        this.setState({
                          renderMCQs: true,
                          currentTestIndex: i,
                          renderSelectedTestObj: false
                        });
                      }}
                    >
                      Start Test {i + 1} <i className=" fa fa-paper-plane" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button className="btn btn-secondary" onClick={this.back}>
          Back <i className="fa fa-backward" />
        </button>
      </div>
    );
  }

  renderQuizList() {
    const { quiz_list } = this.state;
    return (
      <div>
        <h3><span className="">Visual Eye-sight Test</span></h3>
        <br />

        <div className="row">
          {quiz_list.map((qList, index) => {
            return (
              <div className="col-8" key={`${qList}_${index}`}>
                <div className="card" style={{ width: "25rem" }}>
                  <img
                    className="card-img-top"
                    src={coverPic1}
                    alt="eye test quiz"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{qList.quizName} </h5>
                    <p className="card-text">
                      Test your skills of {qList.quizName} by taking this small quiz.
                      It has {qList.tests} sub-tests.
                    </p>
                    <button
                      className="btn btn-info"
                      onClick={this.updateQuizInfoState.bind(this, index)}
                    >
                      Next <i className=" fa fa-paper-plane" />
                    </button>
                    {/* <button className="btn btn-primary" >Next <i class=" fa fa-paper-plane"></i></button> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  render() {
    const {
      renderSelectedTestObj,
      renderMCQs,
      saveSelectedQuizObj,
      currentTestIndex
    } = this.state;
    return (
      <div>
        {renderSelectedTestObj ? ( // the set of tests aleady fetched ?
          this.renderQuizInfo()
        ) : renderMCQs ? ( // the sub-test is selected ? 
          <Question
            currentQuesObj={saveSelectedQuizObj}
            currentTestIndex={currentTestIndex}
            backToDashboard={this.backToDashboard}
          />
        ) : (
              this.renderQuizList()
            )}
        {console.log(currentTestIndex, saveSelectedQuizObj, renderMCQs)}
      </div>
    );
  }
}

export default QuizList;
