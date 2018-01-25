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
/* Serviço contato */
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
let ContatoService = class ContatoService {
    constructor(http) {
        this.http = http;
        //url onde vamos utilizar o simulador de banco de dados
        this.contatosUrl = 'app/contatos';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    // Fazendo chamada assicrona ao servidor
    // Convertemos a chamada http para uma promise 
    getContatos() {
        return this.http.get(this.contatosUrl)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }
    //obtendo usuário pelo id
    getContato(id) {
        return this.getContatos()
            .then((contatos) => contatos.find(contato => contato.id === id));
    }
    //método de criar contatos
    create(contato) {
        return this.http
            .post(this.contatosUrl, JSON.stringify(contato), { headers: this.headers })
            .toPromise()
            .then((response) => response.json().data)
            .catch(this.handleError);
    }
    //método para alterar contato
    update(contato) {
        const url = `${this.contatosUrl}/${contato.id}`; // app/contato/:id
        return this.http
            .put(url, JSON.stringify(contato), { headers: this.headers })
            .toPromise()
            .then(() => contato)
            .catch(this.handleError);
    }
    delete(contato) {
        const url = `${this.contatosUrl}/${contato.id}`; // app/contato/:id
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(() => contato)
            .catch(this.handleError);
    }
    //metodo de tratamento de erro
    handleError(err) {
        console.log('Error: ', err);
        return Promise.reject(err.message || err);
    }
    //Colocando tempo de espera de 6 segundos
    getContatosSlowly() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 2000);
        })
            .then(() => {
            console.log('Primero then');
            return 'Aprendendo Angular 2';
        })
            .then((param) => {
            console.log('Segundo then');
            console.log(param);
            return new Promise((resolve2, reject2) => {
                setTimeout(() => {
                    console.log('Continuando depois de 4 segundos');
                    resolve2();
                }, 4000);
            });
        })
            .then(() => {
            console.log("Terceiro then");
            return this.getContatos();
        });
    }
};
ContatoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ContatoService);
exports.ContatoService = ContatoService;
//# sourceMappingURL=contato.service.js.map