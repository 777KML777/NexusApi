import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn
} from "typeorm"

@Entity()
export class PublicationEntity { 

    // {TODO} Aplicar herança futuramente
    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    description: string 

    @CreateDateColumn()
    datePost: Date

    @Column() 
    image: string

    // {TODO} corrigir isso depois com foreign key
    @Column() 
    userId: number

    @Column() 
    enterpriseId: number
}