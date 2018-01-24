import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contato } from './contatos/contato.model';


export class InMemoryDataService implements InMemoryDbService {
    //serve para fazer a simulação do banco de dados
    createDb(): {} {
        let contatos: Contato[] = [
            {id: 1, nome: 'Fulano de tal', email: 'fulano@email.com', telefone: '(00) 0000-0000'},
            {id: 2, nome: 'Ciclano', email: 'ciclano@email.com', telefone: '(01) 1000-0000'},
            {id: 3, nome: 'Patrick Estrela', email: 'patrick@email.com', telefone: '(09) 0300-0010'},
            {id: 4, nome: 'Monkey D. Luffy', email: 'luffy@email.com', telefone: '(16) 0800-0030'},
            {id: 5, nome: 'Fada Cininho', email: 'cininho@email.com', telefone: '(90) 1023-8389'}
        ]

        let carros: any[] = [
            {id: 1, descricao: 'Camaro'},
            {id: 2, descricao: 'Mustang'}
        ];

        return {
            'contatos': contatos,
            'carros': carros
        };
    }
    
}