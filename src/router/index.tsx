import { createBrowserRouter } from 'react-router-dom';
import { HOME } from './routes.json';
import Home from '../pages/Home';

export const router = createBrowserRouter([
  {
    path: `${HOME.path}`,
    element: <Home />,
  },
]);
