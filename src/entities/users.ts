import { PrimaryGeneratedColumn, Entity, Column, OneToMany, JoinTable } from "typeorm";
import { Heroes } from "./heroes";

@Entity('users')
export class Users {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        type: 'character varying',
    })
    public name: string;

    @Column({
        type: 'character varying',
        unique: true
    })
    public email: string;

    @Column({
        type: 'character varying'
    })
    public password: string;

    @OneToMany(() => Heroes, hero => hero.user)
    @JoinTable()
    heroes: [Heroes]
}

export class NoPassUser {
    id: number;
    name: string;
    email: string;

    constructor(user: Users) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
    }
}