import React, {useState} from 'react';
import './style/App.css';
import './style/index.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Simulator from './pages/simulator';
import SignIn from './pages/signin';
import PageNotFound404 from './pages/PageNotFound404';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    /*const [show, setShow] = useState(false);

    const ModalToggle = () => {
        setShow(!show)
    }*/

    return (
        <Router>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Routes>
                <Route path='/' exact element={<Home/>} />
                <Route path='/simulator' element={<Simulator/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/signin' exact element={<SignIn/>} />
                <Route path="*" element={<PageNotFound404/>} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
