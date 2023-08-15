import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './routers/Router.jsx'
import { RouterProvider } from 'react-router'
import theme from './style/theme.js'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './style/globalStyle.js'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
        <RouterProvider router={Router} />
      </ThemeProvider>
  </React.StrictMode>,
)
