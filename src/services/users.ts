import * as joi from 'joi';
import * as bcrypt from 'bcrypt';

import * as repo from '../repositories/users';
import { ICreateUserRequest } from '../interfaces/user';
import { Users } from '../entities/users';

export const getAll = async () => {
    return repo.getAll();
};

export const addUser = async (user: ICreateUserRequest) => {
    await joi.validate(user, {
        name: joi.string().required(),
        email: joi.string().required().email({ minDomainAtoms: 2 }),
        password: joi.string().required(),
    });

    let hashPassword = bcrypt.hashSync(user.password, 5);
    console.log(`converted pass: ${hashPassword}`);

    const newUser = new Users();
    newUser.name = user.name;
    newUser.passwordHash = hashPassword;
    newUser.email = user.email;
    return repo.save(newUser);
};