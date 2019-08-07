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