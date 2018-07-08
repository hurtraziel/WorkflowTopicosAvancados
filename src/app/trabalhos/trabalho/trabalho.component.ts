import { Component, OnInit } from '@angular/core';
import { Trabalho } from '../../models/trabalho';
import { TrabalhoService } from '../../services/trabalho.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trabalho',
  templateUrl: './trabalho.component.html',
  styleUrls: ['./trabalho.component.scss']
})
export class TrabalhoComponent implements OnInit {

  hoje = Date.now();
  idTemp: String;
  trabalho: Trabalho[];

  constructor(private trabalhoService: TrabalhoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.idTemp = params['id']; //o paramametro enviado via rota url é um String
      }
    );
    const idRota = Number(this.idTemp); // devido ao idNumero se um Number, é necessario fazer o parce Number para passar como prametro para o banco.
    this.trabalhoService.getTrabalhoUnitario(idRota) // aqui então é passado number como parametro no service.
      .subscribe(trabalho => {
        this.trabalho = trabalho;
      });
  }

  updateTrabalho(trabalho: Trabalho) {
    this.trabalhoService.updateTrabalho(trabalho);    
  }

  alert(trabalho: Trabalho){
    
    alert("Trabalho "+trabalho.status+" com sucesso!");
  }

}
