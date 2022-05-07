import React, {Component} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default class Menu extends Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {
            searchTxt: "",
        };
    }

    handleSearch(){
        this.props.doSearch(this.state.searchTxt); 
    }

    handleClick(e, itemClicked){
        this.props.handler(itemClicked);
    }

    render(){
        return (
            
            <Navbar bg="light" expand="lg">
            
                    <Navbar.Brand href="#" onClick={(e) => this.handleClick(e,0)}>Curso React</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#" onClick={(e) => this.handleClick(e,1)}>Crear Estudiante</Nav.Link>                     
                        <Nav.Link href="#" onClick={(e) => this.handleClick(e,2)}>Listar Estudiantes</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Numero de Legajo..."
                        className="me-2"
                        aria-label="Search"
                        onChange={(e)=>
                            this.setState({
                                searchTxt: e.target.value,
                            })

                        }
                    />
                    <Button variant="outline-success" onClick = {this.handleSearch}>Buscar</Button>
                    </Form>
            
            </Navbar>
            
        );
    }
}