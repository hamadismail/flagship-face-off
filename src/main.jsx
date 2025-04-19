import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import router from './routes/Routes';
import CartProviders from './providers/CartProviders';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProviders>
      <RouterProvider router={router} />
    </CartProviders>
  </StrictMode>
);
