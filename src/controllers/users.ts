import * as service from '../services/users';
import { Context } from 'koa';
import { ICreateUserRequest } from '../interfaces/user';
import { Users, NoPassUser } from '../entities/users';

export const getAll = async (ctx: Context, next: () => void) => {
    var users = await service.getAll();
    const editedUsers = users.map((value: Users) => new NoPassUser(value));
    ctx.state.data = editedUsers;
    next();
};

export const signup = async (ctx: Context, next: () => void) => {
    const payload: ICreateUserRequest = ctx.request.body;
    ctx.state.data = await service.addUser(payload);
    next();
};
