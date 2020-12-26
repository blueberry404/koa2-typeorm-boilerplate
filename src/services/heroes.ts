import * as joi from 'joi';
import * as repo from '../repositories/heroes';
import { IHeroRequest } from '../interfaces/hero';
import { Heroes } from '../entities/heroes';
import { IHeroDeleteRequest, IHeroUpdateRequest } from '../interfaces/heroUpdate';

export const getAll = async () => {
    return repo.getAll();
};

export const addHero = async (hero: IHeroRequest, userID: number) => {
    await joi.validate(hero, {
        name: joi.string().required(),
    });
    const toSaveHero = new Heroes();
    toSaveHero.name = hero.name;
    toSaveHero.isActive = true;
    toSaveHero.userId = userID;
    return repo.save(toSaveHero);
};

export const deleteHero = async (req: IHeroDeleteRequest) => {
    await joi.validate(req, {
        id: joi.number().required(),
    });
    return repo.delHero(req.id);
};

export const updateHero = async (hero: IHeroUpdateRequest) => {
    await joi.validate(hero, {
        id: joi.number().required(),
        name: joi.string().required(),
    });
    return repo.updateHero(hero.id, hero.name);
};