import * as service from '../services/heroes';
import { Context } from 'koa';
import { IHeroRequest } from '../interfaces/hero';
import { IHeroUpdateRequest, IHeroDeleteRequest } from '../interfaces/heroUpdate';
import { Users } from '../entities/users';

export const getAll = async (ctx: Context, next: () => void) => {
    ctx.state.data = await service.getAll();
    next();
};

export const save = async (ctx: Context, next: () => void) => {
    const payload: IHeroRequest = ctx.request.body;
    const user = ctx.state.user as Users;
    ctx.state.data = await service.addHero(payload, user.id);
    next();
};

export const delHero = async (ctx: Context, next: () => void) => {
    const payload: IHeroDeleteRequest = ctx.request.body;
    ctx.state.data = await service.deleteHero(payload);
    next();
};

export const updateHero = async (ctx: Context, next: () => void) => {
    const payload: IHeroUpdateRequest = ctx.request.body;
    ctx.state.data = await service.updateHero(payload);
    next();
};