import './styles/App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
      {/* <h1>App Component</h1> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/" element={<Page />} />
        <Route path="/" element={<Page />} />
        <Route path="/" element={<Page />} /> */}
      </Routes>
    </div>
  );
}

export default App;
