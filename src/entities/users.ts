import { PrimaryGeneratedColumn, Entity, Column } from "typeorm";

@Entity('users')
export class Users {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        type: 'character varying',
    })
    public name: string;

    @Column({
        type: 'character varying'
    })
    public email: string;

    @Column({
        type: 'character varying'
    })
    public passwordHash: string;
}