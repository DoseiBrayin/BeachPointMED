import { v4 as uuidv4 } from 'uuid'
/* eslint-disable */
export class User {
  constructor (cedula, phone_number, email, name, password, card_id, fk_rol) {
    this.id = uuidv4()
    this.cedula = cedula
    this.phone_number = phone_number
    this.email = email
    this.name = name
    this.password = password
    this.card_id = card_id
    this.is_employee = false
    this.fk_rol = fk_rol
}
}
