import { Role } from "./Role.model"

export class Utilisateur {

    id!: number
    nom!: string
    prenom!: string
    dateNaissance!: Date
    username!: string
    password!: string
    email!: string
    role!: Role
}