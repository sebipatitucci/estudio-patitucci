import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit{

  text = ''; // Texto que se mostrará con el efecto de máquina de escribir
  originalText = 'Nuestros ';
  text2 = ''; // Texto que se mostrará con el efecto de máquina de escribir
  originalText2 = 'Servicios';
  index = 0;
  index2 = -7;
  speed = 80; // Velocidad en milisegundos entre cada letra

  ngOnInit(): void {
    this.typeWriter();
  }

  typeWriter(): void {
    if (this.index2 < this.originalText.length) {
      this.text += this.originalText.charAt(this.index);
      this.text2 += this.originalText2.charAt(this.index2);
      this.index++;
      this.index2++;
      setTimeout(() => {
        this.typeWriter();
      }, this.speed);
    }
  }

}
