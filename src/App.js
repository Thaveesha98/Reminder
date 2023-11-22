// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from './AdminPage/Page';
import Task from './TaskPage/Task'; 
import Request from './Request/Request'; 

const App = () => {
  return (
   
    <Router>
      
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/Task" element={<Task />} />
          <Route path="/request" element={<Request />} />
        </Routes>
      
      
    </Router>
    

  );
};

export default App;
