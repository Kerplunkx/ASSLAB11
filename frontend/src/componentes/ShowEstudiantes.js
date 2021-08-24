import React, { Component } from 'react'
import axios from "axios"
//import { backend } from '../App'

export default class ShowEstudiantes extends Component {
    state = {
        users: [],
        idestudiante: '',
        nombre: '',
        apellido: '',
        edad: '',

    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:8080/api/estudiante');
        this.setState({ users: res.data })
        console.log(this.state.users)
    }
    onChangeId = (e) => {
        this.setState({
            idestudiante: e.target.value
        })
    }

    onChangeNombre = (e) => {
        this.setState({
            nombre: e.target.value
        })
    }

    onChangeApellido = (e) => {
        this.setState({
            apellido: e.target.value
        })
    }

    onChangeEdad = (e) => {
        this.setState({
            edad: e.target.value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();

        const res = await axios.post('http://localhost:8080/api/estudiante', {
            idestudiante: this.state.idestudiante,
            nombre: this.state.nombre,
            apellido: this.state.apellido,
            edad: this.state.edad
        })
        console.log(res);
    }

        ondelete = async (id) => {
            await axios.delete("http://localhost:8080/api/estudiante" + id);
        }


        render() {
            return (
                <div className="row">
                    <div className="row md-4">
                        <div className="card card-body">
                            <h4>Ingreso de nuevo estudiante</h4>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control my-1" placeholder="Id" onChange={this.onChangeId} />
                                    <input type="text" className="form-control my-1" placeholder="Nombre" onChange={this.onChangeNombre} />
                                    <input type="text" className="form-control my-1" placeholder="Apellido" onChange={this.onChangeApellido} />
                                    <input type="text" className="form-control my-1" placeholder="Edad" onChange={this.onChangeEdad} />
                                </div>
                                <button className="btn btn-primary my-3" type='submit'>Guardar</button>
                            </form>
                        </div>

                    </div>
                    <div className="col-md-8">
                        <ul className="list-group">
                            {
                                this.state.users.map(user => (
                                    <li className="list-group-item list-group-item-action" key={user.idestudiante} onDoubleClick={this.ondelete}>
                                        {user.nombre + "" + user.apellido}
                                    </li>))
                            }


                        </ul>
                    </div>


                </div>
            )
        }



    }
