import { Empresa } from "./Empresa";


export class Fornecedor extends Empresa{
  
    private _segmento: string;
    private _produtos: string;
    
  
    constructor(nome: string, cnpj:string, endereco: string, telefone: string) {
      super();
      
      this._segmento = "";
      this._produtos = "";
      
    }


  loginF(user: string, password: number) : void {
    if(user === "Fornecedor1" && password === 4321){
      console.log(`Sucess!`);
  }else{
      console.log(`Usuário ou senha incorretos!`) 
  }}
  }
  
