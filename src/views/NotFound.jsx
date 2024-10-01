import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PizzaTrozo from "../assets/imgs/PizzaTrozo.png"
import Image from "react-bootstrap/Image";

const NotFound = () => {

    return (
      <>
        <div className="notFound">
          <h3>Pizzería Mamma Mia!</h3>
          <h6>Error 404 - Página no existente </h6>
          <Button variant="dark" className="m-3" type="button">
            <Image src={PizzaTrozo} />
            <Link to="/" className="text-white ms-3 text-decoration-none">
              Volver al inicio
            </Link>
          </Button>
        </div>
      </>
    );
};

export default NotFound;
