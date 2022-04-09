// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>Hello World.</p>
//       </header>
//     </div>
//   );
// }

// export default App;

import Intro from "./Components/Intro/intro";
import About from "./Components/About/about";
import ProductList from "./Components/Product_list/product_list";
import Contact from "./Components/Contact/contact";
import Toggle from "./Components/Toggle/toggle";

const App = () => {
  return (
    <div>
      <Intro />
      <About />
      <ProductList />
      <Contact />
      <Toggle />
    </div>
  );
};

export default App;
