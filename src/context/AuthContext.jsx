import React, { createContext, useContext, useState } from "react";
import bcryptjs from "bcryptjs";
import { toast } from "react-hot-toast";
const AuthContext = createContext();
function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("current_user")) || null
  );
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") || false
  );
  const handleDarkMode = () => {
    setDarkMode((prev) => !prev);
    localStorage.setItem("darkMode", darkMode);
  };
  const login = async (inputs) => {
    const bookaveUsers =
      JSON.parse(localStorage.getItem("bookave_users")) || [];
    const foundUser = bookaveUsers?.find(
      (user) =>
        user?.username === inputs.username.toLowerCase() ||
        user?.email === inputs.username.toLowerCase()
    );
    if (foundUser) {
      const matchPassword = await bcryptjs.compare(
        inputs.password,
        foundUser.password
      );
      if (matchPassword) {
        toast.success(`welcome back ${foundUser.fullname}`, { id: "70" });
        setCurrentUser(foundUser);
        localStorage.setItem("current_user", JSON.stringify(foundUser));
      } else {
        toast.error(`you have supplied an invalid credential`);
      }

      // toast.error(`Sorry, user already exist`, { id: "70" });
    } else {
      toast.error(`no user found`, { id: "70" });
    }
  };

  const register = (inputs) => {
    const bookaveUsers =
      JSON.parse(localStorage.getItem("bookave_users")) || [];
    const foundUser = bookaveUsers?.filter(
      (user) =>
        user?.username === inputs.username.toLowerCase() ||
        user?.email === inputs.email.toLowerCase()
    );
    if (foundUser.length > 0) {
      toast.error(`Sorry, user already exist`, { id: "70" });
    } else {
      const salt = bcryptjs.genSaltSync(10);
      const hashPassword = bcryptjs.hashSync(inputs.password, salt);
      const updatedUsers = [
        ...bookaveUsers,
        {
          ...inputs,
          username: inputs.username.toLowerCase(),
          email: inputs.email.toLowerCase(),
          password: hashPassword,
          createdAt: Date.now(),
        },
      ];
      localStorage.setItem("bookave_users", JSON.stringify(updatedUsers));
      toast.success(`Welcome to BookAve ${inputs.fullname}`, { id: "70" });
    }
  };

  return (
    <AuthContext.Provider
      value={{ currentUser, login, register, darkMode, handleDarkMode }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
