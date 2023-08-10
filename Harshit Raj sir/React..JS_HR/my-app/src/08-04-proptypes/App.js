import User from './components/User.js';
import Movie from './components/Movie.js';
import Demo from './components/Demo.js';

function App() {
  return (
    <div>
      <User
        id="x1"
        name="Abhishek"
        gender= "male"
        salary={1000}
        country="India"
        info={[10, 20, 30]}
      />

       <User
        id={71}
        name="Moni"
        gender= "female"
        salary={2000}
        country="US"
        info={[10, 20, 30]}
      />
      
      <User
        id="x2"
        name="Navya"
        gender= "other"
        salary={2000}
        country="US"
        info={[10, 20, 30]}
      />

      <Movie element={ <Demo /> } />
      {/* <Movie element={{ a : 10, b : 20 }} /> */}
      <Movie element="Monisha" />
    </div>
  );
}

export default App;
