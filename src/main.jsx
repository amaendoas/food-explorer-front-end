import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from "./styles/theme"
import GlobalStyle from "./styles/global";
import { Routes } from './routes'
import { AuthProvider } from './hooks/auth';
import { OrderProvider } from './hooks/order';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <AuthProvider>
        <OrderProvider>
          <Routes/>
        </OrderProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
