import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import { PulseLoader } from 'react-spinners';
import PhoneDetails from '../pages/PhoneDetails';

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
        hydrateFallbackElement: (
          <PulseLoader className="mt-8 text-center" color="#2f4f4f" />
        ),
        loader: () => fetch('../phones.json'),
      },
      {
        path: 'phone-details/:phoneId',
        Component: PhoneDetails,
        hydrateFallbackElement: (
          <PulseLoader className="mt-8 text-center" color="#2f4f4f" />
        ),
        loader: () => fetch('../phones.json'),
      },
    ],
  },
]);

export default router;
