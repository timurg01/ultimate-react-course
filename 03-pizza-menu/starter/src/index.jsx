import React from "react";
import ReactDOM from "react-dom/client";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

//Header component
function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}

//Menu Component
function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

//Footer component
function Footer() {
  //   return React.createElement("footer", null, "We're currently open!");
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  if (isOpen) alert("We're currently open!");
  else alert("Sorry we're closed");

  return (
    <footer> {new Date().toLocaleTimeString()}. We're currently open!</footer>
  );
}

//create components by creating functions. IT must return an element
//Single pizza component
function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="Image of Spinaci Pizza" />
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

//NOTES
/* 
////////////REACT COMPONENTS/////////////////
- react applications are entirely made out of componenets which then can be said that components are the building blocks of React
- it is a piece of UI that has its own data, JS logic, and appearance
- We build complex UIs by building multiple components and the combining them
- Components can be reused, nested inside each other, and pass data between them
-Component Trees show a hierarchy of all components and shows how each component relate to one another

///////////WHAT IS JSX//////////////////////////
- A declarative syntax to describe what components look like and how they work - all about appearance
- Each component MUST return one block of JSX
- It is an extension of Javascript that allows us to embed JS, CSS, and React components into HTML
- Using BABEL, each JSX element is converted to a React.createElement function call
-Imperative Approach: Vaniall JS
    -Manual DOM element selections and DOM traversing
    -Provide Step-by-step DOM mutations
    -Tell the browser "How to do things"
=Declarative Approach:
    -Describe what UI should look like using JSX, based on current data(state)
    -React is an abstraction away from DOM: we never touch the DOM
    -Instead, we think of the UI as a reflection of the current data
    -Use JSX to tell React WHAT WE WANT TO SEE, NOT How to do it
*/
