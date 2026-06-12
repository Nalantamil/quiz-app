import {useNavigate, useLocation } from 'react-router-dom';
import CBG from './assets/cbg.jpg';
import cricketQuestions from './cricketQuestions';
import { useState, useEffect } from 'react'
function Quiz(){
  const navigate = useNavigate()
  const location = useLocation()
  const name = location.state?.name

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState(null)
  const [timer, setTimer] = useState(15)

  useEffect(() => {
    if (selected !== null) return
    if (timer === 0) {
      handleNext()
      return
    }
    const countdown = setInterval(() => {
      setTimer(prev => prev - 1)
    }, 1000)
    return () => clearInterval(countdown)
  }, [timer, selected])

  function handleAnswer(option) {
    setSelected(option)
    if (option === cricketQuestions[currentQuestion].answer) {
      setScore(score + 1)
    }
  }

  function handleNext() {
    if (currentQuestion + 1 < cricketQuestions.length) {
      setCurrentQuestion(currentQuestion + 1)
      setSelected(null)
      setTimer(15)
    } else {
      navigate('/result', { state: { score: score, total: cricketQuestions.length, sport: 'Cricket', name:name } })
    }
  }
     return (
        <center>
        <div className="cricb">
        <h1 className="cq">Cric Quiz</h1>
        <p className="qnum">Question {currentQuestion + 1} of {cricketQuestions.length}</p>
        <p className="score">Score: {score}</p>
        <p style={{ color: timer <= 5 ? 'red' : 'gold', fontSize: '25px', fontWeight: 'bold'}}> ⏱️ {timer} sec
        </p>

        <div className="questionbox">
          <h2 className="qtext">{cricketQuestions[currentQuestion].question}</h2>
        </div>

        <div className="optionsbox">
          {cricketQuestions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className="optbtn"
              onClick={() => handleAnswer(option)}
              disabled={selected !== null}
              style={{
                backgroundColor:
                  selected === null ?  'transparent'
                  : option === cricketQuestions[currentQuestion].answer ? 'green'
                  : option === selected ? 'red'
                  : 'transparent'
              }}
            >
              {option}
            </button>
          ))}
        </div>

        {selected !== null && (
          <button className="nextbtn" onClick={handleNext}>
            {currentQuestion + 1 === cricketQuestions.length ? 'See Result' : 'Next'}
          </button>
        )}
        </div>
        <p className="credit">Created by Nalantamil | Version 1.0 | © 2026 CricFoo Quiz</p>
        </center>
     );
}
export default Quiz