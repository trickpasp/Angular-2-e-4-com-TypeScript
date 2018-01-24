/* Módulo de roteamento */
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

/* Arrays de objetos que vão configurar nossas rotas */
const appRoutes: Routes = [
    /* Primeira rota, rota raiz */
  {
    path: '',
    redirectTo: 'contato',
    pathMatch: 'full'
  }
];

@NgModule({
    imports: [
        // passa as rotas que criamos, nosso modulo de rotas root
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
