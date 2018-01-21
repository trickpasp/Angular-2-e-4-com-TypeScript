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
    //obtendo usuário pelo id
    getContato(id: number): Promise<Contato> {
        return this.getContatos()
            .then((contatos: Contato[]) => contatos.find(contato =>  contato.id === id));
    } 
    
    //Colocando tempo de espera de 6 segundos
    getContatosSlowly(): Promise<Contato[]> {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 2000);
        })
        .then(() => {
            console.log('Primero then');
            return 'Aprendendo Angular 2';
        })
        .then((param: string) => {
            console.log('Segundo then');            
            console.log(param);

            return new Promise((resolve2,reject2) => {
                setTimeout(() =>{
                    console.log('Continuando depois de 4 segundos');
                    resolve2();
                },4000);
            });
        })
        .then(() => {
            console.log("Terceiro then")
            return this.getContatos();
        });
    }
}