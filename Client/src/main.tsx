import React from 'react'
import ReactDOM from 'react-dom/client'
import { StoreContext, store } from './app/stores/Store.ts'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/routes/Routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <RouterProvider  router={router}/>
    </StoreContext.Provider>
  </React.StrictMode>,
)
