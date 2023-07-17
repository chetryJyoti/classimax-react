import React from "react";
import { Link,Routes, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
