import Pacientes from "./Pacientes"


const Listado = () => {


  return (
    <div className= "md:w-1/2 lg:w-3/5 h-screen m:overflow-scroll ">

        <h2 className= "font-black text-3xl text-center">Listado de Pacientes</h2>
        <p className="text-lg my-5 text-center">Administra tus pacientes</p>

        <Pacientes/>
        <Pacientes/>
        <Pacientes/>
        <Pacientes/>
        <Pacientes/>
        <Pacientes/>
    </div>
  )
}

export default Listado
