import { configureStore } from '@reduxjs/toolkit'
import { authApi } from '../auth/Services/authApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import AuthReducer from '../auth/AuthSlices/authSlice'

// Configuración del store
export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    [authApi.reducerPath]: authApi.reducer // Añadir el reducer de authApi, lo que lo globaliza
  },
  // Añadir el middleware de authApi, se concatenan a los middlewares por defecto de RTK :)
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware)
})

// Configuración de los listeners para la invalidación de caché y refetching
setupListeners(store.dispatch)
