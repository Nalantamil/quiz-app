import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home';
import Cricquiz from './CricQuiz.jsx';
import Football from './Football.jsx';
import Result from './Result.jsx';
function App(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cricket" element={<Cricquiz />} />
            <Route path="/football" element={<Football />} />
            <Route path="/result" element={<Result/ >} />
        </Routes>
        </BrowserRouter>
        </>
    );
}
export default App