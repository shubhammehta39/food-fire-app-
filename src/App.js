import './index.css';
import React from 'react';
// import ReactDOM from 'react-dom/client';

// import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import RestaurantMenu from './Components/RestaurantMenu';
// import Navbar from './Components/Navbar';
// import Body from "./Components/Body";

import Header from "./Components/Header";
// import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      {/* <h1>hi lets start</h1> */}
      {/* <Navbar/> */}
      <Header />
      {/* <Outlet /> */}
      {/* <Footer /> */}
    </div>
  );
};
//create browser  router mei array jaata hai , children saare outlet mei aate hai 
// const AppRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Body />
//       },
//       {
//         path: "/about",
//         element: <About />
//       },
//       {
//         path: "/contact",
//         element: <Contact />
//       },
//       {
//         path: "/restaurant/:id",
//         element: <RestaurantMenu />
//       },
//     ],
//   },
// ]);


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={AppRouter} />); // render RouterProvider and use router as props and pass value appRouter


export default App;
