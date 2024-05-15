import { useBookYourCourtContext } from '../../context/BookYourCourtContext'

export function Payment () {
  const { bookCourt } = useBookYourCourtContext()

  const handler = ePayco.checkout.configure({
    key: '6e3cd97070f51ec9d8ea865d257eccc6',
    test: true
  })

  const createOrder = () => {
    const data = {
      // Parámetros de compra (obligatorios)
      name: 'Courts: 1',
      description: `Courts: ${bookCourt.location.description}`,
      invoice: `ref-${Date.now().toString()}`,
      currency: 'cop',
      amount: '5000',
      tax_base: '4000',
      tax: '500',
      tax_ico: '500',
      country: 'co',
      lang: 'es',

      // Onpage="false" - Standard="true"
      // Mostrarlo como un pop up o como página entera
      external: 'false',

      // Atributos opcionales
      extra1: 'extra1',
      extra2: 'extra2',
      extra3: 'extra3',
      // Paginas donde se recibe el estado de la compra
      confirmation: 'http://localhost:5173/LocationSelection',
      response: 'http://localhost:5173/LocationSelection',

      // Atributos del cliente
      name_billing: 'Jhon Doe',
      address_billing: 'Carrera 19 numero 14 91',
      type_doc_billing: 'cc',
      mobilephone_billing: '3050000000',
      number_doc_billing: '100000000'
    }
    handler.open(data)
  }
  return {
    createOrder
  }
}
