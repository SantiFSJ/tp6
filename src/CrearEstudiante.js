import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default class CrearEstudiante extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      form: {
        nombre: "",
        apellido: "",
        legajo: "",
        direccion: "",
        telefono: "",
        carrera: "",
        edad: "",
        materias: [""],
      },
      resultado: "",
      materiasListado: [],
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:1234/estudiantes", {
      method: "POST",
      body: JSON.stringify({
        nombre: this.state.form.nombre,
        apellido: this.state.form.apellido,
        nroLegajo: this.state.form.legajo,
        carrera: this.state.form.carrera,
        materias: [this.state.form.materias],
        edad: this.state.form.edad,
      }),
    })
      .then((resp) => resp.json())
      .then((json) => {
        if (json.result == "error") {
          this.setState({
            resultado: json.message,
          });
          return;
        }
        this.setState({
          resultado: "El Estudiante fue Creado con Exito!!",
        });
      });
  }

  componentDidMount() {
    fetch("http://localhost:1234/materias")
      .then((r) => r.json())
      .then((json) => {
        this.setState({
          materiasListado: json.materias,
        });
      });
  }

  handleChange(e) {
    let nombre = e.target.name;
    let valor = e.target.value;

    this.setState((state) => ({
      form: {
        ...this.state.form,
        [nombre]: valor,
      },
    }));
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              name="nombre"
              onChange={this.handleChange}
              value={this.state.form.nombre}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              name="apellido"
              onChange={this.handleChange}
              value={this.state.form.apellido}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Numero de Legajo</Form.Label>
            <Form.Control
              name="legajo"
              onChange={this.handleChange}
              value={this.state.form.legajo}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Materias</Form.Label>
            <Form.Control
              name="materias"
              onChange={this.handleChange}
              as="select"
            >
              {this.state.materiasListado.map((m) => (
                <option value={m.nombre}>{m.nombre}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Carrera</Form.Label>
            <Form.Control
              name="carrera"
              onChange={this.handleChange}
              value={this.state.form.carrera}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Edad</Form.Label>
            <Form.Control
              name="edad"
              onChange={this.handleChange}
              value={this.state.form.edad}
            />
          </Form.Group>

          <Button onClick={this.handleSubmit} type="submit">
            Enviar
          </Button>
        </Form>
        <p>{this.state.resultado}</p>
      </div>
    );
  }
}
