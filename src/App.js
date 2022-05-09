import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

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

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light mode has been enabled', 'success');
      document.title = "TextUtils - Light Mode";
    }
  };



  return ( 
    <>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} changeMode={changeMode} aboutText="About"/>
        <Alert alert={alert} />
        <div className="container my-4">
              <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} btnColor={btnColor} />
        </div>
    </>

  );
}

export default App;
