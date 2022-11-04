import React from 'react'
import Home from "./router/Home"
import SERVICE from "./router/About"
import {JoinUs} from "./router/JoinUs"
import Contact from "./router/Contact"
import About from "./router/AboutGovernment"
import {Route,Routes} from "react-router-dom"


function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/JoinUs" element={<JoinUs />}/>
      <Route path="/about" element={<SERVICE />}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/AboutGovernment" element={<About/>}/>
     </Routes>
     <div>Hello World</div>
    </>
  );
}

export default App;