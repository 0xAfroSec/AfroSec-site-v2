// src/App.tsx
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import Home from "./pages/home/Home";
import Layout from "./pages/layout/Layout";
import Contact from "./pages/Contact/Contact";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Adjust the time as necessary

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            {/* Add other routes here */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
