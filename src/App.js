import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
      <Routes>
        <Route path='/' Component={Home} ></Route>
      </Routes>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
