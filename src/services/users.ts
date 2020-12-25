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

    let saltNum = process.env.SALT_ROUNDS || ''
    let hashPassword = bcrypt.hashSync(user.password, +saltNum);

    const newUser = new Users();
    newUser.name = user.name;
    newUser.password = hashPassword;
    newUser.email = user.email;
    return repo.save(newUser);
};