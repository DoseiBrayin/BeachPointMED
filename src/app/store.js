import { configureStore } from '@reduxjs/toolkit'
import { authApi } from '../auth/Services/authApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import AuthReducer from '../auth/AuthSlices/authSlice'
import ReservationsReducer from '../Admin/Reservations/services/reservationsSlice'
import { adminReservationApi } from '../Admin/Reservations/services/reservationApi'

// const debbugMiddleWare = (store) => (next) => (action) => {
//   console.log(store.getState())
//   console.log(next(action))
//   console.log(store.getState())
// }

// Configuración del store
export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    [authApi.reducerPath]: authApi.reducer, // Añadir el reducer de authApi, lo que lo globaliza
    [adminReservationApi.reducerPath]: adminReservationApi.reducer,
    adminReservations: ReservationsReducer
  },
  // Añadir el middleware de authApi y adminReservationApi, se concatenan a los middlewares por defecto de RTK :)
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, adminReservationApi.middleware)
})

// Configuración de los listeners para la invalidación de caché y refetching
setupListeners(store.dispatch)
