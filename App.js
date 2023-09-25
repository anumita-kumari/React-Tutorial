 import React from "react";
 import ReactDOM from "react-dom/client";
//React Element
const jsxHeading= <h1 id="heading">Namaste React</h1>
 

//React Component
const Title = ()=> <h1> Namaste React using jSX </h1>;
const number = 10000;

const Heading = () => (
        <div className="container">
                <h2>{number}</h2>
                {Title()}
                <Title></Title>
                <h1>Namaste React using Functional Element </h1>
        </div>
)
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading></Heading>); 

