import Producto from '../components/Producto';
import clienteAxios from '../config/axios';
import {productos as data} from '../data/productos';
import useQuiosco from '../hooks/useQuiosco';
import useSWR from 'swr';

export default function Inicio() {
  const {categoriaActal} = useQuiosco()
  const fetcher = () => clienteAxios('/api/productos').then(data => data.data)
  const { data, error, isLoading } = useSWR('/api/productos', fetcher,{
    refreshInterval:1000
  })

  if(isLoading) return <h1>Cargando...</h1>
  const productos = data.data.filter(producto => producto.categoria_id === categoriaActal.id)
  return (
    <>
      <h1 className='text-4xl font-black'>{categoriaActal.nombre}</h1>
      <p className='text-2xl my-10'>Comienza eligiendo tu pedido</p>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        {productos.map(producto =>(
          <Producto
            key={producto.imagen}
            producto={producto}
          />
        ))}
      </div>
    </>
  )
}
