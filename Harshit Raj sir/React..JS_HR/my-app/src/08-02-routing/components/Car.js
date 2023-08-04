import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Car() {
  return (
    <>
        <h1>Car Website Page</h1>
        <ul>
            <li>
                <Link to="/car/model">Model</Link>
            </li>
            <li>
                <Link to="/car/color">Color</Link>
            </li>
            <li>
                <Link to="/car/price">Price</Link>
            </li>
        </ul>

        {/* //TODO: IMPORTANT To Add & import 'Outlet'in Nest Routes to render in same page. Otherwise only path will change. */}
        <Outlet />
    </>
  );
}

export default Car;