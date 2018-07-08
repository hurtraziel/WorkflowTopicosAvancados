import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../../models/tarefa';
import { TarefaService } from '../../services/tarefa.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adicionar-tarefa',
  templateUrl: './adicionar-tarefa.component.html',
  styleUrls: ['./adicionar-tarefa.component.scss']
})
export class AdicionarTarefaComponent implements OnInit {

  tarefas: Tarefa[]; //usado para gerar o length dos tarefas.
  dataTempFinal: any; //usado para concatenar com a data que p banco entende
  idTemp: String;
  idTrabTemp: Number;

  tarefa: Tarefa[];
  tarefaNovo: Tarefa = { // gravar coleção
    nome: '',
    descricao: '',
    numTarefa: null,
    dataEntrega: null,
    idTrab: null,
    concluido: null,
    idResp: '',
    id: ''
  }  

  constructor(private tarefaService: TarefaService, private route: ActivatedRoute) {
    this.dataTempFinal = new Date();
  }


  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.idTemp = params['id']; //o paramametro enviado via rota url é um String
      }
    );
    this.idTrabTemp = Number(this.idTemp); 
    this.tarefaService.getTarefas(this.idTrabTemp).subscribe(tarefas => {
      this.tarefas = tarefas;
    });
  }


  onSubmit() {
    if (this.tarefaNovo.nome != '') {
      this.tarefaNovo.idResp = "Usuário Teste";
      this.tarefaNovo.concluido = false;
      this.tarefaNovo.idTrab = this.idTrabTemp;
      this.tarefaNovo.numTarefa = this.tarefas.length + 1;
      this.tarefaNovo.dataEntrega = new Date(this.dataTempFinal + "T03:00:00.000Z"); // tipo de data que o banco aceita: new Date("2018-07-05T00:00:00.000Z")
      this.tarefaService.addTarefa(this.tarefaNovo); // inserico após as datas para pegar os valores corretos. 
      this.tarefaNovo.nome = '';
      this.tarefaNovo.descricao = '';
      this.dataTempFinal = null;
      alert("Tarefa cadastrada com sucesso!!");
    }
  }
}

