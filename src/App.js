import React from "react";
import "./style.css";
import{useState} from "react";

export default function App() {
  
let date = new Date().toDateString();




  return (
    <div>
      <h2 className="calendar"> Mini Calendar</h2>
<h1 className="date">{date}</h1>

    </div>
  );
}
