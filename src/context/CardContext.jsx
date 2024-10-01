import { createContext, useState } from "react";

// Crear el contexto para la pizzas
export const CardContext = createContext("");

export const CardProvider = ({ children }) => {
  const [total, setTotal] = useState(0);
  const [listaPizzas, setListaPizzas] = useState([]);

  const enviaCart = async (token) => {
    try {
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          cart: `${listaPizzas}`,
        }),
      });
    
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      if (data.error) {
        alert(data.error);
      } else {
        alert("Compra realizada con éxito!");
        setListaPizzas([]);
        setTotal(0);
      }
    } catch (error) {
      console.error("Error en la solicictud:", error);
    }
  };

  const logoutCard = () => {
    setTotal(0);
    setListaPizzas([]);
  };


    return (
      <CardContext.Provider
        value={{
          total,
          setTotal,
          listaPizzas,
          setListaPizzas,
          enviaCart,
          logoutCard
        }}
      >
        {children}
      </CardContext.Provider>
    );
};

export default CardProvider;
