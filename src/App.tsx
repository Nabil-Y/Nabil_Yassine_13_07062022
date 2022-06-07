import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import Error from "./pages/Error";

/**
 * App function
 * @returns main content of React App
 */
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
