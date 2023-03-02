import './index.css';
import React from 'react';
// import ReactDOM  from 'react-dom/client';
import Header from "./Components/Header"
import Body from "./Components/Body"
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      {/* <h1>hi lets start</h1> */}
      <Header />
      <Body/>
      <Footer />
    </div>
  );
}

export default App;
