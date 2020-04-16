import React from 'react';
import './App.css';
import SLEditor from './components/Editor';

function App() {
  return (
    <div className="App">
     <div className="editor_container">
     <SLEditor content='this is a starter example for test purpose SMARTLIS'  />
     </div>
    
    </div>
  );
}

export default App;
