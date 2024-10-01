import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import PizzaTrozo from "../assets/imgs/PizzaTrozo.png";
import { useContext } from "react";
import { Button } from 'react-bootstrap';
import carroCompra from "../assets/imgs/carroCompra.png";
import { Link } from "react-router-dom";
import { CardContext } from "../context/CardContext";
import { PizzaContext } from "../context/PizzaContext";

export const Pizza = () => {
  const { pizza } = useContext(PizzaContext);

  //  genera la lista de pizzas en el carrito
  const { listaPizzas, setListaPizzas } = useContext(CardContext);

  // el Total de la lista de pizzas a pagar
  const { total, setTotal } = useContext(CardContext);


  const styleCard = {
    width: "25%",
    height: "auto",
    margin: "40px 10px 8px 20px",
  };

  const ingredientes = [pizza.ingredients].join(", ");  
  
  // Agrega y suma las pizzas a la lista
  const agregaPizza = (pizza) => {
    const found = listaPizzas.findIndex((Lista) => Lista.id === pizza.id);
    if (found < 0) {
      // primera carga de cada pizza seleccionada a la lista y total
      setTotal(total + pizza.price);
      setListaPizzas([
        ...listaPizzas,
        {
          id: pizza.id,
          name: pizza.name,
          price: pizza.price,
          cantidad: 1,
        },
      ]);
    } else {
      alert("La pizza ya se encuentra en el carrito de compras");
    }
  };

  return (
    <>
      <Card style={styleCard} key={pizza.id} className="mx-auto my-5">
        <Card.Header style={{ height: "auto" }}>
          <Card.Img variant="top" src={pizza.img} style={{ width: "100%" }} />
          <Card.Title className="mt-3">Pizza {pizza.name}</Card.Title>
          <Card.Text>{pizza.desc}</Card.Text>
        </Card.Header>

        <Card.Body className="text-center">
          <Card.Text className="h5 mb-2">
            <Image src={PizzaTrozo} /> Ingredientes:
          </Card.Text>
          <Card.Text>{ingredientes}</Card.Text>
        </Card.Body>

        <Card.Footer className="p-4 text-center">
          <Card.Text className="h4 mb-4">
            {" "}
            Precio: ${Intl.NumberFormat("de-DE").format(pizza.price)}
          </Card.Text>

          <Button
            type="button"
            variant="dark"
            className="mx-3"
            onClick={() => agregaPizza(pizza)}
          >
            <Link to="/cart" className="text-white ms-3 text-decoration-none">
              Añadir
            </Link>{" "}
            <Image src={carroCompra} />
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Pizza
