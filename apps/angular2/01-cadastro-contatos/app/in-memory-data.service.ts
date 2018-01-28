import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contato } from './contatos/contato.model';


export class InMemoryDataService implements InMemoryDbService {
    //serve para fazer a simulação do banco de dados
    createDb(): {} {
        let contatos: Contato[] = [
            {id: 1, nome: 'Fulano de tal', email: 'fulano@email.com', telefone: '(00) 0000-0000'},
            {id: 2, nome: 'Ciclano', email: 'ciclano@email.com', telefone: '(00) 0000-0000'},
            {id: 3, nome: 'Patrick Estrela', email: 'patrick@email.com', telefone: '(00) 0000-0000'},
            {id: 4, nome: 'Monkey D. Luffy', email: 'luffy@email.com', telefone: '(00) 0000-0000'},
            {id: 5, nome: 'Fada Cininho', email: 'cininho@email.com', telefone: '(00) 0000-0000'},
        ];
        return {'contatos': contatos};
    }
    
}