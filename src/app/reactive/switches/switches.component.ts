import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent implements OnInit {
  miFormulario: FormGroup = this.formBuilder.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue],
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.miFormulario.reset({ ...this.persona, condiciones: true });

    this.miFormulario.valueChanges.subscribe((form) => {
      delete form.condiciones;
      this.persona = form;
    });
  }

  guardar() {
    const formvalue = { ...this.miFormulario.value };

    delete formvalue.notificaciones;

    this.persona = formvalue;

    console.log(formvalue);
  }
}
