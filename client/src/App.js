import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Chats from "./components/Chats/Chats";
import Login from "./components/Login/Login";

import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar> </Navbar>
        <Routes>
          <Route path='/about' element={ <About /> }> </Route>
          <Route path='/chats' element={ <Chats /> }> </Route>
          <Route path='/' element={ <Login /> }> </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
