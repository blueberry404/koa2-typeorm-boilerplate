import { getRepository } from "typeorm";
import { Heroes } from "../entities/heroes";

export const getAll = async () => {
    return getRepository(Heroes).find({
        where: {
            isActive: true,
        }
    });
    //Default await used 
};

export const save = async (hero: Heroes) => {
    return getRepository(Heroes).save(hero);
};

export const delHero = async (id: number) => {
    return getRepository(Heroes).delete(id);
};