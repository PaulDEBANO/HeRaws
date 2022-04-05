import React, {useState} from 'react';
import './style/App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Simulator from './pages/simulator';
import SignIn from './pages/signin';


function App() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <Router>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Routes>
                <Route path='/' exact element={<Home/>} />
                <Route path='/simulator' element={<Simulator/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/signin' exact element={<SignIn/>} />
            </Routes>
        </Router>
    );
};

export default App;
