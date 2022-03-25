import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Background from './components/Background';

function App() {


  return (
    <div className="App">
    <Header />
    
    <Footer/>
    </div>
  );
}

export default App;
