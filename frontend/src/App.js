
import './App.css';
import Navigation from './componentes/Navigation'
import ShowEstudiantes from './componentes/ShowEstudiantes'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
//import 'bootstrap/dist/js/bootstrap.js';
//import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="container p-4">
      <Router>
        <Navigation />
        <Route path="/Estudiantes" exact component={ShowEstudiantes} />
        <Route path="/Profesores" render={() => (<div>Lista de Profesores</div>)} />

      </Router>
    </div>


  );
}
export const backend = {
  host: "http://localhost",
  port: 8080
}

export default App;
