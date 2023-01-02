import React from 'react';
import './qrStyle.scss'
import Header from "./components/Header";
import CodeGenerator from "./components/CodeGenerator";



function App() {
  return(
    <div className="container">
        <Header/>
        <CodeGenerator/>
    </div>
  );
}

export default App;
