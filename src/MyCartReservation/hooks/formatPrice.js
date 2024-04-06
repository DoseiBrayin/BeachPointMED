export const formatPrice = (number) => {
  const grupos = number.split('').reverse().join('').match(/\d{1,3}/g)
  const numeroFormateado = grupos.join('.').split('').reverse().join('')
  return numeroFormateado
}
