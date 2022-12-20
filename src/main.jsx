import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from "./styles/theme"
import GlobalStyle from "./styles/global";
import { Routes } from './routes'
import { AuthProvider } from './hooks/auth';
import { OrderProvider } from './hooks/order';
import { FavsProvider } from './hooks/favs';
import { CartProvider } from './hooks/cart';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <AuthProvider>
        <OrderProvider>
          <CartProvider>
            <FavsProvider>
              <Routes/>
            </FavsProvider>
          </CartProvider>
        </OrderProvider>
      </AuthProvider>
    </ThemeProvider>
)
