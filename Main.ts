
import prompt from 'prompt-sync';
import { Atacadista } from './Atacadista';
import { Fornecedor } from './Fornecedor';
// let nomeFant: string = "";
// let cnpjFant: string = "";
// let enderecoFant: string = "";
// let telefoneFant: string = "";

let teclado = prompt();
let fornecedor: Fornecedor = new Fornecedor("Fornecedor1", "xxxxxxxxxxx/0001", "Andrade Neves, 1543", "(53)30274310");

let atacadista: Atacadista[] = [];

let escolha: number = 0;

while (escolha != 9) {

    console.log(`1. Login Fornecedor`)
    console.log(`2. Listar Fornecedores`)
    console.log(`3. Cadastrar Atacadista`)
    console.log(`4. Listar Atacadistas`)
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
        case 3:
            // let atacadista: Atacadista = new Atacadista(
            //     nomeFant = teclado('Digite o nome fantasia: ')!,
            //     cnpjFant = teclado('Digite o CNPJ: ')!, 
            //     enderecoFant = teclado('Digite o endereço: ')!,
            //     telefoneFant =  teclado('DIgite o telefone: ')!);
            // console.log(atacadista.cadastrarAt());
            atacadista.push(new Atacadista(
                teclado("Digite o nome da empresa: "),
                teclado("Digite o CNPJ da empresa: "),
                teclado("Digite o endereco da empresa: "),
                teclado("Digite o telefone da empresa: ")
            ));

            break;
        case 4:
            console.log("\nHá " + atacadista.length + " atacadistas cadastrados no momento.\n");
            for (let i = 0; i < atacadista.length; i++) {
                console.log(atacadista[i]);
                
            }
            break;
        case 5:
            fornecedor.status()
            break;
        case 9:
        default:
            break;
    }

}

