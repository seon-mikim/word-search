import { createBrowserRouter } from "react-router-dom";
import Layout from '../components/Layout/index'
import MainPage from "../pages/MainPage";
import EditGamePage from '../pages/EditGamePage'
import NotFoundPage from '../pages/NotFoundPage'
import SelectGamePage from "../pages/SelectGamePage";
import PlayGamePage from "../pages/PlayGamePage";

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
        path: 'editGame',
        element: <EditGamePage/>,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
      {
        path: 'selectGame',
        element:<SelectGamePage/>
      },
      {
        path: 'playGame/:title',
        element: <PlayGamePage/>
      }
    ],
  },
])


export default Router;