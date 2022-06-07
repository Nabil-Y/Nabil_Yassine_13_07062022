import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

/**
 * App function
 * @returns main content of React App
 */
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
