
import './App.css'
import LoginComponent from './components/LoginComponent'
import RegisterComponent from './components/RegisterComponent'
import './api_interface/UserInterface'
import { BrowserRouter as Router , Route, Routes, Navigate } from "react-router-dom";
import PrivateRouteComponent from './components/PrivateRouteComponent'
import UserPage from './components/UserPage'
import NavbarComponent from './components/NavbarComponent'
import Aboutus from './components/AboutUs'
import LessonsPage from './components/LessonsPage'
import HomePage from './components/HomePage'

//Todo Handle before after Login Pages

const App = () => {

  let auth = {token:true}   

  return (
    <>
     <Router> 
     <NavbarComponent auth={auth}/>    
      <Routes>
        <Route element={<PrivateRouteComponent auth={auth}/>}>
          <Route path='/userpage' element={<UserPage/>}></Route>
          <Route path='/lessons' element={<LessonsPage/>}></Route>
        </Route>
        <Route path='/login' element={<LoginComponent/>}></Route>
        <Route path='/register' element={<RegisterComponent/>}></Route>
        <Route path='/aboutus' element={<Aboutus/>}></Route>        
        <Route path='/' element={<HomePage/>}></Route>
        <Route path="*" element={<Navigate to="/" replace />}></Route>        
      </Routes>
     </Router>

     <div className='footer' style={{height: "3rem"}}><h1>footer</h1></div>

    </>
  )
}

export default App
