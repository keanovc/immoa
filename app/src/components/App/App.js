import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './container/Home/Home';
import Signup from './container/Signup/Signup';
import Signin from './container/Signin/Signin';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
        </Routes> 
    </BrowserRouter>
  );
}

export default App;
