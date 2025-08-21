
import { createBrowserRouter } from 'react-router';

import Login from '../Pages/Login/Login';
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import CategoryNews from '../Pages/CategoryNews/CategoryNews';
import Auth from '../Pages/AuthLayout/Auth';
import Register from '../Pages/Register/Register';


const Router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        path: '/',
        Component: Home,
      },
      {
        path: '/category/:id',
        Component: CategoryNews,
        loader:()=>fetch('/news.json')
      }
    ],
  },
   {
    path: '/auth',
    Component: Auth,
    children:[{

      path: '/auth/login',
      Component: Login,
    },
    {

      path: '/auth/register',
      Component:Register ,
    }
      
    ]
  }
]);

export default Router;