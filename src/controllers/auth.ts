import { Context } from "koa";
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

import { ILoginRequest } from "../interfaces/LoginRequest";
import * as service from '../services/auth';
import { Users } from "../entities/users";

export const loginUser = async (ctx: Context, next: () => void) => {
    const request = ctx.request.body as ILoginRequest;
    const response = await service.loginUser(request);
    if(response) {
        const user = response as Users;
        const isCorrect = await isCorrectPassword(request.password, user.password);
        if(isCorrect) {
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET ?? "", {
                expiresIn: process.env.JWT_EXPIRES_IN
              });
            ctx.state.data = { token };
        }
        else {
            invalidLoginState(ctx);
        }
    }
    else {
        invalidLoginState(ctx);
    }
    next();
};



const isCorrectPassword = async (
    candidatePassword: string,
    actualPassword: string
  ) => await bcrypt.compare(candidatePassword, actualPassword);

const invalidLoginState = (ctx: Context) => {
    ctx.state.data = { "message": "Either email or password is incorrect" };
    ctx.response.status = 400; //hardcoding status number for now
};
