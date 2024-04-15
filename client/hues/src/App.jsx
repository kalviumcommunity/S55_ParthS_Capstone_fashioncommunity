import Home from './components/Home'
import './App.css'
import Signup from  './components/SignUp/Signup.jsx';
import Login from './components/Login/Login.jsx'
import Explore from './components/Explore/explore.jsx'
import Designers from './components/Designers/designers.jsx'
import Create from './components/Create/create.jsx'
import { BrowserRouter,Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <>
      <div>

      <BrowserRouter>
        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/explore" element={<Explore/>}/>
            <Route path="/designers" element={<Designers/>}/>
            <Route path="/create" element={<Create/>}/>

            </Routes>
          </BrowserRouter>
      
        
      
      </div>
   
      
    </>
  )
}

export default App
