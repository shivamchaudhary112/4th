
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <ContactForm />
    </div>
  );
}

export default App;
