import ProtectedLayout from 'layouts/ProtectedLayout';
import UnProtectedLayout from 'layouts/UnProtectedLayout';
import SignIn from 'pages/auth/SignIn';
import SignUp from 'pages/auth/SignUp';
import Home from 'pages/Home';
import Error from 'pages/Error';
import { Route, Routes as ReactRouterDomRoutes } from 'react-router-dom';

const Routes = () => {
  return (
    <ReactRouterDomRoutes>
      <Route path="/" element={<ProtectedLayout />}>
        <Route path="home" element={<Home />} />
      </Route>
      <Route path="/auth" element={<UnProtectedLayout />}>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>

      <Route path="*" element={<Error />} />
    </ReactRouterDomRoutes>
  );
};

export default Routes;
