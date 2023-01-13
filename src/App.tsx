import "./App.css";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Error from "./pages/Error";
import AuthGuard from "./components/AuthGuard";

function App() {
  let activeClassName = "nav-active";
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Home
          </NavLink>
          <NavLink
            to="sign-in"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Sign In
          </NavLink>
          <NavLink
            to="sign-up"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Sign Up
          </NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<AuthGuard><Home /></AuthGuard>} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
