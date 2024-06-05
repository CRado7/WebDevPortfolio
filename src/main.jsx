import ReactDOM from 'react-dom/client';
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Styles

import './index.css';
import './vendor/animate/animate.min.css';
// import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/font-awesome/css/all.min.css';
import './vendor/owl.carousel/assets/owl.carousel.min.css';
import './vendor/magnific-popup/magnific-popup.min.css';

// import $ from 'jquery';

// Scripts

// import './js/theme.js';
import './vendor/jquery/jquery.min.js';
import './vendor/bootstrap/js/bootstrap.bundle.min.js';
import './vendor/jquery.easing/jquery.easing.min.js';
import './vendor/jquery.appear/jquery.appear.min.js';
// import './vendor/wow/wow.min.js';
import './vendor/imagesloaded/imagesloaded.pkgd.min.js';
// import './vendor/typed/typed.min.js';
import './vendor/parallaxie/parallaxie.min.js';
import './vendor/owl.carousel/owl.carousel.min.js';
import './vendor/isotope/isotope.pkgd.min.js';
import './vendor/magnific-popup/jquery.magnific-popup.min.js';

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
