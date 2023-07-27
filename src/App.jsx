import {useState} from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
const apikey = import.meta.env.VITE_KEY
const [progress, setProgress] = useState(0)

  
return(
  <BrowserRouter>
        <Navbar/> 
        <LoadingBar color='#f11946' heigh={3} progress={progress} />
        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} apikey={apikey} key={'genral'} category='general'/>}/>
          <Route exact path='/business' element={<News setProgress={setProgress} apikey={apikey} key={'business'} category='business'/>}/>
          <Route exact path='/entertainment' element={<News setProgress={setProgress} apikey={apikey} key={'entertainment'} category='entertainment'/>}/>
          <Route exact path='/health' element={<News setProgress={setProgress} apikey={apikey} key={'health'} category='health'/>}/>
          <Route exact path='/science' element={<News setProgress={setProgress} apikey={apikey} key={'science'} category='science'/>}/>
          <Route exact path='/sports' element={<News setProgress={setProgress} apikey={apikey} key={'sports'} category='sports'/>}/>
          <Route exact path='/technology' element={<News setProgress={setProgress} apikey={apikey} key={'technology'} category='technology'/>}/>
          </Routes>
  </BrowserRouter>
    )
}

export default App