import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Layout from "./pages/layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
