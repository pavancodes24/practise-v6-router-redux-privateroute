import { Link, Route, Routes } from "react-router-dom";
import { Cart } from "./components/Cart";
import { Counter } from "./components/Counter";
import { Profile } from "./components/Profile";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div>
        <Link to="/cart">
          <button>Cart</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/profile">
          <button>profile</button>
        </Link>
      </div>
      <h1>Redux:</h1>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}
