import { Context } from 'koa';
import { promisify } from 'util';
import * as jwt from 'jsonwebtoken';

import { getUserById } from '../repositories/users';
import { AppError } from '../utils/appError';

export const protectRoute = async (ctx: Context, next: () => void) => {

    let token;
    if (
        ctx.headers.authorization &&
        ctx.headers.authorization.startsWith('Bearer')
    ) {
        token = ctx.headers.authorization.split(' ')[1];
    }

    if(!token) {
        //TODO: Can we use Boom here?
        throw new AppError("You are not authorized to access", 401);
    }
    //verify token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET ?? "") as JwtPayload;
    const response = await getUserById(decoded.id);
    if(response) {
        ctx.state.user = response;
    }
    else {
        throw new AppError("You are not authorized to access", 401);
    }
    await next();
}

interface JwtPayload {
    id: number;
}