import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Sachin from "./components/Sachin.js";
import Dhoni from "./components/Dhoni.js";
import Kohli from "./components/Kohli.js";
import Rohit from "./components/Rohit.js";
import NotFound from "./components/NotFound.js";
import Car from "./components/Car.js";
import CarModel from "./components/CarModel.js";
import CarColor from "./components/CarColor.js";
import CarPrice from "./components/CarPrice.js";
import User from "./components/User.js";


function App() {
  return (
    <>
      {/* <h1>App Component</h1> */}
      {/* <Header /> */}
      <Routes>

        {/* <Route path="/user" element={<User />} />
        /user means https://localhost:3000/user */}

{/* //! Using PARAMS how to pass a param ANYONE from profile userNames, userIds etc. */}
        {/* <Route path="/user/:userId" element={<User />} /> */}
        {/* /user means https://localhost:3000/user */}

{/* //! Using PARAMS how to pass MULTIPLE params profile userNames, userIds etc. */}
        <Route path="/user/:userId/:userName/:userCountry" element={<User />} />
        {/* /user means https://localhost:3000/user */}

{/* //! Simple Routing */}
        <Route path="/" element={<Header />} />
        {/* / means https://localhost:3000, then display Header component*/}
        
        <Route path="/sachin" element={<Sachin />} />
        {/* /sachin means https://localhost:3000/sachin */}
        
        <Route path="/dhoni" element={<Dhoni />} />
        {/* /dhoni means https://localhost:3000/dhoni */}
        
        <Route path="/kohli" element={<Kohli />} />
        {/* /kohli means https://localhost:3000/kohli */}
        
        <Route path="/rohit" element={<Rohit />} />
        {/* /rohit means https://localhost:3000/rohit */}
 {/* //! Not Found 404 Error Page - Handle ERROR CASES  */}
        <Route path="*" element={<NotFound />} />
        {/* * means https://localhost:3000/something_unknown */}

{/*//!Nested Routes */}

        <Route path="/car" element={<Car />} >
          {/* /car means https://localhost:3000/car */}
            <Route path="model" element={<CarModel />} />
            {/* /car/model means https://localhost:3000/car/model */}

            <Route path="color" element={<CarColor />} />
            {/* /car/color means https://localhost:3000/car/color */}

            <Route path="price" element={<CarPrice />} />
            {/* /car/price means https://localhost:3000/car/price */}
        </Route>
      </Routes>
      
    </>
  );
}

export default App;
