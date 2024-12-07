// Root Component - here We  add./Components/ all the Component and using all of them we  make  an UI 
// import logo from './logo.svg';
// import './App.css';

import React,{useState} from 'react'
import Navbar from './Components/Navbar'; //import Navbars for  use Navbar component
import Formcc from './Components/Formcc';
import About from './Components/About';
import Aleart from './Components/Aleart';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  const [mode ,setMode]=useState('light');

  const themechnageFun =()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#495057';
      showAlert(" Dark Mode Enabled","success");
      document.title="Dark--Theme"
    }
    else{
      setMode ('light')
      document.body.style.backgroundColor='white';
      showAlert(" Light Mode Enabled","success");
    }
  }
  const [aleart,setAleart]=useState(null);
  const showAlert=(message,type)=>{
      setAleart({
      msg:message,
      type:type
    })
    // it will disappear the aleart after a certain time .
    setTimeout(()=>{
      setAleart(null);
    },1500)
  
  }
  return (    
    <> 
 
    {/* ------------------------------------------------------------------------- */}
    <Router>
      <nav>
        <Navbar aboutvalue="About" linkValue="TextAPP" HomeValue="Home" mode={mode} themeChangeFun={themechnageFun} />

        {aleart && <Aleart alert={aleart} HomeValue="Home89"/>}
      </nav>
        <Routes>
          <Route path="/About" element={<About mode={mode} />} />

          <Route exact path="/Formcc" element={<Formcc showAlert={showAlert} mode={mode} heading="Enter text here" />} />  
            
          <Route  path="/"  element={<div>Home Page Content</div>} /> 
        </Routes>
    </Router>
{/* -------------------------------------------------------------------------------------------- */}
      {/* <Navbar aboutvalue="About" linkValue="Link"  mode={mode} themechnageFun={themechnageFun}/>

      {aleart && <Aleart aleart={aleart} />}

      <About container mode={mode}/>
      
      <div className='container my-3'> 
        <Formcc showAlert={showAlert} mode={mode} heading="Enter text here" />
      </div>        */}
    </>
  );
}

export default App;


