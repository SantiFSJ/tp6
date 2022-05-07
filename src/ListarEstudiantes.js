import React, {Component} from "react";
export default class ListarEstudiantes extends Component{
    constructor(props){
        super(props);
        this.limpiar = this.limpiar.bind(this);
        //this.listarEstudiantes = this.listarEstudiantes.bind(this);
        this.listarEstudiantePorLegajo = this.listarEstudiantePorLegajo.bind(this);

        this.state = {
            nroLegajo : 0,
            estudiantes: [],  
        };
    };

    componentDidMount(){
        console.log("holis " + this.props.inputTxt);
        this.listarEstudiantePorLegajo(this.props.inputTxt);
    } 

    componentDidUpdate(prevProps, prevState){
        console.log("holis " + this.props.inputTxt);
        if(prevProps.inputTxt !== this.props.inputTxt)
            this.listarEstudiantePorLegajo(this.props.inputTxt);
    }

    listarEstudiantePorLegajo(inputTxt){
        this.limpiar();
        const { nroLegajo } = this.state;
        fetch("http://localhost:1234/EstudianteLegajo?legajo=" + inputTxt)
        .then((resp) => resp.json())
        .then((json) => { 
            this.setState({
            estudiantes: json.estudiantes,
            resultado: json.result,
        }); 
    });
    }

   /* listarEstudiantes(){
        this.limpiar();
        fetch("http://localhost:1234/Estudiantes")
            .then((resp) => resp.json())
            .then((json) => { 
                this.setState({
                estudiantes: json.estudiantes,
                resultado: json.result,
            }); 
    });
    }*/

    limpiar(){
        this.setState({
            estudiantes: [],
        });
    }

    handlerChange = (event) => {
        const { value } = event.target;
        let { nroLegajo } = this.state;
        nroLegajo = value;
        this.setState({ nroLegajo: nroLegajo });
      };

    render(){
        return(
            <div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Legajo</th>
                            <th>Carrera</th>
                            <th>Materias</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.estudiantes.map((e, index) => (
                            <tr>
                                <td>{e.nombre}</td>
                                <td>{e.apellido}</td>
                                <td>{e.legajo}</td>
                                <td>{e.carrera}</td>
                                <td>{e.materias && e.materias.map((mat) => {
                                    return mat.nombre + ",";
                                })}</td>
                            </tr>   
                        ))}
                        
                    </tbody>

                </table>
            </div>
            );
    }
}