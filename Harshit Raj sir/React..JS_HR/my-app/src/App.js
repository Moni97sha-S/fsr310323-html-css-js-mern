import User from './components/User.js';
function App() {
  return (
    <div>
      <User
        id="x1"
        name="Abhi"
        salary={1000}
        country="India"
        info={[10, 20, 30]}
      />
      <User
        id={71}
        name="Moni"
        salary={2000}
        country="US"
        info={[10, 20, 30]}
      />
      <User
        id="x2"
        name="xyzzz"
        gender= "other"
        salary={2000}
        country="US"
        info={[10, 20, 30]}
      />
    </div>
  );
}

export default App;
