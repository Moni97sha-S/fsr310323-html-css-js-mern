import React from "react";
import { Link } from 'react-router-dom'
function Header() {
    return (
        <>
            <h1>Header Component</h1>
            <ul>
                {/* <li>
                    <Link to="/user">User</Link>
                </li> */}
                <li>
                    <Link to="/user/:userId/:userName/:userCountry">User</Link>
                </li>
                <li>
                    <Link to="/sachin">Sachin</Link>
                </li>
                <li>
                    <Link to="/dhoni">Dhoni</Link>
                </li>
                <li>
                    <Link to="/kohli">Kohli</Link>
                </li>
                <li>
                    <Link to="/rohit">Rohit</Link>
                </li>
                <li>
                    <Link to="/car">Car</Link>
                </li>
                {/* <li>
                    <a href="/sachin">Sachin</a>
                </li> */}
            </ul>
        </>
    );
}
export default Header;