import { Dao } from './dao';
import { Animal } from '../aula07-classes/animal';
import { DaoInterface } from './dao.interface';
import { Cavalo } from '../aula07-classes/cavalo';

let dao: DaoInterface<Animal> = new Dao<Animal>();
let animal: Animal = new Animal('Miguel');
let cavalo: Cavalo = new Cavalo('Pé de pano');


dao.insert(cavalo);