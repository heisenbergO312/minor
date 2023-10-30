import React from "react"
import "./styles.css"

export default function Home(){
    return(
        <div>
    <nav class="navbar navbar-expand-lg navbar-dark gradient-background container-fluid">
      <a class="navbar-brand" href="">Insure</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="">
          Claims
        </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">
            Resources
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">
            Support
          </a>
        </li>
      </ul>
      </div>
     </nav> 
     <section class="white-section">
       <h1>Hi</h1>
     </section>
     <section class="colored-section">
         <h1>Hi</h1>
     </section>
        </div>
    );
};