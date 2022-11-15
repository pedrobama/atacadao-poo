import { Empresa } from "./Empresa";

export class Fornecedor extends Empresa{
  
    segmento: string;
    produtos: string;

    constructor(nome: string, cnpj: string, endereco: string, telefone: string) {
      super(nome, cnpj, endereco, telefone);
      this.nome = nome;
      this.cnpj = cnpj;
      this.endereco = endereco;
      this.telefone = telefone;
      this.segmento = "Alimentício";
      this.produtos = "Morango, Melão";
    }

  public loginF(user: string, password: number) : string {
    if(user === "Fornecedor1" && password === 4321){
      return (`Sucess!`);
  }else{
      return(`Usuário ou senha incorretos!`) 
  }}

  public status() : void {
    
    console.log("Segmento: ", this.segmento);
    console.log("Produto: ", this.produtos);
    
    
  }
  listar(): string {
    return (
      `===== Listar Fornecedores =====\n|Nome: ${this.nome}${"\n|CNPJ: " + this.cnpj}${"\n|Endereço: " + this.endereco}${`\n|Telefone: ${this.telefone}`}\n===============================`
    );
  }

  
  }
  
