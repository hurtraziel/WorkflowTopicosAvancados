import { Component, OnInit } from '@angular/core';
import { Trabalho } from '../../models/trabalho';
import { TrabalhoService } from '../../services/trabalho.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-trabalho',
  templateUrl: './editar-trabalho.component.html',
  styleUrls: ['./editar-trabalho.component.scss']
})
export class EditarTrabalhoComponent implements OnInit {

  hoje = Date.now();
  idTemp: String;
  trabalho: Trabalho[];
  dataTempFinal: any; //usado para concatenar com a data que p banco entende

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
    if (this.dataTempFinal != null) { //se não mexer na data permanece a mesma anterior.
      trabalho.dataFinal = new Date(this.dataTempFinal + "T03:00:00.000Z"); // tipo de data que o banco aceita: new Date("2018-07-05T00:00:00.000Z")
    }
    this.trabalhoService.updateTrabalho(trabalho);
    alert("Trabalho editado com sucesso!!");
  }

}
