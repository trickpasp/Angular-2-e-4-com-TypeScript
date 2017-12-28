import { DaoInterface } from "./dao.interface";
import { Animal } from '../aula07-classes/animal';

export class Dao<T> implements DaoInterface<T>{
    tableName: string = '';
    insert(object: T): boolean {
        console.log('inserting...');
        
        return true;
    }
    update(object: T): boolean {
        return true;
    }
    delete(id: number): T {
        return null;
    }
    find(id: number): T {
        return null;
    }
    findAll(): [T] {
        return [null];
    }
    
}