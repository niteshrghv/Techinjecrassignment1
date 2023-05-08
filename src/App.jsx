import React from 'react'
import {Home} from './Components/Home'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './Components/sty.css'
const App=()=>{
    return(
        <> 
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
        </>
    )
}
export default App;