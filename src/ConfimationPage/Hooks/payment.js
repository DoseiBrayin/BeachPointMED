import { useBookYourCourtContext } from '../../context/BookYourCourtContext'

export function Payment () {
  const { bookCourt } = useBookYourCourtContext()

  function formatCOP () {
    let formatedTotal = bookCourt.GrandTotal * 1000
    formatedTotal = Math.round(formatedTotal)
    return formatedTotal.toString().replace('.', '')
  }

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
      amount: `${formatCOP()}`,
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
      response: 'beachpointmed.pages.dev/CheckOutConfirmation',
      confirmation: 'http://localhost:5173/LocationSelection',

      // Atributos del cliente
      name_billing: bookCourt.user.name,
      address_billing: '',
      type_doc_billing: 'cc',
      mobilephone_billing: bookCourt.user.number,
      number_doc_billing: bookCourt.user.cedula
    }
    handler.open(data)
  }
  return {
    createOrder
  }
}
