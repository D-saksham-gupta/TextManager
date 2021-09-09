
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from 'react'
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [btntext, setBtnText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const btnText=()=>{
    setBtnText({

    })
  }

  const showAlert=(message, type)=>{
        setAlert({
          msg: message,
          type: type
        })
  }
  setTimeout(() => {
    setAlert(null);
  }, 1500);

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      setBtnText("Enable Dark Mode");
      document.body.style.backgroundColor='black';
      showAlert("Dark Mode has been enabled", "success");
    }
    else{
      setMode('light');
      setBtnText("Disable Dark Mode");
      document.body.style.backgroundColor='white';
      showAlert("Dark Mode has been disabled", "primary");
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title = "TextUtils" aboutText = "About TextUtils" mode={mode} toggleMode={toggleMode} btnText={btnText} />
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Switch> */}
          {/* <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
         
          {/* <Route exact path="/"> */}
      <Textform heading = "Enter your text" mode={mode} showAlert={showAlert}/>
           
          {/* </Route>
        </Switch> */}
      
      </div>
      {/* </Router> */}


    </>
  );
}

export default App;
