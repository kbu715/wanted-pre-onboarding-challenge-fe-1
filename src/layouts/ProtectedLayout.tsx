import { useAuth } from 'contexts/AuthContext';
import { Navigate, NavLink, Outlet } from 'react-router-dom';

const ProtectedLayout = () => {
  const ctx = useAuth();

  if (!ctx || !ctx.user) {
    return <Navigate to="/auth/sign-in" />;
  }

  return (
    <div>
      <nav>
        <NavLink to="/home" className={({ isActive }) => (isActive ? 'nav-active' : undefined)}>
          Home
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default ProtectedLayout;
