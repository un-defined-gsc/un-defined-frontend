// ** React Imports
import { createContext, useEffect, useState } from "react";
// ** Next Import
import { useRouter } from "next/router";
// ** Axios
import authConfig from "@/configs/auth";
import { showToast } from "@/utils/showToast";
import axios from "axios";

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
    localStorage.removeItem(authConfig.userDataName);
    localStorage.removeItem("jwt-token");

    const firstPath = router.pathname.split("/")[1];
    if (firstPath != "login") router.push("/login");
  };


  const logout = () => {
    axios({
      url: authConfig.logout,
      method: "GET",
    }).then((res) => {
      if (res.status === 200) {
        showToast("dismiss")
        showToast("success", "Logged out successfully")
      }
      deleteStorage();
    })
      .catch((error) => {
        // if (error) showToast("error", error.response.data.message)
        deleteStorage();
      })
  };

  const initAuth = async () => {
    setIsInitialized(true);
    let userData = window.localStorage.getItem(authConfig.userDataName);
    userData = userData ? atob(userData) : null;
    userData = userData ? JSON.parse(userData) : null;

    try {
      const response = await axios({
        url: authConfig.account,
        method: "GET",
      })

      if (userData.email == response.data.data.user.email) {
        window.localStorage.setItem(authConfig.userDataName, btoa(JSON.stringify(response.data.data.user)))
        setUser({ ...response.data.data.user, role: 'user' });
      } else {
        window.localStorage.setItem(authConfig.userDataName, btoa(JSON.stringify(response.data.data.user)))
        setUser({ ...response.data.data.user, role: 'user' });
      }
    } catch (error) {
      deleteStorage();
      const firstPath = router.pathname.split("/")[1];

      if (firstPath != "login" || firstPath != "register") {
        showToast("dismiss");
        showToast("error", error?.response?.data?.message);
      }
    }

    setLoading(false);
  };

  const handleLogin = async (values) => {
    await axios({
      url: authConfig.login,
      method: "POST",
      data: values,
    })
      .then(async (response) => {
        if (response.status === 200) {
          let userData = response.data.data // get user data from api
          let userDataNew = JSON.stringify(userData) // convert user data to string
          userDataNew = btoa(userDataNew) // encode user data with base64

          localStorage.setItem(authConfig.userDataName, userDataNew) // set user data to local storage
          setUser({ ...userData, role: 'user' }) // set user data to state

          showToast("dismiss") // dismiss toast
          showToast("success", "Logged in successfully") // show success message
          router.push("/social") // locate to path from api or /portal path
        } else showToast('error', "Login failed. Please try again.") // show error message
      })
      .catch(async (error) => {
        if (error) showToast('error', error.response.data.message)
        logout()
      })
  };

  const handleRegister = async (values) => {
    try {
      const response = await axios({
        url: authConfig.register,
        method: "POST",
        data: values,
      });

      if (response.status === 200) {
        showToast("dismiss")
        showToast("success", "Account created successfully")

        router.push("/login");
      } else {
        showToast("dismiss")
        showToast("error", "Account creation failed. Please try again.")
        // console.log("Fetch error:", data);
      }
    } catch (error) {
      showToast("dismiss")
      showToast("error", "Account creation failed. Please try again.")
    }
  };

  useEffect(() => {
    initAuth();
  }, []);

  const values = {
    user,
    setUser,
    login: handleLogin,
    logout,
    register: handleRegister,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
