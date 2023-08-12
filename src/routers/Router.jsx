import { createBrowserRouter } from "react-router-dom";
import Layout from '../components/Layout/index'
import MainPage from "../pages/MainPage";
import EditGamePage from '../pages/EditGamePage'
import NotFoundPage from '../pages/NotFoundPage'

const Router = createBrowserRouter([
	{
    path: '/',
    element:  <Layout/>,
    children: [
      {
        index: true,
        element:<MainPage/>,
      },
      {
        path: 'editgame',
        element: <EditGamePage/>,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])


export default Router;