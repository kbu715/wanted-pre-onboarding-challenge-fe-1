// For routes that can only be accessed by authenticated users
const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  // if (!token) {
  //   return <Redirect to="/auth/sign-in" />;
  // }

  return children;
};

export default AuthGuard;
