import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Error from "./pages/Error";
import UnProtectedLayout from "layouts/UnProtectedLayout";
import ProtectedLayout from "layouts/ProtectedLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProtectedLayout />}>
        <Route path="home" element={<Home />} />
      </Route>
      <Route path="/auth" element={<UnProtectedLayout />}>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
      </Route>
        
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
