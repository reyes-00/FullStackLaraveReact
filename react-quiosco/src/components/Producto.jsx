import React from 'react'
import { formatearDinero } from '../helpers'
import useQuiosco from '../hooks/useQuiosco'

export default function Producto({producto}) {
  const {precio,imagen,categoria_id,id,nombre} = producto
  const {handleModal,handleProducto} =useQuiosco()
  return (
    <div className='border p-3 shadow bg-white'>
      <img src={`/img/${imagen}.jpg`} alt={imagen} className='w-full'/>
      <div className='p-5'>
        <h3 className='text-2xl font-bold'>{nombre}</h3>
        <p className='mt-5 font-black text-4xl text-amber-500'>{formatearDinero(precio)}</p>

        <button type='button' className='bg-indigo-500 text-white font-bold w-full p-3 mt-4 cursor-pointer hover:bg-indigo-800' 
          onClick={()=>{
            handleModal();
            handleProducto(producto);
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  )
}
