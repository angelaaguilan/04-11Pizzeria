import { createContext, useEffect, useState } from "react";

// Crear el contexto para las pizzas
export const PizzasContext = createContext();

export const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);

  // Conectar y consumir la API
  const url = `http://localhost:5000/api/pizzas/`;

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPizzas(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <PizzasContext.Provider
      value={{
        pizzas,
        setPizzas,
      }}
    >
      {children}
    </PizzasContext.Provider>
  );
};

export default PizzasProvider;
