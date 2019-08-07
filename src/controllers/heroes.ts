import * as service from '../services/heroes';
import { Context } from 'koa';

export const getAll = async (
    ctx: Context, next: () => void
) => {
    ctx.state.data = await service.getAll();
    await next();
};
