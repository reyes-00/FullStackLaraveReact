import {Link} from 'react-router-dom';
import {createRef, useState} from 'react';
import {useAuth} from '../hooks/useAuth';
import Alerta from '../components/Alerta';

export default function Auth() {
  const [errores, setErrores] = useState([]);
  const {login} = useAuth({
    middleware: 'guest',
    url: '/'
  });
  const emailRef = createRef();
  const passwordRef = createRef();

  const handleSubmit = async(e) =>{
    e.preventDefault();
    
    const datosInicio = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }

    login(datosInicio, setErrores)
  }

  return (
    <>
      <h1 className="text-4xl font-black">Inicia Sesión </h1>
      <p>Inicia sesión llenando el formulario</p>
      
      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        { errores ? errores.map((error,i)=><Alerta key={i}>{error}</Alerta>) : null}
        <form onSubmit={handleSubmit} noValidate>
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
         
          <input 
            type="submit" 
            value="Inicia Sesion"
            className="bg-indigo-600 text-white hover:bg-indigo-700 uppercase w-full mt-5 p-3 rounded font-bold cursor-pointer"
          />
        </form>
      </div>

      <nav className="mt-5">
        <Link to="/login/registro">
          ¿No tienes cuenta? Crea una
        </Link>
      </nav>
    </>
  )
}
