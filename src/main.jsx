import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContextProvider } from './context/main-context.jsx'
import { FilterProvider } from './context/filter-context.jsx'
import { CartProvider } from './context/cart-context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <FilterProvider>
        <CartProvider>
        <App />
        </CartProvider>
      </FilterProvider>
    </ContextProvider>
  </StrictMode>,
)
