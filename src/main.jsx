import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import router from './routes/Routes';
import CartProviders from './providers/CartProviders';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProviders>
      <RouterProvider router={router} />
      <Toaster position="bottom-right" />
    </CartProviders>
  </StrictMode>
);
