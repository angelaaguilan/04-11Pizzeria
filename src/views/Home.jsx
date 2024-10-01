import CardPizza from '../component/CardPizza.jsx'
import Row from "react-bootstrap/Row";
import { Container } from 'react-bootstrap';
import { useContext } from "react";
import { PizzasContext } from "../context/PizzasContext.jsx";
import { UserContext } from '../context/UserContext.jsx';


const Home = () => {

  // Datos de todas las pizza para genera las card de c/u (CONTEXT)
  const { pizzas } = useContext(PizzasContext);
  const { token } = useContext(UserContext);
  console.log(token);

  return (
    <>
      <Container fluid className=" py-3 mx-2">
        <Row xs={1} md={2} className="g-4">
          {pizzas.map((pizza) => (
            <CardPizza key={pizza.id} pizza={pizza} />
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;
