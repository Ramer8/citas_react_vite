import Paciente from "./Paciente"
const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  
  return (
    <div className = "md:w-1/2 lg:w-3/5 md:h-screen overflow-auto" >

      {pacientes && pacientes.length ? ( 
       <> 
            <h2 className= " font-black text-3xl text-center"> "Listado Pacientes"</h2>
            <p className= " text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className= "text-blue-600 font-bold text-center" >Pacientes y Citas</span>
            </p>
                { pacientes.map ( paciente => (
                     <Paciente
                        key={paciente.id}
                        paciente={paciente}
                        setPaciente={setPaciente}
                        eliminarPaciente={eliminarPaciente}
                     />
                ))} 
       </>
      ) : (<>
            <h2 className= " font-black text-3xl text-center"> "No se cargaron pacientes"</h2>
            <p className= " text-xl mt-5 mb-10 text-center">
            Comienza a agregar pacientes  {""}
            <span className= "text-blue-600 font-bold text-center" >y aparecerán en este lugar</span>
            </p>
       </>
      )}
   </div>
  )
}

export default ListadoPacientes
