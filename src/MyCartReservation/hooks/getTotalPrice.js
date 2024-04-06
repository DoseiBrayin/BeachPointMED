// if you want to use this function you need to have the propertie cost in the object
// and the format must be a string like '60000'
export const getTotalsCOP = ({ list }) => {
  let total = 0
  list.forEach(item => {
    total += parseInt(item.cost)
  })
  const formatedTotal = total.toLocaleString('es-CO', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })
  return formatedTotal
}
