
import { useAuth } from "contexts/AuthContext";
import { Navigate } from "react-router-dom";

type AuthGuardType = {
  children: JSX.Element | null
}

const AuthGuard = ({ children }: AuthGuardType) => {
  const ctx = useAuth();
  if (!ctx || !ctx.user) {
    // user is not authenticated
    return <Navigate to="/sign-in" />;
  }
  return children;
};

export default AuthGuard;