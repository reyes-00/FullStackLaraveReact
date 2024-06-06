import axios from 'axios';
import {createContext, useState, useEffect} from 'react';
import {toast} from 'react-toastify';
// import {categorias as categoriasDB} from '../data/categorias';
import clienteAxios from '../config/axios'

const QuioscoContext = createContext();

export const QuioscoProvider = ({children}) => {
  const [categorias, setCategorias] = useState ([])
  const [categoriaActal, setCatgoriaActual] = useState ({});
  const [modal, setModal] = useState(false)
  const [producto, setProducto] = useState({})
  const [pedido, setPedido ] = useState ([])
  const [total, setTotal] = useState(0);
  
  const habilitarBtnPedido = () => pedido.length === 0;

  useEffect(()=>{
    const nuevoTotal = pedido.reduce((total, item) => (item.precio * item.cantidad) + total, 0);
    setTotal(nuevoTotal)
  },[pedido])

  const obtenerCategorias = async () => {
    try {
      const {data} = await clienteAxios('/api/categorias');
      setCategorias(data.data)
      setCatgoriaActual(data.data[0])
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    obtenerCategorias();
  },[]);

  const handleCategoria = (id) =>{
    const categoria = categorias.filter(categoria => categoria.id === id)[0]
    setCatgoriaActual(categoria)
  }
 
  const handleModal = () => {
    setModal(!modal)
  }

  const handleProducto = producto => {
    setProducto(producto)
  }
  
  const handleAgregarPedido = ({categoria_id, ...producto}) => {
    if(pedido.some(pedidoState => pedidoState.id === producto.id)){
      const pedidoActualizado = pedido.map(pedidoState => pedidoState.id == producto.id ? producto : pedidoState)
      setPedido(pedidoActualizado)
      toast.success('Guardado en tu Pedido')
    }else{
      setPedido([...pedido, producto])
      toast.success('Agregado a tu Pedido')
    }
  }

  const handleEditarPedido = id => {
    const producto_editado = pedido.filter(pedidoedit => pedidoedit.id === id)[0];
    setProducto(producto_editado)
    setModal(!modal)
  }

  const handleBorrarPedido = id => {
    const eliminarProducto = pedido.filter(producto => producto.id !== id)
    setPedido(eliminarProducto)
    toast.error('Eliminado de tu Pedido')
  }
  return (
    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActal,
        handleCategoria,
        modal,
        handleModal,
        producto,
        handleProducto,
        pedido,
        handleAgregarPedido,
        handleEditarPedido,
        handleBorrarPedido,
        habilitarBtnPedido,
        total
      }}
    >{children}
    </QuioscoContext.Provider>
  )
}

export default QuioscoContext