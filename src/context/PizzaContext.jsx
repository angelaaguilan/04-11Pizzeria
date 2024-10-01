import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Crear el contexto para la pizzas
export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizza, setPizza] = useState([]);

  const { id } = useParams();

  // Conectar y consumir la API
  const url = `http://localhost:5000/api/pizzas/${id}`;

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPizza(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <PizzaContext.Provider
      value={{
        pizza,
        setPizza,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;
