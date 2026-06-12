import Foot from './assets/fbg.jpg';
import { useState,useEffect } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import footballQuestions from './footballQuestions'
function Football(){
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
    if (option === footballQuestions[currentQuestion].answer) {
      setScore(score + 1)
    }
  }

  function handleNext() {
    if (currentQuestion + 1 < footballQuestions.length) {
      setCurrentQuestion(currentQuestion + 1)
      setSelected(null)
      setTimer(15)
    } else {
      navigate('/result', { state: { score: score, total: footballQuestions.length, sport: 'Football', name:name } })
    }
  }  
    return(
        <center>
        <div className="fbg">
            <h1 className="fbq">Football Quiz</h1>
            <p className="qnumf">Question {currentQuestion + 1} of {footballQuestions.length}</p>
        <p className="scoref">Score: {score}</p>
        <p style={{ color: timer <= 5 ? 'red' : 'gold', fontSize: '25px', fontWeight: 'bold' }}> ⏱️ {timer} sec</p>

        <div className="questionbox">
          <h2 className="qtextf">{footballQuestions[currentQuestion].question}</h2>
        </div>

        <div className="optionsboxf">
          {footballQuestions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className="optbtnf"
              onClick={() => handleAnswer(option)}
              disabled={selected !== null}
              style={{
                backgroundColor:
                  selected === null ? 'transparent'
                  : option === footballQuestions[currentQuestion].answer ? 'green'
                  : option === selected ? 'red'
                  : 'transparent'
              }}
            >
              {option}
            </button>
          ))}
        </div>

        {selected !== null && (
          <button className="nextbtnf" onClick={handleNext}>
            {currentQuestion + 1 === footballQuestions.length ? 'See Result' : 'Next'}
          </button>
        )}
        </div>   
        <p className="credit">Created by Nalantamil | Version 1.0 | © 2026 CricFoo Quiz</p>  
        </center>
    );

}
export default Football