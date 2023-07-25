import User from "./User";
import ProductCard from "./ProductCard";

function App() {
  let url = "site";
  let title = "Product Name";
  let description = "Lorem ipsum dolor sit amet, consectetur adipis";
  let yourName = "Monisha";
  let yourCountry = "India";
  // let yourAge = "25";
  let s2 = {
    color: "red", 
    fontSize: "36",
    fontWeight: "bold",
     border: "1px solid red"}
  return (
    <div>
      <Product />
      <User name = {yourName} country={yourCountry} age="25" />
      //! Providing Style as INLINE to JSX Tags.
      <p style={{color: "red", fontSize:"36"}}>Lorem ipsum</p>
      //* Providing Style as Object to JSX Tags.
      <p style={s2}>Lorem ipsum color</p>
    </div>
  );
}

// Named Export Examples App1() & App2()
export function App1(){
  return (
    <div>
      <h1>Monisha</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  );
}

// To open window to Javascript inside {name} named export
export function App2(){
  let name = "Mythili";
  let country = "Mythili";
  function f1(){
    console.log("Clicked");
  }
  return (
    <div>
      <h1>
        {name}
        {country}
      </h1>
      <button onClick={f1}>Click Me</button>
      <p>Lorem epsum dolor sit amet.</p>
    </div>
  );
}

export default App;
