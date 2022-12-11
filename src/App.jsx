import { useState,useEffect } from 'react'
import Display from './display'
import ListView from './listView'
import StaticNav from './Nav'
import Guest from './Guest'


function App() {
  const [currentView, setCurrentView] = useState("ListView")
  const [guestList, setGuestList] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState([]);
  // const [currentQuestion, setCurrentQuestion] = useState({});
  // const [answeredQuestions, setAnsweredQuestions] = useState([]);
  // const [score, setScore] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/api/guest")
    .then(response => response.json())
    .then((data) => setGuestList(data))

  },[])

  // useEffect(() => {
  //   setCurrentView('selectedGuest')
  // }, selectedGuest)


  let appProps = {
    currentView,
    setCurrentView,
    setGuestList,
    guestList,
    selectedGuest,
    setSelectedGuest
  }
  console.log('selectedguest', selectedGuest)

  return (
    <div className="App">
      <StaticNav {...appProps}/>
      {selectedGuest.length  === 0 ? <Display {...appProps}/> : <Guest {...appProps}/>}
      {/* <Display {...appProps}/> */}
    </div>
  )
}

export default App
