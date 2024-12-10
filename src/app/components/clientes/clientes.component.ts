import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent {

  text = ''; // Texto que se mostrará con el efecto de máquina de escribir
  originalText = 'Nuestros ';
  text2 = ''; // Texto que se mostrará con el efecto de máquina de escribir
  originalText2 = 'Clientes';
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
