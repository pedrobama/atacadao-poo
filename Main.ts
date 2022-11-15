
import prompt from 'prompt-sync';
import { Empresa } from './Empresa'
import { Fornecedor } from './Fornecedor';

let empresa: Empresa = new Empresa();
// console.log("empresa: >>", empresa);
let fornecedor: Fornecedor = new Fornecedor("Fornecedor1", "98738938217/0001", "aishdiuhs", "19827387182");

let teclado = prompt();
let escolha: number = 0;

while (escolha != 9) {

    console.log(`1. Login Fornecedor`)
    console.log(`2. Listar Fornecedores`)
    console.log(`3. Cadastrar novo Atacadista`)
    console.log(`4. Cadastrar nova Venda`)
    console.log(`9. Sair`)

    escolha = +teclado(`Escolha uma opção: `)

    switch (escolha) {
        case 1:
            let user: string = teclado(`Digite o nome de usuário: `);
            let password: number = +teclado(`Digite a senha: `);
            
            fornecedor.loginF(user, password);
            break;
        case 2:
            // empresa.listar();
           console.log(fornecedor.listar());
            break;
        case 4:
      // empresa.novoAtacadista();     
      break;    
        case 9:
        default:
            break;
    }

}

