import { Component, OnInit } from '@angular/core';

import { Contato } from './contato.model';
import { ContatoService } from './contato.service';
import { DialogService } from '../dialog.service';

@Component({
    moduleId: module.id,
    selector: 'contatos-lista',
    templateUrl: 'contatos-lista.component.html'    
})
export class ContatosListaComponent implements OnInit{    
    
    contatos: Contato[];
    /* Chamamos contatoservice no construtor, 
    isso serve para o sistema de injeção de dependência do Angular 
    saiba como injetar de forma correta */
    constructor(
        private contatoService: ContatoService,
        private dialogService: DialogService 
    ){}

    ngOnInit(): void {
        this.contatoService.getContatos()
            //usando promise, usando arraw function
            .then((contatos: Contato[]) =>{
                  this.contatos = contatos;  
            }).catch(err => {
                console.log('Aconteceu um erro: ', err);
            });
    }
    //metodo utilizado para deletar
    onDelete(contato: Contato): void {
        this.dialogService.confirm('Deseja deletar o contato ' + contato.nome + '?')
            .then((canDelete: boolean) => {

                if(canDelete){

                    this.contatoService
                        .delete(contato)
                        .then(() => {

                            this.contatos = this.contatos.filter((c: Contato) => c.id != contato.id);

                        }).catch(err => {
                            console.log(err);
                        });

                }

            });
    }

}