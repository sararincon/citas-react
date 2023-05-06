

const Listado = () => {
  return (
    <div className= "md:w-1/2 lg:w-3/5">

        <h2 className= "font-black text-3xl text-center">Listado de Pacientes</h2>
        <p className="text-lg my-5 text-center">Administra tus pacientes</p>

        <div className="bg-white mx-3 shadow-md px-5 py-5 rounded-lg ">
          <p className= "uppercase font-bold mb-3">Nombre:
          <span className= "font-normal normal-case">Hook</span>
          </p>
          <p className= "uppercase font-bold mb-3">Nombre:
          <span className= "font-normal normal-case">Hook</span>
          </p>
          <p className= "uppercase font-bold mb-3">Nombre:
          <span className= "font-normal normal-case">Hook</span>
          </p>
          <p className= "uppercase font-bold mb-3">Nombre:
          <span className= "font-normal normal-case">Hook</span>
          </p>
        </div>
    </div>
  )
}

export default Listado
