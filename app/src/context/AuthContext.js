// ** React Imports
import { createContext, useEffect, useState } from "react";
// ** Next Import
import { useRouter } from "next/router";
// ** Axios
import authConfig from "@/configs/auth";

// ** Defaults
const defaultProvider = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  isInitialized: false,
  setIsInitialized: () => Boolean,
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
  initAuth: () => Promise.resolve(),
};

const AuthContext = createContext(defaultProvider);

const AuthProvider = ({ children }) => {
  // ** States
  const [user, setUser] = useState(defaultProvider.user);
  const [loading, setLoading] = useState(defaultProvider.loading);
  const [isInitialized, setIsInitialized] = useState(
    defaultProvider.isInitialized
  );

  // ** Hooks
  const router = useRouter();

  const deleteStorage = () => {
    setUser(null);
    setLoading(false);
    setIsInitialized(false);
    localStorage.removeItem("user");
    localStorage.removeItem("jwt-token");

    const firstPath = router.pathname.split('/')[1]
    if (firstPath != 'login') router.replace('/login')
  };

  const login = async (data) => {
    await fetch("http://localhost/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          res.json().then((body) => {
            try {
                setUser(body.user);
                router.replace("/");
            } catch (error) {
              console.log("Fetch error:", error);
            }
          });
        } else {
          console.log("Fetch error:", res);
        }
      })
      .catch((err) => {
        console.log("Fetch error:", err);
        logout();
      });
  };

  const handleLogout = (user) => {
    fetch("http://localhost/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
    deleteStorage();
      }
    });
  };


  const initAuth = async () => {
    setIsInitialized(true);
    const userData = window.localStorage.getItem(authConfig.userDataName);

    if (userData) {
      setUser(userData);
    } else {
      const user = { id: 1, name: "John Doe", role: "user" };
      setUser(user);
    }

    setLoading(false);
  };

  const handleRegister = async ( params ) => {
    const { email, password,name,surname,gender,appeal } = params;
    const response = await fetch("http://localhost/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
    const data = await response.json();
    if (response.status === 200) {
      login({ email, password });
    } else {
      console.log("Fetch error:", data);
    }
  };

  useEffect(() => {
    initAuth();
  }, []);

  const values = {
    user,
    setUser,
    login,
    logout: handleLogout,
    register: handleRegister,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
