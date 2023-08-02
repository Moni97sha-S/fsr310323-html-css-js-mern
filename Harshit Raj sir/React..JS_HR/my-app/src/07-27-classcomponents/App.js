import Product from "./Product.js"

function App() {
  const url = "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60";
  const title = "SmartWatch";
  const desc = "lorem ipsum";
  return (
    <div>
      <Product u = {url} t = {title} d = {desc} />
    </div>
  );
}

export default App;
