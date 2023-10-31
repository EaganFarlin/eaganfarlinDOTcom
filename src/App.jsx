import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import Information from "./components/Information";
import HireMe from "./components/HireMe";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen px-[20vw] py-8 text-gray-50 bg-gray-950">
      <Navbar />
      <Header />
      <Information />
      <ProjectList />
      <HireMe />
      <Footer />
    </div>
  );
};

export default App;
