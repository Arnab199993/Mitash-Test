import { lazy } from "react";
import PagePath from "./PagePath";

const AllPath = () => {
  const LoginPage = lazy(() => import("../Page/Login/LoginPage"));
  const ProfilePage = lazy(() => import("../Page/Profile/ProfilePage"));
  const RegisterPage = lazy(() => import("../Page/Register/RegisterPage"));
  const rootPath: PagePath[] = [];
  rootPath.push(new PagePath("Profile", "/profile", ProfilePage));
  rootPath.push(new PagePath("Login", "/login", LoginPage));
  rootPath.push(new PagePath("Sign Up", "/sign-up", RegisterPage));

  const newList: PagePath[] = rootPath;
  return newList;
};

export default AllPath;
