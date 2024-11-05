import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Featuers from './Components/Featuers/Featuers';
import Docs from './Components/Docs/Docs';
import Next from './Components/STNEXT/Next';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div>
      <NavBar />
      <section id="home"><Home /></section>
      <section id="features"><Featuers /></section>
      <section id="docs"><Docs /></section>
      <section id="pricing"><Next /></section>
      <section id="enterprise"><Footer /></section>
    </div>
  );
};

export default App;
