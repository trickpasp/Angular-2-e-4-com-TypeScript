import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";

import { Contato } from "./contato.model";
import { ContatoService } from "./contato.service";

@Component({
  moduleId: module.id,
  selector: "contato-detalhe",
  templateUrl: "contato-detalhe.component.html"
})
export class ContatoDetalheComponent implements OnInit {
  // one-way database, porque estamos pegando o atributo da classe e exibindo no html
  contato: Contato;
  //utilizada para dizer que estamos entrando em um formulário para cadastrar um novo usuário
  private isNew: boolean = true;

  constructor(
    private contatoService: ContatoService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  //buscando usuário pelo id
  ngOnInit(): void {
    // nós temos que inicializar aqui, pois ele primeiro carrega o OnInit e para pegar os valores, assim, temos que inicializar
    this.contato = new Contato(0,'','','');
    this.route.params.forEach((params: Params) => {
      let id: number = +params['id'];
      //verificando parâmetro de rota
      if (id) {

          this.isNew = false;

          this.contatoService.getContato(id)
              .then((contato: Contato) => {
                    this.contato = contato;
              });
      }
    });
  }
  //metódo criado para retornar a classe form-group do bootstrap
  getFormGroupClass(): {} {
    return {
        'form-group':true        
    };
  }
  //método criado para retornar a classe form-control do bootstrap mais as validações
  getFormControlClass(isValid: boolean, isPristine: boolean): {} {
    return {
        'form-control':true,
        'is-invalid': !isValid && !isPristine,
        'is-valid': isValid && !isPristine
    };
  }
  
  //método para fazer submissão do formulário
  onSubmit(): void {

    let promise;
    
    if (this.isNew){
        console.log('cadastrar contato');        
        promise = this.contatoService.create(this.contato);
    } else {
        console.log('alterar contato');
        promise = this.contatoService.update(this.contato);
    }
    
    promise.then(contato => this.goBack());

  }

  goBack(): void {
    this.location.back();
  }

 
}
