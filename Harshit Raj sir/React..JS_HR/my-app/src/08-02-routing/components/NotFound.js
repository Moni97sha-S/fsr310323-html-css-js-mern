import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  // Example for useEffect
  const [name, setName] = useState("Moni");
  // useEffect(() => {
    
  // }, []);

  // Example for useNavigate along with useEffect
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000)
  })
  return (
    <>
      <h1>Oops! URL is Wrong.</h1>
      {setTimeout(() => {
        setName("Mythili");
      }, 500)}
      <h1>{name}</h1>
    </>
  );
}

