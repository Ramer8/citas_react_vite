import { useState, useEffect} from "react"
import { useContext } from "react/cjs/react.production.min";
import Error from "./Error"

const Formulario = ({ pacientes,setPacientes,paciente }) => {

    const [nombre,setNombre] = useState('');
    const [numerodni,setNumerodni] = useState('');
    const [nacionalidad,setNacionalidad] = useState();
    const [sexo,setSexo] = useState('');
    const [profesion,setProfesion] = useState('');
    const [estadocivil,setEstadocivil] = useState('');
    const [domicilio,setDomicilio] = useState('');
    const [provincia,setProvincia] = useState('');
    const [email,setEmail] = useState('');
    const [fecha,setFecha] = useState('');
    const [obrasocial,setObrasocial] = useState('');
    const [numeroafiliado,setNumeroafiliado] = useState('');
    const [diagnostico,setDiagnostico] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
      if (Object.keys(paciente).length > 0) {
          setNombre(paciente.nombre)
          setNumerodni(paciente.numerodni)
          setNacionalidad(paciente.nacionalidad)
          setSexo(paciente.sexo)
          setProfesion(paciente.profesion)
          setEstadocivil(paciente.estadocivil)
          setDomicilio(paciente.domicilio)
          setProvincia(paciente.provincia)
          setEmail(paciente.email)
          setFecha(paciente.fecha)
          setObrasocial(paciente.obrasocial)
          setNumeroafiliado(paciente.numeroafiliado)
          setDiagnostico(paciente.diagnostico)
      }
    }, [paciente])
    
    const generarId = () => {
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)
        return random + fecha 
    }
    const handleSubmit = (e) => {
         e.preventDefault()

  if ([nombre, numerodni, nacionalidad, sexo, profesion, estadocivil, domicilio, provincia, email, fecha, obrasocial, numeroafiliado, diagnostico].includes('')) {
            setError(true)      
            return; 
        }
        setError(false)
        // Objeto de Paciente
        const objetoPaciente = {
            nombre, 
            numerodni, 
            nacionalidad, 
            sexo, 
            profesion, 
            estadocivil, 
            domicilio, 
            provincia, 
            email, 
            fecha, 
            obrasocial, 
            numeroafiliado, 
            diagnostico
            
        }
         if(paciente.id) {
            // Editando el Registro
            objetoPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id ===
                paciente.id ? objetoPaciente : pacienteState)
            setPacientes(pacientesActualizados)
         }
         else {
            // Nuevo Registro
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente]);
         }
        // Reiniciar el formulario
        setNombre('')
        setNumerodni('')
        setNacionalidad('')
        setSexo('')
        setProfesion('')
        setEstadocivil('')
        setDomicilio('')
        setProvincia('')
        setEmail('')
        setFecha('')
        setObrasocial('')
        setNumeroafiliado('')
        setDiagnostico('')
        paciente.id=0
} 
  return (
    <div className = "md:w-1/2 lg:w-2/5 mx-5">
        <h2 className ="font-black text-3xl text-center">Seguimientos de los Pacientes</h2>
         <p className = "text-lg mt-5 text-center mb-10">
            Añade Pacientes y {''}
            <span className = "text-blue-600 font-bold">Administralos</span>
         </p> 
         <form  
                onSubmit= {handleSubmit}
                className= "bg-white shadow-md  py-10 px-5 mb-10">
                  { error && <Error><p>Todos los campos son obligatorios</p></Error>}
             <div className="mb-5">
                    <label htmlFor="nombre" className ="block text-gray-700 uppercase font-bold">
                          Nombre del Paciente
                    </label>
                    <input 
                        id="nombre"
                        type="text" 
                        placeholder="Apellido y Nombre"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        value= {nombre}
                        onChange={ (e) => setNombre(e.target.value) }
                    />
            </div>
            <div className="mb-5">
                    <label htmlFor="numerodni" className ="block text-gray-700 uppercase font-bold">
                          Numero de DNI
                    </label>
                    <input 
                        id="numerodni"
                        type="number" 
                        placeholder="Numero de D.N.I"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        value= {numerodni}
                        onChange={ (e) => setNumerodni(e.target.value) }
                    />
            </div>
            <div className="mb-5">
                    <label htmlFor="nacionalidad" className ="block text-gray-700 uppercase font-bold">
                          Nacionalidad
                    </label>
                    <input 
                        id="nacionalidad"
                        type="text" 
                        placeholder="Nacionalidad"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        value= {nacionalidad}
                        onChange={ (e) => setNacionalidad(e.target.value) }
                    />
            </div>
            <div className="mb-5">
                    <label htmlFor="sexo" className ="block text-gray-700 uppercase font-bold">
                          Sexo
                    </label>
                    <input 
                        id="sexo"
                        type="text"
                        placeholder="Masculino/Femenino"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        value= {sexo}
                        onChange={ (e) => setSexo(e.target.value) }
                    />
            </div>
            <div className="mb-5">
                    <label htmlFor="profesion" className ="block text-gray-700 uppercase font-bold">
                          Profesión
                    </label>
                    <input 
                        id="profesion"
                        type="text" 
                        placeholder="Ocupación"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        value= {profesion}
                        onChange={ (e) => setProfesion(e.target.value) }
                    />
            </div>
            <div>
            <div className="mb-5">
                    <label htmlFor="estadocivil" className ="block text-gray-700 uppercase font-bold">
                          Estado Civil
                    </label>
                    <input 
                        id="estadocivil"
                        type="text" 
                        placeholder="Soltero/Casado/Divorciado/Viudo"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        value= {estadocivil}
                        onChange={ (e) => setEstadocivil(e.target.value) }
                    />
           </div>
            <div className="mb-5">
                    <label htmlFor="domicilio" className ="block text-gray-700 uppercase font-bold">
                          Domicilio 
                    </label>
                    <input 
                        id="domicilio"
                        type="text" 
                        placeholder="Calle y Numero"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        value= {domicilio}
                        onChange={ (e) => setDomicilio(e.target.value) }
                    />
                    
            </div>

            <div className="mb-5">
                    <label htmlFor="provincia" className ="block text-gray-700 uppercase font-bold">
                          Provincia 
                    </label>
                    <input 
                        id="provincia"
                        type="text" 
                        placeholder="Provincia - Ciudad"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        value= {provincia}
                        onChange={ (e) => setProvincia(e.target.value) }
                    />
                    
            </div>

            <div className="mb-5">
                    <label htmlFor="email" className ="block text-gray-700 uppercase font-bold">
                           Email
                    </label>
                    <input 
                        id="email"
                        type="email" 
                        placeholder="example@dominio.com"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        value= {email}
                        onChange={ (e) => setEmail(e.target.value) }
                    />
            </div>
            <div className="mb-5">
                    <label htmlFor="fecha" className ="block text-gray-700 uppercase font-bold">
                          Fecha de Nacimiento
                    </label>
                    <input 
                        id="Fecha"
                        type="date" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        value= {fecha}
                        onChange={ (e) => setFecha(e.target.value) }
                    />
            </div>
            </div>
            <div className="mb-5">
                    <label htmlFor="obrasocial" className ="block text-gray-700 uppercase font-bold">
                          Obra Social
                    </label>
                    <input 
                        id="obrasocial"
                        type="text" 
                        placeholder="Nombre/ No posee"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        value= {obrasocial}
                        onChange={ (e) => setObrasocial(e.target.value) }
                    />
            </div>
            <div className="mb-5">
                    <label htmlFor="numeroafiliado" className ="block text-gray-700 uppercase font-bold">
                          Numero de Afiliado
                    </label>
                    <input 
                        id="numeroafiliado"
                        type="number" 
                        placeholder="Numero de Afiliado"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        value= {numeroafiliado}
                        onChange={ (e) => setNumeroafiliado(e.target.value) }
                    />
            </div>
            <div className="mb-5">
                    <label htmlFor="diagnostico" className ="block text-gray-700 uppercase font-bold">
                          Diagnóstico
                    </label>
                    <textarea 
                       id= "diagnostico"
                       className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                       placeholder="Describe el diagnóstico"
                       value= {diagnostico}
                       onChange={ (e) => setDiagnostico(e.target.value) }
                    />  
            </div>
            <input 
                type="submit" 
                className="bg-indigo-800 w-full uppercase text-white font-bold p-3
                hover:bg-indigo-600 cursor-pointer transition-colors rounded-lg"
            value={ paciente.id ? ('Guardar cambios') : ('Agregar Paciente') }
            />
        </form>
    </div>
  )
}
export default Formulario



