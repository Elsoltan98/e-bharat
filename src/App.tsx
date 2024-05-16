import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Cart from "./pages/Cart";
import Dashboard from "./pages/Admin/dashboard";
import NoPage from "./pages/NoPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
