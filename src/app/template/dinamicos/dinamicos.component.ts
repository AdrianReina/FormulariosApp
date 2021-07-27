import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent {
  @ViewChild('miFormulario') miFormulario!: NgForm;

  nuevoJuego!: string;

  persona: Persona = {
    nombre: 'Adrian',
    favoritos: [
      {
        id: 1,
        nombre: 'DeathStranding',
      },
      {
        id: 2,
        nombre: 'Spiderman',
      },
    ],
  };

  guardar() {
    console.log('formulario posted');
  }

  nombreValido() {
    return (
      this.miFormulario?.controls.nombre?.invalid &&
      this.miFormulario?.controls.nombre?.touched
    );
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);
    console.log(this.persona.favoritos);
  }

  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego,
    };
    this.persona.favoritos.push({ ...nuevoFavorito });
    this.nuevoJuego = '';
  }
}
