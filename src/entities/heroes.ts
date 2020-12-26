import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable } from "typeorm";
import { Users } from "./users";

@Entity('heroes')
export class Heroes {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        type: 'character varying',
    })
    public name: string;

    @Column({
        type: 'boolean'
    })
    public isActive: boolean;

    @ManyToOne(() => Users, user => user.heroes)
    user: Users

    @Column({ type: 'int' })
    userId: number; //createdBy column
}