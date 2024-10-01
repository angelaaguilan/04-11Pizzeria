import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/UserContext.jsx';
import { CardProvider } from './context/CardContext.jsx';
import { PizzasProvider } from './context/PizzasContext.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <CardProvider>
        <PizzasProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PizzasProvider>
      </CardProvider>
    </UserProvider>
  </React.StrictMode>
);
