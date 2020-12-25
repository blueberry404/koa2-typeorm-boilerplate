import * as joi from 'joi';
import * as repo from '../repositories/users';
import { ILoginRequest } from '../interfaces/LoginRequest';

export const loginUser = async (request: ILoginRequest) => {
    await joi.validate(request, {
        email: joi.string().required().email(),
        password: joi.string().required()
    });

    return repo.getUser(request.email);
};
