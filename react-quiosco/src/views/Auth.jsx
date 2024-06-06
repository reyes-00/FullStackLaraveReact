import {Link} from 'react-router-dom';

export default function Auth() {
  return (
    <>
      <h1 className="text-4xl font-black">Inicia Sesión </h1>
      <p>Inicia sesión llenando el formulario</p>
      
      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form>
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
