
import { createBrowserRouter } from 'react-router';

import Login from '../Pages/Login/Login';
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import CategoryNews from '../Pages/CategoryNews/CategoryNews';


const Router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        path: '',
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
    path: '/login',
    Component: Login,
  }
]);

export default Router;