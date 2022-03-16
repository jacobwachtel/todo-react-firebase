import './App.css';
import Dashboard from './pages/Dashboard';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';




function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/signup" element={<SignUp/>} />     
 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
