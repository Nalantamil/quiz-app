import { useLocation, useNavigate } from 'react-router-dom'

function Result() {
  const navigate = useNavigate()
  const location = useLocation()

  const score = location.state?.score
  const total = location.state?.total
  const sport = location.state?.sport
  const name = location.state?.name

  function getPerformanceMessage() {
    const percentage = (score / total) * 100
    if (percentage >= 85) {
      return "Excellent! You are a Sports Expert! 🌟"
    } else if (percentage >= 65) {
      return "Great Job! Well Played! 👏"
    } else if (percentage >= 45) {
      return "Good Try! Keep Practicing! 💪"
    } else {
      return "Better Luck Next Time! 🎯"
    }
  }

  return (
    <div className="resultbg">
      <center>
        <h1 className="rtrophy">🏆</h1>

        <h1 className="rsport">{sport} Quiz Completed!</h1>

        {name && <h2 className="rname">Well done, {name}!</h2>}

        <div className="rscorebox">
          <h2 className="rscore">You Scored</h2>
          <h1 className="rnum">{score} / {total}</h1>
        </div>

        <div className="rbar">
          <div
            className="rbarfill"
            style={{ width: `${(score / total) * 100}%` }}
          ></div>
        </div>

        <p className="rmsg">{getPerformanceMessage()}</p>

        <div className="rbtns">
          <button
            className="rplaybtn"
            onClick={() => sport === 'Cricket'
              ? navigate('/cricket')
              : navigate('/football')}
          >
            Play Again 🔄
          </button>

          <button
            className="rhomebtn"
            onClick={() => navigate('/')}
          >
            Home 🏠
          </button>
        </div>
      </center> 
      <p className="credit">Created by Nalantamil | Version 1.0 | © 2026 CricFoo Quiz</p>
    </div>
  )
}

export default Result