import { createContext, useState } from "react";

// Crear contexto para el token
export const UserContext = createContext("");

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState("");

  const login = async (email, password) => {  
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password
      }),
    });
  
    const data = await response.json();
    if (data.error) {
      alert(data.error);
      setToken(false);
    } else {
      setToken(data.token);
      setEmail(data.email);
      alert("Authentication successful!");
    }
  }

  const register = async (email, password) => {
    const response = await fetch("http://localhost:5000/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password
    }),
    });

    const data = await response.json();
    if (data.error) {
      alert(data.error);
      setToken(false);
    } else {
      setToken(data.token);
      alert(`Usuario registrado con exito`);
    }
   };
  
  
  const profileEmail = async (email, token) => {
    const response = await fetch("http://localhost:5000/api/auth/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      },
    })

    const data = await response.json();

    if (data.error) {
      alert(data.error);
      setToken(false);
      setEmail(null)
    } else {
      setUser(data);
    }
  };

  
  const logoutUser = () => {
    setToken(false);
    setEmail('');
    setPassword('');
    setUser('');
  };

  

    return (
      <UserContext.Provider
        value={{
          token,
          setToken,
          email,
          setEmail,
          password,
          setPassword,
          login,
          register,
          logoutUser,
          profileEmail,
          user,
          setUser,
        }}
      >
        {children}
      </UserContext.Provider>
    );
};

export default UserProvider;
