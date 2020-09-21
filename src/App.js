import React, {useState, useCallback} from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar'

// import Header from './components/Header'
import Main from './components/Main'

function App() {

 


  return (
    <div class="wrapper d-flex align-items-stretch">
   <Sidebar/>
    <Main/>
    </div>
  );
}

export default App;
