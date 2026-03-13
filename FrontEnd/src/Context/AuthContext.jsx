import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";


axios.defaults.withCredentials = true;
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser]       = useState(null);
  const [token, setToken]     = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // if (token) {
      // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios.get("/api/auth/me")
        .then(({ data }) => setUser(data.user))
        // .catch(logout)
        .catch(() => setUser(null)) // If no cookie or expired, user is null
        .finally(() => setLoading(false));
    // } else {
    //   delete axios.defaults.headers.common["Authorization"];
    //   setLoading(false);
    // }
  }, []);

  const persist = (data) => {
    // localStorage.setItem("token", data.token);
    // setToken(data.token);
    setUser(data.user);
  };

  const register = async (name, email, password) => {
    const { data } = await axios.post("/api/auth/register", { name, email, password });
    persist(data);
  };

  const login = async (email, password) => {
    const { data } = await axios.post("/api/auth/login", { email, password });
    persist(data);
  };

  const logout = async () => {
  try {
    await axios.post("/api/auth/logout"); // Hits your backend logout route
  } catch (err) {
    console.error("Logout failed", err);
  } finally {
    setUser(null); // Clear local state regardless
  }
};

  return (
    <AuthContext.Provider value={{ user, token, loading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);