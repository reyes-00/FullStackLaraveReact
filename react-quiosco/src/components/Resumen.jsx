import { formatearDinero } from '../helpers';
import useQuiosco  from '../hooks/useQuiosco';
import ResumenProducto from './ResumenProducto';

export default function Resumen() {
  const {pedido,total,habilitarBtnPedido} = useQuiosco ()
  return (
    <aside className="w-72 h-screen overflow-y-scroll">
      <h1 className='text-4xl font-black p-2'>Mi pedido</h1>
      <p className="text-lg my-5 p-2">Aqui podras ver el resumen y totales de tu pedido</p>

      <div>
        {pedido.length == 0 ? (
         <p className="text-2xl my-4 p-2">No hay elementos en tu pedido aún</p>
        ) : (
          pedido.map(item => (
            <ResumenProducto
              key={item.id}
              item = {item}
            />
          ))
        )}
      </div>
      <p className="text-xl mt-10 px-2">
        Total:  {''}
        {formatearDinero(total)}
      </p>

      <form>
        <div className="p-4">
          <input 
            type="submit" 
            className={`${habilitarBtnPedido() ? 
              'bg-indigo-100' : 
              'bg-indigo-600 hover:bg-indigo-700'} rounded px-5 py-2 text-white w-full font-black cursor-pointer  text-xl`}
            disabled={habilitarBtnPedido()}
            value="Cofirmar Pedido" 
          />
        </div>
      </form>
    </aside>
  )
}
