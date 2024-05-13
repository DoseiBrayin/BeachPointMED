export const formatTime = (time) => {
    // Convertir el número a una cadena de texto y separar la parte entera de la decimal
    const hora = time < 10 ? `0${time}:00` : `${time}:00`
    const horaFinal = time >= 12 ? `${time}:00pm` : `${hora}am`
    return horaFinal
  }
  