import { useAuth } from "contexts/AuthContext";
import { NavLink } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";

const UnProtectedLayout = () => {
  const ctx = useAuth();

  if (ctx && ctx.user) {
    return <Navigate to="/home" />;
  }

  return (
    <div>
      <nav>
          <NavLink
            to="/auth/sign-in"
            className={({ isActive }) =>
              isActive ? 'nav-active' : undefined
            }
          >
            Sign In
          </NavLink>
          <NavLink
            to="/auth/sign-up"
            className={({ isActive }) =>
              isActive ? 'nav-active' : undefined
            }
          >
            Sign Up
          </NavLink>
      </nav>
      <Outlet />
    </div>
  )
};

export default UnProtectedLayout;