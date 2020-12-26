import { getRepository } from "typeorm";
import { Users } from "../entities/users";

export const getAll = async () => {
    return getRepository(Users).find();
    //Default await used 
};

export const getUser = async (email: string) => {
    return getRepository(Users).findOne({
        where: {
            email
        }
    });
};

export const getUserById = async (id: number) => {
    return getRepository(Users).findOne(id);
};

export const save = async (user: Users) => {
    return getRepository(Users).insert(user);
};

export const delHero = async (id: number) => {
    return getRepository(Users).delete(id);
};