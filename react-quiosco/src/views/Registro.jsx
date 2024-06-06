import {createRef, useState} from 'react';
import {Link} from 'react-router-dom';
import clienteAxios from '../config/axios';
import Alerta from '../components/Alerta';

export default function Registro() {
  const nameRef = createRef();
  const emailRef = createRef()
  const passwordRef = createRef()
  const passwordConfirmationRef = createRef()
  const [errores, setErrores] = useState([]);

  const handleSubmit = async(e) =>{
    e.preventDefault();
    
    const datos = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password:  passwordRef.current.value,
      password_confirmation:  passwordConfirmationRef.current.value,
    }

    try {
      const {data} = await clienteAxios.post('api/register',datos)
      console.log(data.token);
    } catch (error) {
      setErrores(Object.values(error.response.data.errors));
    }
    
  }
  return (
    <>
      <h1 className="text-4xl font-black">Crea tu cuenta </h1>
      <p>Crea tu cuenta llenando el formulario</p>
      
      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        {
          errores ? errores.map((error, i) => <Alerta key={i}>{error}</Alerta>) : null
        }
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
              <label
                className="text-slate-800"
                htmlFor="name"
              >Nombre</label>
              <input 
                type="text" 
                name="name"
                className="mt-2 w-full p-3 bg-gray-50"
                placeholder="Tu nombre"
                ref={nameRef}
              />
          </div>
          <div className="mb-4">
              <label
                className="text-slate-800"
                htmlFor="email"
              >Email:</label>
              <input 
                type="email" 
                name="email"
                className="mt-2 w-full p-3 bg-gray-50"
                placeholder="Tu email"
                ref={emailRef}
              />
          </div>
          <div className="mb-4">
              <label
                className="text-slate-800"
                htmlFor="email"
              >Password:</label>
              <input 
                type="password" 
                name="password"
                className="mt-2 w-full p-3 bg-gray-50"
                placeholder="Tu password"
                ref={passwordRef}
              />
          </div>
          <div className="mb-4">
              <label
                className="text-slate-800"
                htmlFor="password_confirmation"
              >Repetir Password:</label>
              <input 
                type="password" 
                name="password_confirmation"
                className="mt-2 w-full p-3 bg-gray-50"
                placeholder="Repetir password"
                ref={passwordConfirmationRef}
              />
          </div>
          <input 
            type="submit" 
            value="Crear Cuenta"
            className="bg-indigo-600 text-white hover:bg-indigo-700 uppercase w-full mt-5 p-3 rounded font-bold cursor-pointer"
          />
        </form>
      </div>

      <nav className="mt-5">
        <Link to="/login/auth">Inicia Sesion</Link>
      </nav>
    </>
    
  )
}
