import { useState } from 'react'
import Display from './display'
import ListView from './listView'
import StaticNav from './Nav'
import Guest from './Guest'


function App() {
  const [currentView, setCurrentView] = useState("ListView")
  // const [categories, setCategories] = useState(data.categories);
  // const [currentQuestion, setCurrentQuestion] = useState({});
  // const [answeredQuestions, setAnsweredQuestions] = useState([]);
  // const [score, setScore] = useState(0);

  let appProps = {
    currentView,
    setCurrentView
  }

  return (
    <div className="App">
      <StaticNav />
      <Display {...appProps}/>
    </div>
  )
}

export default App
