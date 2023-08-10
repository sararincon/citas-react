

const Pacientes = ({paciente}) => {

    const {nombre, propietario, email, fecha, sintomas} = paciente
  return (
    <div className=" mb-5 bg-white mx-3 shadow-md px-5 py-5 rounded-xl ">
      <p className="uppercase font-bold mb-3">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="uppercase font-bold mb-3">
        Propietario: <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="uppercase font-bold mb-3">
        Email:  <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="uppercase font-bold mb-3">
        Fecha:
        <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="uppercase font-bold mb-3">
        Sintomas:
        <span className="font-normal normal-case">{sintomas}</span>
      </p>
    </div>
  );
};

export default Pacientes;
