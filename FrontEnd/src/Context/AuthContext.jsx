import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser]       = useState(null);
  const [loading, setLoading] = useState(true);

  // 1. Set up the global header immediately if we have a token saved
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${savedToken}`;
    }
  }, []);

  // 2. Fetch user on mount
  useEffect(() => {
    const fetchUser = async () => {
      const savedToken = localStorage.getItem("token");
      if (!savedToken) {
        setLoading(false);
        return;
      }

      try {
        // Axios will now automatically include the Bearer header
        const { data } = await axios.get("/api/auth/me");
        setUser(data.user);
      } catch (err) {
        setUser(null);
        localStorage.removeItem("token");
      } finally {
        setLoading(false);
      }
    };
    
    fetchUser();
  }, []);

  const register = async (name, email, password) => {
    const { data } = await axios.post("/api/auth/register", { name, email, password });
    // Save to memory and set global header
    localStorage.setItem("token", data.token);
    axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    setUser(data.user);
  };

  const login = async (email, password) => {
    const { data } = await axios.post("/api/auth/login", { email, password });
    // Save to memory and set global header
    localStorage.setItem("token", data.token);
    axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    setUser(data.user);
  };

  const logout = async () => {
    try {
      await axios.get("/api/auth/logout"); 
    } catch (err) {
      console.error("Logout failed", err);
    } finally {
      // Wipe everything clean
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
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