import News from "./components/News.js";
import LifecycleNextHalf from "./components/update&unmount-1.js";
import NewsComponent from "./components/NewsComponent.js";

function App() {
  return (
    <div>
      <LifecycleNextHalf />
      <News />
      <br />
      <NewsComponent />
    </div>
  );
}

export default App;
