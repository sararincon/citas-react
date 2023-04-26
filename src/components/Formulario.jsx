

const Formulario = () => {
  return (
      <div className= "md:w-1/2 lg:w-3/5">
           <h2 className="font-black text-3xl text-center" >Seguimiento Pacientes</h2>

           <p className="text-lg mt-5 text-center">
               Añade Paciente y {""} <span className="text-indigo-600 font-bold">Administralos</span>
           </p>

           <form className="mt-5 bg-white">

               <div className="bg-white shadow-md rounded-lg py-5 px-5">
                   <label className="block">Nombre Mascota: {""}</label>
                   <input type= "text" placeholder="Nombre"/>
               </div>

           </form>
         
      </div>
   
  )
}

export default Formulario