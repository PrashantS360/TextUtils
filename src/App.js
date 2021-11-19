// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

// Understanding JSX
/*
replace
  class ---> className
  for -----> htmlFor
*/

// let name = "Sachin";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [btnColor, setColorBtn] = useState("primary");

  const changeMode = (e) => {
    if (e.target.className === "btn btn-warning mx-1") {
      document.body.style.backgroundColor = "#f5f293";
      setColorBtn("warning");
    }
    else if (e.target.className === "btn btn-danger mx-1") {
      document.body.style.backgroundColor = "#ff7373";
      setColorBtn("danger");
    }
    else if (e.target.className === "btn btn-success mx-1") {
      document.body.style.backgroundColor = "lightgreen";
      setColorBtn("success");
    }
    document.body.style.color = 'black';
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    setColorBtn("primary");
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#002c6f';
      document.body.style.color = 'white';
      showAlert('Dark mode has been enabled', 'success');
      document.title = "TextUtils - Dark Mode";

      // setInterval(() => {
      //   document.title = "TextUtils is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now!";
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light mode has been enabled', 'success');
      document.title = "TextUtils - Light Mode";
    }
  };



  return ( // JSX
    // we can return only one tag (we can use JSX fragment <>Write your code here</>)
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React With CodeWithHarry
    //     </a>
    //   </header>
    // </div>

    // {javascript} 

    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      {/* <Router> */}

        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} changeMode={changeMode} aboutText="About"/>
        {/* <Navbar/> */}
        <Alert alert={alert} />
        <div className="container my-4">
          {/* <Switch> */}
            {/* React uses partial matching (so use exact)
             users --> Component 1
            users/home/ --> Component 2 */}
            {/* <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/"> */}
              <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} btnColor={btnColor} />
            {/* </Route>
          </Switch> */}
          {/* <About /> */}
        </div>
      {/* </Router> */}
    </>

  );
}

export default App;
