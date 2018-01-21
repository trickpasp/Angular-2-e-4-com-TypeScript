import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Contato } from './contato.model';
import { ContatoService } from './contato.service';

@Component({
    moduleId: module.id,
    selector: 'contato-detalhe',
    templateUrl: 'contato-detalhe.component.html'
})
export class ContatoDetalheComponent implements OnInit{
    // one-way database, porque estamos pegando o atributo da classe e exibindo no html
    contato: Contato;
   
    constructor(
        private contatoService: ContatoService,
        private route: ActivatedRoute,
        private location: Location
    ){}
    
    //buscando usuário pelo id
    ngOnInit(): void {
        // nós temos que inicializar aqui, pois ele primeiro carrega o OnInit e para pegar os valores, assim, temos que inicializar
        this.contato = new Contato(0, '', '', '');
        this.route.params.forEach((params: Params) => {
            let id: number = +params['id'];
            console.log(id);

            this.contatoService.getContato(id)
                .then((contato: Contato) => {
                    this.contato = contato;
                });
        });
    }

    teste(): void {
        console.log(this.contato);
    }
    
}