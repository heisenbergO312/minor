import{Routes,Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Policy from "../pages/Policy";
import Downloads from "../pages/Downloads";
import Kyc from "../pages/Kyc";
import Documents from "../pages/Documents"
import Login from "../Login"




function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/policy' element={<Policy/>}/>
        <Route path='/downloads' element={<Downloads/>}/>
        <Route path='/kycapp' element={<Kyc/>}/>
        <Route path='/documents' element={<Documents/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;