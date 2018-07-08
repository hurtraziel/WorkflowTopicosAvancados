import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../services/tarefa.service';
import { Tarefa } from '../models/Tarefa';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss']
})
export class TarefasComponent implements OnInit {
  tarefas: Tarefa[];
  idTemp: String;
  hoje = Date.now();
  tarefaQuant: any;
  idRota: Number;
  constructor(private tarefaService: TarefaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.idTemp = params['id']; // id determinado no path da rota.
      }
    );
    this.idRota = Number(this.idTemp); // devido ao idNumero se um Number, é necessario fazer o parce Number para passar como prametro para o banco.
    this.tarefaService.getTarefas(this.idRota).subscribe(tarefas => {      
      this.tarefas = tarefas;
      this.tarefaQuant = this.tarefas.length; // contorna erro length no template
    });
  }

  deleteTarefa(tarefa: Tarefa) {
    this.tarefaService.deleteTarefa(tarefa);
    alert("Tarefa excluída com Sucesso!");
  }

  updateTarefa(tarefa: Tarefa) {
    this.tarefaService.updateTarefa(tarefa);
    if (tarefa.concluido) {
      alert("Tarefa concluida com Sucesso!");
    }else{
      alert("Tarefa Reaberta com Sucesso!");
    }    
  }

}

