/* Serviço contato */
import { Injectable } from '@angular/core';

import { Contato } from './contato.model';
import { CONTATOS } from './contatos.mock';

@Injectable()
export class ContatoService{
    
    // Fazendo chamada assicrona ao servidor
    getContatos(): Promise<Contato[]> {
        return Promise.resolve(CONTATOS);
    }
}