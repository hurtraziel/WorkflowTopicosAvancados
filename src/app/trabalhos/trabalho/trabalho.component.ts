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

  idRota: string;
  trabalho: Trabalho[];

  constructor(private trabalhoService: TrabalhoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.idRota = params['id'];
      }
    );
    this.trabalhoService.getTrabalhoUnitario(this.idRota).subscribe(trabalho => {
      this.trabalho = trabalho;
    });
  }

  updateTrabalho(trabalho: Trabalho) {
    this.trabalhoService.updateTrabalho(trabalho);
  }

}
