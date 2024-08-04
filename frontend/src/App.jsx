import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Books from "./pages/Books";
import AddBooks from "./pages/AddBooks";
import UpdateBooks from "./pages/UpdateBooks";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/" element={<AddBooks />} />
          <Route path="/" element={<UpdateBooks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
