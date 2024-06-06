import {Outlet} from 'react-router-dom';
import Modal from 'react-modal';
import Resumen from '../components/Resumen';
import Sidebar from '../components/Sidebar';
import ModalProducto from '../components/ModalProducto';
import useQuiosco from '../hooks/useQuiosco';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Layout() {
  const {modal, handleModal} = useQuiosco();
  
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  Modal.setAppElement('#root')
  return ( 
    <>
      <div className='md:flex'>
        <Sidebar/>
        <main className='flex-1 h-screen overflow-y-scroll bg-gray-100 p-4'>
          <Outlet />
        </main>
        <Resumen/>
      </div>
      <Modal isOpen={modal} style={customStyles}>
        <ModalProducto/>
      </Modal>
     <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition: Bounce
     />
    </>
  )
}
