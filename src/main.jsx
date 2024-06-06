import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Styles
import './index.css';

// Scripts
import './vendor/bootstrap/js/bootstrap.bundle.min.js';
import './vendor/isotope/isotope.pkgd.min.js';


// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import SkiDesigns from './pages/SkiCard';


// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'custom-ski-designs',
        element: <SkiDesigns />,
      }
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
