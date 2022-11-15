
export class Empresa {
  private _nome: string ="";
  private _cnpj: string = "";
  private _endereco: string= "";
  private _telefone: string = "";
  constructor() { }

 
  // listar() : void {
  //   console.log("Empresa: ");
  //   console.log("Nome: ", this.nome);
  //   console.log("CNPJ: ", this.cnpj);
  //   console.log("Endereço: ", this.endereco);
  //   console.log("Telefone: ", this.telefone);
    
  // }

  listar() : string {
  return(
   `====== Listar Fornecedores ======\n|Nome: ${this._nome}${"\n|CNPJ: " + this._cnpj}${"\n|Endereço: " + this._endereco}${`\n|Telefone: ${this._telefone}`}\n=============================`
  );
}


}





