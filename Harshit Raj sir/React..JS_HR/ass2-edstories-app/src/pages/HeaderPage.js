import React from "react";
import { Routes, Route } from "react-router-dom";

function HeaderPage() {
  return (
    <>
      <Routes>
        <Route path="https://www.edyoda.com/home" element={<Header />} />
      </Routes>
    </>
  );
}

export default HeaderPage;
