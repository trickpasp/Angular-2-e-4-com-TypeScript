import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContatoDetalheComponent } from './contato-detalhe.component';
import { ContatosListaComponent } from './contatos-lista.component';
import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoService } from './contato.service';

@NgModule({
    imports: [
        CommonModule,
        ContatoRoutingModule,
        FormsModule
    ],
    declarations: [
        ContatoDetalheComponent,
        ContatosListaComponent
    ],
    exports: [
        ContatosListaComponent
    ],
    //Passando a instância de ContatoService
    providers: [
        ContatoService
    ]
})
export class ContatosModule{}