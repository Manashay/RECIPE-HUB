import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext(null);

const axiosConfig = {
  withCredentials: true 
};


export const AuthProvider = ({ children }) => {
  const [user, setUser]       = useState(null);
  const [loading, setLoading] = useState(true);

  // Rehydrate session from HttpOnly cookie on every mount/refresh
  useEffect(() => {
    axios.get("/api/auth/me", axiosConfig)
      .then(({ data }) => setUser(data.user))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  const register = async (name, email, password) => {
    const { data } = await axios.post("/api/auth/register", { name, email, password }, axiosConfig);
    setUser(data.user);
  };

  const login = async (email, password) => {
    const { data } = await axios.post("/api/auth/login", { email, password }, axiosConfig);
    setUser(data.user);
  };

  const logout = async () => {
    try {
      await axios.get("/api/auth/logout", axiosConfig); // clears cookie server-side
    } catch (err) {
      console.error("Logout failed", err);
    } finally {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);