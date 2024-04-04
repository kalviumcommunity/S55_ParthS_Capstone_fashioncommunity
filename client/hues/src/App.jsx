import Home from './components/Home'
import './App.css'
import Signup from  './components/SignUp/Signup.jsx';
import Login from './components/Login/Login.jsx'
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
            </Routes>
          </BrowserRouter>
      
        
      
      </div>
   
      
    </>
  )
}

export default App
