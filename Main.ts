
import prompt from 'prompt-sync';
import { Fornecedor } from './Fornecedor';

let fornecedor: Fornecedor = new Fornecedor("Fornecedor1", "xxxxxxxxxxx/0001", "Andrade Neves, 1543", "(53)30274310");

let teclado = prompt();
let escolha: number = 0;

while (escolha != 9) {

    console.log(`1. Login Fornecedor`)
    console.log(`2. Listar Fornecedores`)
    console.log(`3. Cadastrar novo Atacadista`)
    console.log(`4. Cadastrar nova Venda`)
    console.log(`5. Listar Status`)
    console.log(`9. Sair`)

    escolha = +teclado(`Escolha uma opção: `)

    switch (escolha) {
        case 1:
            let user: string = teclado(`Digite o nome de usuário: `);
            let password: number = +teclado(`Digite a senha: `);
            
            console.log(
             fornecedor.loginF(user, password));
            break;
        case 2:
            // empresa.listar();
           console.log(fornecedor.listar());
            break;
        case 5:
       fornecedor.status()
      break;    
        case 9:
        default:
            break;
    }

}

