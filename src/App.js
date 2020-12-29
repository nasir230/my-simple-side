import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Contac from './Contac';
import Header from './Header';
import Footer from './Footer';
import Services from './Services';
import {  Switch, Route } from 'react-router-dom';
const App =()=> {
  return (
   <>
    <Header/>
      
     
<Switch>

<Route exact path="/" component={Home}/>
<Route exact path="/service" component={Services}/>
<Route exact path="/about-us" component={About}/>
<Route exact path="/contac-us" component={Contac}/>
</Switch>
   <Footer/>

</>
  );
}

export default App;
