import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="animated bounceInUp">Miodrag Iankulov</h1>
      <h3 className="animated bounceInDown">Webmonster</h3>
      
      <div className="hold-contact">
        <a href="https://www.linkedin.com/in/iankulovmiodrag/" rel="noopener noreferrer" target="_blank" className="animated bounceInLeft addMargin" title="LinkedIn" aria-label="LinkedIn"><i className="fa fa-linkedin"></i></a>
        <a href="mailto:mio@imiodrag.com" className="animated bounceInRight" title="E-mail contact" aria-label="E-mail contact"><i className="fa fa-envelope"></i></a>
      </div>
    </div>
  );
}

export default App;
