import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Base from './Components/Layout/Base';
import Home from "./Pages/Home"
import Login from './Components/Elements/Login';
import SignUp from './Components/Elements/SignUp';
function App() {
  return (
   <>
   <BrowserRouter>
   <Base>
   <Routes>
    <Route index path='/' element={<Login/>} />
    <Route index path='/Home' element={<Home/>} />

    <Route index path='/login' element={<Login/>} />
    <Route index path='/signUp' element={<SignUp/>} />

    
   </Routes>
   </Base>
   </BrowserRouter>
   </>
  );
}

export default App;
