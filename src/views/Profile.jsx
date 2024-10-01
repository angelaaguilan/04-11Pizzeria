import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";


const Profile = () => {
  const { email } = useContext(UserContext);
  const { token } = useContext(UserContext);
  const { profileEmail } = useContext(UserContext);
  const { user } = useContext(UserContext);
  const { logoutUser } = useContext(UserContext);
  const { logoutCard } = useContext(CardContext);

  const logout = () => {
    logoutUser();
    logoutCard();
  };

  
  useEffect(() => {
    if (token) {
      profileEmail(email, token);
    }
  },[]);

  
  return (
    <div className="container-fluid profile">
      <div className="row vw-100 justify-content-center align-items-center">
        <div className="col-3 bg-secondary p-5">
          <Form className="bg-light p-3">
            <Form.Label column="lg">Datos del usuario</Form.Label>
            <Form.Group className="my-3" as={Col} md="12">
              <Form.Label>Usuario:</Form.Label>
              <Form.Control
                placeholder="usuario.conectado@gmail.com"
                value={
                  user.email ? user.email : "Please login to view your profile."
                }
                disabled
              />
            </Form.Group>

            <Button
              type="button"
              className="my-3"
              variant="dark"
              onClick={logout}
            >
              <Link to="/" className="text-white text-decoration-none">
                Cerrar Sesión
              </Link>
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
