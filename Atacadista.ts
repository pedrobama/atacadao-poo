import { Empresa } from "./Empresa";

export class Atacadista extends Empresa{
    constructor(nome: string, cnpj: string, endereco: string, telefone: string) {
        super(nome, cnpj, endereco, telefone);
        this.nome = nome;
        this.cnpj = cnpj;
        this.endereco = endereco;
        this.telefone = telefone;

}


}