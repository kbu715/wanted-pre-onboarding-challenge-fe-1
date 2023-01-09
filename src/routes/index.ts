import AuthGuard from "../components/AuthGuard";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import Main from "../pages/Home";
import GuestGuard from "../components/GuestGuard";

const authRoutes = [
  {
    id: "로그인",
    path: "/auth/sign-in",
    guard: GuestGuard,
    component: SignIn,
  },
  {
    id: "회원가입",
    path: "/auth/sign-up",
    guard: GuestGuard,
    component: SignUp,
  },
];

const mainRoutes = [
  {
    id: "투두리스트",
    path: "/",
    guard: AuthGuard,
    component: Main,
  },
];

export { authRoutes, mainRoutes };
