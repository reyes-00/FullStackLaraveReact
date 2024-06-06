import clienteAxios from "../config/axios";

export const useAuth = ({middleware, url}) =>{
  
  const login = async (datos, setErrores) => {
    try{
      const {data} = await clienteAxios.post('api/login',datos)
      localStorage.setItem('token',data.token);
      setErrores([]);
    }catch(e){
     setErrores(Object.values(e.response.data.errors))
    }
  }

  
  return{
    login
  }
}
