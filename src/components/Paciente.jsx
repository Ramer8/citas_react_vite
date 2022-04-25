

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  
const { nombre, numerodni, nacionalidad, sexo, profesion, estadocivil, domicilio, provincia, email, fecha, obrasocial, numeroafiliado, diagnostico, id } = paciente

const handleEliminar = () => {
  const respuesta = confirm('Desea eliminar este paciente?');
  if (respuesta) eliminarPaciente(id)
}
  return (
    <div className="m-10 bg-white shadow-md px-5 py-10 rounded-xl mx-5 my-7">
         <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {""}
         <span className="font-normal normal-case">{nombre}</span>
         </p>
         <p className="font-bold mb-3 text-gray-700 uppercase">Numero de DNI: {""}
         <span className="font-normal normal-case">{numerodni}</span>
         </p>
         <p className="font-bold mb-3 text-gray-700 uppercase">Nacionalidad: {""}
         <span className="font-normal normal-case">{nacionalidad}</span>
         </p>
         <p className="font-bold mb-3 text-gray-700 uppercase">Sexo: {""}
         <span className="font-normal normal-case">{sexo}</span>
         </p>
         <p className="font-bold mb-3 text-gray-700 uppercase">Profesion: {""}
         <span className="font-normal normal-case">{profesion}</span>
         </p>
         <p className="font-bold mb-3 text-gray-700 uppercase">Estado Civil: {""}
         <span className="font-normal normal-case">{estadocivil}</span>
         </p>
         <p className="font-bold mb-3 text-gray-700 uppercase">Domicilio: {""}
         <span className="font-normal normal-case">{domicilio}</span>
         </p>
         <p className="font-bold mb-3 text-gray-700 uppercase">Provincia: {""}
         <span className="font-normal normal-case">{provincia}</span>
         </p>
         <p className="font-bold mb-3 text-gray-700 uppercase">Email: {""}
         <span className="font-normal normal-case">{email}</span>
         </p>
         <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Nacimiento: {""}
         <span className="font-normal normal-case">{fecha}</span>
         </p><p className="font-bold mb-3 text-gray-700 uppercase">Obra Social: {""}
         <span className="font-normal normal-case">{obrasocial}</span>
         </p>
         <p className="font-bold mb-3 text-gray-700 uppercase">Numero de Afiliado: {""}
         <span className="font-normal normal-case">{numeroafiliado}</span>
         </p>
         <p className="font-bold mb-3 text-gray-700 uppercase">Diagnóstico: {""}
         <span className="font-normal normal-case">{diagnostico}</span>
         </p>
         <div className='flex justify-between mt-10'>
           <button
           type="button"
           className = "py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg " 
           onClick={() => setPaciente(paciente)}
           >Editar</button>
           <button
           type="button"
           className="py-2 px-10 bg-red-800 uppercase text-white font-bold
           hover:bg-red-600 cursor-pointer transition-colors rounded-lg"
           onClick= {handleEliminar}
          > Eliminar
           </button></div>
    </div>
  )
}

export default Paciente