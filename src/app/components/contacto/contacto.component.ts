import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {

  registrationForm: FormGroup;

   constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  hasErrors(controlName: string, errorType: string){
    return this.registrationForm.get(controlName)?.hasError(errorType) && this.registrationForm.get(controlName)?.touched;
  }

  ngOnInit(): void {
    this.typeWriter();
  }

  public sendEmail(e: Event) {
    e.preventDefault();

    if(this.registrationForm.valid){
      emailjs.sendForm('service_bhhc88i', 'template_mprm3k4', e.target as HTMLFormElement, '240msCoj8AucDMGVM')
      .then(
        () => {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
           
          });
          Toast.fire({
            icon: "success",
            title: "Mensaje enviado con exito!"
          });
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }else{
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
     
    });
    Toast.fire({
      icon: "error",
      title: "Por favor ingrese los campos correctamente!"
    });
  }

  this.registrationForm.reset();
}


  text = ''; // Texto que se mostrará con el efecto de máquina de escribir
  originalText = 'Contacto';
  index = 0;
  speed = 150; // Velocidad en milisegundos entre cada letra

  typeWriter(): void {
    if (this.index < this.originalText.length) {
      this.text += this.originalText.charAt(this.index);
      this.index++;
      setTimeout(() => {
        this.typeWriter();
      }, this.speed);
    }
  }

}
