import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatosListaComponent } from './contatos-lista.component';
import { ContatoDetalheComponent } from './contato-detalhe.component';

const contatoRoutes: Routes = [
    {    
        /* faz o roteamento para contatoslistacomponent */
        path: 'contato',
        component: ContatosListaComponent
    },
    {
        // faz o roteamento para contatodetalhecomponet
        path: 'contato/save',
        component: ContatoDetalheComponent
    },
    {
        // passando paramêtro no roteamento, caminho, usasse dois pontos ":""
        path: 'contato/save/:id',
        component: ContatoDetalheComponent
    }
]

@NgModule({
    imports: [
        // criando um roteador com rotas filhas
        RouterModule.forChild(contatoRoutes)
    ], 
    exports: [
        RouterModule
    ]
})
export class ContatoRoutingModule {}