export interface Tarefa {
  id?:string;
  nome?: string;
  idTrab?: Number; 
  descricao?: string;
  concluido?: boolean; 
  dataEntrega?: Date;
  numTarefa?: Number;
}