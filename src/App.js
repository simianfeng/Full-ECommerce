import React from 'react';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import {BrowserRouter, Route, Link} from 'react-router-dom';

function App() {
  const openMenu=()=>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu=()=>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
            <header className="header">
            <div className ="brand">
                <button className="sidebar-open-button" onClick={openMenu}>
                    &#9776;
                </button>
            <Link to="/">Amazona</Link>
            </div>
        <div className="header-links">
            <a href="cart.html">Cart </a>
            <a href="signin.html">Sign-in</a>
        </div>
            </header>
            <aside className='sidebar'>
                <h3>Shopping categories</h3>
                <button className="sidebar-close-button" onClick={closeMenu}>x</button>

                <ul>
                    <li>
                        <a href="index.html">Pants</a>
                    </li>
                    <li>
                        <a href="index.html">Shirts</a>
                    </li>
                </ul>
            </aside>
            <main className="main">
                <div className="content">
                  <Route path="/" component={HomeScreen} exact={true}/>
                  <Route path="/products/:id" component={ProductScreen}/>
                </div> 
            </main>
            <footer className="footer">All rights reserved</footer>
        </div>
        </BrowserRouter>
  );
}

export default App;
