"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const common_1 = require("@angular/common");
const contato_model_1 = require("./contato.model");
const contato_service_1 = require("./contato.service");
let ContatoDetalheComponent = class ContatoDetalheComponent {
    constructor(contatoService, route, location) {
        this.contatoService = contatoService;
        this.route = route;
        this.location = location;
        //utilizada para dizer que estamos entrando em um formulário para cadastrar um novo usuário
        this.isNew = true;
    }
    //buscando usuário pelo id
    ngOnInit() {
        // nós temos que inicializar aqui, pois ele primeiro carrega o OnInit e para pegar os valores, assim, temos que inicializar
        this.contato = new contato_model_1.Contato(0, '', '', '');
        this.route.params.forEach((params) => {
            let id = +params['id'];
            //verificando parâmetro de rota
            if (id) {
                this.isNew = false;
                this.contatoService.getContato(id)
                    .then((contato) => {
                    this.contato = contato;
                });
            }
        });
    }
    //metódo criado para retornar a classe form-group do bootstrap
    getFormGroupClass() {
        return {
            'form-group': true
        };
    }
    //método criado para retornar a classe form-control do bootstrap mais as validações
    getFormControlClass(isValid, isPristine) {
        return {
            'form-control': true,
            'is-invalid': !isValid && !isPristine,
            'is-valid': isValid && !isPristine
        };
    }
    //método para fazer submissão do formulário
    onSubmit() {
        let promise;
        if (this.isNew) {
            console.log('cadastrar contato');
            promise = this.contatoService.create(this.contato);
        }
        else {
            console.log('alterar contato');
            promise = this.contatoService.update(this.contato);
        }
        promise.then(contato => this.location.back());
    }
};
ContatoDetalheComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "contato-detalhe",
        templateUrl: "contato-detalhe.component.html"
    }),
    __metadata("design:paramtypes", [contato_service_1.ContatoService,
        router_1.ActivatedRoute,
        common_1.Location])
], ContatoDetalheComponent);
exports.ContatoDetalheComponent = ContatoDetalheComponent;
//# sourceMappingURL=contato-detalhe.component.js.map