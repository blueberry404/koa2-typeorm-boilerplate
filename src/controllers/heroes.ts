import * as service from '../services/heroes';
import { Context } from 'koa';
import { IHeroRequest } from '../interfaces/hero';

export const getAll = async (ctx: Context, next: () => void) => {
    ctx.state.data = await service.getAll();
    await next();
};

export const save = async (ctx: Context, next: () => void) => {
    const payload: IHeroRequest = ctx.request.body;
    ctx.state.data = await service.addHero(payload);
    await next();
};

export const delHero = async (ctx: Context, next: () => void) => {
    const payload: number = ctx.request.body;
    ctx.state.data = await service.deleteHero(payload);
    await next();
};