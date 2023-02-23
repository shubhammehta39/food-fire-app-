// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import './App.css';

// const App = () => {
//   return (
//     <div className="App">
//       <h1>hello</h1>
//     </div>
//   );
// }

// export default App;

import React from "react";
// import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
// import Footer from "../Components/Footer";

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// AppLayout component to render: Header, Body and Footer Component
const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      {/* <Footer /> */}
    </React.Fragment>
  );
};
export default App;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

