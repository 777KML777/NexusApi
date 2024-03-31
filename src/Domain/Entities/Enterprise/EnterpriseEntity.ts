import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn
} from "typeorm"

@Entity()
export class Enterprise { 
    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    name: string
}