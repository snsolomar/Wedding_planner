import { useState,useEffect } from 'react'
import Display from './display'
import ListView from './listView'
import StaticNav from './Nav'
import Guest from './Guest'
import Update from './Update'
import Create from './Create'


function App() {
  const [currentView, setCurrentView] = useState("ListView")
  const [guestList, setGuestList] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState([]);
  const [update, setUpdate] =useState(false);
  const [create, setCreate] =useState(false);
  const [reRender, setReRender] =useState(false);
  const [guestId, setGuestId] = useState();

  // const [currentQuestion, setCurrentQuestion] = useState({});
  // const [answeredQuestions, setAnsweredQuestions] = useState([]);
  // const [score, setScore] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/api/guest")
    .then(response => response.json())
    .then((data) => setGuestList(data))

  },[reRender])

  useEffect(() => {
    console.log('changed')

  },[currentView])

  // useEffect(() => {
  //   setCurrentView('selectedGuest')
  // }, selectedGuest)


  let appProps = {
    currentView,
    setCurrentView,
    setGuestList,
    guestList,
    selectedGuest,
    setSelectedGuest,
    update,
    setUpdate,
    create,
    setCreate,
    setReRender,
    guestId,
    setGuestId
  }
  // console.log('selectedguest', selectedGuest)
      if (selectedGuest.length !== 0 && update === true) {
        return (
          <div className="App">
          <StaticNav {...appProps}/>
          <Update {...appProps}/>
        </div>
        )
      } else if (selectedGuest.length === 0 && create === true) {
        return (
          <div className="App">
          <StaticNav {...appProps}/>
          <Create {...appProps}/>
        </div>
        )
      } else if (selectedGuest.length !== 0){
        return (
          <div className="App">
          <StaticNav {...appProps}/>
          <Guest {...appProps}/>
        </div>
        )
      } else {
        return (
          <div className="App">
          <StaticNav {...appProps}/>
          <Display {...appProps}/>
        </div>
        )
      }

}

export default App


// return (
//   <div className="App">
//     <StaticNav {...appProps}/>
//     {selectedGuest.length  === 0 ? <Display {...appProps}/> : <Guest {...appProps}/>}
//     {/* <Display {...appProps}/> */}
//   </div>
// )