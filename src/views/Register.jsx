import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { UserContext } from "../context/UserContext";


const Register = () => {
  const [validated, setValidated] = useState(false);
  const { email, setEmail } = useContext(UserContext);
  const { password, setPassword } = useContext(UserContext);
  const { token, setToken } = useContext(UserContext);
  const { register } = useContext(UserContext);


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const password2 = form.password.value;
    const passwordConfirm2 = form.passwordConfirm.value;
    
    if (form.checkValidity() === false) {
      alert("Error - Todos los campos son obligatorios");
      event.stopPropagation();
      setValidated(true);
      setToken(false);
      return;
    } else if (password2.length < 6) {
      alert("Error - Contraseña debe tener al menos 6 caracteres");
      event.stopPropagation();
      setValidated(true);
      setToken(false);
      return;
    } else if (password2 !== passwordConfirm2) {
      alert("Error - Contraseñas deben ser iguales");
      event.stopPropagation();
      setValidated(true);
      setToken(false);
      return;
    }
    register(email, password);
  };

  return (
    <div className="container-fluid">
      <div className="row vw-100 justify-content-center align-items-center">
        <div className="col-auto bg-secondary p-5">
          <Form
            className="bg-light p-5"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Form.Label column="lg">Formulario de Registro</Form.Label>
            <Form.Group
              className="my-3"
              as={Col}
              md="12"
              controlId="formBasicEmail"
            >
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter your email"
                defaultValue=""
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              className="my-3"
              as={Col}
              md="12"
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Enter your password"
                defaultValue=""
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              className="my-3"
              as={Col}
              md="12"
              controlId="formBasicPassword"
            >
              <Form.Label>Confirmar Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Confirm your password"
                defaultValue=""
                name="passwordConfirm"
              />
            </Form.Group>

            <Button type="submit" className="my-3">
              Enviar
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;