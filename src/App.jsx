import React from 'react';
import './App.css';
import CalculadoraIMC from './components/CalculadoraIMC';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <CalculadoraIMC />
      </main>
      <Footer />
    </div>
  );
};

export default App;