// For routes that can only be accessed by authenticated users
const GuestGuard = ({ children }: { children: React.ReactNode }) => {
  // if (token) {
  //   return <Redirect to="/" />;
  // }

  return children;
};

export default GuestGuard;
