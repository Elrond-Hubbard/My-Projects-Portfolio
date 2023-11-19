import { useState } from "react";

import Header from "./components/Header"
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer"

import "./App.css";

function App() {

  return (
    <>
      <Header />
      <main>
        <Outlet id="content" />
      </main>
      <Footer />
    </>
  );
}

export default App;
