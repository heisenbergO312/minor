// import React from "react";
// import Signup from "./signup"
// import Home from "./home"

// function App() {
//   return (
//     <div className="App">
//       {/* <h1>Hello</h1> */}
//      {/* <Signup /> */}
//      <Home />
//     </div>

//   );
// }

// export default App;
  import React from 'react'
  import './App.css'
  import Navbar from './components/Navbar';
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import Contact from './components/pages/Contact';
  import Category from './components/pages/Category';
  import About from './components/pages/About';
  import SignUp from './components/pages/SignUp';
  import Home from './components/pages/Home';
  import Categories_data from './components/pages/Categories_data';
  
  function App() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/about' element={<About />} />
          <Route path='/html' element={<Category data={Categories_data.html} />} />
          <Route path='/css' element={<Category data={Categories_data.css} />} />
          <Route path='/javascript' element={<Category data={Categories_data.javascript} />} />
          <Route path='/web-development' element={<Category data={Categories_data.web_development} />} />
          <Route path='/category' element={<Category data={Categories_data.all_category} />} />
        </Routes>
      </Router>
  
    )
  }
  
  export default App;
