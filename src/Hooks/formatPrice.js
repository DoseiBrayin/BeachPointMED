export const formatPrice = (price) => {
    // Convertir el número a una cadena de texto y separar la parte entera de la decimal
    const partes = price.toString().split('.')
  
    // Formatear la parte entera
    const parteEntera = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  
    // Si hay parte decimal
    if (partes.length === 2) {
      let parteDecimal = partes[1]
  
      // Añadir ceros adicionales si la parte decimal tiene menos de tres dígitos
      parteDecimal = parteDecimal.padEnd(3, '0')
  
      return `${parteEntera}.${parteDecimal}`
    } else {
      // Si no hay parte decimal, agregar '.000'
      return `${parteEntera}.000`
    }
  }
  