import * as joi from 'joi';
import * as repo from '../repositories/heroes';
import { IHeroRequest } from '../interfaces/hero';
import { Heroes } from '../entities/heroes';
import { IHeroUpdateRequest } from '../interfaces/heroUpdate';

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
    await joi.validate(id, {
        id: joi.number().required(),
    });
    return repo.delHero(id);
};

export const updateHero = async (hero: IHeroUpdateRequest) => {
    await joi.validate(hero, {
        id: joi.number().required(),
        name: joi.string().required(),
    });
    const toSaveHero = new Heroes();
    toSaveHero.id = hero.id;
    toSaveHero.name = hero.name;
    return repo.save(toSaveHero);
};