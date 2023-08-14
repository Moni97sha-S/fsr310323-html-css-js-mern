import "./App.css";
import Header from "./components/Header.js";
import Category from "./components/Category.js";
import Cards from "./components/Cards.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Category />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
