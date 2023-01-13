import { useAuth } from 'contexts/AuthContext';
// import { NavLink } from 'react-router-dom';
import { Navigate, Outlet } from 'react-router-dom';

const UnProtectedLayout = () => {
  const ctx = useAuth();

  if (ctx && ctx.user) {
    return <Navigate to="/home" />;
  }

  return (
    <div>
      {/* <nav>
        <NavLink
          to="/auth/sign-in"
          className={({ isActive }) => (isActive ? 'nav-active' : undefined)}>
          Sign In
        </NavLink>
        <NavLink
          to="/auth/sign-up"
          className={({ isActive }) => (isActive ? 'nav-active' : undefined)}>
          Sign Up
        </NavLink>
      </nav> */}
      <section className="h-screen flex justify-center items-center">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full text-gray-800">
            <div className="md:w-12/12 lg:w-6/12 mb-12">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="Login Image"
              />
            </div>
            <div className="md:w-8/12 lg:w-6/12">{<Outlet />}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UnProtectedLayout;
