import { useEffect } from "react"
import Pacientes from "./Pacientes"

//se extrae el prop de pacientes 
const Listado = ({pacientes, setPaciente, paciente}) => {

  useEffect(() => {
  if (pacientes.length > 0) { console.log("Se ha creado un nuevo paciente") }
   
  }, [pacientes])


  return (
    <div className= "md:w-1/2 lg:w-3/5 h-screen m:overflow-scroll ">


      {pacientes && pacientes.length ? (

              <>
                <h2 className= "font-black text-3xl text-center">Listado de Pacientes</h2>
                <p className="text-lg my-5 text-center">Administra tus pacientes</p>

                    {pacientes.map( (hola) => {

                      return(
                        // va a crear un componente de acuerdo a la cantidad de objetos que exista
                        <Pacientes
                        key={hola.id}
                        //le paso por prop a paciente 
                        paciente = {hola}
                        //y luego a Pacientes 
                        setPaciente ={setPaciente}

                       
                        />
                      )
                })}

               </>

      ) : (

        <>
            <h2 className= "font-black text-3xl text-center">No hay Pacientes</h2>
            <p className="text-lg my-5 text-center">Empieza a agregar pacientes</p>
        </>
      )} 

    </div>
  )
}

export default Listado
