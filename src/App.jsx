import Formulario from "./components/Formulario";
import Header from "./components/Header";
import Listado from "./components/Listado";
import { useState, useEffect } from "react";

function App() {

  const [pacientes, setPacientes] = useState([])

  return (
    <div className="container mx-auto mt-20">
      <Header 
      
      />
      <div className="mt-12 md:flex">
        <Formulario
      
      // Recomendación que el prop tenga el mismo nombre del componente 
      pacientes ={pacientes}
      setPacientes= {setPacientes}
        
        />
        <Listado
        //le pasamos por props "pacientes"

        pacientes={pacientes}
        
        />
      </div>
    </div>
  );
}

export default App;
