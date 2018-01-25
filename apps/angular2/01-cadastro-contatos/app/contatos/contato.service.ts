/* Serviço contato */
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Contato } from './contato.model';
import { CONTATOS } from './contatos.mock';

@Injectable()
export class ContatoService{
    
    //url onde vamos utilizar o simulador de banco de dados
    private contatosUrl: string = 'app/contatos';
    private headers: Headers = new Headers({'Content-Type': 'application/json'});

    constructor(
        private http: Http
    ){}
    
    // Fazendo chamada assicrona ao servidor
    // Convertemos a chamada http para uma promise 
    getContatos(): Promise<Contato[]> {
        return this.http.get(this.contatosUrl)
                .toPromise()
                .then(response => response.json().data as Contato[])
                .catch(this.handleError);
    }
    //obtendo usuário pelo id
    getContato(id: number): Promise<Contato> {
        return this.getContatos()
            .then((contatos: Contato[]) => contatos.find(contato =>  contato.id === id));
    } 

    // criando método de criar contatos
    create(contato: Contato): Promise<Contato> {
        return this.http
            .post(this.contatosUrl, JSON.stringify(contato), {headers: this.headers})
            .toPromise()
            .then((response: Response) => response.json().data as Contato)
            .catch(this.handleError);
    }
    //método para alterar contato
    update(contato: Contato): Promise<Contato>{
        const url = `${this.contatosUrl}/${contato.id}`; // app/contato/:id
        return this.http
            .put(url, JSON.stringify(contato), {headers: this.headers})
            .toPromise()
            .then(() => contato as Contato)
            .catch(this.handleError);
    }
    
    //criando metodo de tratamento de erro
    private handleError(err: any): Promise<any> {
        console.log('Error: ', err);
        return Promise.reject(err.message || err);
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