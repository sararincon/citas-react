import { useState, useEffect } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("")
  const [propietario, setPropietario] = useState("")
  const [email, setEmail] = useState("")
  const [fecha, setFecha] = useState("")
  const [sintomas, setSintomas] = useState("")

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log("enviado formulario");

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
          value="Agregar Paciente"
        ></input>
      </form>
    </div>
  );
};

export default Formulario;
