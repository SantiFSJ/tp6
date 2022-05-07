import React, {Component} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Welcome from "./Welcome";
import CrearEstudiante from "./CrearEstudiante";
import ListarEstudiantes from "./ListarEstudiantes";
export default class Body extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <Container>
                {this.props.itemClickled === 0 && <Welcome/>}
                {this.props.itemClickled === 1 && <CrearEstudiante/>}
                {this.props.itemClickled === 2 && (<ListarEstudiantes inputTxt={this.props.inputTxt}/>)}
            </Container>
        );
    }
}