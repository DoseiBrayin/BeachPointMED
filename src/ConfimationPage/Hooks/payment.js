import { useLocalStorage } from '../../Hooks/useLocalStorage'

export function Payment () {
  const { getItem } = useLocalStorage({ key: 'order' })

  const order = getItem()

  function formatCOP () {
    let formatedTotal = order.GrandTotal * 1000
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
      name: `Courts: ${order.location.description}`,
      description: `Courts: ${order.location.description}`,
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
      // Paginas donde se recibe el estado de la compra
      response: 'beachpointmed.pages.dev/CheckOutConfirmation',
      confirmation: 'https://beachpointmed-back.onrender.com/payment',
      // Atributos del cliente
      name_billing: order.user.name,
      address_billing: '',
      type_doc_billing: 'cc',
      mobilephone_billing: order.user.number,
      number_doc_billing: order.user.cedula,
      x_extra1: order.courts
    }
    handler.open(data)
  }
  return {
    createOrder
  }
}
