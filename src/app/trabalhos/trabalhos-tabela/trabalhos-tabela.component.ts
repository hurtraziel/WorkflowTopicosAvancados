import { Component, OnInit } from '@angular/core';
import { Trabalho } from '../../models/trabalho';
import 'rxjs/add/operator/map';
import { TrabalhoService } from '../../services/trabalho.service';

@Component({
  selector: 'app-trabalhos-tabela',
  templateUrl: './trabalhos-tabela.component.html',
  styleUrls: ['./trabalhos-tabela.component.scss']
})
export class TrabalhosTabelaComponent implements OnInit {
  trabalhos: Trabalho[];

  constructor(private trabalhoService: TrabalhoService) {

   }

  ngOnInit() {
    this.trabalhoService.getTrabalhos().subscribe(trabalhos => {
      this.trabalhos = trabalhos;
     // this.trabalhos.map(e => {
     //   this.updateTrabalho(null, e);
     // })
    })
  }

}
