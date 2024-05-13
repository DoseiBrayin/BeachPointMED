import axios from "axios"
import { useEffect } from "react";

export const ResponseEpayco = () => {
    const refPayco = '123123444dasd3443'
    const apiUrl = `https://secure.epayco.co/validation/v1/reference/${refPayco}`;
    useEffect(()=>{
        axios.get(apiUrl)
  .then(response => {
    const data = response.data;
    // Aquí puedes procesar la información obtenida
    console.log('Información de la transacción:', data);
  })
  .catch(error => {
    console.error('Error al obtener la información de la transacción:', error.message);
  },[refPayco])
    })
  return (
    <div>
        hola
    </div>
  )
}
