import { Component, OnInit } from '@angular/core';

import { Contato } from './contato.model';
import { ContatoService } from './contato.service';

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
    constructor(private contatoService: ContatoService){}

    ngOnInit(): void {
        this.contatoService.getContatos()
            //usando promise, usando arraw function
            .then((contatos: Contato[]) =>{
                  this.contatos = contatos;  
            }).catch(err => console.log(err));
    }

}