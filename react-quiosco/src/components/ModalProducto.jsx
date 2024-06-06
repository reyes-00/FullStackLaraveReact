import {useState, useEffect} from 'react';
import { formatearDinero } from "../helpers"
import useQuiosco from "../hooks/useQuiosco"

export default function ModalProducto() {
  const {producto, handleModal, handleAgregarPedido, pedido} = useQuiosco()
  const [cantidad, setCantidad ] = useState(1)
  const [edicion, setEdicion] = useState(false)
  
  useEffect(()=>{
    if(pedido.some(pedidoState => pedidoState.id === producto.id)){
      const productoEdicion = pedido.filter(pedidoState => pedidoState.id === producto.id)[0]
      setCantidad(productoEdicion.cantidad)
      setEdicion(true)
    }
  },[pedido]);
  
  const handleMas = () =>{
    if(cantidad >= 5) return
    setCantidad(cantidad + 1 )
  }
  const handleMenos = () =>{
    if(cantidad <= 1 ) return; 
    setCantidad(cantidad - 1)
  }

  const {imagen, nombre,precio} = producto
  return (
    <>
      <div className="md:flex gap-10">
          <div className="md:w-1/3">
            <img 
              src={`img/${imagen}.jpg`} 
              alt={`Imagen de ${imagen}`} />
          </div>
          <div className="md:w-2/3">
            <div className="flex justify-end">
              <button
                onClick={handleModal}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </button>
            </div>
            <h1 className="text-3xl font-bold mt-5">{nombre}</h1>
            <p className="mt-5 font-black text-5xl text-amber-500">{formatearDinero(precio)}</p>
            
            <div className='flex items-center'>
              <button
                type='button'
                onClick={()=>handleMenos()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </button>
              <p className='text-4xl p-2 my-4'>{cantidad}</p>
              <button
                type='button'
                onClick={()=>handleMas()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </button>
            </div> 

            <button 
              className="text-1xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold mt-3 p-4 uppercase"
              onClick={()=>{
                handleAgregarPedido({...producto, cantidad});
                handleModal(); 
              }}  
              >{ edicion ? 'Guardar Cambios' : 'Añadir al Pedido'}
              </button>
          </div>
      </div>
    </>
   
  )
}
