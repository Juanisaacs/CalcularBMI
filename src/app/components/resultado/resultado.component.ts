import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  bmi: number;
  resultado: string;
  interpretaccion: string;

 constructor ( private route: ActivatedRoute ){
  this.resultado = '';
  this.interpretaccion ='' ; 
  this.bmi = +route.snapshot.paramMap.get('valor')!;

 }
  ngOnInit(): void {
    this.getResultado();
    throw new Error('Method not implemented.');
  }
 
 getResultado(){
  if(this.bmi >= 25 ){
    this.resultado = " Exceso de peso";
    this.interpretaccion = "Tiene un peso corporal superior a lo noral. Intenta hacer mas ejetcicio"
  }else if(this.bmi >= 18.5 ){
    this.resultado = " Normal ";
    this.interpretaccion= "Tiene un peso noral. Buen Trabajo"
  }else{
    this.resultado = " Bajo peso";
    this.interpretaccion= "Tiene un peso mas bajo de lo noral. Puedes comer mas"
  }
 }
}
