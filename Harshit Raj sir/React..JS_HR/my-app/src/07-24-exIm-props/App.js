import ProductCard from "./ProductCard";
import User from "./User";

// Default Export for ProductCard child
function App() {
  let url = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=799&q=80";
  let title = "Product from parent to child component";
  let description = "Lorem ipsum dolor sit amet, consectetur adipis";

  return (
    <div>
      <ProductCard />
      <ProductCard u={url} t={title} d={description}/>
      <ProductCard u={url} t={title} d={description}/>
    </div>
  );
}

//Users App1
export function App1(){
  let yourName = "Monishaaaa";
  let yourCountry = "Indiaaaaa";
  // let yourAge = "25";

  let s2 = {
    color: "red", 
    fontSize: "36",
    fontWeight: "bold",
    border: "1px dashed red",
    backgroundColor: "lightblue"
  };

  return(
    <div>
      <User />
      <User name={yourName} country={yourCountry} age="25"/>
      {/* Providing Style as INLINE to JSX Tags. */}
      <p style={{color: "red", fontSize:"36"}}>Lorem ipsum</p>
      {/* Providing Style as Object to JSX Tags. */}
      <p style={s2}>Lorem ipsum color</p>
    </div>
  );
}

// Named Export Examples App2() & App3()
export function App2(){
  const obj = {
    name: "Mona",
    gender: "female"
  }
  return (
    <div>
      <h1>Monisha</h1>
      <h1>{obj.name}</h1>
      <p>{obj.gender}</p>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  );
}

// To open window to Javascript inside {name} named export
export function App3(){
  let name = "Mythili";
  let country = "India";
  let salary = 500000;
  function f1(){
    console.log("Line 53 from App.js ==> Clicked");
  }
  return (
    <div>
      <h1>
        {name}<br />
        {country}<br />
        {salary}
      </h1>
      <button onClick={f1}>Click Me</button>
      <p>Lorem epsum dolor sit amet.</p>
    </div>
  );
}

export default App;
