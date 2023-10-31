import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './TextForm';

// let name = "Rahul";

function App() {
  return(
    <>
    <Navbar title = "Text Summarization Tool" aboutText="About this APP"/>
    <div className="container"></div>
    <TextForm/>
    </>
  );
}
export default App;
