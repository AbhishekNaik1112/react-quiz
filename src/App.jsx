import React, { useState } from 'react'
import Home from './components/HomeComponent'
import Question from './components/QuizComponent'
import Result from './components/ResultComponent'

function App(){
  const[state , setState] = useState(1)
  return <>

 
  {
    state == 1 ? <Home setState={setState}/> : state == 2 ? <Question setState={setState}/> : <Result setState={setState} />
  }

 
  </>
}

export default App