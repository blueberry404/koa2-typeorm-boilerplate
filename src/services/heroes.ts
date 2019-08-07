import * as repo from '../repositories/heroes';

export const getAll = async () => {
    return repo.getAll();
};