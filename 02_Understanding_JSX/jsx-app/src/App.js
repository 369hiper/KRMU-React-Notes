import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

let name = "Mr. Peter";
function App() {
  const [greet, setGreet] = useState("Good morning");

  useEffect(() => {
    let hour = new Date().getHours();

    if(hour < 12){
      setGreet("Good morning");
    }
    else if(hour < 16){
      setGreet("Good afternoon");
    }
    else if(hour < 20){
      setGreet("Good evening");
    }
    else{
      setGreet("Good night");
    }
  }, []);

  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Blog</li>
        <li>Contact Us</li>
        <li>Our Vision</li>
      </nav>
      <h1>Welcome to my React App</h1>
      <div className="container">
        <h2>{greet} {name}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur maiores laboriosam quo dolorem soluta ipsa eos enim minima nobis, incidunt itaque dolore laudantium saepe quas dolores cupiditate adipisci vel totam labore exercitationem quaerat ut magni iusto autem. Minus quas, nulla adipisci magni dolorum ipsa architecto? Tempora dignissimos ex doloremque error?</p>
      </div>
    </>
  );
}

export default App;
