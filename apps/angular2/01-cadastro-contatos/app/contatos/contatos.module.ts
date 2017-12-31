import { NgModule } from '@angular/core';
import { ContatosListaComponent } from './contatos-lista.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ContatosListaComponent
    ],
    exports: [
        ContatosListaComponent
    ]
})
export class ContatosModule{}