import {
    Column,
    Entity,
    PrimaryGeneratedColumn
} from "typeorm"

@Entity()
export class User {

    // {TODO} Aplicar herança futuramente
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    // @Column() 
    // password : string = ''

    // @Column()
    // accessCode : string =''

    // @Column() 
    // photograph: string = ''

    // // {TODO} corrigir isso depois com foreign key
    // @Column()
    // enterpriseId: number = 0

}
