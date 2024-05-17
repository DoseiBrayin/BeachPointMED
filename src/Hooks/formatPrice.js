export const formatPrice = (price) => {
  // Asegurarse de que el precio sea un número con dos decimales
  const priceNumber = parseFloat(price).toFixed(3)
  // Convertir el número a una cadena de texto y separar la parte entera de la decimal
  const partes = priceNumber.split('.')
  // Formatear la parte entera
  const parteEntera = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.')

  // Obtener la parte decimal y asegurar que tenga tres dígitos
  const parteDecimal = partes[1] || '000'

  return `${parteEntera}.${parteDecimal}`
}
