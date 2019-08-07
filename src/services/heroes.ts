import * as joi from 'joi';
import * as repo from '../repositories/heroes';
import { IHeroRequest } from '../interfaces/hero';
import { Heroes } from '../entities/heroes';
import { join } from 'path';

export const getAll = async () => {
    return repo.getAll();
};

export const addHero = async (hero: IHeroRequest) => {
    await joi.validate(hero, {
        name: joi.string().required(),
    });
    const toSaveHero = new Heroes();
    toSaveHero.name = hero.name;
    toSaveHero.isActive = true;
    return repo.save(toSaveHero);
};

export const deleteHero = async (id: number) => {
    return repo.delHero(id);
};