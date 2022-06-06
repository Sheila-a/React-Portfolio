import Intro from "./Components/Intro/intro";
import About from "./Components/About/about";
import ProductList from "./Components/Product_list/product_list";
import Skills from "./Components/My skills/skills";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <ProductList />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
