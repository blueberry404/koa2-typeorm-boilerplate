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
    const hero = await getRepository(Heroes).findOne({
        where: {
            id,
            isActive: true
        }
    });
    if(hero) {
        hero.isActive = false;
        await save(hero);
        return "success";
    }
    return "unable to find user";
};

export const updateHero = async (id: number, name: string) => {
    const hero = await getRepository(Heroes).findOne(id);
    if(hero) {
        hero.name = name;
        await save(hero);
    }
    return hero;
};
