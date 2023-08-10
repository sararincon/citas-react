import Pacientes from "./Pacientes"

//se extrae el prop de pacientes 
const Listado = ({pacientes}) => {

  return (
    <div className= "md:w-1/2 lg:w-3/5 h-screen m:overflow-scroll ">


      {pacientes && pacientes.length ? (

              <>
                <h2 className= "font-black text-3xl text-center">Listado de Pacientes</h2>
                <p className="text-lg my-5 text-center">Administra tus pacientes</p>

                    {pacientes.map( (paciente) => {

                      return(
                        // va a crear un componente de acuerdo a la cantidad de objetos que exista
                        <Pacientes
                        key={paciente.id}
                        //le paso por prop a paciente 
                        paciente = {paciente}
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
