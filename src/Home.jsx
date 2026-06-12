import {useNavigate} from 'react-router-dom'
import { useState } from 'react'

function Home(){
  const navigate = useNavigate()
  const [name, setName] = useState('')
    return(
        <>
      <center>
      <div className="homebg">
      <div className="break"><h1 className="Sports">CricFoo</h1><h1 className="Quizz">Quiz</h1></div>
      <p className="disclaimer">Test your sports knowledge!</p>
      <input type="text" className="input" placeholder="Drop Your Name" value={name} onChange={(e) => setName(e.target.value)} />
      <p className="start">Start Now </p>
        <button className="cric" onClick={() => {
          if(name.trim() === '') {
            alert('Please enter your name!')
          } else {
            navigate('/cricket', { state: { name: name } })
          }
        }}>Cricket</button>

        <button className="foot" onClick={() => {
          if(name.trim() === '') {
            alert('Please enter your name!')
          } else {
            navigate('/football', { state: { name: name } })
          }
        }}>Football</button>    
        <p className="credit">Created by Nalantamil | Version 1.0 | © 2026 CricFoo Quiz</p>        
        </div>
      </center>
      </>
    );
}
export default Home