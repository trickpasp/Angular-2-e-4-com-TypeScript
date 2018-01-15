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
    
    //Colocando tempo de espera de 6 segundos
    getContatosSlowly(): Promise<Contato[]> {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 6000);
        }).then(() => this.getContatos());
    }
}