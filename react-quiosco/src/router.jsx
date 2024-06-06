import {createBrowserRouter} from 'react-router-dom'
import Layout from './layout/Layout'
import AutLayout from './layout/AutLayout'
import Inicio from './views/Inicio'
import Auth from './views/Auth'
import Registro from './views/Registro'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Inicio />,
      }
    ]
  },
  {
    path: '/login',
    element: <AutLayout/>,
    children: [
      {
        path: '/login/auth',
        element: <Auth/>,
      },
      {
        path: '/login/registro',
        element: <Registro/>,
      }
    ]

  }
])

export default router