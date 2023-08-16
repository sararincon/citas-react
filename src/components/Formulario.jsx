import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({pacientes, setPacientes, paciente}) => {
  const [nombre, setNombre] = useState("")
  const [propietario, setPropietario] = useState("")
  const [email, setEmail] = useState("")
  const [fecha, setFecha] = useState("")
  const [sintomas, setSintomas] = useState("")
  const [error, setError] = useState(false)


  //Verificamos que no este vacio paciente con un UseEfecct detectando cuando ese cambio se realice y luego lo asociamos al formulario nuevamente
  useEffect(() => {

      if(Object.keys(paciente).length > 0){
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setFecha(paciente.fecha)
        setSintomas(paciente.sintomas)


      }
  }, [paciente])
  

 


  const generarId = () =>{

   const random =  Math.random().toString(34).substring(2); 
   const fecha = Date.now().toString(34)

    return fecha + random
}

  const handleSubmit = (e) => {

    e.preventDefault();

    // console.log("enviado formulario");
    // console.log(pacientes)
     
    if ([nombre, propietario, email, fecha, sintomas].includes('')){

        console.log("hay un campo vacio")

        setError(true)
        return
    }

    const objPacientes = {
        nombre,
        propietario,
        email, 
        fecha,
        sintomas,
    }

    if(paciente.id){
      //Editando Paciente

      console.log("editando")

    }else{
      //Agregando Paciente
      //se hace una copia de pacientes y se le agrega el nuevo objeto (objPacientes)
    objPacientes.generarId()
    setPacientes([...pacientes, objPacientes])
    }


    //Reiniciando form

    setNombre("")
    setPropietario("")
    setEmail("")
    setFecha("")
    setSintomas("")

  }



  return (
    <div className=" mx-3 md:w-1/2 lg:w-3/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mb-5 mt-5 text-center">
        Añade Paciente y {""}{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form 
      onSubmit={handleSubmit}
      className="mb-5 bg-white rounded-lg shadow-md  py-5 px-5">
        {/* Nombre */}

        {error && <Error mensaje= "Todos los campos son obligatorios"/>}
        <div className="mb-3">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold "
          >
            Nombre Mascota: {""}
          </label>
          <input
            id="mascota"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre"
            value = {nombre}
            onChange = {(e)=> setNombre(e.target.value)}
          />
        </div>
    {/* //Propietario */}
        <div className="mb-3">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold "
          >
            Nombre del Propietario: {""}
          </label>
          <input
            id="propietario"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre del Propietario"
            value = {propietario}
            onChange = {(e)=> setPropietario(e.target.value)}
          />
        </div>
{/* // Email */}
        <div className="mb-3">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold ">
            Email: {""}
          </label>
          <input
            id="email"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email"
            placeholder="Email"
            value = {email}
            onChange = {(e)=> setEmail(e.target.value)}
          />
        </div>
    {/* //Fecha de Alta */}
        <div className="mb-3">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold "
          >
            Fecha de Alta:{""}
          </label>
          <input
            id="alta"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date"
            value = {fecha}
            onChange = {(e)=> setFecha(e.target.value)}
          />
        </div>
    {/* Sintomas */}
        <div className="mb-3">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold "
          >
            Sintomas:{""}
          </label>
          <textarea
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
            value = {sintomas}
            onChange = {(e)=> setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white rounded-md uppercase font-bold cursor-pointer hover:bg-indigo-700"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        ></input>
      </form>
    </div>
  );
};

export default Formulario;
