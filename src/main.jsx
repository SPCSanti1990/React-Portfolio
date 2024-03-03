import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import About from './assets/pages/About';
import Contact from './assets/pages/Contact';
import Home from './assets/pages/Home';
import Portfolio from './assets/pages/Portfolio';
import Resume from './assets/pages/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/About',
                element: <About />,
            },
            {
                path: '/Contact',
                element: <Contact />,
            },
            {
                path: '/Portfolio',
                element: <Portfolio />,
            },
            {
                path: '/Resume',
                element: <Resume />,
            },
        ],
    },
]);

ReactDom.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);