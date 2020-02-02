import React from 'react';
import './App.css';
import HomePage from './components/homepage'
import Header from './components/header'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
        <Header />
        <HomePage />
        <Footer />
    </div>
  );
}

export default App;
