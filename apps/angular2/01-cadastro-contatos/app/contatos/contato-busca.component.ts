import { Component, OnInit } from '@angular/core';


import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import {Contato} from './contato.model';
import { ContatoService } from './contato.service';


@Component({
    moduleId: module.id,
    selector: 'contato-busca',
    templateUrl: 'contato-busca.component.html'
})
export class ContatoBuscaComponent implements OnInit {

    contatos: Observable<Contato[]>;
    private termosDaBusca: Subject<string> = new Subject<string>();

    constructor(
        private contatoService: ContatoService
    ) { }

    ngOnInit(): void { 
        this.contatos = this.termosDaBusca
            .debounceTime(500) //aguarde por 300ms para emitir novos eventos
            .distinctUntilChanged() //ignore se o próximo termo de busca for igual ao anterior
            .switchMap(term => term ? this.contatoService.search(term) : Observable.of<Contato[]>([]))
            .catch(err => {
                return Observable.of<Contato[]>([]);
            });       
    }

    search(term: string): void {
        this.termosDaBusca.next(term);
    }

}