import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Products from "./components/home/Products";
import Team from "./components/home/Team";
import Navbar from "./components/navbar/Navbar";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Products />
      <Team />
      <Footer />
    </>
  );
}

export default App;
